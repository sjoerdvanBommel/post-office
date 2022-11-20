import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh, MeshBasicMaterial, sRGBEncoding, Texture } from "three";

export function PostOffice() {
  const postOfficeGltf = useGLTF("./post office.glb");
  const bakedTexture = useTexture("./baked.jpg", (texture) => {
    (texture as Texture).flipY = false;
    (texture as Texture).encoding = sRGBEncoding;
  });

  useEffect(() => {
    if (!postOfficeGltf?.scene || !bakedTexture) return;

    const material = new MeshBasicMaterial({ map: bakedTexture });

    postOfficeGltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = material;
      }
    });
  }, [postOfficeGltf, bakedTexture]);

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
