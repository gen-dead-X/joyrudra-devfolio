// @ts-nocheck
import React from 'react';

export default function Explore3D() {
  return (
    <div className="h-screen w-screen">
      <a-scene inspector="url: http://localhost:3333/dist/aframe-inspector.js">
        <a-assets>
          <a-asset-item
            id="model"
            src="./models/moon/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <a-entity
          gltf-model="#model"
          position="0 1 -5"
          scale="0.35 0.35 0.35"
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 100000"
        ></a-entity>

        <a-light
          type="directional"
          color="#ffffff"
          intensity="1.5"
          position="5 10 5"
        ></a-light>
        {/* <a-camera position="0 1.6 0"></a-camera> */}
      </a-scene>
    </div>
  );
}
