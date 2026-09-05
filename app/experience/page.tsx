import Link from "next/link";
import SiteHeader from "../SiteHeader";

const roles = [
  {
    role: "Product Management Intern",
    company: "Blackhawk Network",
    dates: "Jun 2026 – Aug 2026",
    bullets: [
      "Led a global enterprise onboarding initiative end to end, scoped an ROI-informed MVP projected to reduce manual work by 50%, and partnered with engineering on the build.",
      "Conducted 15+ stakeholder interviews, prioritized 10+ pain points, and translated findings into a roadmap and PRD using AI tools to accelerate the process.",
      "Aligned senior leaders and multiple VPs on priority problems, then validated two solution directions with engineers, designers, and stakeholders.",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "College of Engineering, Texas A&M University",
    dates: "Aug 2025 – Present",
    bullets: [
      "Support 100+ students by diagnosing coding challenges and explaining algorithms and programming concepts through clear, actionable feedback.",
    ],
  },
  {
    role: "Software Intern",
    company: "Robotic Perception, Agriculture AI Startup",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Led a three-person dataset pipeline project that delivered 1,500+ annotated images for machine-learning training.",
      "Built a Python annotation pipeline that reduced preprocessing time by 40% while aligning training data with engineering and product requirements.",
    ],
  },
  {
    role: "President",
    company: "Chabad Jewish Student Organization",
    dates: "Dec 2023 – Present",
    bullets: [
      "Lead strategic planning, budgeting, operations, events, and vendor partnerships for a 200+ member student organization.",
    ],
  },
  {
    role: "Water Safety Instructor & Lifeguard",
    company: "Carpenter Recreation Center & Texas A&M Rec Sports",
    dates: "Aug 2021 – Present",
    bullets: [
      "Deliver structured swim programs for 500+ students and create marketing campaigns that have increased enrollment by 20%.",
      "Implement process and safety improvements that support reliable operations for 100+ daily patrons.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <SiteHeader />
      <section className="experience-page-hero">
        <p className="eyebrow">Professional background</p>
        <h1>Experience.</h1>
      </section>
      <section className="resume-experience-list" aria-label="Professional experience">
        {roles.map((item) => (
          <article className="resume-experience-entry" key={`${item.role}-${item.company}`}>
            <header>
              <div>
                <h2>{item.role}</h2>
                <p>{item.company}</p>
              </div>
              <time>{item.dates}</time>
            </header>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <Link className="experience-resume-cta" href="/resume">
        <span>View complete resume</span>
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
