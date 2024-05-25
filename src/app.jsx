import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import Toast from "./Toast";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCollision = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Adjust the duration as needed
  };

  return (
    <Canvas>
      <Physics
        broadphase="SAP"
        gravity={[0, -2.6, 0]}
        onCollision={handleCollision}
      >
        <Scene />
      </Physics>
      {showToast && <Toast message="Collision occurred!" />}
    </Canvas>
  );
};

createRoot(document.getElementById("root")).render(<App />);
