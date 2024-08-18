import { get_right_now, get_activity_now, get_emoji_now } from './right-now';
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 max-w-screen-lg mx-auto">
      <h1 className="about-page-title">About Page</h1>
      <h2 className="about-page-subtitle">The place for all of my misc stuff</h2>
      <div className="about-page">
        <div className="about-page-content">
          <div className="about-page-content-item item60 item-gradient">
            <h2 className="about-item-title">Coding Skills</h2>
            <p className="about-item-text"> Rust, WebGl, Glsl, Python, JavaScript/Typescript, C#, and more</p>
            <p className="about-item-text italic">to be continued</p>
          </div>
          <div className="about-page-content-item item40 items-center">
            <h2 className="about-item-title">Favorite Language</h2>
            <img src="/icons/rust-icon.png" alt="Rust" className="about-item-image" loading='lazy'/>
          </div>
        </div>

        <div className="about-page-content">
          <div className="about-page-content-item item40 items-center ">
            <img src="/icons/debian-icon.png" alt="Rust" className="about-item-image" loading='lazy'/>
            <p>i use debian btw</p>
          </div>
          <div className="about-page-content-item item60 item-gradient items-center leading-6">
            <p className="text-7xl">
              {get_emoji_now()}
            </p>
            <p>
              {get_activity_now()}
            </p>
            <p>
              {get_right_now()}
            </p>
          </div>
        </div>


        <div className="about-page-content">
          <div className="about-page-content-item itemnormal">
            <h2 className="about-item-title">Current read</h2>
            <p>
              As of making this I'm reading myself throughout the Lord of the rings series
            </p>
          </div>
          <div className="about-page-content-item itemnormal items-center">
            <p>
              Both based and from Norway 🇳🇴
            </p>
          </div>
        </div>

        <div className="about-page-content">
          <div className="about-page-content-item item60">
            <h2 className="about-item-title">Hobbies</h2>
            <p className="about-item-text"> When i'm not at uni, working, or coding, I mostly read, boulder, go hiking, play games, 3d model, paint, or watch series/movies</p>
          </div>
          <div className="about-page-content-item item40 items-center">
            <Link href="https://open.spotify.com/artist/21TinSsF5ytwsfdyz5VSVS?si=C17RMFQARxuzxgPIs0oHOQ">
              <img src="/icons/dodie-icon.jpeg" alt="Current top artist" className="about-item-image-spotify" loading='lazy'/>
            </Link>
            <h2 >Current Top Artist: Dodie</h2>
          </div>
        </div>

        <div className="about-page-content">
          <div className="about-page-content-item item40 items-center ">
            <div className='color-block'>#44394D</div>
            <p>My current favorite color as of 21:26 18/08/24</p>
          </div>
          <div className="about-page-content-item item60 items-center">
            <div className='flex-row flex items-center'>
              <p className='about-item-title korok'>
                347
              </p>
              <img src="/icons/korokseed-icon.png" alt="Korok Seed" className="about-item-image korok" loading='lazy'/>
            </div>
            <p>I have collected 347 Korok seeds in The Legend of Zelda: Tears of the Kingdom</p>
          </div>
        </div>
      </div>

    </main>
  );
}