import { motion } from "framer-motion";
import { UploadCloud, Camera } from "lucide-react";

export default function UploadSection() {
  return (
    <section id="upload" className="max-w-7xl mx-auto px-6 py-14">
      <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Upload your prescription</h2>
            <p className="text-slate-600 mt-2">Securely send your prescription to our pharmacists for quick verification.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 shadow-md shadow-emerald-600/20 hover:bg-emerald-700"
              >
                <UploadCloud className="h-4 w-4" /> Choose Image
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50"
              >
                <Camera className="h-4 w-4" /> Take Photo
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full h-56 md:h-64 rounded-2xl bg-white border border-slate-200 shadow-inner"
          />
        </div>
      </div>
    </section>
  );
}
