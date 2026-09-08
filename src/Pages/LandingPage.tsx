import Navbar from"../components/navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProjectShowcase from "../components/ProjectShowcase";
import CTA from "../components/CTA";
import Footers from "../components/Footers";

function LandingPage() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero/>
      <Features />
      <ProjectShowcase />
      <CTA />
      <Footers />
    </div>
  );
}
export default LandingPage;