import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <Link className="site-brand" href="/" aria-label="Emily Grinshpun home">Emily Grinshpun</Link>
      <nav>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">All projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/#about">About</Link>
      </nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/emily-grinshpun" target="_blank" rel="noreferrer">Let&apos;s connect <span aria-hidden="true">↗</span></a>
    </header>
  );
}
