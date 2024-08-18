
"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="main-footer">
			<div className="footer-content">
				<div className="main-footer-line">
					<Link href="/" className="main-footer-link-text">Home</Link>
					·
					<Link href="/about" className="main-footer-link-text">About</Link>
					·
					<Link href="/projects" className="main-footer-link-text">Projects</Link>
					·
					<Link href="/art" className="main-footer-link-text">Art</Link>
				</div>
				<div className="main-footer-line">
					· Drop a mail at 
					<Link href="mailto:fillip@dlampe.com" className="main-footer-link-text">
						fillip@dlampe.com
					</Link>
				</div>
				<div className="main-footer-line">
					· (C) 2024- Fillip Lampe. 
					<Link href="https://github.com/vhrollo/portfolio" target="_blank" className="main-footer-link-text">Sauce</Link>
				</div>
			</div>
			<div className="footer-content">
				<p className="main-footer-links-head">On the web</p>
				<div className="main-footer-links">
					<Link href="https://www.linkedin.com/in/vhrollo/" target="_blank" className="main-footer-link">
						<img className="main-footer-link-icon" src="/footer-icons/linkdin-icon.png" alt="LinkedIn" loading="lazy"/>
					</Link>				
					<a className="main-footer-link">
						<img className="main-footer-link-icon" src="/footer-icons/discord-icon.png" alt="Discord" loading="lazy"/>
					</a>
					<Link href="https://x.com/vhrolllo" target="_blank" className="main-footer-link">
						<img className="main-footer-link-icon" src="/footer-icons/x-icon.png" alt="X" loading="lazy"/>
					</Link>
					<Link href="https://github.com/vhrollo" target="_blank" className="main-footer-link">
						<img className="main-footer-link-icon" src="/footer-icons/github-icon.png" alt="GitHub" loading="lazy"/>
					</Link>
				</div>
			</div>
      <a href="#top" className="main-footer-top">^</a>
            
		</footer>
	);
}