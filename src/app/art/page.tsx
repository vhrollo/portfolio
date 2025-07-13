"use client";
import Link from 'next/link';
import Card from '../components/card';

export default function Art() {

  const momo = ["./art/momo/momo.gif", "./art/momo/momo1.jpg", "./art/momo/momo2.jpg", "./art/momo/momo3.jpg", "./art/momo/momo4.jpg"]
  const tram = ["./art/tram/tram.gif", "./art/tram/tram-big.jpg", "./art/tram/tram-paint.jpg"]
  const vending = ["./art/vending/vending-machine.gif"]
  const nammac = ["./art/nammac/animation.gif", "./art/nammac/skeleton.png", "./art/nammac/ground.png"]

  return (
    <main className="flex min-h-screen flex-col items-center px-6 max-w-screen-lg mx-auto">
      <h1 className="about-page-title">Arts Page</h1>
      <h2 className="about-page-subtitle">Some of my favorite 3d models and paintings ive been making here and there</h2>
      <div className="card-grid">
        <Card
          title="Self Portrait:P"
          imageSrc={nammac}
          description="I modelled and rigged the character shown, and animated it in the style of Nammac! Ended up as one of my favorite projects so far"
        />
        <Card
          title="Samurai Momo!"
          imageSrc={momo}
          description="A 3d model of momo as a samurai. Made in blender, and then 3d printed, and then painted."
        />
        <Card
          title="Dedouze Tram"
          imageSrc={tram}
          description="Some weird suspension train thingy. Made  blender, and is very inspired by Dedouze."
        />
        <Card
          title="Vending Machine"
          imageSrc={vending}
          description="A vending machine that i made in blender. I think it looks pretty cool."
        />
      </div>
    </main>
  );
}