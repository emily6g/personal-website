export default function SiteHeader() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="site-brand" href="/" aria-label="Emily Grinshpun home">Emily Grinshpun</a>
      <nav>
        <a href="/experience">Experience</a>
        <a href="/projects">All projects</a>
        <a href="/resume">Resume</a>
        <a href="/#about">About</a>
      </nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/emily-grinshpun" target="_blank" rel="noreferrer">Let&apos;s connect <span aria-hidden="true">↗</span></a>
    </header>
  );
}
