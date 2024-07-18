import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const ThreeDModel = ({ modelPath }) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model modelPath={modelPath} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
