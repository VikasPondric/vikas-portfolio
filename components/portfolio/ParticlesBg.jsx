'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Particles({ count = 1400 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      arr[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i*3+2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
    const { pointer } = state;
    ref.current.rotation.y += pointer.x * delta * 0.15;
    ref.current.rotation.x += pointer.y * delta * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.75} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function GlowBlobs() {
  const g1 = useRef(); const g2 = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (g1.current) { g1.current.position.x = Math.sin(t * 0.2) * 2.5; g1.current.position.y = Math.cos(t * 0.15) * 1.8; }
    if (g2.current) { g2.current.position.x = Math.cos(t * 0.18) * -2.5; g2.current.position.y = Math.sin(t * 0.22) * 2; }
  });
  return (
    <>
      <mesh ref={g1} position={[2, 1, -3]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#ff8a3d" transparent opacity={0.08} />
      </mesh>
      <mesh ref={g2} position={[-3, -1, -4]}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#7c5cff" transparent opacity={0.06} />
      </mesh>
    </>
  );
}

export default function ParticlesBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <ambientLight intensity={0.5} />
        <Particles />
        <GlowBlobs />
      </Canvas>
    </div>
  );
}
