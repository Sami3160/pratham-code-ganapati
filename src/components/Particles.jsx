import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Points, Point } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSystem() {
  const particleCount = 1000; 
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10; 
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10; 
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10; 
    
   
    colors[i * 3] = Math.random(); 
    colors[i * 3 + 1] = Math.random(); 
    colors[i * 3 + 2] = Math.random(); 

    sizes[i] = Math.random() * 5 + 5; 
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const pointMaterial = new THREE.PointsMaterial({
    size: 0.5, 
    vertexColors: true, 
    transparent: true,
    blending: THREE.AdditiveBlending, 
  });

  return (
    <points args={[geometry, pointMaterial]} />
  );
}

function AnimatedParticles() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005; 
  });

  return (
    <group ref={ref}>
      <ParticleSystem />
    </group>
  );
}


export default AnimatedParticles;