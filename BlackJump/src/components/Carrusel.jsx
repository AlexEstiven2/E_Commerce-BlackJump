import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Diapositivas from "../datos/Diapositivas";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
export default function Carrusel() {
  const diapositiva = Diapositivas(); // Importa el array desde el archivo de datos

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === diapositiva.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? diapositiva.length - 1 : prev - 1));
  };

  // Efecto para que el carrusel de héroe pase de forma automática
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <>
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] bg-neutral-950 overflow-hidden border-y border-neutral-900 flex items-center justify-center">
        {/* Animación fluida de desvanecimiento con AnimatePresence */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={diapositiva[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-contain filter grayscale select-none"
            />
          </AnimatePresence>
        </div>

        {/* Sombreado de bordes elegante para el look cinemático */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none opacity-40" />

        {/* Controles del Carrusel Minimalistas */}
        <button
          onClick={prevSlide}
          className="absolute left-6 p-3 rounded-full border border-neutral-800 bg-black/60 text-neutral-400 hover:text-white hover:border-white transition-all group z-10 backdrop-blur-sm"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 p-3 rounded-full border border-neutral-800 bg-black/60 text-neutral-400 hover:text-white hover:border-white transition-all group z-10 backdrop-blur-sm"
        >
          <ChevronRight
            size={18}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>

        {/* Indicadores de Posición en Líneas Slim */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {diapositiva.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? "w-10 bg-white" : "w-2 bg-neutral-700"}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
