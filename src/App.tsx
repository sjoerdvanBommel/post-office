import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
  // const { x, y, z, fov, zoom } = useControls({
  //   x: { value: 8, min: 6, max: 15 },
  //   y: { value: 2, min: 0, max: 4 },
  //   z: { value: 4, min: 3, max: 5 },
  //   fov: { value: 60, min: 10, max: 90 },
  //   zoom: { value: 1, min: 0.2, max: 3 },
  // });

  // const { x, y, z, left, top, right, bottom } = useControls(
  //   "Orthographic camera",
  //   {
  //     x: { value: 13.4, min: 10, max: 20 },
  //     y: { value: 2.1, min: -2.7, max: 7.3 },
  //     z: { value: 3.1, min: -1.4, max: 8.6 },
  //     left: { value: -9.8, min: -25, max: -5 },
  //     top: { value: 11.2, min: -5, max: 15 },
  //     right: { value: 9, min: -4, max: 14 },
  //     bottom: { value: 1.6, min: -3.4, max: 6.6 },
  //   }
  // );

  return (
    <div className="App m-auto h-screen w-full bg-gradient-to-br from-[#150f0b] to-[#010311]">
      <Canvas>
        {/* <ambientLight />
        <pointLight position={[5, -2, 3]} />
        <pointLight position={[-3, 4, -1]} />
        <axesHelper position={[0, 1, 0]} /> */}
        <PerspectiveCamera
          position={[8, 2, 4]}
          makeDefault
          fov={40}
          zoom={0.6}
        />

        {/* <OrthographicCamera
          makeDefault
          left={left}
          top={top}
          right={right}
          bottom={bottom}
          position={[x, y, z]}
        /> */}
        <OrbitControls />

        <ThreeScene />
      </Canvas>
    </div>
  );
}

export default App;
