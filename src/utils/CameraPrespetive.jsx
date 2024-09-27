import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';

function InteractiveCamera() {
  const cameraRef = useRef();
  const speed = 0.1;  
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    shift: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW':
          keys.current.w = true;
          break;
        case 'KeyA':
          keys.current.a = true;
          break;
        case 'KeyS':
          keys.current.s = true;
          break;
        case 'KeyD':
          keys.current.d = true;
          break;
        case 'Space':
          keys.current.space = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          keys.current.shift = true;
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW':
          keys.current.w = false;
          break;
        case 'KeyA':
          keys.current.a = false;
          break;
        case 'KeyS':
          keys.current.s = false;
          break;
        case 'KeyD':
          keys.current.d = false;
          break;
        case 'Space':
          keys.current.space = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          keys.current.shift = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const camera = cameraRef.current;

    if (keys.current.w) {
      camera.position.z -= speed;
    }
    if (keys.current.s) {
      camera.position.z += speed;
    }
    if (keys.current.a) {
      camera.position.x -= speed;
    }
    if (keys.current.d) {
      camera.position.x += speed;
    }
    if (keys.current.space) {
      camera.position.y += speed;
    }
    if (keys.current.shift) {
      camera.position.y -= speed;
    }
  });

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 5]} />
  );
}


export default InteractiveCamera;