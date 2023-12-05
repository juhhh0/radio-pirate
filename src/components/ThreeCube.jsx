import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cube = () => {
  const cubeRef = useRef();

  const { playing, radio, setPlaying } = useContext(AppContext);

  useFrame(() => {
    if (playing) {
      switch (radio.url) {
        case "water":
          cubeRef.current.rotation.x += 0.01;
          cubeRef.current.rotation.y += 0.01;
          break;
        case "ok":
          cubeRef.current.rotation.z += 0.01;
          cubeRef.current.rotation.y -= 0.01;
          break;
        case "tamagucci":
          cubeRef.current.rotation.z -= 0.01;
          cubeRef.current.rotation.x += 0.01;
          break;

        default:
          break;
      }
    }
  });

  return (
    <mesh
      ref={cubeRef}
      rotation={[Math.PI / 6, Math.PI / 6, 0]}
      onClick={() => {
        setPlaying((prev) => !prev);
      }}
    >
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
