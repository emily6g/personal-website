import SiteHeader from "../SiteHeader";
import TravelGlobe from "./TravelGlobe";

export default function TravelPage() {
  return (
    <main className="travel-page">
      <SiteHeader />
      <section className="travel-page-hero">
        <p className="eyebrow">Outside of work</p>
        <h1>Favorite places.</h1>
        <p>A growing map of the places and adventures that have shaped my perspective.</p>
      </section>
      <TravelGlobe />
      <a className="next-project" href="/#about"><span>Back to portfolio</span><strong>Outside of work</strong><i aria-hidden="true">→</i></a>
    </main>
  );
}
