import CaseStudy from "../CaseStudy";

export default function ZyloPage() {
  return <CaseStudy
    number="02"
    category="Product Design"
    label="Zylo · 12-hour ideathon build"
    title="Make the system move together."
    summary="An intelligent healthcare scheduling concept that coordinates patients, providers, departments, and constrained resources in one dynamic experience."
    proof="Solo product concept · Working prototype"
    theme="case-green"
    sections={[
      {id:"users-pain-points",title:"Users & Pain Points",paragraphs:["The primary user is a hospital scheduling coordinator managing daily conflicts across departments. Providers and patients are affected downstream when coordination breaks down.","Their job is to coordinate people, appointments, rooms, equipment, and timing dependencies without relying on calls, emails, and disconnected systems. Labs are not synced, rooms are not ready, and one delay can cascade across the full care journey."]},
      {id:"journey-constraints",title:"Journey & Constraints",paragraphs:["A typical journey can move from a lab to imaging to a specialist, with each appointment depending on the previous step and on limited resources. Overlapping provider schedules, rooms, equipment, and staffing must all stay aligned.","The project was built solo in 12 hours with Claude Design and Claude Code using JavaScript, HTML, CSS, and JSX. It was a functional prototype, not a production system connected to real hospital data."],facts:[{value:"12 hours",label:"to define, design, and build"},{value:"1 flow",label:"across multiple departments"},{value:"Real time",label:"schedule re-optimization"}]},
      {id:"design-approach",title:"Design Approach",paragraphs:["The dashboard was organized around the coordinator's highest-frequency decisions. Urgent conflicts, dependencies, and recommended actions stay visible by default, while supporting operational detail is available through drill-down views."],bullets:["Map the people, appointments, rooms, equipment, and timing constraints.","Prioritize conflicts that require immediate coordinator action.","Reduce information density without hiding critical dependencies.","Keep the experience adaptable when delays or cancellations change the plan."]},
      {id:"prototype",title:"Prototype & Features",paragraphs:["Zylo creates optimized multi-department schedules in one flow and continuously adjusts them when conditions change."],bullets:["Conflict detection and resolution","No-show prediction and safe overbooking recommendations","Smart waitlist prioritization to fill openings","Connected appointment updates after delays","A unified view of departments, doctors, rooms, and equipment"]},
      {id:"outcome",title:"Outcome & Next Step",paragraphs:["I delivered a working dashboard and early conflict-detection logic within the ideathon window. The intended next step is a pilot with scheduling coordinators in one hospital department.","Success would be measured through coordinator daily active use and fewer manual rescheduling calls compared with the current baseline."]},
      {id:"role",title:"My Role & Learning",paragraphs:["I built the prototype end to end. Claude Design supported the dashboard layout and user experience, while Claude Code accelerated the interface and scheduling logic.","The hardest product decision was balancing operational detail with what a coordinator can understand quickly. The clearest learning was that information design, not just scheduling logic, determines whether users can see what changed and act on it."]},
    ]}
    liveUrl="https://emily6g.github.io/Zylo"
    liveLabel="View the working prototype"
    nextHref="/work/american-airlines"
    nextTitle="American Airlines"
  />;
}
