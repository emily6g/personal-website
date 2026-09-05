import Link from "next/link";
import SiteHeader from "../SiteHeader";

type CaseFact = { value: string; label: string };
type CaseSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  facts?: CaseFact[];
};

type CaseStudyProps = {
  number: string;
  category: "Product Design" | "Product Strategy" | "Product Improvement";
  label: string;
  title: string;
  summary: string;
  proof: string;
  theme: string;
  sections: CaseSection[];
  liveUrl: string;
  liveLabel: string;
  nextHref: string;
  nextTitle: string;
};

export default function CaseStudy(props: CaseStudyProps) {
  const categoryTone = props.category === "Product Improvement" ? "improvement" : props.category === "Product Strategy" ? "strategy" : "design";

  return (
    <main className={`case-study ${props.theme}`}>
      <SiteHeader />

      <section className="case-hero">
        <Link className="case-back-link" href="/projects"><span aria-hidden="true">←</span> All projects</Link>
        <div className="case-kicker">
          <p className="eyebrow">Project {props.number} / 06 · {props.label}</p>
          <span className={`case-category case-category-${categoryTone}`}>{props.category}</span>
        </div>
        <h1>{props.title}</h1>
        <div className="case-intro">
          <p>{props.summary}</p>
          <span>{props.proof}</span>
        </div>
      </section>

      <div className="case-layout">
        <aside className="case-sidebar">
          <Link className="case-sidebar-back" href="/projects"><span aria-hidden="true">←</span> All projects</Link>
          <p className={`case-sidebar-category case-category-${categoryTone}`}>{props.category}</p>
          <nav aria-label="Case study sections">
            {props.sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}><span>0{index + 1}</span>{section.title}</a>
            ))}
          </nav>
          <a className="case-sidebar-action" href={props.liveUrl} target="_blank" rel="noreferrer">{props.liveLabel} <span aria-hidden="true">↗</span></a>
        </aside>

        <article className="case-content">
          {props.sections.map((section, index) => (
            <section className="case-detail-section" id={section.id} key={section.id}>
              <header><span>0{index + 1}</span><h2>{section.title}</h2></header>
              <div className="case-detail-copy">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.facts && <div className="case-facts">
                  {section.facts.map((fact) => <div key={`${fact.value}-${fact.label}`}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
                </div>}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </div>
            </section>
          ))}
        </article>
      </div>

      <nav className="case-footer-nav" aria-label="Project navigation">
        <Link href="/projects"><span className="case-footer-arrow" aria-hidden="true">←</span><span className="case-footer-copy"><small>Return to</small><strong>All projects</strong></span></Link>
        <Link href={props.nextHref}><span className="case-footer-copy"><small>Next project</small><strong>{props.nextTitle}</strong></span><span className="case-footer-arrow" aria-hidden="true">→</span></Link>
      </nav>
    </main>
  );
}
