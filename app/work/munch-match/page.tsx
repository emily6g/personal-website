import CaseStudy from "../CaseStudy";

export default function MunchMatchPage() {
  return <CaseStudy
    number="04"
    category="Product Design"
    label="Munch Match · Educational game"
    title="Make healthy choices feel like play."
    summary="A food-themed tile-matching game that combines a familiar casual-play loop with nutrition awareness."
    proof="3rd place · Build4Good · UI/UX recognition"
    theme="case-moss"
    sections={[
      {id:"users-pain-points",title:"Users & Pain Points",paragraphs:["The audience includes children learning about nutrition, parents seeking educational games, and adults who enjoy tile-matching games with an added purpose.","Their job is to play something fun that builds awareness of balanced eating without feeling like a lesson. Many food games instead center on fast food or unrealistic habits, leaving room for a more balanced and positive experience."]},
      {id:"journey-constraints",title:"Journey & Constraints",paragraphs:["The experience needed to be understandable immediately, work across screen sizes, and embed learning into play rather than long instructions.","It was built with a small team during the Build4Good Hackathon using HTML, CSS, and JavaScript, without a backend or database. An odd number of food items initially created incomplete matches, making even tile pairs a core design and technical constraint."]},
      {id:"design-approach",title:"Interaction Design",paragraphs:["A familiar memory-matching loop reduced onboarding and allowed the food imagery to carry the educational idea."],bullets:["Use foods from multiple food groups to represent variety.","Keep every round balanced and completable through even pairs.","Make food images clear and inviting without overwhelming the player.","Preserve responsive behavior across desktop and mobile screens."]},
      {id:"build-iteration",title:"Build & Iteration",paragraphs:["The team combined a responsive interface with JavaScript matching logic, then refined the game through debugging and visual adjustments."],bullets:["Corrected uneven tile counts and game-state issues.","Improved image positioning and clarity.","Adjusted layouts for different screen sizes.","Prioritized a dependable core loop over adding extra features."]},
      {id:"outcome",title:"Outcome & Learning",paragraphs:["Munch Match placed third among more than 50 teams and received specific recognition for UI/UX quality.","The project showed that presenting food diversity without overwhelming players was as much a design challenge as a technical one. It also reinforced that seemingly simple games depend on reliable state and pairing logic."],facts:[{value:"3rd",label:"place at Build4Good"},{value:"50+",label:"participating teams"},{value:"UI/UX",label:"award recognition"}]},
      {id:"role",title:"My Role",paragraphs:["I contributed to both design and development, building the responsive frontend in HTML and CSS, implementing JavaScript matching logic, debugging gameplay issues, and refining the visual presentation.","For future adoption, I would track session length and replay rate and explore distribution through schools, campuses, or wellness programs."]},
    ]}
    liveUrl="https://emily6g.github.io/Munch-Match/"
    liveLabel="Play Munch Match"
    nextHref="/work/maroon-recs"
    nextTitle="Maroon Recs"
  />;
}
