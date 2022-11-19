import { useGLTF } from "@react-three/drei";

export function PostOffice() {
  const postOfficeGltf = useGLTF("./post office.glb");

  // const { x, y, z } = useControls("Post office", {
  //   x: { value: -0.4, min: -5, max: 5 },
  //   y: { value: 3.6, min: -1.7, max: 8.3 },
  //   z: { value: 0, min: -5, max: 5 },
  // });

  return (
    // <group position={[x, y, z]}>
    <group position={[0, -2.3, 0]}>
      <primitive object={postOfficeGltf.scene} />
    </group>
  );
}
