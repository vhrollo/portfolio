// components/NavBar.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
	const [isHeaderOpen, setHeaderOpen] = useState<boolean>(true);	

  useEffect(() => {
    let lastScrollTop = 0;
		let stuck = true;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHeaderOpen(false);
				stuck = false;
      } else if (scrollTop < lastScrollTop) {
        setHeaderOpen(true);
				stuck = true;
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scrolling
    };

	  const handleMousemove = (event: MouseEvent) => {
			if (event.clientY <= 120) {
				setHeaderOpen(true);
			} else if (event.clientY > 120 && stuck === false) {
				setHeaderOpen(false);
			}
		};

    window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMousemove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMousemove);
    };
  }, []);


  return (
    <header className={`main-header float ${isHeaderOpen === false ? 'closed' : ''}`}>
      <div className="main-header-bar">
          <Link href="/" className="main-header-item">Home</Link>
          <Link href="/about" className="main-header-item">About</Link>
          <img src="/main-header/home2.png" alt="home" className="main-header-icon" />
          <Link href="/projects" className="main-header-item">Projects</Link>
          <Link href="/art" className="main-header-item">Art</Link>
					<div className={`main-header-indicator ${isHeaderOpen === false ? 'closed' : ''}`}/>
      </div>
    </header>
  );
}
