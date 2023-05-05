import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Tree = () => {
  const tree = useGLTF("tree/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        intensity={1}
        position={[-30, 30, 100]}
        angle={0.1}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={tree.scene}
        scale={1.5}
        position-y={-2}
        rotation-y={0}
      />
    </mesh>
  );
};

const TreeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserverDrawingBuffer: true }}
      camera={{ fov: 25, near: 0.1, far: 200, position: [-10, 30, 10] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Tree />
      </Suspense>
    </Canvas>
  );
};

export default TreeCanvas;
