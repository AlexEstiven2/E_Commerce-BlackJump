import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, ArrowLeft } from 'lucide-react';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Estados para los formularios
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

    return (
        <div 
            className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden font-sans antialiased"
            style={{
                backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(10,10,10,0.9) 100%), url('Jump.jpeg')",
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay sutil para oscurecer el fondo si el logo es muy blanco y mantener legibilidad */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm pointer-events-none" />

            {/* Contenedor Principal con Perspectiva 3D */}
            <div className="relative w-full max-w-[420px] h-[550px] z-10 [perspective:1200px]">
                
                <motion.div
                    animate={{ rotateY: isRegister ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full h-full relative [transform-style:preserve-3d]"
                >
                    
                    {/* ---------------- VISTA: INICIO DE SESIÓN (FRENTE) ---------------- */}
                    <div className="absolute inset-0 w-full h-full bg-neutral-950/90 border border-neutral-900 rounded-2xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md [backface-visibility:hidden]">
                        <div>
                            <div className="mb-8">
                                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-1">
                                    // ACCESO DE USUARIO
                                </span>
                                <h2 className="text-2xl font-black tracking-wider uppercase font-mono text-white">
                                    Iniciar Sesión
                                </h2>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                {/* Input Email */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Email</label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input 
                                            type="email" 
                                            placeholder="tu@email.com"
                                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-white rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 outline-none transition-colors font-mono"
                                            value={loginData.email}
                                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Input Contraseña */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Contraseña</label>
                                    <div className="relative">
                                        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            placeholder="••••••••"
                                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-white rounded-lg py-3 pl-11 pr-12 text-sm text-white placeholder-neutral-600 outline-none transition-colors font-mono"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-white text-black font-mono text-xs tracking-widest uppercase font-bold py-3.5 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2 group"
                                >
                                    Ingresar <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Switcher Inferior */}
                        <div className="pt-4 border-t border-neutral-900 text-center">
                            <p className="text-xs text-neutral-500">
                                ¿No tienes una cuenta?{' '}
                                <button 
                                    onClick={() => setIsRegister(true)}
                                    className="text-white hover:underline uppercase tracking-wider text-[11px] font-mono ml-1 font-bold"
                                >
                                    Regístrate
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* ---------------- VISTA: REGISTRO (RESPALDO / ROTADO) ---------------- */}
                    <div className="absolute inset-0 w-full h-full bg-neutral-950/90 border border-neutral-900 rounded-2xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div>
                            <div className="mb-8">
                                <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-1">
                                    // NUEVO MIEMBRO
                                </span>
                                <h2 className="text-2xl font-black tracking-wider uppercase font-mono text-white">
                                    Crear Cuenta
                                </h2>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                {/* Input Nombre */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Nombre Completo</label>
                                    <div className="relative">
                                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input 
                                            type="text" 
                                            placeholder="Tu Nombre"
                                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-white rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 outline-none transition-colors font-mono"
                                            value={registerData.name}
                                            onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Input Email */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Email</label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input 
                                            type="email" 
                                            placeholder="tu@email.com"
                                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-white rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 outline-none transition-colors font-mono"
                                            value={registerData.email}
                                            onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Input Contraseña */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Contraseña</label>
                                    <div className="relative">
                                        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            placeholder="••••••••"
                                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-white rounded-lg py-3 pl-11 pr-12 text-sm text-white placeholder-neutral-600 outline-none transition-colors font-mono"
                                            value={registerData.password}
                                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-white text-black font-mono text-xs tracking-widest uppercase font-bold py-3.5 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2 group"
                                >
                                    Registrarme <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Switcher Inferior */}
                        <div className="pt-4 border-t border-neutral-900 text-center">
                            <p className="text-xs text-neutral-500">
                                ¿Ya tienes una cuenta?{' '}
                                <button 
                                    onClick={() => setIsRegister(false)}
                                    className="text-white hover:underline uppercase tracking-wider text-[11px] font-mono ml-1 font-bold"
                                >
                                    Inicia Sesión
                                </button>
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Auth;