import { OrbitControls, useGLTF } from '@react-three/drei';

function Mouse1(){
    const { scene } = useGLTF('src/models/mouse.glb');
    return <primitive object={scene} scale={[0.4, 0.4, 0.4]}  position={[2, -0.4, -0.5]} rotation={[-0.6,-1, -0.6]} />;
}


function Mouse2(){
    const { scene } = useGLTF('src/models/field_mouse.glb'); // Replace with your GLB file path
    return <primitive object={scene} scale={[1, 1, 1]} position={[-2, -0.14, 1.3]} rotation={[0,-2, 0]}/>;
}

function Mouse3(){
    const { scene } = useGLTF('src/models/house_mouse.glb'); // Replace with your GLB file path
    return <primitive object={scene} scale={[0.4, 0.4, 0.4]} position={[0, -0.4, 1.2]} rotation={[0,0.4, 0]}/>;
}

function MouseGroup(){
    return(
        <group>
            <Mouse1 />
            <Mouse2 />
            <Mouse3 />
        </group>
    );
}
export { MouseGroup };