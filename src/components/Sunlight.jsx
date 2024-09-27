import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointLightHelper } from 'three';
import { Sphere } from '@react-three/drei';

function FireLight() {
  const lightRef = useRef();

  const helper = new PointLightHelper(lightRef.current, 1);
  
  useFrame(() => {
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 2, 0]}  
        intensity={2} 
        distance={5}  
        decay={2}  
        color={'#ffcc00'}
      />
      {/* <primitive object={helper} /> */}
    </>
  );
}

function FireComponent() {
  return (
    <mesh position={[0, 1, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={'orange'} emissive={'#ff6600'} />
    </mesh>
  );
}


export default FireLight;