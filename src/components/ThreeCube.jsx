import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

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

  useEffect(()=>{
    if(document.body.style.cursor != 'auto'){
      document.body.style.cursor = `url(${playing ? '/pause.cur' : '/play.cur'}) 12 8, pointer`;
    }

  }, [playing])

  return (
    <mesh
      ref={cubeRef}
      rotation={[Math.PI / 6, Math.PI / 6, 0]}
      onClick={() => {
        setPlaying((prev) => !prev);
      }}
      onPointerOver={() => {
        // document.body.style.cursor = 'pointer';
        document.body.style.cursor = `url(${playing ? '/pause.cur' : '/play.cur'}) 12 8, pointer`;
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
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
