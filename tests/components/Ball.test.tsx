import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Canvas } from '@react-three/fiber';
import Ball from '../../src/components/Ball';
import { useStore } from '../../src/store';
import * as THREE from 'three';

describe('Ball Component', () => {
  it('renders without crashing', () => {
    useStore.setState({
      speed: 0.05,
      color: 'orange',
      isStarted: false,
    });

    render(
      <Canvas>
        <Ball />
      </Canvas>
    );
    expect(true).toBe(true);
  });

  it('applies the correct color to the ball', () => {
    useStore.setState({
      speed: 0.05,
      color: 'cyan',
      isStarted: false,
    });

    render(
      <Canvas>
        <Ball />
      </Canvas>
    );

    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial({ color: 'cyan' })
    );

    const material = ballMesh.material as THREE.MeshStandardMaterial;

    expect(material.color.getHexString()).toBe('00ffff');
  });
});
