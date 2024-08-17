"use client";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Home() {
  const [isAboutSeen, setAboutSeen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setAboutSeen(true);
      } else {
        setAboutSeen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <main>
      <section className="header">
        <div className="header-content">
          <div className="header-circle">
            <img src="./pfp/cat.png" alt="totally me fr" className="header-img"/>
          </div>
          
          <span className="intro-text">
            <div className="intro-spacer"/>
            <span className="intro-line">Hi there 👋</span>
            <br/>
            <span className="intro-line">I'm Fillip,</span>
            <br/>
            <span className="intro-line">a comp sci student</span>
            <br/>
            <span className="intro-line">who likes reading,</span>
            <br/>
            <span className="intro-line">
              bouldering, making&nbsp;
              <Link href="/projects" className="intro-link">code</Link>
            </span>
            <br/>
            <span className="intro-line">
              and sometimes&nbsp;
              <Link href="/art" className="intro-link">3d art</Link>
              . 
            </span>
            <br/>
            <br/>
            <span className="intro-line">Welcome to my site!</span>
          </span>
        </div>
      </section>
      <div className="border-line"></div>
      <section className="about-section">
        <div className="content">
          <div className={`content-item ${isAboutSeen === false ? 'closed' : ''}`}>
            <h1 className="about-me-title">About Me</h1>
            <p className="about-me-text">My name is Fillip Lampe.</p>
            <p className="about-me-text">
              I'm passionate about a wide range of topics,
              particularly math, programming,
              exploring new programming languages,
              algorithms, shaders, operating systems,
              and much more.
            </p>
            <p className="about-me-text">
              I'm currently pursuing a Bachelor's
              degree in Artificial Intelligence at
              the University of Bergen.
            </p>
            <p className="about-me-text">
              For more misc stuff about me, visit my&nbsp;
              <Link href="/about" className="about-me-link">About page</Link>
              . You can also check out my&nbsp;
              <Link href="/projects" className="about-me-link">projects</Link>
              &nbsp;and explore my&nbsp;
              <Link href="/art" className="about-me-link">creative work</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
