import CaseStudy from "../CaseStudy";

export default function RufusPage() {
  return <CaseStudy
    number="01"
    category="Product Improvement"
    label="Amazon Rufus · AI product redesign"
    title="From answers to decisions."
    summary="A semester-long redesign of Amazon's AI shopping assistant, focused on helping users discover Rufus and move from uncertainty to a confident purchase."
    proof="Honorable Mention · Product@TAMU"
    theme="case-pink"
    sections={[
      {id:"current-experience",title:"Current Experience",paragraphs:["Primary users are Amazon shoppers actively searching for products, comparing options, or experiencing decision fatigue. Secondary users have products sitting in a cart or wishlist, or are tracking prices and deals.","Their job is to move from uncertainty to a confident purchase without leaving Amazon for Google or another AI tool. Rufus could support that journey, but low discovery and weak next steps made the experience slower and more fragmented."]},
      {id:"funnel-diagnosis",title:"Funnel Diagnosis",paragraphs:["Research reframed the challenge from an AI trust problem into a discovery and first-interaction-value problem. Most non-users rated Rufus only 1 to 2 out of 5, yet trust was much stronger among people who had actually used it.","The scope stayed within the Rufus experience layer, with no changes to Amazon's core search and no external integrations."],facts:[{value:"72%",label:"had never heard of Rufus"},{value:"15%",label:"reported using Rufus"},{value:"60%+",label:"of existing users trusted it"}]},
      {id:"improvement-strategy",title:"Improvement Strategy",paragraphs:["The redesign focused on discovery, visibility, and actionable decision support."],bullets:["Introduce Rufus through first-time onboarding and persistent placement near search.","Add contextual entry points across search results, product pages, cart, and wishlist.","Use suggested prompts and dynamic follow-up questions to narrow preferences.","Turn every conversation into a shortlist, comparison table, cart action, or saved plan that can be resumed or shared."]},
      {id:"experiments-metrics",title:"Experiments & Metrics",paragraphs:["The North Star Metric is First Interaction Value Rate, the percentage of first Rufus interactions that produce a shortlist, comparison, saved plan, or cart action.","The experiment plan compares popup versus no popup, static versus dynamic prompts, and answer-only responses versus actionable outputs."],bullets:["Plan Conversion Rate","Shortlist-to-Cart Ratio","Attribute Discovery Rate","48-Hour Re-engagement Rate","Prompt-to-Action Depth","Planning Utility Score (CSAT)"]},
      {id:"outcome",title:"Outcome & Learning",paragraphs:["The project earned an Honorable Mention from the Texas A&M Product Management Club among eight teams. Judges highlighted the research-driven reframing and the cohesive Figma flow from question to cart-ready outcome.","The central learning was that placement and timing can matter as much as functionality. A strong AI product creates no value when users do not encounter it at the right moment."]},
      {id:"role",title:"My Role",paragraphs:["I led the semester-long research project, identified feature visibility and decision fatigue as the primary adoption barriers, wrote the PRD and North Star Metric, and designed the complete Figma user flow.","My pivotal product decision was to improve where and when users encounter Rufus before adding more capabilities to the assistant itself."]},
    ]}
    liveUrl="https://cage-pose-38615249.figma.site/"
    liveLabel="Explore the prototype"
    nextHref="/work/zylo"
    nextTitle="Zylo"
  />;
}
