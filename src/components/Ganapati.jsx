import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { OrbitControls,useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import { useLoader } from '@react-three/fiber';

function Ganapati({scale, position, rotation}) {
  
  const { scene } = useGLTF('src/models/ganapati.glb');
  const clonedScene = scene.clone()

  return <primitive object={clonedScene} scale={scale} position={position}  rotation={rotation}/>;

}

const rainbowColors = [
  '#FF0000', 
  '#FF7F00', 
  '#FFFF00', 
  '#00FF00', 
  '#00FFFF', 
  '#0000FF', 
  '#7F00FF', 
];

function FlickeringRainbowLight({ position }) {
  const lightRef = useRef();
  const [colorIndex, setColorIndex] = useState(0);
  const [color, setColor] = useState(rainbowColors[colorIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % rainbowColors.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetColor = new THREE.Color(rainbowColors[colorIndex]);
    const startColor = new THREE.Color(color);

    let startTime = null;

    const animateColorTransition = (time) => {
      if (!startTime) startTime = time;

      const elapsed = time - startTime;
      const duration = 1000; 

      const progress = Math.min(elapsed / duration, 1);
      const newColor = startColor.clone().lerp(targetColor, progress);

      lightRef.current.color.set(newColor);
      if (progress < 1) {
        requestAnimationFrame(animateColorTransition);
      } else {
        setColor(rainbowColors[colorIndex]);
      }
    };

    requestAnimationFrame(animateColorTransition);
  }, [colorIndex]);

  return <pointLight ref={lightRef} position={position} intensity={10} decay={2} />;
}



export  {Ganapati, FlickeringRainbowLight};