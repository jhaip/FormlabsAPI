import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';

const BUILD_VOLUME = new THREE.Vector3(200, 125, 210);

/**
 * A simple 3js view of the stl pass in stlPath
 *
 * That stl currently needs to be a file in batchy-react/public
 */
const Scene3DView = ({ stlPath }) => {
  const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(...BUILD_VOLUME));
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

  return (
    <Canvas>
      <ambientLight color={0x404040} intensity={5} />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <directionalLight position={[ 100,  100, 300]} intensity={1.5} />
      <directionalLight position={[-100,  100, 300]} intensity={1.5} />
      <directionalLight position={[ 100, -100, 300]} intensity={1.5} />
      <directionalLight position={[-100, -100, 300]} intensity={1.5} />
      <directionalLight position={[0, 0, -300]} intensity={1} />
      <mesh position={[0,0,0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="blue" /> 
      </mesh>
      <lineSegments geometry={edges} material={lineMaterial} position={[0, 0, 210/2]} />
      <STLModel stlPath={stlPath} />
      <TableTopRotationControls />
      <CameraSettings />
    </Canvas>
  );
};

const STLModel = ({ stlPath }) => {
  const { scene } = useThree();
  const loader = useRef(new STLLoader());
  const meshRef = useRef();

  useEffect(() => {
    if (stlPath) {
      console.log('loading ' + stlPath );
      loader.current.load(stlPath, (geometry) => {
        if (meshRef.current) {
          scene.remove(meshRef.current);
          meshRef.current.geometry.dispose();
          meshRef.current.material.dispose();
        }

        console.log('got stl geometry');
        const material = new THREE.MeshStandardMaterial({ color: 'orange' });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        meshRef.current = mesh;
      });
    }
    // return () => { // TODO: Schedule this. The cleanup is important but causes flashing if done before the next scene is ready to load
    //   if (meshRef.current) {
    //     scene.remove(meshRef.current);
    //     meshRef.current.geometry.dispose();
    //     meshRef.current.material.dispose();
    //   }
    // };
  }, [stlPath, scene]);

};

function CameraSettings() {
  const { camera } = useThree();

  useEffect(() => {
    const setInitialView = () => {
      camera.up.set(0, 0, 1);
      camera.position.set(-200, -400, 300);
      camera.lookAt(new THREE.Vector3(0, 0, 105));
      camera.fov = 45;
      camera.updateProjectionMatrix();
    }

    setInitialView();

    // press f to reset view
    const handleKeyDown = (event) => {
      if (event.key === 'f') {
        setInitialView();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [camera]);

  return null;
}

const TableTopRotationControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(0, 0, 105);
      controls.current.update();
    }
  }, []);

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />;
};

export default Scene3DView;
