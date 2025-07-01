import About from "@/components/About";
import Chatbot from "@/components/Chatbot";
import TrustedCompanies from "@/components/Companies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Services from "@/components/Services";
import PageWithGridOverlay from "@/layouts/PageWithGridOverlay";

export default function Home() {
  return (
    <PageWithGridOverlay>
  <div>
    <div className="bg-hero-pattern" />

    <Header />
    <Hero />
  </div>
  <TrustedCompanies />
  <Services />
  <About />
  <Objectives />
  <CTA />
  <Footer />
  <Chatbot webhookUrl="https://n8n.pycat.dev/webhook/03feca04-a25b-44a1-af2a-c0e0a53686a7"/>  
</PageWithGridOverlay>
  );
}
