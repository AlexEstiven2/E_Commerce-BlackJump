import React from "react";
import { ArrowRight } from "lucide-react";

const TarjetaModeloDestacado = ({
  src,
  alt,
  etiqueta = "Diseño Edición Limitada",
}) => {
  return (
    <div className="relative w-[180px] sm:w-[220px] lg:w-[260px] aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800/40 group shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <span className="text-[9px] tracking-widest uppercase text-white font-mono flex items-center gap-1">
          {etiqueta} <ArrowRight size={8} />
        </span>
      </div>
    </div>
  );
};

export default TarjetaModeloDestacado;
