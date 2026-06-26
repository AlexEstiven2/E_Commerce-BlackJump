# Guía de colores para el diseño

Esta guía define la paleta rígida de la página:

- 60% negro
- 30% blanco
- 10% gris

## Reglas generadas para la IA

1. Usar Tailwind con predominio de espacios oscuros:
   - `bg-black`, `bg-slate-950`, `text-white`, `text-slate-100`
   - Dejar el fondo principal mayormente negro.

2. El blanco se usa en texto, iconos, botones principales y acentos.
   - `text-white`
   - `border-white`
   - `bg-white/10`, `hover:bg-white/20` si hace falta contraste suave.

3. El gris se usa solo como acento secundario:
   - `text-gray-300`, `text-gray-400`
   - `bg-gray-800`, `border-gray-600`
   - `shadow-gray-900/50`

4. Proporciones:
   - Fondo y elementos grandes: 60% negro
   - Texto principal y elementos destacados: 30% blanco
   - Detalles, separadores y estados secundarios: 10% gris

5. Evitar colores adicionales:
   - No agregar azul, rojo, verde, amarillo u otros tonos.
   - Solo usar variantes de negro/blanco/gris.

6. Accesibilidad:
   - Mantener contraste alto entre fondo negro y texto blanco.
   - Usar `text-gray-300` o `text-gray-400` solo en textos secundarios.

## Ejemplo de patrón Tailwind

- Contenedor principal: `min-h-screen bg-black text-white`
- Títulos y botones importantes: `text-white`
- Fondos secundarios: `bg-gray-900`, `bg-slate-950`
- Bordes y separadores: `border-gray-700`, `divide-gray-700`
- Texto secundario: `text-gray-300`
