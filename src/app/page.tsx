import About from "@/components/About";
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
        <div
          className="absolute top-0 left-0 w-full h-[1000px] z-[-1] bg-no-repeat bg-top bg-cover opacity-80"
          style={{
            backgroundImage: "url('/images/OC 09.svg')",
          }}
        />
        <Header />
        <Hero />
      </div>
      <TrustedCompanies />
      <Services />
      <About/>
      <Objectives/>
      <CTA/>
      <Footer/>
    </PageWithGridOverlay>
  );
}
