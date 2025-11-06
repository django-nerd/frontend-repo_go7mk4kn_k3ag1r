import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-2xl"
        >
          Your modern pharmacy experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-slate-600 max-w-xl"
        >
          Order medication, upload prescriptions, and track your orders — all in one calm and elegant interface.
        </motion.p>

        <div className="mt-8 flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#products"
            className="inline-flex items-center rounded-xl bg-emerald-600 text-white px-5 py-3 shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
          >
            Explore Medicines
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#upload"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50 transition-colors"
          >
            Upload Prescription
          </motion.a>
        </div>
      </div>
    </section>
  );
}
