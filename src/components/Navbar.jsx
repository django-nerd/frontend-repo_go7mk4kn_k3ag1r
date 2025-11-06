import { LogIn, Pill, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="relative w-full z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-inner">
            <Pill className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">PharmaFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
          <a className="hover:text-slate-900 transition-colors" href="#how">How it works</a>
          <a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 hover:bg-emerald-100 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
          >
            <LogIn className="h-4 w-4" />
            Login
          </motion.button>
        </div>
      </div>
    </header>
  );
}
