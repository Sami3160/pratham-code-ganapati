import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
function FlowerPot1({ position }) {
    const { scene } = useGLTF('src/models/vase_flower_pot_-_6mb.glb');
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={[1, 1, 1]} position={position} />;
}

function FlowerPot2({ position, scale, rotation }) {
    const { scene } = useGLTF('src/models/vase_flower_pot_-_23mb.glb');
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={scale} position={position} rotation={rotation} />;
}

function FlowerPot3({ position }) {
    const { scene } = useGLTF('src/models/owl_flowers_vase.glb');
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={[2, 2, 2]} position={position} />;
}

function FlowerPot4({ position }) {
    const { scene } = useGLTF('src/models/rose_in_a_pot.glb');
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={[0.07, 0.07, 0.07]} position={position} />;
}

function Arti({ position }) {
    const { scene } = useGLTF('src/models/aaarti_thali.glb');
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={[0.07, 0.07, 0.07]} position={position} />;

}

function FlowerBase() {
    return <group>
        <Fire scale={[0.4, 0.4, 0.4]} position={[-1.9, 0.6, 0.2]} rotation={[0, 0, 0]} />
        <pointLight position={[-1.9, 0.6, 0.2]} intensity={3} decay={2} color={"orange"} />
        <Fire scale={[0.4, 0.4, 0.4]} position={[-2.1, 0.6, -0.4]} rotation={[0, 0, 0]} />
        <pointLight position={[-2.1, 0.6, -0.4]} intensity={3} decay={2} color={"orange"} />
        <Fire scale={[0.4, 0.4, 0.4]} position={[0.9, 0.6, 0.3]} rotation={[0, 0, 0]} />
        <pointLight position={[0.9, 0.6, 0.3]} intensity={4} decay={2} color={"orange"} />
        <ArtiStick position={[-1.8, -0.4, 0.3]} scale={[0.2, 0.2, 0.2]} rotation={[0, 0, 0]} />
        <ArtiStick position={[-2, -0.4, -0.4]} scale={[0.2, 0.2, 0.2]} rotation={[0, 0, 0]} />
        <ArtiStick position={[1, -0.4, 0.3]} scale={[0.2, 0.2, 0.2]} rotation={[0, 0, 0]} />
        <FlowerPot1 position={[-3.2, -0.4, 0.2]} />
        <FlowerPot2 position={[-2.9, -0.4, -0.9]} scale={[1.7, 1.7, 1.7]} rotation={[0, 0, 0]} />
        <FlowerPot2 position={[-2.8, -0.4, 0]} scale={[1, 1, 1]} rotation={[0, 1, 0]} />
        <FlowerPot4 position={[2, -0.4, -1]} />
        <FlowerPot3 position={[2.7, -0.4, -0.4]} />
        <Arti position={[1.3, -1.07, -2.4]} />
    </group>
}


function Chakra({ scale, position, rotation }) {
    const { scene } = useGLTF('src/models/chakra.glb');

    const clonedScene = scene.clone();
    return <primitive object={clonedScene} scale={scale} position={position} rotation={rotation} />
}

function Fire({ scale, position, rotation }) {
    const { scene } = useGLTF('src/models/little_flame_with_or_0927173629_refine.glb');
    const flameTexture = new THREE.TextureLoader().load('src/models/flame-gold-fire-dark-transparent-background-with-red-sparks-flying-up-realistic/32353.jpg');

    const cloneScene = scene.clone();

    useEffect(() => {
        const flameMesh = cloneScene.getObjectByName('flameMeshName'); // Replace with your actual mesh name
        if (flameMesh) {
            flameMesh.material = new THREE.MeshStandardMaterial({ map: flameTexture });
        }
    }, [cloneScene, flameTexture]);
    return (
      <primitive  object={cloneScene} scale={scale} position={position} rotation={rotation} />
    );}

function ArtiStick({ position, scale, rotation }) {
    const { scene } = useGLTF('src/models/diya__divli__lamp.glb');
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={scale} position={position} rotation={rotation} />;
}

function FireLight({ position }) {
    const fireLightRef = useRef();
    const fireLight = new THREE.PointLight('#ff0000', 1, 10, 2);
    fireLight.position.set(position);
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        fireLight.intensity = Math.sin(elapsedTime * 2) * 0.5 + 0.5;
    });

    return <primitive ref={fireLightRef} object={fireLight} />;
}
export { FlowerBase, Chakra, Fire, FireLight };

