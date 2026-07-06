import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    
    // Simulación temporal de estado (Cambia a true para probar la vista logueado)
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [userMock] = useState({ NOMBRE: 'Alex' });

    const menuItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Caballeros', path: '/caballeros' },
        { name: 'Damas', path: '/damas' },
        { name: 'Niños', path: '/ninos' },
        { name: 'Contactos', path: '/contactos' }
    ];

    return (
        <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/[0.04] px-6 md:px-12 py-4 flex justify-between items-center select-none"
        >
            {/* LOGO PREMIUM */}
            <Link to="/" className="flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform duration-500" />
                <h1 className="text-xs font-serif tracking-[0.4em] text-white uppercase">
                    Black<span className="italic font-light text-gray-400 font-sans lowercase">jump</span>
                </h1>
            </Link>

            {/* MENÚ DE NAVEGACIÓN DESKTOP */}
            <nav className="hidden md:flex items-center gap-8">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link 
                            key={index} 
                            to={item.path}
                            className={`text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 relative py-1 group ${isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white'}`}
                        >
                            {item.name}
                            <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    );
                })}
            </nav>

            {/* ACCIONES DE CLIENTE (DINÁMICO) */}
            <div className="flex items-center gap-6 text-gray-400">
                {/* Carrito de Compras Independiente */}
                <Link to="/carrito" className="hover:text-white transition-colors relative p-1 group">
                    <ShoppingBag size={15} strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white text-black text-[7px] font-bold rounded-full flex items-center justify-center scale-90 group-hover:scale-110 transition-transform">
                        0
                    </span>
                </Link>

                {/* Condicional de Perfil / Iniciar Sesión */}
                {isLoggedIn ? (
                    <Link to="/perfil" className="flex items-center gap-2 group" title="Ver mi perfil">
                        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-bold text-[10px] uppercase group-hover:bg-white group-hover:text-black transition-all duration-300">
                            {userMock.NOMBRE.charAt(0)}
                        </div>
                    </Link>
                ) : (
                    <Link to="/login" className="hidden md:block text-[9px] uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                        Iniciar Sesión
                    </Link>
                )}

                {/* Botón de Menú Móvil */}
                <button onClick={() => setIsOpenMobile(true)} className="md:hidden hover:text-white transition-colors p-1">
                    <Menu size={16} />
                </button>
            </div>

            {/* MENÚ DESPLEGABLE MÓVIL LUXURY */}
            <AnimatePresence>
                {isOpenMobile && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-50 p-8 flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500">Menú</h2>
                            <button onClick={() => setIsOpenMobile(false)} className="text-gray-400 hover:text-white p-2">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 my-auto">
                            {menuItems.map((item, index) => (
                                <Link 
                                    key={index} 
                                    to={item.path} 
                                    onClick={() => setIsOpenMobile(false)}
                                    className="text-2xl font-serif tracking-widest text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {!isLoggedIn && (
                                <Link 
                                    to="/login" 
                                    onClick={() => setIsOpenMobile(false)}
                                    className="text-sm uppercase tracking-widest text-gray-400 hover:text-white pt-4 border-t border-white/5"
                                >
                                    → Iniciar Sesión
                                </Link>
                            )}
                        </div>
                        <p className="text-[8px] text-gray-600 tracking-[0.2em] uppercase">BlackJump Atelier © 2026</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;