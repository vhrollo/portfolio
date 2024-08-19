"use client";
import Link from 'next/link';
import Card from '../components/card';

export default function Projects() {

  const water = ["./projects/water-sim.gif"]
  const portfolio = ["./projects/portfolio.png"]

  return (
    <main className="flex min-h-screen flex-col items-center px-6 max-w-screen-lg mx-auto">
      <h1 className="about-page-title">Projects Page</h1>
      <h2 className="about-page-subtitle">Some of my side projects I&apos;ve been cooking up</h2>
      <div className="card-grid">
        <Card
          title="Water Simulation"
          imageSrc={water}
          link="https://github.com/vhrollo/fluid_simulations"
          description="A simple 2D Smoothed Particle Hydrodynamics (SPH) simulation using WGSL, and some GLSL (as I switched mid-project), and Rust."
        />
        <Card
          title="This website"
          imageSrc={portfolio}
          link="https://github.com/vhrollo/portfolio"
          description="A simple website made in react, nextjs, and tailwindcss(, but mostly normal css)."
        />       
      </div>
    </main>
  );
}
