import CaseStudy from "../CaseStudy";

export default function AmericanAirlinesPage() {
  return <CaseStudy
    number="03"
    category="Product Strategy"
    label="American Airlines · Service experience strategy"
    title="Clarity when plans change."
    summary="A unified disruption-management concept designed to make rebooking, refunds, vouchers, and support easier for passengers and service teams."
    proof="Research · Product requirements · Figma"
    theme="case-maroon"
    sections={[
      {id:"business-opportunity",title:"Business Opportunity",paragraphs:["Delayed communication and fragmented support tools turn flight disruptions into both a customer experience problem and an operating-cost problem. Passengers struggle to understand what happened and what to do next, while agents work across separate systems for rebooking, refunds, and vouchers.","The strategic opportunity was to reduce uncertainty early, speed up resolution, strengthen loyalty retention, and lower avoidable service demand."]},
      {id:"customers-stakeholders",title:"Customers & Stakeholders",paragraphs:["General passengers need timely updates and simple self-service. AAdvantage members expect prioritized support and visible benefits. Service agents need one centralized view to resolve disruptions efficiently.","Their shared job is to reach a fast, clear resolution without switching among disconnected channels and tools."]},
      {id:"evidence",title:"Business Evidence",paragraphs:["Operational data made the opportunity concrete and informed the decision to prioritize notifications and a unified resolution flow."],facts:[{value:"35%",label:"of referenced complaints involved delayed or unclear updates"},{value:"25%",label:"increase in rebooking time from fragmented systems"},{value:"90%+",label:"target customer satisfaction"}]},
      {id:"recommendation",title:"Strategic Recommendation",paragraphs:["Create one disruption-management experience shared across mobile, web, and internal service tools."],bullets:["Real-time alerts for delays, gate changes, and cancellations, each with clear next steps.","A single hub for rebooking, refunds, and vouchers, accessible to passengers and agents.","Priority chat, dedicated lines, and visible status benefits for loyalty members.","A consistent cross-channel experience that keeps every user working from the same information."]},
      {id:"rollout",title:"Rollout & Success Measures",paragraphs:["Phase 1 pilots selected domestic routes and measures clarity, timing, usability, NPS, adoption, and rebooking speed. Phase 2 expands across domestic and international routes. Phase 3 introduces predictive alerts and more personalized loyalty experiences."],bullets:["20% fewer disruption-related complaints","99% notification accuracy","30% faster average rebooking","90% or higher CSAT"]},
      {id:"role",title:"Outcome & My Role",paragraphs:["This was a concept PRD, so the measures are targets rather than achieved results. The work demonstrated how complaint share and rebooking time can turn customer frustration into a measurable business case.","I created the PRD end to end, defined the problem, sized the opportunity, set success metrics and measurement methods, planned the phased rollout, and designed notification and disruption-portal flows in Figma. I prioritized notification clarity as the highest-leverage first move because it reduces uncertainty before customers enter a support flow."]},
    ]}
    liveUrl="https://www.canva.com/design/DAG46164zng/xRo2F8UkisOY6hux89gWgg/view"
    liveLabel="View the presentation"
    nextHref="/work/munch-match"
    nextTitle="Munch Match"
  />;
}
