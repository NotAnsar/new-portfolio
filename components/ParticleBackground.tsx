'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const COLORS = { dark: 0xb59b76, light: 0x7a6547 };

type Props = {
	particleCount?: number;
	particleOpacity?: number;
	wirePosition?: [number, number, number];
};

export default function ParticleBackground({
	particleCount = 500,
	particleOpacity = 0.55,
	wirePosition = [8, 1, -4],
}: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const matRef = useRef<THREE.PointsMaterial | null>(null);
	const wireMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
	const renderRef = useRef<(() => void) | null>(null);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || particleCount === 0) return;

		const reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			100
		);
		camera.position.z = 14;

		// Sparse drifting particles — warm tan, very subtle
		const geo = new THREE.BufferGeometry();
		const pos = new Float32Array(particleCount * 3);
		const speeds = new Float32Array(particleCount);
		for (let i = 0; i < particleCount; i++) {
			pos[i * 3] = (Math.random() - 0.5) * 40;
			pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
			pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
			speeds[i] = 0.2 + Math.random() * 0.8;
		}
		geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
		const mat = new THREE.PointsMaterial({
			color: COLORS.dark,
			size: 0.045,
			transparent: true,
			opacity: particleOpacity,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		});
		const points = new THREE.Points(geo, mat);
		scene.add(points);
		matRef.current = mat;

		// A single, slow wireframe icosahedron — barely there
		const wireGeo = new THREE.IcosahedronGeometry(5.2, 1);
		const wireMat = new THREE.MeshBasicMaterial({
			color: COLORS.dark,
			wireframe: true,
			transparent: true,
			opacity: 0.05,
		});
		const wire = new THREE.Mesh(wireGeo, wireMat);
		wire.position.set(...wirePosition);
		scene.add(wire);
		wireMatRef.current = wireMat;

		renderRef.current = () => renderer.render(scene, camera);

		const mouse = { x: 0, y: 0 };
		const onMouse = (e: MouseEvent) => {
			mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
			mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
		};

		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			if (reducedMotion) renderer.render(scene, camera);
		};
		window.addEventListener('resize', onResize);

		let raf = 0;
		const clock = new THREE.Clock();
		const animate = () => {
			const t = clock.getElapsedTime();
			const p = geo.attributes.position.array as Float32Array;
			for (let i = 0; i < particleCount; i++) {
				p[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.0012 * speeds[i];
				p[i * 3] += Math.cos(t * 0.2 + i * 0.7) * 0.0008 * speeds[i];
			}
			geo.attributes.position.needsUpdate = true;
			points.rotation.y = t * 0.015;
			wire.rotation.x = t * 0.05;
			wire.rotation.y = t * 0.04;
			camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.03;
			camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.03;
			camera.lookAt(0, 0, 0);
			renderer.render(scene, camera);
			raf = requestAnimationFrame(animate);
		};

		if (reducedMotion) {
			renderer.render(scene, camera);
		} else {
			window.addEventListener('mousemove', onMouse);
			animate();
		}

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('mousemove', onMouse);
			geo.dispose();
			wireGeo.dispose();
			mat.dispose();
			wireMat.dispose();
			renderer.dispose();
			matRef.current = null;
			wireMatRef.current = null;
			renderRef.current = null;
		};
	}, [particleCount, particleOpacity, wirePosition]);

	// Particle color/blending follows the active theme
	useEffect(() => {
		if (!resolvedTheme) return;
		const light = resolvedTheme === 'light';
		const mat = matRef.current;
		const wireMat = wireMatRef.current;
		if (mat) {
			mat.color.setHex(light ? COLORS.light : COLORS.dark);
			mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
			mat.needsUpdate = true;
		}
		if (wireMat) wireMat.color.setHex(light ? COLORS.light : COLORS.dark);
		renderRef.current?.();
	}, [resolvedTheme]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className='fixed inset-0 w-screen h-screen z-0 pointer-events-none'
		/>
	);
}
