import { useState , useRef, useEffect} from 'react'
import './App.css'
import { Canvas , useFrame} from '@react-three/fiber'
import { Carpet , Cloud, SideCloud2v} from './components/Cloud'
import { OrbitControls, Stars , PerspectiveCamera} from '@react-three/drei';
import {FlickeringRainbowLight, Ganapati} from './components/Ganapati';
import { SideClouds } from './components/Cloud';
import {  Piller1 , Carpet1} from './components/Pillers';
import AnimatedParticles from './components/Particles';
import { Chakra } from './components/Decoration';
// import { PointLight } from '@react-three/drei';
function App() {

  useEffect(()=>{
    document.title="Pratham Code"
  },[])
  const [count, setCount] = useState(0)

  return (
    <div className="" style={{width:"100%",height:"100%", position:'relative'}}>

    <Canvas>
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.01}
        />
              <pointLight position={[0, 3, -3]} intensity={100} decay={2} color={"gold"} />
              <pointLight position={[0, 2, 2]} intensity={10} decay={2} color={"white"} />
              <FlickeringRainbowLight position={[0, 3, -1.5]} />
              {/* <pointLight position={[0,2.6,-1.4]} intensity={10} decay={2} color={"white"} /> */}
         {/* <PointLight 
        position={[0, 1, 0]} 
        intensity={1}        
        distance={5}         
        decay={2}            
        color={'#ffffff'}    
      /> */}

      <ambientLight intensity={0.3} />
      <InteractiveCamera />
      {/* <Chakra scale={[1,1,1]} position={[0,0,0]} rotation={[Math.PI/2,0,0]}/> */}
      {/* <AnimatedParticles /> */}
      {/* <FireLight /> */}
      <OrbitControls />
      <Chakra scale={[2.6,2.6,2.6]} position={[0,2.6,-2]}/>
      <Stars />
      <Ganapati scale={[2,2,2]} position={[0,1.5,-0.6]}/>
      <PillersArea />
      <CloudSurface />
      {/* <SideComponents /> */}
    </Canvas>
    </div>

  )
}
//base cloud
function CloudSurface() {
  return (
    <group position={[0,0,1]}>
      <SideClouds key="cloud-1" scale={[1,1,1]}  position={[-1,-2,2]} rotation={[0,0,0]}/>
      <Cloud /> 
      <SideClouds key="cloud-2" scale={[2,1,2]}  position={[-2,-2,-5]} rotation={[0,1.5,0]}/>
      <SideClouds key="cloud-3" scale={[3,2,3]}  position={[2,-4,-3]} rotation={[0,1.1,0]}/>
    </group>
  );
}
function PillersArea() {
  return (
    <group >
      <Piller1 position={[-3.4,-0.4,-2]}  scale={[1,1.4,1]}/>
      <Piller1 position={[3.4,-0.4,-2]}  scale={[1,1.4,1]}/>
      <Piller1 position={[-3.4,-0.4,2]}  scale={[1,1.4,1]}/>
      <Piller1 position={[3.4,-0.4,2]}  scale={[1,1.4,1]}/>
      {/* <CustomPiller scale={[1,1,]} position={[0,0,0]} rotation={[0,0,0]}/> */}
      {/* <SideCloud2v key="cloud-1" scale={[5,5,5]}  position={[0,5,0]} rotation={[0,0,0]}/> */}
    </group>
  );
}

//camera logic

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

  // Key down event
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





function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}



export default App
