// components/NavBar.js
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black">
      <ul className="flex space-x-6">
        <li><Link href="/" className="text-white hover:text-green-400">Home</Link></li>
        {/* <li><Link href="/notes" className="text-white hover:text-green-400">Notes</Link></li> */}
        <li><Link href="/about" className="text-white hover:text-green-400">About</Link></li>
        <li><Link href="/projects" className="text-white hover:text-green-400">Projects</Link></li>
        <li><Link href="/art" className="text-white hover:text-green-400">Art</Link></li>
        {/* <li><Link href="/music" className="text-white hover:text-green-400">Media Diary</Link></li> */}
      </ul>
    </nav>
  );
}