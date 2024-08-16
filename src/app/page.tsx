import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="header">
      <div className="header-content">
        <div className="header-circle">
          <img src="./pfp/cat.png" alt="totally me fr"/>
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
  );
}
