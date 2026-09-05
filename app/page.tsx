import Link from "next/link";
import SiteHeader from "./SiteHeader";
import { BASE_PATH } from "./site-config";

const projects = [
  { index: "01", kind: "Product Improvement", title: "Amazon Rufus", proof: "Product@TAMU · Honorable Mention", color: "project-rufus", href: "/work/rufus" },
  { index: "02", kind: "Product Design", title: "Zylo", proof: "12-hour Product Ideathon · Working prototype", color: "project-zylo", href: "/work/zylo" },
  { index: "03", kind: "Product Strategy", title: "American Airlines", proof: "Product@TAMU · Research, PRD, and Figma", color: "project-aa", href: "/work/american-airlines" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero" id="top">
        <div className="hero-grain" aria-hidden="true" />
        <div className="home-hero-top">
          <div className="home-hero-copy reveal">
            <h1><span className="home-hero-title-line">Technical Product Manager</span><span className="home-hero-title-accent">CS Student</span></h1>
            <p className="home-hero-statement">I turn complex problems into products people love.</p>
            <Link className="home-hero-cta" href="/projects">View my case studies <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-portrait reveal">
            <div className="portrait-orbit orbit-one" aria-hidden="true" /><div className="portrait-orbit orbit-two" aria-hidden="true" />
            <div className="portrait-frame"><img src={`${BASE_PATH}/profile3.jpg`} alt="Emily Grinshpun" /></div>
            <span className="portrait-note note-one">based in Texas</span><span className="portrait-note note-two">building with intention</span>
          </div>
        </div>
        <a className="home-hero-scroll" href="#experience">Scroll to recent experience <span aria-hidden="true">↓</span></a>
      </section>

      <section className="experience-preview" id="experience">
        <div className="section-heading compact-section-heading"><p className="eyebrow">Most recent experience</p></div>
        <article className="featured-experience reveal">
          <div className="featured-experience-meta"><span>Summer 2026</span><span>Enterprise product</span></div>
          <h2 className="featured-experience-role">Product Management Intern</h2>
          <div className="featured-experience-company">
            <span className="experience-logo-frame"><img src="https://blackhawknetwork.com/sites/default/files/inline-images/bhn-logotype.png" alt="Blackhawk Network logo" /></span>
            <div><strong>Blackhawk Network</strong><small>Product and technology</small></div>
          </div>
          <p className="featured-experience-copy">Stepping into product management showed me how much happens before building: finding the right problem, validating it with evidence, and returning to what users actually said.</p>
          <div className="featured-experience-actions">
            <a href="https://lnkd.in/p/gTeyAKTn" target="_blank" rel="noreferrer">Read my internship takeaways <span aria-hidden="true">↗</span></a>
            <Link href="/experience">View more experience <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      </section>

      <section className="selected-work" id="work">
        <div className="section-heading compact-section-heading"><p className="eyebrow">Case studies</p></div>
        <div className="project-stack">{projects.map((project) => <Link href={project.href} className={`project-panel ${project.color}`} key={project.title}><div className="project-meta"><span>{project.index}</span><span>View case</span></div><div className="project-content"><h3>{project.kind}</h3><h4>{project.title}</h4><p className="project-proof">{project.proof}</p></div><span className="project-arrow" aria-hidden="true">↗</span></Link>)}</div>
        <Link className="all-work-link" href="/projects"><span>Explore every project</span><i aria-hidden="true">→</i></Link>
      </section>

      <section className="about-preview" id="about">
        <div className="about-simple reveal">
          <p className="eyebrow">Outside of work</p>
          <div className="about-personal-content">
            <p className="about-personal-copy">For fun, I enjoy <Link href="/travel">traveling</Link>, skiing, swimming, cooking, hiking with friends, and reading. I also value cultural connections and love speaking Hebrew and Russian. I am always looking to meet new people with unique experiences and adventures, so if you would like to chat or grab a coffee, I would love to connect!</p>
            <div className="social-icons" aria-label="Connect with Emily">
              <a href="mailto:emily6g@gmail.com" aria-label="Email Emily" title="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/emily-grinshpun" target="_blank" rel="noreferrer" aria-label="Emily on LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.4 3.6a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.6 9.4h3.6v11H3.6v-11Zm5.7 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v5.6h-3.6v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1H9.3v-11Z" /></svg>
              </a>
              <a href="https://github.com/emily6g" target="_blank" rel="noreferrer" aria-label="Emily on GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.83c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
