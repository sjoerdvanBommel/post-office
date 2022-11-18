import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import "./App.css";
import { PostOffice } from "./PostOffice";

function ThreeScene() {
  return (
    <>
      <PostOffice />
    </>
  );
}

function App() {
  const { x, y, z, fov, zoom } = useControls({
    x: { value: 8, min: 6, max: 15 },
    y: { value: 2, min: 0, max: 4 },
    z: { value: 4, min: 3, max: 5 },
    fov: { value: 60, min: 10, max: 90 },
    zoom: { value: 1, min: 0.2, max: 3 },
  });

  return (
    <div className="App h-screen bg-gradient-to-br from-[#150f0b] to-[#010311]">
      <div className="absolute w-full h-full flex justify-center">
        <img src="./original.jpg" />
      </div>
      <Canvas className="opacity-90">
        <ambientLight />
        <pointLight position={[5, -2, 3]} />
        <pointLight position={[-3, 4, -1]} />
        <OrbitControls />
        <axesHelper position={[0, 1, 0]} />
        <PerspectiveCamera
          position={[x, y, z]}
          makeDefault
          fov={fov}
          zoom={zoom}
        />

        <ThreeScene />
      </Canvas>
    </div>
  );
}

export default App;
