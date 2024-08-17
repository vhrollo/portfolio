
"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="main-footer">
			<div className="footer-content">
				<p className="main-footer-links-head">On the web</p>
				<Link href="https://www.linkedin.com/in/vhrollo/" target="_blank" className="main-footer-link">LinkedIn</Link>
			</div>
			<div className="footer-content">
			</div>
            <a href="#top" className="main-footer-top">^</a>
            
		</footer>
	);
}