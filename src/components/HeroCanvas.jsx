/* ============================================================
   HeroCanvas — Three.js icosahedron that follows mouse
   ============================================================ */
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Icosahedron = () => {
  const meshRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      // React to mouse
      meshRef.current.rotation.x += pointer.y * 0.01;
      meshRef.current.rotation.y += pointer.x * 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.15}
          roughness={0.4}
          metalness={0.8}
          wireframe
          distort={0.25}
          speed={2}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 60 }}
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14b8a6" />
    <Icosahedron />
  </Canvas>
);

export default HeroCanvas;
