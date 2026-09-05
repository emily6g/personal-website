import CaseStudy from "../CaseStudy";

export default function MaroonRecsPage() {
  return <CaseStudy
    number="05"
    category="Product Design"
    label="Maroon Recs · Campus recommendation platform"
    title="Make campus decisions easier."
    summary="A centralized Texas A&M recommendation experience for professors, dining, study spaces, and live operating status."
    proof="TAMUHack · Product design · Frontend build"
    theme="case-cream"
    sections={[
      {id:"users-pain-points",title:"Users & Pain Points",paragraphs:["The primary user is a Texas A&M student, especially a freshman who is still learning which campus resources to trust.","Students repeatedly need to choose professors, find food, and locate study spaces. Those decisions are spread across incomplete or outdated sources, creating unnecessary stress and wasted time."]},
      {id:"journey-constraints",title:"Journey & Constraints",paragraphs:["The desired journey was simple: open one platform, compare ranked options, check whether a location is currently open, and make a confident decision.","The team built the project during TAMUHack using Canva, shared pseudocode, HTML, CSS, and JavaScript. Missing data required manual entry, multiple contributors created merge conflicts, and the email feature needed to send real messages rather than simulate the interaction."]},
      {id:"design-approach",title:"Experience Design",paragraphs:["The design focused on three frequent student decisions so the product had a clear purpose instead of becoming a generic campus directory."],bullets:["Rank professors, dining options, and study spaces.","Show real-time open or closed status before students make the trip.","Centralize recurring decisions in one browsable interface.","Keep recommendation logic understandable and actionable."]},
      {id:"build-iteration",title:"Build & Integration",paragraphs:["The team aligned on layouts and logic before implementation, then connected the interface, sorting behavior, recommendation logic, and email functionality."],bullets:["Designed the initial layout in Canva.","Planned functionality through shared pseudocode.","Built the frontend in HTML, CSS, and JavaScript.","Resolved GitHub merge conflicts and frontend-to-backend integration issues."]},
      {id:"outcome",title:"Outcome & Learning",paragraphs:["Maroon Recs was successfully demonstrated at TAMUHack and recognized for its relevance to student life and practical design. The sorting algorithms and live operating-status feature were the strongest functional outcomes.","The main learning was that recommendation products depend on data completeness, freshness, and integration, not only interface design."],facts:[{value:"3 areas",label:"professors, dining, and study spaces"},{value:"1 hub",label:"for recurring campus decisions"},{value:"Live",label:"open and closed status"}]},
      {id:"role",title:"My Role",paragraphs:["I contributed to the product vision, Canva layout, pseudocode planning, and frontend implementation. I also refined the interface, resolved merge conflicts, and helped integrate features so the platform worked end to end.","A future launch would seed adoption through student organizations and campus social media, measured through weekly active users and recommendation click-through rate."]},
    ]}
    liveUrl="https://emily6g.github.io/maroonRecs/"
    liveLabel="Explore Maroon Recs"
    nextHref="/work/btho-wordle"
    nextTitle="BTHO Wordle"
  />;
}
