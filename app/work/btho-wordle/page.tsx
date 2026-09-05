import CaseStudy from "../CaseStudy";

export default function BTHOWordlePage() {
  return <CaseStudy
    number="06"
    category="Product Design"
    label="BTHO Wordle · Aggie-themed game"
    title="Turn a daily habit into school spirit."
    summary="A Texas A&M twist on Wordle, with four themed categories, custom visuals, music, and celebratory feedback."
    proof="TAMUHack · Game design · Frontend build"
    theme="case-dark"
    sections={[
      {id:"users-pain-points",title:"Users & Pain Points",paragraphs:["The primary users are Texas A&M students who already play Wordle, with alumni and fans of Aggie traditions as a secondary audience.","Their job is to turn a familiar daily habit into an experience that also expresses campus identity. Standard Wordle offered the habit, but no version reflected Texas A&M culture or created a shared Aggie challenge."]},
      {id:"journey-constraints",title:"Journey & Constraints",paragraphs:["The experience needed to preserve Wordle's recognizable loop so players could start immediately, then add enough variation and personality to make repeat play worthwhile.","The small TAMUHack team had limited prior experience with JavaScript, HTML, CSS, Git, and GitHub. A critical bug prevented submitted letters from changing grid colors correctly, which had to be fixed before the game felt playable."]},
      {id:"design-approach",title:"Interaction Design",paragraphs:["The product kept the proven core mechanic and differentiated through themes, branding, music, and celebratory feedback."],bullets:["TAMU Unlimited for broader Aggie knowledge","TAMU Wordle for a focused daily challenge","Wild West for a playful themed variation","Majors for campus-specific academic vocabulary"]},
      {id:"build-iteration",title:"Build & Iteration",paragraphs:["Custom visuals, audio, and tradition-inspired pop-ups added emotional resonance without interrupting the guessing loop."],bullets:["Researched and adapted Wordle mechanics.","Built each category with HTML, CSS, and JavaScript.","Integrated music and visual feedback.","Corrected game-state and letter-color behavior.","Used GitHub collaboration to ship a working MVP."]},
      {id:"outcome",title:"Outcome & Learning",paragraphs:["Students testing the game at TAMUHack showed strong engagement. TAMU Unlimited in particular encouraged playful competition and repeat attempts among peers.","The central learning was that polished games depend on small implementation details. State, feedback timing, and clear visual behavior determine whether a simple mechanic feels dependable enough to repeat."],facts:[{value:"4",label:"playable categories"},{value:"Daily",label:"repeatable game loop"},{value:"MVP",label:"shipped during TAMUHack"}]},
      {id:"role",title:"My Role",paragraphs:["I guided product decisions about categories and game flow, aligned the experience with Aggie culture, and researched how to adapt Wordle for themed word sets.","I also developed the HTML, CSS, and JavaScript, integrated audio, and handled visual and technical tradeoffs. A future launch would use student groups and social media for distribution and track daily replay rate by category."]},
    ]}
    liveUrl="https://emily6g.github.io/BTHO-Wordle/"
    liveLabel="Play BTHO Wordle"
    nextHref="/"
    nextTitle="Back home"
  />;
}
