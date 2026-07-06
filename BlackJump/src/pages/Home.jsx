import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import BottomSidebar from '../components/layout/BottomSidebar';

const Home = () => {
    // Referencias a las imágenes del slider de tu estructura original
    const slides = [
        "/image/Slider/Carruceles_Otros/Estand-1.png",
        "/image/Slider/Carruceles_Otros/Estand-2.png",
        "/image/Slider/Carruceles_Otros/Estand-3.png"
    ];

    // Carrusel de prendas - Modelos destacados
    const prendasModelos = [
        "/image/Slider/Modelos/01.png",
        "/image/Slider/Modelos/02.png",
        "/image/Slider/Modelos/03.png",
        "/image/Slider/Modelos/04.png",
        "/image/Slider/Modelos/05.png",
        "/image/Slider/Modelos/06.png",
        "/image/Slider/Modelos/07.png",
        "/image/Slider/Modelos/08.png",
        "/image/Slider/Modelos/09.png",
        "/image/Slider/Modelos/010.png",
        "/image/Slider/Modelos/011.png",
        "/image/Slider/Modelos/012.png",
        "/image/Slider/Modelos/013.png",
        "/image/Slider/Modelos/014.png",
        "/image/Slider/Modelos/015.png",
        "/image/Slider/Modelos/016.png",
        "/image/Slider/Modelos/017.png",
        "/image/Slider/Modelos/018.png",
        "/image/Slider/Modelos/019.png",
        "/image/Slider/Modelos/020.png",
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Efecto para que el carrusel de héroe pase de forma automática
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black pt-16">

            {/* 1. ENCABEZADO PRINCIPAL */}
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
                    Bienvenidos a Black Jump, tienda de ropa donde encontrarán las mejores camisas, busos y conjuntos.
                    <span className="block mt-2 font-medium text-neutral-300 tracking-[0.2em]">Los mejores precios solo aquí en Black Jump.</span>
                </motion.p>
            </header>

            {/* 2. CARRUSEL DE HÉROE PRINCIPAL OPTIMIZADO */}
            <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] bg-neutral-950 overflow-hidden border-y border-neutral-900 flex items-center justify-center">
                
                {/* Animación fluida de desvanecimiento con AnimatePresence */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentSlide}
                            src={slides[currentSlide]}
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
                    <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-6 p-3 rounded-full border border-neutral-800 bg-black/60 text-neutral-400 hover:text-white hover:border-white transition-all group z-10 backdrop-blur-sm"
                >
                    <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Indicadores de Posición en Líneas Slim */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-10 bg-white' : 'w-2 bg-neutral-700'}`}
                        />
                    ))}
                </div>
            </section>

            {/* 3. CATEGORÍAS EN CÍRCULOS (Tu sección original adaptada a Tailwind) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-[0.15em] uppercase text-white mb-3">Escoge tu prenda</h2>
                    <p className="text-neutral-500 text-xs tracking-widest max-w-md mx-auto uppercase">
                        Los mejores busos, camisas y conjuntos que podrás encontrar solo en Black Jump para hombre, mujer y niñ@s.
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
                        <h2 className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-2">Algunas de Nuestras Prendas</h2>
                        <p className="text-neutral-600 text-[10px] tracking-widest uppercase">Estos son algunos de nuestros modelos destacados</p>
                    </div>
                </div>

                {/* Contenedor del Carrusel Infinito */}
                <div className="relative w-full flex overflow-x-hidden group/marquee">
                    {/* Fila en movimiento automático continuo */}
                    <div className="flex gap-4 pr-4 animate-marquee min-w-full shrink-0 group-hover/marquee:[animation-play-state:paused]">
                        {/* Renderizado del array original */}
                        {prendasModelos.map((src, index) => (
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
                        {prendasModelos.map((src, index) => (
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
            <BottomSidebar />
            
        </div>
    );
};

export default Home;