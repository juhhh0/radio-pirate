import React, { useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Cube = () => {
  const cubeRef = useRef();
  const gltf = useLoader(GLTFLoader, "/radio.gltf");

  const { playing, radio } = useContext(AppContext);

  useFrame(() => {
    if (playing) {
      switch (radio.url) {
        case "water":
          cubeRef.current.rotation.x += 0.01;
          cubeRef.current.rotation.y += 0.01;
          break;
        case "wallet":
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

  useThree(({ camera }) => {
    camera.position.z = 3;
  });

  return (
    // <mesh
    //   ref={cubeRef}
    //   rotation={[Math.PI / 6, Math.PI / 6, 0]}
    // onClick={() => {
    //   setPlaying((prev) => !prev);
    // }}
    //   onPointerOver={() => {
    //     document.body.style.cursor = `pointer`;
    //   }}
    //   onPointerOut={() => {
    //     document.body.style.cursor = 'auto';
    //   }}
    // >
    //   <boxGeometry args={[1, 2, 1]} />
    //   <meshBasicMaterial color={0x000000} />
    // </mesh>
    <primitive ref={cubeRef} object={gltf.scene} scale={6} />
  );
};

const ThreeCube = () => {
  const {setPlaying} = useContext(AppContext)
  return (
    <Canvas
      className="canvas"
      onClick={() => {
        setPlaying((prev) => !prev);
      }}
    >
      <Cube />
    </Canvas>
  );
};

export default ThreeCube;
