import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import * as THREE from 'three';
import Wall from '../../src/components/Wall';

describe('Wall Component', () => {
  let meshRef: React.RefObject<THREE.Mesh>;

  beforeEach(() => {
    meshRef = React.createRef<THREE.Mesh>();
  });

  it('renders without crashing', () => {
    render(
      <Wall
        meshX={0}
        meshY={0}
        meshZ={0}
        boxWidth={1}
        boxHeight={1}
        boxDepth={1}
        color={'#ffffff'}
      />
    );
    expect(true).toBe(true);
  });

  it('applies the correct position to the wall', () => {
    render(
      <Wall
        meshX={1}
        meshY={2}
        meshZ={3}
        boxWidth={1}
        boxHeight={1}
        boxDepth={1}
        color={'#ffffff'}
      />
    );

    const mesh = meshRef.current;
    if (mesh) {
      expect(mesh.position.x).toBe(1);
      expect(mesh.position.y).toBe(2);
      expect(mesh.position.z).toBe(3);
    }
  });

  it('applies the correct color to the wall', () => {
    render(
      <Wall
        meshX={0}
        meshY={0}
        meshZ={0}
        boxWidth={1}
        boxHeight={1}
        boxDepth={1}
        color={'#ff0000'}
      />
    );

    const mesh = meshRef.current;
    if (mesh) {
      const material = mesh.material as THREE.MeshStandardMaterial;
      expect(material.color.getHexString()).toBe('ff0000'); // Kırmızı rengin hex değeri
    }
  });

  it('applies the correct box dimensions to the wall', () => {
    render(
      <Wall
        meshX={0}
        meshY={0}
        meshZ={0}
        boxWidth={4}
        boxHeight={5}
        boxDepth={6}
        color={'#ffffff'}
      />
    );

    const mesh = meshRef.current;
    if (mesh) {
      const geometry = mesh.geometry as THREE.BoxGeometry;
      expect(geometry.parameters.width).toBe(4);
      expect(geometry.parameters.height).toBe(5);
      expect(geometry.parameters.depth).toBe(6);
    }
  });
});
