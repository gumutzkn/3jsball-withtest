import React, { useRef } from 'react';
import * as THREE from 'three';

import { WallProps } from '../types';

const Wall: React.FC<WallProps> = ({
  meshX,
  meshY,
  meshZ,
  boxWidth,
  boxHeight,
  boxDepth,
  color,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      position={[meshX, meshY, meshZ]}
      receiveShadow
    >
      <boxGeometry args={[boxWidth, boxHeight, boxDepth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Wall;
