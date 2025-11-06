import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const products = [
  { id: 1, name: "Paracetamol 500mg", price: 6.99 },
  { id: 2, name: "Ibuprofen 200mg", price: 5.49 },
  { id: 3, name: "Vitamin C 1000mg", price: 12.99 },
  { id: 4, name: "Antihistamine", price: 8.5 },
  { id: 5, name: "Cough Syrup", price: 9.25 },
  { id: 6, name: "Nasal Spray", price: 7.8 },
];

export default function ProductGrid() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Popular medicines</h2>
      <p className="text-slate-600 mt-2">Curated essentials to keep your family healthy.</p>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-28 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 mb-4" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium text-slate-900">{p.name}</h3>
                <p className="text-emerald-700 font-semibold mt-1">${p.price.toFixed(2)}</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white h-10 w-10 shadow-md shadow-emerald-600/20 hover:bg-emerald-700"
                aria-label={`Add ${p.name} to cart`}
              >
                <Plus className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
