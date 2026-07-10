export default function TarjetaCategoriaCircular({ imagen, alt, titulo }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative w-64 h-64 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 p-1 group-hover:border-white/50 transition-all duration-500">
        <img
          src={imagen}
          alt={alt}
          className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <h3 className="mt-6 text-sm tracking-[0.3em] font-medium uppercase text-neutral-400 group-hover:text-white transition-colors">
        {titulo}
      </h3>
    </div>
  );
}
