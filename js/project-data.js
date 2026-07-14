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
        <h4>Problem</h4>
        <p>Even in modern hospitals, scheduling still relies heavily on phone calls, emails, and disconnected systems that don't communicate with each other. Patients often wait not because treatment takes long, but because coordination fails: rooms aren't ready, labs aren't synced, and departments run on independent schedules. Zylo set out to fix this hidden bottleneck, the scheduling layer that quietly impacts patient experience and hospital efficiency.</p>
      </div>

      <div class="cs-block">
        <h4>Users</h4>
        <p>The core users are hospital scheduling coordinators who manage day-to-day conflicts across departments, along with the providers and patients affected downstream by scheduling delays. Coordinators needed a single view that could surface conflicts and resource constraints without forcing them to manually cross-reference multiple systems.</p>
      </div>

      <div class="cs-block">
        <h4>Solution</h4>
        <p>Zylo is a real-time scheduling platform that builds optimized schedules across multiple departments in one flow (e.g., lab &rarr; imaging &rarr; specialist), detects and resolves scheduling conflicts, predicts no-shows to recommend safe overbooking levels, re-optimizes schedules when delays occur, and fills gaps through smart waitlist prioritization. It turns scheduling from a manual coordination problem into a continuously optimizing system that accounts for rooms, equipment, staff, and timing dependencies.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I built the working prototype end-to-end using Claude Design and Claude Code (JavaScript, HTML, CSS, JSX) during a 12-hour ideathon. Claude Design shaped the dashboard layout and UX, while Claude Code generated the scheduling logic and UI structure. The hardest product decision wasn't the logic: it was information design, balancing a high volume of operational data (multiple departments, overlapping doctor schedules, limited rooms and equipment, time-sensitive dependencies) against what a coordinator can actually parse in one view. I made deliberate tradeoffs about what surfaces by default versus what's available on drill-down.</p>
      </div>

      <div class="cs-block">
        <h4>Next Steps</h4>
        <p><strong>Near-term:</strong> Run usability sessions with people who have hospital scheduling or ops experience to pressure-test whether the dashboard's information hierarchy actually matches how coordinators triage conflicts in practice.</p>
        <p><strong>Mid-term:</strong> Define a single real integration point, such as pulling live data from one department's EHR or calendar system rather than building general-purpose integrations up front, to validate the conflict-detection logic against real scheduling data.</p>
        <p><strong>Long-term:</strong> Pilot with one clinic or small hospital department to measure actual reduction in coordination delay, turning the concept into a system with a real, measurable impact on rebooking and resequencing time.</p>
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
        <h4>Problem</h4>
        <p>Online shopping today pushes users to jump between Amazon, Google, and other tools just to compare products and make a decision. Our research found that while Amazon Rufus AI is trusted by users, most people either don't know it exists or don't find it helpful enough to use, a gap between potential and actual usage, driven by low feature visibility and decision fatigue rather than a lack of underlying capability.</p>
      </div>

      <div class="cs-block">
        <h4>Users</h4>
        <p>The primary users are Amazon shoppers who already default to comparing products across multiple tabs and tools before purchasing. These are users who want guidance and a clear outcome, not just answers to isolated questions; that guidance has to be introduced naturally within a shopping flow they already trust.</p>
      </div>

      <div class="cs-block">
        <h4>Solution</h4>
        <p>I led a semester-long research project identifying low feature visibility and decision fatigue as the core barriers to Rufus AI adoption, then designed an end-to-end Figma prototype that embeds Rufus into key moments of purchase intent through guided onboarding and contextual prompts. Instead of just answering questions, the redesigned Rufus asks follow-up questions, narrows preferences, and generates actionable outputs: product shortlists, comparison tables, and ready-to-buy carts, moving users from search to purchase in one guided flow.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I ran the discovery work, synthesizing user research into the visibility and decision-fatigue findings that shaped the whole direction, then designed the full Figma user flow, integrating Rufus into the existing shopping journey rather than treating it as a bolt-on feature. A key product decision was prioritizing where and when users encounter Rufus over adding new features: even a well-designed AI assistant creates no value if users never see it at the right moment.</p>
      </div>

      <div class="cs-block">
        <h4>Outcome</h4>
        <p>The project earned an Honorable Mention from the Texas A&M Product Management Club, competing against 7 other teams. Judges highlighted the strength of the discovery work behind the redesign, particularly the reframing of the problem around visibility and decision fatigue rather than assuming the fix was more AI features, and called out the Figma prototype for making the guided flow from question to cart-ready outcome feel cohesive and realistic within Amazon's existing interface.</p>
      </div>

      <div class="cs-block">
        <h4>Next Steps</h4>
        <p><strong>Near-term:</strong> Run a lightweight concept test comparing the current Rufus entry point against the contextual-prompt redesign to get a directional signal on whether visibility actually improves engagement.</p>
        <p><strong>Mid-term:</strong> Prioritize one category vertical, such as electronics or home goods, to prototype the shortlist and comparison output more deeply, since guided decision-making likely needs different comparison criteria per category.</p>
        <p><strong>Long-term:</strong> Explore adapting Rufus's guidance using purchase history or browsing signals, moving from generic prompts toward genuinely personalized narrowing, alongside incorporating real-time inputs like pricing and availability.</p>
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
        <h4>Problem</h4>
        <p>Passengers often receive delayed or inconsistent updates during travel disruptions, and they have to navigate separate tools for rebooking, vouchers, and compensation. Loyalty members do not see clear priority in service, which leads to confusion, longer rebooking times, and higher complaint volume.</p>
      </div>

      <div class="cs-block">
        <h4>Users</h4>
        <p>The core users are general passengers who expect clear, timely updates and simple self service options, AAdvantage loyalty members who expect prioritized and transparent support, and support agents who need a centralized workspace to handle disruptions efficiently.</p>
      </div>

      <div class="cs-block">
        <h4>Solution</h4>
        <p>The American Airlines Customer Service Solution combines three key components. First, a smart notification system that delivers real time alerts for delays, gate changes, and cancellations, each with clear next steps and the ability to share flight status with friends or family. Second, a unified disruption management portal that brings rebooking, refunds, and vouchers into one place for both passengers and agents. Third, a tiered support experience that highlights loyalty status, offers priority chat or phone support, and keeps a consistent, accessible interface across mobile, web, and internal tools.</p>
      </div>

      <div class="cs-block">
        <h4>Experiment Plan</h4>
        <p>The rollout follows three phases. Phase 1 pilots the experience on select domestic routes, measuring clarity of notifications, adoption of the portal, NPS, and rebooking time. Phase 2 expands to all routes and refines messaging rules and automation based on pilot feedback. Phase 3 introduces predictive alerts such as early warnings of possible delays and deeper personalization based on loyalty tier and engagement.</p>
      </div>

      <div class="cs-block">
        <h4>Metrics</h4>
        <p>Success is defined by measurable impact on operations and customer experience. Key goals include a 20% reduction in disruption related complaints, 99% notification accuracy from system audits, a 30% reduction in average rebooking time through portal analytics, and CSAT scores of 90% or higher on post interaction surveys.</p>
      </div>

      <div class="cs-block">
        <h4>Timeline</h4>
        <p>The project roadmap spans discovery through global rollout. Discovery focuses on stakeholder alignment and UX research by October 30, 2025. Design delivers notification flows and disruption portal wireframes by November 15, 2025. Core development targets January 15, 2026, followed by QA and user acceptance testing by February 15, 2026. The first public launch for domestic routes is planned for March 1, 2026, with global expansion in May 2026.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I created the product requirements document, defined the problem and success metrics, and outlined the phased experiment plan. I also designed Figma flows for the notification system and disruption portal, focusing on consistent UX across mobile and web, and on clear prioritization for loyalty members. This project strengthened my ability to connect user pain points to metrics, craft a realistic rollout strategy, and communicate a product vision through both a PRD and interactive presentation.</p>
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
        <h4>Problem</h4>
        <p>Many food related games focus on fast food or unrealistic eating habits, which can reinforce unhealthy ideas. We wanted to address this gap by creating a game that was both entertaining and educational. The goal was to encourage players to think about balanced eating in a way that felt fun, accessible, and engaging for all ages.</p>
      </div>

      <div class="cs-block">
        <h4>Users</h4>
        <p>Munch Match was designed for a wide audience, including kids learning about nutrition, parents who want educational games for their children, and adults looking for casual but meaningful gameplay. The core users are people who enjoy tile matching games but also want an added educational element. By combining fun mechanics with nutrition awareness, the game reaches both casual gamers and those interested in healthier living.</p>
      </div>

      <div class="cs-block">
        <h4>Solution</h4>
        <p>We created Munch Match, a food themed tile matching game built with HTML, CSS, and JavaScript. Each tile features a variety of foods from different groups, prompting players to explore food diversity while playing. The game blends memory challenges with educational content, reinforcing the idea of balanced eating habits through fun, colorful visuals and smooth interactivity.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I contributed to both the design and development of Munch Match. I worked on the frontend structure and styling with HTML and CSS, ensuring the game was responsive and user friendly across devices. I also implemented the JavaScript logic that powered the tile matching system, debugged gameplay issues, and refined the visuals to make food tiles clear and engaging.</p>
      </div>

      <div class="cs-block">
        <h4>Metrics</h4>
        <p>Munch Match stood out at the Build4Good Hackathon, where it earned 3rd place and was recognized for UI/UX excellence among 50+ teams. Players responded positively to the clean design, smooth gameplay, and unique educational value. The project also highlighted the potential of combining game mechanics with nutrition awareness, demonstrating adoption and engagement beyond traditional casual games.</p>
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
        <h4>Problem</h4>
        <p>Every semester, Texas A&M students face challenges in navigating course selection, finding study spaces, and choosing where to eat on campus. Information is scattered across multiple sources, often outdated, and rarely personalized. This lack of reliable guidance creates unnecessary stress and wasted time for students trying to make informed decisions.</p>
      </div>

      <div class="cs-block">
        <h4>Users</h4>
        <p>Our primary users were Texas A&M students, especially freshmen and those unfamiliar with campus resources. They needed a centralized tool that could simplify decision making for classes, dining, and study spaces. By providing real time and student driven insights, Maroon Recs served students looking for a more efficient and stress free way to manage daily academic life.</p>
      </div>

      <div class="cs-block">
        <h4>Solution</h4>
        <p>We built Maroon Recs, a recommendation platform that ranks professors, dining options, and study spots while showing real time status updates like whether a location is open or closed. The website provided curated information to reduce the guesswork of everyday student decisions. With a clean and functional interface, it transformed scattered resources into one centralized, easy to use platform.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I contributed to both the product vision and development. I helped design the layout using Canva, collaborated on pseudocode planning in Google Docs, and translated the design into code using HTML, CSS, and JavaScript. I also worked on refining the UI, resolving GitHub merge conflicts, and integrating frontend and backend features to ensure the platform functioned seamlessly.</p>
      </div>

      <div class="cs-block">
        <h4>Metrics</h4>
        <p>Maroon Recs was successfully demoed at TAMUHack, gaining recognition for its relevance to student life and practical design. Users appreciated the real time updates and clean interface, which simplified otherwise stressful decisions. The project demonstrated strong engagement potential and laid the groundwork for future features like dorm rankings and off campus living recommendations.</p>
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
        <h4>Problem</h4>
        <p>Wordle was a viral game, but Aggies didn't have a version that reflected their campus culture. Many students played daily, yet there wasn't a way to tie this habit to Texas A&M pride. The lack of a themed game left a gap for community driven engagement.</p>
      </div>

      <div class="cs-block">
        <h4>Users</h4>
        <p>Our main users were Texas A&M students who already loved Wordle and wanted a fun, campus themed twist. Alumni and fans of Aggie traditions were secondary users who appreciated the nostalgia and challenge. Both groups benefited from a shared way to connect through play.</p>
      </div>

      <div class="cs-block">
        <h4>Solution</h4>
        <p>We built BTHO Wordle, an Aggie themed Wordle with four unique categories: Tamu Unlimited, Tamu Wordle, Wild West, and Majors. The game included Aggie branding, music, and custom visuals, such as celebratory Reveille or snake pop ups. This design gave players variety, humor, and a sense of campus identity while playing.</p>
      </div>

      <div class="cs-block">
        <h4>My Role</h4>
        <p>I guided product decisions on categories and game flow, making sure the design aligned with Aggie culture. I researched Wordle mechanics and adapted them for themed word sets. On the technical side, I developed HTML, CSS, and JavaScript pages, integrated audio, and handled visual design tradeoffs to ensure a working MVP.</p>
      </div>

      <div class="cs-block">
        <h4>Metrics</h4>
        <p>We saw strong engagement from students who tested the game at TAMUHack and enjoyed replaying different categories. "Tamu Unlimited" especially sparked playful competition among peers, encouraging multiple play sessions. The project gave us recognition for creativity, plus measurable growth in our ability to use HTML, CSS, and JavaScript effectively.</p>
      </div>
    `
  },
};