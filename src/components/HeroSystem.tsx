import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { profile } from '../config/profile';

const HeroSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Simple nodes representing the pipeline
    const nodes: THREE.Mesh[] = [];
    const positions = [
      [-2, 3, 0], [2, 3, 0], [-2, 1, 0], [2, 1, 0], [-2, -1, 0], [2, -1, 0], [0, -3, 0]
    ];
    const colors = [0x00e5ff, 0x00e5ff, 0x00e5ff, 0x00e5ff, 0xffab00, 0xffab00, 0xffffff];
    positions.forEach((pos, i) => {
      const geometry = new THREE.SphereGeometry(0.2, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: colors[i] });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(pos[0], pos[1], pos[2]);
      scene.add(sphere);
      nodes.push(sphere);
    });

    // Connections (lines)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00e5ff, opacity: 0.5, transparent: true });
    const points = [
      [-2, 3, 0], [2, 3, 0],
      [2, 3, 0], [2, 1, 0],
      [2, 1, 0], [-2, 1, 0],
      [-2, 1, 0], [-2, -1, 0],
      [-2, -1, 0], [2, -1, 0],
      [2, -1, 0], [0, -3, 0]
    ];
    for (let i = 0; i < points.length; i += 2) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(points[i][0], points[i][1], points[i][2]),
        new THREE.Vector3(points[i+1][0], points[i+1][1], points[i+1][2])
      ]);
      const line = new THREE.Line(geometry, lineMaterial);
      scene.add(line);
    }

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      // Subtle rotation based on mouse
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          (obj.material as THREE.Material).dispose();
        }
      });
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 font-mono text-xs text-gray-400 animate-pulse">
          INITIALIZING ENGINEERING SYSTEM...
          <div className="mt-1">AI/ML CORE ........ <span className="text-green-400">ONLINE</span></div>
          <div>DIGITAL TWIN ........ <span className="text-green-400">ONLINE</span></div>
          <div>SIMULATION ........ <span className="text-green-400">ONLINE</span></div>
          <div>AUTONOMOUS SYSTEMS ........ <span className="text-green-400">ONLINE</span></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-electric-cyan font-mono mb-6">
          AI/ML ENGINEER | DIGITAL TWIN DEVELOPER | ENGINEERING SYSTEMS BUILDER
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Building intelligent digital representations of complex physical systems.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a href="#projects" className="bg-electric-cyan text-deep-space font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition">
            EXPLORE MY SYSTEMS
          </a>
          <a href={profile.resume} className="border border-electric-cyan text-electric-cyan px-8 py-3 rounded-full hover:bg-electric-cyan/10 transition" download>
            VIEW RESUME
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
          {profile.github && <a href={profile.github} className="hover:text-electric-cyan">GitHub</a>}
          {profile.linkedin && <a href={profile.linkedin} className="hover:text-electric-cyan">LinkedIn</a>}
          <a href={`mailto:${profile.email}`} className="hover:text-electric-cyan">Email</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSystem;
