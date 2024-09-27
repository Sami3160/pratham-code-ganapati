import { useGLTF } from '@react-three/drei';

// tirupathi_laddu
function Ladu({ position }) {
    const { scene } = useGLTF('src/models/tirupathi_laddu.glb'); 
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={[0.15, 0.15, 0.15]} position={position} />;
}
function Katora() {
    const { scene } = useGLTF('src/models/decretive_medieval_bowl_free.glb'); 
    const clonedScene = scene.clone()

    return <primitive object={clonedScene} scale={[0.02, 0.02, 0.02]} position={[-0.9, -0.3, 1]} />;

}
function LaduChaKatora() {
    return <group>
        <Ladu position={[-1, -0.1, 0.8]} />
        <Ladu position={[-1, -0.2, 1]} />
        <Ladu position={[-0.7, -0.2, 1]} />
        <Ladu position={[-0.8, -0.2, 0.8]} />
        <Katora />
    </group>
}

export { LaduChaKatora, Ladu };