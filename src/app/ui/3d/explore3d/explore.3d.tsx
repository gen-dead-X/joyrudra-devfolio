import React, { useEffect, useState } from 'react';
import Loader from '../../global/loaders/moon.loader/circle.loader'; // Import the Loader component

export default function Explore3D() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({ isInteractive: false });

  useEffect(() => {
    const handleModelLoad = () => {
      setLoading(false); // Hide loader when model is loaded
    };

    const moonModel = document.getElementById('moonModel');
    moonModel?.addEventListener('loaded', handleModelLoad);

    return () => {
      moonModel?.removeEventListener('loaded', handleModelLoad);
    };
  }, []);

  return (
    <>
      <div className="snap-section relative h-screen w-screen">
        {loading && <Loader />} {/* Show loader if loading is true */}
        <a-scene
          embedded
          style={{ pointerEvents: 'none', userSelect: 'none' }}
          className="absolute inset-0"
          vr-mode-ui="enabled: false"
          keyboard-shortcuts="enabled: false"
          arjs="sourceType: none;" // Add this to further disable interactions
        >
          <a-assets>
            <a-asset-item
              id="moonModel"
              src="./models/moon/scene.gltf"
            ></a-asset-item>
          </a-assets>

          <a-camera
            wasd-controls-enabled={settings.isInteractive ? 'true' : 'false'}
          ></a-camera>

          <a-entity
            gltf-model="#moonModel"
            position="0 1 -5"
            scale="0.35 0.35 0.35"
            rotation="0 0 0"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 100000"
          ></a-entity>

          <a-light
            type="directional"
            color="#ffffff"
            intensity="2"
            position="-30 15 5"
          ></a-light>
        </a-scene>
      </div>
    </>
  );
}
