import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {BarraLateralInferior, Encabezado, Carrusel} from "@components";
const PaginaDeInicio = () => {
  const prendasDeModelos = PrendasDeModelos(); // Importa el array desde el archivo de datos
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black pt-16">
      {/* 1. ENCABEZADO PRINCIPAL */}
      <Encabezado />
      {/* 2. CARRUSEL DE HÉROE PRINCIPAL OPTIMIZADO */}
      <Carrusel />
      {/* 3. CATEGORÍAS EN CÍRCULOS (Tu sección original adaptada a Tailwind) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-[0.15em] uppercase text-white mb-3">
            Escoge tu prenda
          </h2>
          <p className="text-neutral-500 text-xs tracking-widest max-w-md mx-auto uppercase">
            Los mejores busos, camisas y conjuntos que podrás encontrar solo en
            Black Jump para hombre, mujer y niñ@s.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* CABALLEROS */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 p-1 group-hover:border-white/50 transition-all duration-500">
              <img
                src="/image/Slider/Carruceles_Otros/Opciones/Caba01.jpeg"
                alt="Caballeros"
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <h3 className="mt-6 text-sm tracking-[0.3em] font-medium uppercase text-neutral-400 group-hover:text-white transition-colors">
              CABALLEROS
            </h3>
          </div>

          {/* DAMAS */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 p-1 group-hover:border-white/50 transition-all duration-500">
              <img
                src="/image/Slider/Carruceles_Otros/Opciones/Damas01.jpeg"
                alt="Damas"
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <h3 className="mt-6 text-sm tracking-[0.3em] font-medium uppercase text-neutral-400 group-hover:text-white transition-colors">
              DAMAS
            </h3>
          </div>

          {/* NIÑOS */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 p-1 group-hover:border-white/50 transition-all duration-500">
              <img
                src="/image/Slider/Carruceles_Otros/Opciones/Ninnos01.jpeg"
                alt="Niños"
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <h3 className="mt-6 text-sm tracking-[0.3em] font-medium uppercase text-neutral-400 group-hover:text-white transition-colors">
              NIÑ@S
            </h3>
          </div>
        </div>
      </section>

      {/* 4. ALGUNAS DE NUESTRAS PRENDAS (Galería Cinemática Limpia sin jQuery) */}
      <section className="py-20 border-t border-neutral-900 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-2">
              Algunas de Nuestras Prendas
            </h2>
            <p className="text-neutral-600 text-[10px] tracking-widest uppercase">
              Estos son algunos de nuestros modelos destacados
            </p>
          </div>
        </div>

        {/* Contenedor del Carrusel Infinito */}
        <div className="relative w-full flex overflow-x-hidden group/marquee">
          {/* Fila en movimiento automático continuo */}
          <div className="flex gap-4 pr-4 animate-marquee min-w-full shrink-0 group-hover/marquee:[animation-play-state:paused]">
            {/* Renderizado del array original */}
            {prendasDeModelos.map((src, index) => (
              <div
                key={`original-${index}`}
                className="relative w-[180px] sm:w-[220px] lg:w-[260px] aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800/40 group shrink-0"
              >
                <img
                  src={src}
                  alt={`Modelo ${index + 1}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[9px] tracking-widest uppercase text-white font-mono flex items-center gap-1">
                    Diseño Edición Limitada <ArrowRight size={8} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicado exacto para efecto infinito transparente sin saltos */}
          <div className="flex gap-4 pr-4 animate-marquee min-w-full shrink-0 aria-hidden='true' group-hover/marquee:[animation-play-state:paused]">
            {prendasDeModelos.map((src, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative w-[180px] sm:w-[220px] lg:w-[260px] aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800/40 group shrink-0"
              >
                <img
                  src={src}
                  alt={`Modelo Dup ${index + 1}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[9px] tracking-widest uppercase text-white font-mono flex items-center gap-1">
                    Diseño Edición Limitada <ArrowRight size={8} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. LLAMADO AL COMPONENTE DEL SIDEBAR INFERIOR REUTILIZABLE */}
      <BarraLateralInferior />
    </div>
  );
};

export default PaginaDeInicio;
