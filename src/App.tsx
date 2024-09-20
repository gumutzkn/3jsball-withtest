import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Ball, ControlPanel, Wall } from './components';

const App: React.FC = () => {
  return (
    <>
      <ControlPanel />
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight
          position={[0, 0, 0]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Ball />
        {/* Sol duvar */}
        <Wall
          meshX={-5.4}
          meshY={0}
          meshZ={-3.5}
          boxWidth={0.5}
          boxHeight={6}
          boxDepth={10}
          color={'#fbfbfb'}
        />

        {/* Sağ duvar */}
        <Wall
          meshX={5.4}
          meshY={0}
          meshZ={-3.5}
          boxWidth={0.5}
          boxHeight={6}
          boxDepth={10}
          color={'#F0F8FF'}
        />

        {/* Üst duvar */}
        <Wall
          meshX={0}
          meshY={3.1}
          meshZ={-2.5}
          boxWidth={9.7}
          boxHeight={0.5}
          boxDepth={10}
          color={'#fbfbfb'}
        />
        {/* Alt duvar */}
        <Wall
          meshX={0}
          meshY={-3.1}
          meshZ={-2.5}
          boxWidth={9.7}
          boxHeight={0.5}
          boxDepth={10}
          color={'#fbfbfb'}
        />
        {/* İleriki duvar */}
        <Wall
          meshX={0}
          meshY={0}
          meshZ={-15}
          boxWidth={11.4}
          boxHeight={6.8}
          boxDepth={10}
          color={'#fbfbfb'}
        />
      </Canvas>
    </>
  );
};

export default App;
