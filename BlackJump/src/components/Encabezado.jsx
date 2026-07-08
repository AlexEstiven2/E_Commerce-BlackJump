import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Encabezado() {
  return (
    <header className="text-center py-16 px-4 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] font-mono text-white mb-4"
      >
        Bienvenidos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-neutral-400 text-xs md:text-sm tracking-[0.15em] font-light max-w-2xl mx-auto uppercase leading-relaxed"
      >
        Bienvenidos a Black Jump, tienda de ropa donde encontrarán las mejores
        camisas, busos y conjuntos.
        <span className="block mt-2 font-medium text-neutral-300 tracking-[0.2em]">
          Los mejores precios solo aquí en Black Jump.
        </span>
      </motion.p>
    </header>
  );
}
