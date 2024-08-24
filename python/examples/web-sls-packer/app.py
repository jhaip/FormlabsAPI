from flask import Flask, jsonify, request, send_from_directory, render_template
from flask_cors import CORS
import os
import json
from pathlib import Path
import formlabs

app = Flask(__name__)
CORS(app)

# Directory where jobs are stored
JOBS_DIR = 'jobs'

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/list', methods=['GET'])
def list_jobs():
    jobs = []
    for job_folder in os.listdir(JOBS_DIR):
        job_path = os.path.join(JOBS_DIR, job_folder)
        if os.path.isdir(job_path):
            metadata_path = os.path.join(job_path, 'metadata.json')
            if os.path.exists(metadata_path):
                with open(metadata_path) as f:
                    metadata = json.load(f)
                jobs.append(metadata)
    return jsonify(jobs)

@app.route('/download/<job_id>', methods=['GET'])
def download_form(job_id):
    job_folder = os.path.join(JOBS_DIR, job_id)
    form_files = [f for f in os.listdir(job_folder) if f.endswith('.form')]
    if form_files:
        return send_from_directory(job_folder, form_files[0], as_attachment=True)
    return jsonify({'error': 'Job not found or form file missing'}), 404

@app.route('/import', methods=['POST'])
def import_parts():
    data = request.form
    job_id = data.get('job_id')
    owner_name = data.get('owner_name')
    owner_email = data.get('owner_email')
    files = request.files.getlist('files')

    job_folder = os.path.join(JOBS_DIR, job_id)
    if not os.path.exists(job_folder):
        return jsonify({'error': 'Job ID not found'}), 404

    for file in files:
        if file.filename.endswith(('.stl', '.form')):
            file.save(os.path.join(job_folder, file.filename))

    # Update metadata
    metadata_path = os.path.join(job_folder, 'metadata.json')
    if os.path.exists(metadata_path):
        with open(metadata_path) as f:
            metadata = json.load(f)
        metadata['owners'].append({'name': owner_name, 'email': owner_email})
        with open(metadata_path, 'w') as f:
            json.dump(metadata, f, indent=4)

    return jsonify({'success': 'Parts added successfully to the job'})

if __name__ == '__main__':
    app.run(port=8323, debug=True)
