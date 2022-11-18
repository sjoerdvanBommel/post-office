import { useGLTF } from "@react-three/drei";

export function PostOffice() {
  const postOfficeGltf = useGLTF("./post office.glb");

  return <primitive object={postOfficeGltf.scene} />;
}
