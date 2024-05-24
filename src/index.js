import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Scene } from "./Scene";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { createRoot } from "react-dom/client";
import { useStore } from "zustand";

function App() {
  return (
    <>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>
      <Toaster />

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p class="modal-header">Rules Broken:</p>
          <ul>
            <li>Rash Driving</li>
            <li>Damage of Public Property</li>
          </ul>
        </div>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
