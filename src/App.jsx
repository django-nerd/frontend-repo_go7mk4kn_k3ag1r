import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import UploadSection from "./components/UploadSection";

function Footer() {
  return (
    <footer className="py-10 text-center text-slate-500">
      <p>
        © {new Date().getFullYear()} PharmaFlow. Built with care for a calmer
        pharmacy experience.
      </p>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.body.classList.add("bg-slate-50");
    return () => document.body.classList.remove("bg-slate-50");
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex flex-col">
        <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/60 via-white to-white" aria-hidden />
        <div className="relative flex-1">
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-6" />
            <Navbar />
          </div>

          <main className="mt-6 space-y-12">
            <Hero />
            <ProductGrid />
            <UploadSection />
          </main>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
