import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

function Carpet1(){
    const { scene } = useGLTF('src/models/persian_malayer_carpet.glb'); 
    return <primitive object={scene} scale={[3, 3, 3]} position={[0, -0.4, -1]} />;
}
function Piller1({scale, position, rotation}) {
    const { scene } = useGLTF('src/models/ancient_stone_pillar_a.glb'); 
    const pillerScene = scene.clone()
    return <primitive object={pillerScene} scale={scale}
        position={position}
        rotation={rotation} />;
}

function Piller2() {
    const { scene } = useGLTF('src/models/ancient_stone_pillar_b.glb'); 
    const pillerScene = scene.clone()
    return <primitive object={pillerScene} scale={[1, 1, 1]}
        position={[0, 0, 0]}
         />;
}
function CustomPiller({ scale, position, rotation }) {
    const texture = useLoader(TextureLoader, 'src/models/fabric_0002_1k_kXm2WC/fabric_0002_ao_1k.jpg'); 

    return (
        <mesh scale={scale} position={position} rotation={rotation}>
            <cylinderBufferGeometry args={[1, 1, 5, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}



export { Piller1, Piller2 , Carpet1}