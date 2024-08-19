"use client";
import Link from 'next/link';
import Card from './card';

export default function Projects() {

  return (
    <main className="flex min-h-screen flex-col items-center px-6 max-w-screen-lg mx-auto">
      <h1 className="about-page-title">Projects Page</h1>
      <h2 className="about-page-subtitle">Some of my side projects I've been cooking up</h2>
      <div className="card-grid">
        <Card
          title="Water Simulation"
          imageSrc="./projects/water-sim.gif"
          description="A simple 2D Smoothed Particle Hydrodynamics (SPH) simulation using WGSL, and some GLSL (as I switched mid-project), and Rust."
        />
        <Card
          title="Water Simulation"
          imageSrc="./projects/water-sim.gif"
          description="A simple 2D Smoothed Particle Hydrodynamics (SPH) simulation using WGSL, and some GLSL (as I switched mid-project), and Rust."
        />
        {/* You can add more <Card /> components here for other projects */}
      </div>
    </main>
  );
}
