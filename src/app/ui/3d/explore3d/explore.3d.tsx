// @ts-nocheck
import React from 'react';

export default function Explore3D() {
  return (
    <div className="snap-section relative h-screen w-screen">
      <a-scene
        embedded
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        className="absolute inset-0"
        vr-mode-ui="enabled: false" // Disable VR mode UI
        keyboard-shortcuts="enabled: false" // Disable default keyboard shortcuts
      >
        <a-assets>
          <a-asset-item
            id="model"
            src="./models/moon/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <a-entity
          gltf-model="#model"
          position="0 1.5 -5"
          scale="0.35 0.35 0.35"
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 30000"
        ></a-entity>

        <a-light
          type="directional"
          color="#ffffff"
          intensity="2"
          position="-30 15 5"
        ></a-light>

        <a-camera
          position="0 1.6 0"
          look-controls="enabled: false"
          wasd-controls="enabled: false"
        ></a-camera>
      </a-scene>
    </div>
  );
}
