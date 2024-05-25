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
      <div className="controls">
        <div>
          <div>w</div>
        </div>
        <div>
          <div>a</div>
          <div>s</div>
          <div>d</div>
        </div>
      </div>

      <div className="additionalControls">
        <p>
          <span>K</span> to toggle view.
        </p>
        <p>
          <span>R</span> to reset the car position.
        </p>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
