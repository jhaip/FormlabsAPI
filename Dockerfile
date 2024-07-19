# This is a multi-stage Dockerfile
# - 'headless_env' puts together the environment for and downloads Headless PreForm
# - 'version_info_and_smoke_tester' runs a smoke test by invoking the --version commands for the runner and PreFormCli
#   - note that running setup-xvfb.sh leaves the /tmp/.X99-lock file that would prevent running setup-xvfb.sh again (when the runner is invoked in production).
#   - by having its own stage, it won't affect the final image
# - 'final' is the final image with the entry point set to run the runner
#
# Note the '--platform=linux/amd64' parameters. Since Headless PreForm is targeting this architecture,
# we force Dockerfile to build for that no matter what would be docker's default choice (e.g. arm64 on apple silicon)

# keep it in sync with printernet/printernet/apps/api/cloud_queues/headless_preform_versions/headless_preform_versions.py
ARG HEADLESS_ZIP=PreForm_Server_linux_3.38.0_testing_2206_59425.zip
ARG HEADLESS_BUCKET_URL=s3://FormlabsReleases/Testing/3.38.0/${HEADLESS_ZIP}
ARG HEADLESS_VERSION=3.38.0.332

#--- Headless PreForm s3 downloader ---------------------------------------------
FROM python:3.8-slim as preform-downloader

WORKDIR /workspace

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_SESSION_TOKEN
ARG HEADLESS_BUCKET_URL

RUN pip install --no-cache-dir awscli

RUN aws s3 cp ${HEADLESS_BUCKET_URL} .

#--- headless_env ---------------------------------------------
FROM --platform=linux/amd64 ubuntu:22.04 as headless_env
RUN mkdir -p /workspace
WORKDIR /workspace

ARG HEADLESS_ZIP
ARG HEADLESS_VERSION

RUN export DEBIAN_FRONTEND=noninteractive && \
  apt-get -y update && \
  apt-get -y --no-install-recommends install ca-certificates libfreetype6-dev libjpeg-dev libpng-dev \
  libpq-dev libcurl4-openssl-dev libssl-dev fontconfig \
  python3 python3-dev python3-pip && \
  apt-get -y install xvfb x11-utils && \
  apt-get -y install unzip wget && \
  rm -rf /var/lib/apt/lists/*

# --- Pre-built Headless PreForms ---

RUN mkdir -p /workspace/preform/${HEADLESS_VERSION}

COPY --from=preform-downloader /workspace/${HEADLESS_ZIP} /workspace/preform/

RUN cd preform && \
  unzip -d ${HEADLESS_VERSION} ${HEADLESS_ZIP} && \
  ln -s ${HEADLESS_VERSION} latest && \
  rm -rf ${HEADLESS_ZIP}

# PreFormCli needs OpenSSL 1.1.1
RUN wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb && dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb  && rm libssl1.1_1.1.1f-1ubuntu2_amd64.deb # buildkit

ADD setup-xvfb.sh .
RUN chmod +x setup-xvfb.sh

ADD entrypoint.sh .
RUN chmod +x entrypoint.sh
# COPY --from=builder /workspace/cloud_preform_runner /workspace

ENV DISPLAY=:99

#--- version_info_and_smoke_tester ----------------------------
FROM headless_env as version_info_and_smoke_tester

# RUN ./cloud_preform_runner --version > cloud_preform_runner_version.txt
# check if the commit hash and the build date is not "UNKNOWN"
# RUN ! grep -q "UNKNOWN" cloud_preform_runner_version.txt || (echo "cloud_preform_runner_version.txt contains UNKNOWN, something went wrong handing over the commit hash and/or build date to cloud_preform_runner" && exit 1)

RUN echo "${HEADLESS_URL}" > latest_preform_version.txt
# RUN ./setup-xvfb.sh && ./preform/latest/Headless_PreForm/PreFormCli -v >> latest_preform_version.txt

#--- final ----------------------------------------------------
FROM headless_env as final

# it's important to reference 'version_info_and_smoke_tester' here,
# otherwise the whole 'version_info_and_smoke_tester' stage won't run
# COPY --from=version_info_and_smoke_tester /workspace/cloud_preform_runner_version.txt /workspace
COPY --from=version_info_and_smoke_tester /workspace/latest_preform_version.txt /workspace

### Python app setup

ENV APP_HOME /workspace
ENV PYTHONUNBUFFERED TRUE

COPY . .

# Install production dependencies.
# RUN pip install -r requirements.txt

RUN chmod +x entrypoint.sh
RUN chmod +x setup-xvfb.sh
ENTRYPOINT ["/workspace/entrypoint.sh"]
