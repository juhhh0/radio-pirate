import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    // Faire tourner le cube pendant l'animation
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 2, 1]} />
      <meshBasicMaterial color={0x000000} />
    </mesh>
  );
};

const ThreeCube = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};

export default ThreeCube;
