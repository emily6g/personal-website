import SiteHeader from "../SiteHeader";

const resumeUrl = "/Grinshpun_Emily_Resume.pdf";

export default function ResumePage() {
  return <main className="resume-page">
    <SiteHeader />
    <section className="resume-heading"><div><p className="eyebrow">Experience at a glance</p><h1>Resume</h1></div><div className="resume-actions"><a href={resumeUrl} target="_blank" rel="noreferrer">Open full screen ↗</a><a href={resumeUrl} download>Download PDF ↓</a></div></section>
    <section className="resume-viewer"><iframe src={resumeUrl} title="Emily Grinshpun resume" /></section>
    <footer className="resume-footer"><a href="https://www.linkedin.com/in/emily-grinshpun" target="_blank" rel="noreferrer">Let&apos;s connect on LinkedIn <span aria-hidden="true">↗</span></a></footer>
  </main>;
}
