import React from "react";
import { ArrowRight} from "lucide-react";
import PrendasDeModelos from "@/datos/PrendasDeModelos";
import { BarraLateralInferior, Encabezado, Carrusel, TarjetaCategoriaCircular, TarjetaModeloDestacado } from "@componentes";
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
          <TarjetaCategoriaCircular
            imagen="/image/Slider/Carruceles_Otros/Opciones/Caba01.jpeg"
            alt="Caballeros"
            titulo="CABALLEROS"
          />
          {/* DAMAS */}
          <TarjetaCategoriaCircular
            imagen="/image/Slider/Carruceles_Otros/Opciones/Damas01.jpeg"
            alt="Damas"
            titulo="DAMAS"
          />
          {/* NIÑOS */}
          <TarjetaCategoriaCircular
            imagen="/image/Slider/Carruceles_Otros/Opciones/Ninnos01.jpeg"
            alt="Niños"
            titulo="NIÑOS"
          />

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
              <TarjetaModeloDestacado key={`original-${index}`} src={src} alt={`Modelo ${index + 1}`} />
            ))}
          </div>

          <div className="flex gap-4 pr-4 animate-marquee min-w-full shrink-0 aria-hidden='true' group-hover/marquee:[animation-play-state:paused]">
            {prendasDeModelos.map((src, index) => (
              <TarjetaModeloDestacado key={`duplicado-${index}`} src={src} alt={`Modelo ${index + 1}`} />
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
