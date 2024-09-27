function SideComponents() {
    return (
      <group>
        <mesh position={[-3, 0, -2]}>
          <boxGeometry args={[1, 2, 1]} /> {/* A pillar */}
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    );
  }

  export default SideComponents;