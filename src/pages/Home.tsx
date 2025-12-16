import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll implementation would go here or in a global layout
  useEffect(() => {
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Process />
        <Comparison />
        <Pricing />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
