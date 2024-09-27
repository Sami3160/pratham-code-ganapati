import React from 'react';
import { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Carpet1 } from './Pillers';
import { MouseGroup } from './Mouse';
import { LaduChaKatora } from './Ladu';
import { FlowerBase } from './Decoration';
function CloudModel() {
  const { scene } = useGLTF('src/models/clouds.glb');
  const cloudRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    cloudRef.current.scale.set(
      0.03 + Math.sin(elapsedTime * 0.5) * 0.001, 
      0.03 + Math.cos(elapsedTime * 0.05) * 0.001, 
      0.03 + Math.sin(elapsedTime * 0.5) * 0.001  
    );

    cloudRef.current.position.y = -6 + Math.sin(elapsedTime * 0.3) * 0.05;
  });

  return <primitive ref={cloudRef} object={scene} scale={[0.03, 0.03, 0.03]} position={[-1, -6, -2]} />;

}

function SideCloud2v() {
  const { scene } = useGLTF('src/models/low_poly_cloud.glb');
  const clonedScene = scene.clone()
  return <primitive object={clonedScene} scale={scale}
    position={position}
    rotation={rotation} />;
}



function SideClouds1({ scale, position, rotation }) {
  const { scene } = useGLTF('src/models/side_clouds.glb');
  const clonedScene = scene.clone();
  return <primitive
    object={clonedScene}
    scale={scale}
    position={position}
    rotation={rotation} />;
}
function SideClouds({ scale, position, rotation }) {
  const { scene } = useGLTF('src/models/side_clouds.glb');
  const cloudRef = useRef();
  const clonedScene = scene.clone();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (cloudRef.current) {
      cloudRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
      cloudRef.current.rotation.z = rotation[2] + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <primitive
      ref={cloudRef}
      object={clonedScene}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        attach="material"
        transparent
        opacity={0.8}
        roughness={0.7}
      />
    </primitive>
  );
}
function Cloud() {


  return (
    <group>
      {/* <Carpet /> */}
      <Carpet1 />
      <LaduChaKatora />
      <MouseGroup />
      <fog attach="fog" args={['#ffffff', 1, 10]} />
      <FlowerBase />
      <CloudModel />
      {/* <Carpet/> */}
      <DecorativeBase />
    </group>
  );
}

function Carpet() {
  const rangoliTexture = useLoader(TextureLoader, 'src/models/fabric_0002_1k_kXm2WC/fabric_0002_color_1k.jpg');  // Replace with your Rangoli texture path

  return (

    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.39, -1]}>
      {/* <planeGeometry args={[5, 5]} /> */}
      <boxGeometry args={[6, 4, 0.1]} />
      <meshStandardMaterial map={rangoliTexture} />
    </mesh>
  );
}

function DecorativeBase() {
  const woodTexture = useLoader(TextureLoader, 'src/models/DirtWindowStains005/DirtWindowStains005_COL_1K.jpg');  // Replace with your wood texture path
  const rangoliTexture = useLoader(TextureLoader, 'src/models/DirtWindowStains005/DirtWindowStains005_COL_1K.jpg');  // Replace with your Rangoli texture path

  return (
    <mesh position={[0, -1.9, -1]}>
      <boxGeometry args={[8, 3, 6]} />

      <meshStandardMaterial attach="material-0" map={woodTexture} />
      <meshStandardMaterial attach="material-1" map={woodTexture} />
      <meshStandardMaterial attach="material-2" map={rangoliTexture} />
      <meshStandardMaterial attach="material-3" map={woodTexture} />
      <meshStandardMaterial attach="material-4" map={woodTexture} />
      <meshStandardMaterial attach="material-5" map={woodTexture} />
    </mesh>
  );
}


export { Cloud, Carpet, SideClouds, SideCloud2v };