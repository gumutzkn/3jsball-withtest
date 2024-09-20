import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { useStore } from '../store';

import bounce from '../assets/bounce.mp3';

const Ball: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [direction, setDirection] = useState(1); // 1: sağ, -1: sol;
  const [audio] = useState(() => new Audio(bounce));
  const { speed, color, isStarted } = useStore();

  useEffect(() => {
    audio.load();
  }, [audio]);

  useFrame(() => {
    if (isStarted && meshRef.current) {
      // move the ball
      meshRef.current.position.x += speed * direction;

      // Check for collision
      if (
        meshRef.current.position.x > 4.7 ||
        meshRef.current.position.x < -4.7
      ) {
        audio.currentTime = 0.1;
        audio.play();
        setDirection((prev) => -prev); // Change direction
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -2]}
      scale={[1, 1, 1]}
      castShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Ball;
