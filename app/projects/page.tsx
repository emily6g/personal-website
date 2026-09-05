import Link from "next/link";
import SiteHeader from "../SiteHeader";
import { BASE_PATH } from "../site-config";

const allProjects = [
  { number:"01", title:"Amazon Rufus", kind:"Product Improvement", categoryTone:"improvement", summary:"Redesigned Amazon's shopping assistant around discovery, guided decisions, comparisons, and cart-ready outcomes.", proof:"Honorable Mention · Product@TAMU", highlight:true, href:"/work/rufus", tone:"project-rufus", visual:"/projects/rufus.png", visualKind:"logo" },
  { number:"02", title:"Zylo", kind:"Product Design", categoryTone:"design", summary:"Built an intelligent scheduling prototype that coordinates patients, providers, departments, and constrained resources.", proof:"12-hour solo ideathon build", href:"/work/zylo", tone:"project-zylo", visual:"/projects/zylo.png", visualKind:"logo" },
  { number:"03", title:"American Airlines", kind:"Product Strategy", categoryTone:"strategy", summary:"Created a unified disruption-management concept grounded in passenger needs, operational friction, and measurable outcomes.", proof:"Research · PRD · Figma", href:"/work/american-airlines", tone:"project-aa", visual:"/projects/american-airlines.jpg", visualKind:"logo" },
  { number:"04", title:"Munch Match", kind:"Product Design", categoryTone:"design", summary:"Combined nutrition awareness with an accessible tile-matching game designed and built during a social-impact hackathon.", proof:"3rd Place · UI/UX Design", highlight:true, href:"/work/munch-match", tone:"project-moss", visual:"/projects/munch-match.png", visualKind:"cover" },
  { number:"05", title:"Maroon Recs", kind:"Product Design", categoryTone:"design", summary:"Helped Texas A&M students make faster decisions about professors, dining, and study locations through one centralized experience.", proof:"TAMUHack project", href:"/work/maroon-recs", tone:"project-cream", visual:"/projects/maroon-recs.png", visualKind:"cover" },
  { number:"06", title:"BTHO Wordle", kind:"Product Design", categoryTone:"design", summary:"Adapted Wordle into four categories celebrating Texas A&M culture, traditions, majors, and campus identity.", proof:"TAMUHack project", href:"/work/btho-wordle", tone:"project-dark", visual:"/projects/btho-wordle.png", visualKind:"cover" },
];

export default function ProjectsPage() {
  return <main className="all-projects-page">
    <SiteHeader />
    <section className="archive-hero"><p className="eyebrow">Project archive · 2024–2026</p><h1>All projects.</h1><p>Six product stories across AI, healthcare, service design, and playful builds.</p></section>
    <section className="archive-grid">
      {allProjects.map((project) => <Link className={`archive-card ${project.tone}`} href={project.href} key={project.title}>
        <div className="archive-meta"><span>{project.number}</span><span className={`archive-category archive-category-${project.categoryTone}`}>{project.kind}</span></div>
        <div className={`archive-visual ${project.visualKind}`}><img src={`${BASE_PATH}${project.visual}`} alt={`${project.title} project visual`} /></div>
        <h2>{project.title}</h2>
        <div className={`archive-key-detail ${project.highlight ? "archive-key-detail-highlight" : ""}`}><small>{project.highlight ? "Recognition" : "Project detail"}</small><strong>{project.proof}</strong></div>
        <p>{project.summary}</p><div className="archive-proof"><span>View case study</span><i aria-hidden="true">↗</i></div>
      </Link>)}
    </section>
    <Link className="next-project archive-home" href="/"><span>Return to portfolio</span><strong>Back home</strong><i aria-hidden="true">→</i></Link>
  </main>;
}
