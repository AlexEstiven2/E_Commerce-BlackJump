import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Sliders, Info, HelpCircle, Phone } from 'lucide-react';

const BottomSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botón Flotante Fijo en la Pantalla (Minimalista y Elegante) */}
            <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-4 bg-white text-black hover:bg-neutral-200 border border-neutral-200 transition-all rounded-full shadow-2xl flex items-center justify-center group"
                    title="Abrir Menú"
                >
                    <Menu size={20} className="group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Contenedor del Sidebar Lateral */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Fondo oscuro traslúcido (Overlay) al abrirse */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black z-50 pointer-events-auto backdrop-blur-sm"
                        />

                        {/* Panel Lateral Derecho */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 h-full w-[280px] sm:w-[350px] bg-neutral-950 border-l border-neutral-900 z-50 pointer-events-auto p-6 shadow-2xl flex flex-col justify-between"
                        >
                            {/* Bloque Superior: Encabezado y Cierre */}
                            <div>
                                <div className="flex justify-between items-center pb-6 border-b border-neutral-900">
                                    <span className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase">
                                        [ MENÚ COMPLEMENTARIO ]
                                    </span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1.5 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                {/* Enlaces de Navegación Verticales */}
                                <nav className="mt-8 flex flex-col gap-1.5">
                                    <a 
                                        href="#filtros" 
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 py-3 px-4 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition-all text-sm font-mono tracking-widest uppercase"
                                    >
                                        <Sliders size={16} /> Filtrar Catálogo
                                    </a>
                                    <a 
                                        href="#tallas" 
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 py-3 px-4 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition-all text-sm font-mono tracking-widest uppercase"
                                    >
                                        <Info size={16} /> Guía de Tallas
                                    </a>
                                    <a 
                                        href="#ayuda" 
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 py-3 px-4 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition-all text-sm font-mono tracking-widest uppercase"
                                    >
                                        <HelpCircle size={16} /> Preguntas Frecuentes
                                    </a>
                                    <a 
                                        href="#soporte" 
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 py-3 px-4 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition-all text-sm font-mono tracking-widest uppercase"
                                    >
                                        <Phone size={16} /> Soporte WhatsApp
                                    </a>
                                </nav>
                            </div>

                            {/* Bloque Inferior: Detalles de Marca */}
                            <div className="pt-6 border-t border-neutral-900 text-center sm:text-left">
                                <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                                        Medellín, CO — Envíos Activos
                                    </span>
                                </div>
                                <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                                    © 2026 BLACK JUMP
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default BottomSidebar;