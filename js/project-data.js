const PROJECTS = {

  zylo: {
    id: "zylo",
    title: "Zylo: Healthcare Scheduling Platform",
    description:
      "An intelligent healthcare scheduling platform that dynamically coordinates patients, providers, departments, and resources in real time: reducing the hidden coordination delays that slow down hospitals more than treatment itself.",
    thumb: "assets/images/zylologo.png",
    liveUrl: "https://emily6g.github.io/Zylo",
    caseStudyHtml: `
      <div class="cs-block">
        <h4>User Persona & Problem</h4>
        <p>The core user is a hospital scheduling coordinator who manages day-to-day conflicts across departments, alongside the providers and patients affected downstream by delays. Their job to be done: coordinate patients, providers, and resources across departments without relying on phone calls, emails, and disconnected systems, so appointments happen on time. Their core pain point is that scheduling fails invisibly, rooms aren't ready, labs aren't synced, and departments run on independent calendars, so patients wait not because treatment takes long, but because coordination breaks down first.</p>
      </div>

      <div class="cs-block">
        <h4>Context & Constraints</h4>
        <p>This was built solo in a 12-hour ideathon, which set the technical and scope constraints: a working prototype built with Claude Design and Claude Code (JavaScript, HTML, CSS, JSX), not a production system with real hospital data integrations. Healthcare scheduling is still largely manual even in modern hospitals, and coordination involves many interdependent constraints at once: overlapping doctor schedules, limited rooms and equipment, and time-sensitive dependencies where a single delay cascades across departments.</p>
      </div>

      <div class="cs-block">
        <h4>Proposed Solution</h4>
        <p>Zylo builds optimized schedules across multiple departments in one flow (for example, lab to imaging to specialist), detects and resolves scheduling conflicts, predicts no-shows to recommend safe overbooking levels, re-optimizes schedules in real time when delays occur, and fills gaps through smart waitlist prioritization. It turns scheduling from a manual coordination problem into a continuously optimizing system that accounts for rooms, equipment, staff, and timing dependencies, surfaced through a unified coordinator dashboard.</p>
      </div>

      <div class="cs-block">
        <h4>Go-To-Market & Adoption</h4>
        <p>This shipped as a 12-hour ideathon prototype rather than a live product, so there is no real adoption data. The intended path: pilot with scheduling coordinators in a single hospital department, train them directly on the dashboard, and track adoption through coordinator daily active use and a reduction in manual rescheduling calls versus their current baseline.</p>
      </div>

      <div class="cs-block">
        <h4>Results & Learnings</h4>
        <p>I delivered a functional prototype within the 12-hour build window, including a unified dashboard bringing together departments, doctors, rooms, and equipment, and early conflict-detection logic for scheduling overlaps and resource constraints. The clearest learning was that the hardest part of healthcare scheduling isn't the logic, it's information design: even a powerful system fails if a coordinator can't quickly see what's happening, where conflicts exist, and what needs attention.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I built the working prototype end-to-end using Claude Design and Claude Code during the ideathon. Claude Design shaped the dashboard layout and UX, while Claude Code generated the scheduling logic and UI structure. The hardest product decision was balancing a high volume of operational data against what a coordinator can actually parse in one view, so I made deliberate tradeoffs about what surfaces by default versus what's available on drill-down.</p>
      </div>
    `
  },

  rufus: {
    id: "rufus",
    title: "Amazon Rufus AI Redesign",
    description:
      "A semester-long research project redesigning Amazon's Rufus AI shopping assistant, from a passive chatbot into an integrated decision-making tool that turns conversations into product shortlists and cart-ready outcomes. Honorable Mention, Product Management Club.",
    thumb: "assets/images/rufuslogo.png",
    liveUrl: "https://cage-pose-38615249.figma.site/",
    caseStudyHtml: `
      <div class="cs-block">
        <h4>User Persona & Problem</h4>
        <p>Primary users are Amazon shoppers who are actively searching for products, comparing multiple options, or experiencing decision fatigue. Secondary users have items sitting in a cart or wishlist, or are tracking prices and deals. Their job to be done is to move from uncertainty to a confident purchase decision without leaving Amazon for Google or ChatGPT. The core problem: users are not effectively discovering or using Rufus, so the shopping experience stays slower and more fragmented than it needs to be.</p>
      </div>

      <div class="cs-block">
        <h4>Context & Constraints</h4>
        <p>Research found that 72% of users have never heard of Rufus and only 15% interact with it; most non-users rate it 1 to 2 out of 5. Critically, among users who do use Rufus, more than 60% trust it, which reframes the problem: this is not a trust issue, it's a discovery and first-interaction-usefulness issue. Rufus is under-discovered in the interface, first interactions feel informational rather than actionable, and it doesn't consistently guide users toward a next step like shortlist, compare, or purchase. Scope was intentionally limited: no changes to Amazon's core search, no external integrations, and focus restricted to the Rufus experience layer.</p>
      </div>

      <div class="cs-block">
        <h4>Proposed Solution</h4>
        <p>The redesign targets two areas. Discovery and Visibility: first-time onboarding, persistent placement near the search bar, and contextual entry points in search results, product pages, and cart or wishlist, with suggested prompts like "find best laptops under 1000." Actionable Decision Support: Rufus becomes proactive through context-aware prompts and dynamic follow-ups that narrow preferences and highlight decision factors like price, quality, and delivery, and every interaction produces a clear outcome: a shortlist, a comparison table, a cart, or a saved plan that can be resumed or shared across sessions.</p>
      </div>

      <div class="cs-block">
        <h4>Go-To-Market & Adoption</h4>
        <p>Adoption is measured against a single North Star Metric: First Interaction Value Rate (FIVR), the percentage of first Rufus interactions that lead to a shortlist, comparison usage, saved plan, or cart action. Supporting metrics include Plan Conversion Rate, Shortlist-to-Cart Ratio, Attribute Discovery Rate, 48-Hour Re-engagement Rate, Prompt-to-Action Depth, and Planning Utility Score (CSAT). The go-to-market motion is experiment-driven: A/B tests comparing popup versus no popup, static versus dynamic prompts, and answer-only versus answer-plus-actionable-outputs, built around the hypotheses that increased visibility drives usage, guided prompts reduce decision time, and actionable outputs improve conversion and satisfaction.</p>
      </div>

      <div class="cs-block">
        <h4>Results & Learnings</h4>
        <p>The project earned an Honorable Mention from the Texas A&M Product Management Club, competing against 7 other teams. Judges highlighted the strength of the discovery work behind the redesign, particularly the reframing of the problem around visibility and decision fatigue rather than assuming the fix was more AI features, and called out the Figma prototype for making the guided flow from question to cart-ready outcome feel cohesive within Amazon's existing interface. The core learning: even a well-designed AI product creates no value if users never see it at the right moment, placement and timing matter as much as functionality.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I led the semester-long research project that identified low feature visibility and decision fatigue as the core adoption barriers, wrote the PRD defining the problem, objectives, and North Star Metric, and designed the full Figma user flow integrating Rufus into the existing shopping journey. A key product decision was prioritizing where and when users encounter Rufus over adding new features to the assistant itself.</p>
      </div>
    `
  },

  americanAirlinesCS: {
    id: "americanAirlinesCS",
    title: "American Airlines Customer Service Solution",
    description:
      "A customer service solution concept for American Airlines that unifies disruption management, real time notifications, and tiered support for loyalty members, designed to reduce rebooking time and improve overall passenger satisfaction.",
    thumb: "assets/images/americanairlineslogo.jpg",
    liveUrl:
      "https://www.canva.com/design/DAG46164zng/xRo2F8UkisOY6hux89gWgg/view?utm_content=DAG46164zng&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc7600a38af#1",
    caseStudyHtml: `
      <div class="cs-block">
        <h4>User Persona & Problem</h4>
        <p>Three personas are affected: general passengers who expect timely, reliable updates and simple self-service options; AAdvantage loyalty members who expect prioritized service and clear benefit visibility; and support agents who need a centralized system to manage disruptions efficiently. Their shared job to be done is getting a fast, clear resolution during a travel disruption without juggling separate tools for rebooking, refunds, and vouchers. The core problem: American Airlines' current communication and support tools are fragmented, producing inconsistent or delayed flight notifications and undifferentiated service for loyalty members.</p>
      </div>

      <div class="cs-block">
        <h4>Context & Constraints</h4>
        <p>The business case is grounded in real operational signals: 35% of customer complaints relate to delayed or unclear updates during disruptions, loyalty members consistently flag inconsistent support prioritization in NPS feedback, and fragmented systems increase average rebooking time by 25%. Improving communication and support efficiency is directly correlated with higher NPS, stronger loyalty retention, and reduced service costs, which frames this as both a customer experience and a cost problem, not just a nice-to-have.</p>
      </div>

      <div class="cs-block">
        <h4>Proposed Solution</h4>
        <p>The solution has four components. A smart notification system delivers real-time alerts for delays, gate changes, and cancellations with clear next steps and the ability to share flight status with friends or family. A unified disruption management portal brings rebooking, refunds, and vouchers into a single hub accessible by both passengers and agents. A tiered support experience gives loyalty members priority chat, dedicated lines, and visible status indicators. All of this sits behind a consistent UX across mobile, web, and internal support tools.</p>
      </div>

      <div class="cs-block">
        <h4>Go-To-Market & Adoption</h4>
        <p>Rollout is phased: Phase 1 pilots the experience on select domestic routes to test notification improvements and disruption workflows, gathering feedback on clarity, timing, and usability while measuring NPS, adoption rate, and rebooking speed. Phase 2 expands to all domestic and international routes, refining messaging logic and automation rules based on pilot insights. Phase 3 introduces predictive alerts and personalizes tiered experiences based on customer engagement and loyalty level. Success is defined against four targets: a 20% reduction in disruption-related complaints (measured via monthly NPS and support logs), 99% notification accuracy (real-time system audit), a 30% reduction in average rebooking time (portal analytics), and CSAT of 90% or higher (post-interaction survey).</p>
      </div>

      <div class="cs-block">
        <h4>Results & Learnings</h4>
        <p>As a concept PRD rather than a shipped product, results are defined as targets rather than achieved outcomes, since no pilot has run yet. The exercise reinforced how directly fragmented tooling shows up in hard operational numbers: the 25% rebooking time penalty and 35% complaint share tied to unclear updates made the business case concrete rather than anecdotal, and shaped how I prioritized the notification system as the highest-leverage fix.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I created the product requirements document end to end: defined the problem statement, sized it against real complaint and operational cost data, set the four success metrics and measurement methods, and outlined the three-phase experiment plan and rollout timeline from discovery (October 2025) through global expansion (May 2026). I also designed the Figma flows for the notification system and disruption portal, focused on consistent UX across mobile and web and clear prioritization for loyalty members.</p>
      </div>
    `
  },

  munchmatch: {
    id: "munchmatch",
    title: "Munch Match",
    description:
      "A tile-matching game where players match identical foods, each tile featuring a mix of food groups to reinforce healthy eating habits. The goal was to make nutrition awareness accessible and fun for all ages while blending education with enjoyable gameplay.",
    thumb: "assets/images/project-munch.png",
    liveUrl: "https://emily6g.github.io/Munch-Match/",
    caseStudyHtml: `
      <div class="cs-block">
        <h4>User Persona & Problem</h4>
        <p>The target user is a casual player, ranging from kids learning about nutrition to parents seeking educational games for their children to adults who enjoy tile-matching games with an added purpose. Their job to be done is simple: play something fun that also builds awareness of balanced eating, without feeling like a lesson. The problem: most food-related games center on fast food or unrealistic eating habits, reinforcing the wrong ideas about nutrition instead of teaching balance.</p>
      </div>

      <div class="cs-block">
        <h4>Context & Constraints</h4>
        <p>Built for the Build4Good Hackathon with a small team on a tight time budget, using HTML, CSS, and JavaScript with no backend or database. A concrete technical constraint shaped the design directly: an odd number of food items led to uneven matching, so the tile set had to be structured around even matches to keep gameplay balanced. Image positioning and cross-device responsiveness also had to be tuned within the hackathon window.</p>
      </div>

      <div class="cs-block">
        <h4>Proposed Solution</h4>
        <p>A food-themed tile-matching game where each tile features foods from different food groups, so players naturally encounter food diversity while playing. The design blends a memory-matching mechanic with light educational content, reinforcing balanced eating through gameplay rather than explicit instruction.</p>
      </div>

      <div class="cs-block">
        <h4>Go-To-Market & Adoption</h4>
        <p>This shipped as a hackathon demo rather than a distributed product, so there is no live adoption data. If hosted publicly, the intended success signals would be session length and replay rate, with distribution through school or campus wellness programs as a low-stakes nutrition education tool.</p>
      </div>

      <div class="cs-block">
        <h4>Results & Learnings</h4>
        <p>Munch Match placed 3rd at the Build4Good Hackathon among 50+ teams and was specifically recognized for UI/UX excellence. The clearest learning was that presenting food diversity without overwhelming the player was as much a design challenge as a technical one, and that debugging game state and tile-matching logic took considerably more time than initially scoped.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I contributed to both design and development: built the frontend structure and styling in HTML and CSS to keep the game responsive across devices, implemented the JavaScript logic powering the tile-matching system, debugged gameplay issues, and refined the visuals so food tiles stayed clear and engaging.</p>
      </div>
    `
  },

  maroonRecs: {
    id: "maroonRecs",
    title: "Maroon Recs",
    description:
      "A student built platform that helps Texas A&M students simplify campus life. From finding the right professors to discovering the best study spots and dining options, it provides personalized recommendations and real time insights so students can make informed decisions and focus more on enjoying their college experience.",
    thumb: "assets/images/project-maroon.png",
    liveUrl: "https://emily6g.github.io/maroonRecs/",
    caseStudyHtml: `
      <div class="cs-block">
        <h4>User Persona & Problem</h4>
        <p>The target user is a Texas A&M student, especially a freshman unfamiliar with campus resources. Their job to be done is making fast, informed decisions about classes, dining, and study spaces without digging through scattered, often outdated sources. The problem: every semester, students face the same navigation maze, blindly choosing classes, hunting for quiet study spots, and settling for subpar meals, which creates unnecessary stress and wasted time.</p>
      </div>

      <div class="cs-block">
        <h4>Context & Constraints</h4>
        <p>Built at TAMUHack on a hackathon timeline with a small team, using Canva for layout design and a shared Google Doc for pseudocode planning before implementation in HTML, CSS, and JavaScript. Real constraints included significant missing data that had to be filled in manually, GitHub merge conflicts from multiple people editing the same pages, and the added complexity of building an email feature that needed to send real emails rather than simulate the flow.</p>
      </div>

      <div class="cs-block">
        <h4>Proposed Solution</h4>
        <p>A recommendation platform that ranks professors, dining options, and study spots, and shows real-time status updates for whether a location is open or closed. The goal was to replace scattered, unreliable sources with one centralized, easy-to-use platform for everyday student decisions.</p>
      </div>

      <div class="cs-block">
        <h4>Go-To-Market & Adoption</h4>
        <p>This launched as a hackathon demo without a live distribution plan. The intended path would be seeding adoption through student organizations and campus social media, with weekly active student users and recommendation click-through rate as the core adoption signals.</p>
      </div>

      <div class="cs-block">
        <h4>Results & Learnings</h4>
        <p>Maroon Recs was successfully demoed at TAMUHack and was recognized for its relevance to student life and practical design. The team is proud of the sorting algorithms behind the recommendations and the real-time open and closed status updates. The clearest learning was how much effort goes into data completeness and front-end to back-end integration once a product moves past a static mockup.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I contributed to both product vision and development: helped design the layout in Canva, collaborated on pseudocode planning, and translated the design into HTML, CSS, and JavaScript. I also worked on refining the UI, resolving GitHub merge conflicts, and integrating frontend and backend features to keep the platform functioning end to end.</p>
      </div>
    `
  },

  BTHOWordle: {
    id: "BTHOWordle",
    title: "BTHO Wordle",
    description:
      "A Texas A&M themed twist on the classic Wordle game. Players can choose from four categories, each offering unique word challenges tied to Aggie life and culture. It's a fun way for students to test their knowledge, celebrate traditions, and bring a bit of Aggie spirit into their daily Wordle routine.",
    thumb: "assets/images/project-btho.png",
    liveUrl: "https://emily6g.github.io/BTHO-Wordle/",
    caseStudyHtml: `
      <div class="cs-block">
        <h4>User Persona & Problem</h4>
        <p>The target user is a Texas A&M student who already plays Wordle daily, plus alumni and fans of Aggie traditions as a secondary audience. Their job to be done is turning an existing daily habit into something that also expresses campus identity. The problem: Wordle was viral and widely played by Aggies, but there was no version that reflected campus culture, leaving a gap for community-driven engagement tied to something students already did every day.</p>
      </div>

      <div class="cs-block">
        <h4>Context & Constraints</h4>
        <p>Built at TAMUHack with a small team and minimal prior JavaScript, HTML, and CSS experience, which shaped both the scope and the build process. Real constraints included figuring out Git and GitHub collaboration from close to scratch, and a core gameplay bug where submitted letters weren't updating grid colors correctly to show correct, wrong, or misplaced letters, which had to be resolved before the game was playable.</p>
      </div>

      <div class="cs-block">
        <h4>Proposed Solution</h4>
        <p>An Aggie-themed Wordle with four categories: Tamu Unlimited, Tamu Wordle, Wild West, and Majors, each testing different aspects of campus knowledge. The experience layered in Aggie branding, music, and custom visuals, including celebratory pop-ups tied to campus traditions, to give players variety and a sense of campus identity while playing.</p>
      </div>

      <div class="cs-block">
        <h4>Go-To-Market & Adoption</h4>
        <p>This launched as a hackathon demo without a distribution plan. The intended path would be sharing through Texas A&M student groups and social media, with daily replay rate per category as the core adoption signal.</p>
      </div>

      <div class="cs-block">
        <h4>Results & Learnings</h4>
        <p>The game saw strong engagement from students who tested it at TAMUHack, with the Tamu Unlimited category in particular sparking playful competition and repeat play among peers. The clearest learning was how much of building a polished interactive game comes down to implementation details, like correctly wiring up game state and letter-color feedback, even with a simple core mechanic.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I guided product decisions on categories and game flow, making sure the design aligned with Aggie culture, and researched Wordle mechanics to adapt them for themed word sets. On the technical side, I developed the HTML, CSS, and JavaScript for each game category, integrated audio, and handled visual design tradeoffs to ship a working MVP.</p>
      </div>
    `
  },
};