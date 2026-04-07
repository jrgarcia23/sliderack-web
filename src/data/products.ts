export interface Product {
  slug: string;
  name: string;
  category: "sistemas" | "accesorios";
  badge: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  includes?: { label: string; value: string }[];
  capacity?: { label: string; value: string }[];
  finish?: string;
  image: string;
  gallery: string[];
  related: string[];
}

export const products: Product[] = [
  // ── SISTEMAS 1 NIVEL · Prof. 370 ──
  {
    slug: "sliderack-1825-370",
    name: "Sliderack 1825 × 370",
    category: "sistemas",
    badge: "1 Nivel",
    shortDesc: "1825 × 370 mm",
    description:
      "Sistema de almacenaje deslizante compacto, ideal para espacios reducidos. Estructura metálica robusta con guías de alta precisión para un movimiento suave y controlado.",
    features: [
      "Estructura metálica de alta resistencia",
      "Sistema deslizante con guías de precisión",
      "Módulos móviles con cerradura opcional",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2090 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "2255 mm" },
      { label: "Fondo del armario móvil", value: "370 mm" },
      { label: "Niveles", value: "1" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "2" },
      { label: "Armarios móviles", value: "3" },
      { label: "Baldas metálicas", value: "9" },
      { label: "Paneles de malla metálica", value: "2" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-1825-370.png",
    gallery: [
      "/images/sliderack/products/sr-1825-370.png",
      "/images/sliderack/products/sr-1825-370-v2.png",
      "/images/sliderack/products/sr-1825-370-v3.png",
      "/images/sliderack/products/sr-1825-370-v4.png",
    ],
    related: ["sliderack-2700-370", "sliderack-2n-1825-370", "kit-cajon", "cerradura"],
  },
  {
    slug: "sliderack-2700-370",
    name: "Sliderack 2700 × 370",
    category: "sistemas",
    badge: "1 Nivel",
    shortDesc: "2700 × 370 mm",
    description:
      "Sistema de almacenaje deslizante de tamaño medio. Equilibrio perfecto entre capacidad y espacio. Ideal para talleres y entornos industriales.",
    features: [
      "Estructura metálica de alta resistencia",
      "Sistema deslizante con guías de precisión",
      "Módulos móviles con cerradura opcional",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2965 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "2255 mm" },
      { label: "Fondo del armario móvil", value: "370 mm" },
      { label: "Niveles", value: "1" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "2" },
      { label: "Armarios móviles", value: "5" },
      { label: "Baldas metálicas", value: "15" },
      { label: "Paneles de malla metálica", value: "3" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2700-370.png",
    gallery: [
      "/images/sliderack/products/sr-2700-370.png",
      "/images/sliderack/products/sr-2700-370-v2.png",
      "/images/sliderack/products/sr-2700-370-v3.png",
      "/images/sliderack/products/sr-2700-370-v4.png",
    ],
    related: ["sliderack-3600-370", "sliderack-2n-2700-370", "puesto-trabajo", "modulo"],
  },
  {
    slug: "sliderack-3600-370",
    name: "Sliderack 3600 × 370",
    category: "sistemas",
    badge: "1 Nivel",
    shortDesc: "3600 × 370 mm",
    description:
      "El sistema deslizante de mayor capacidad en un solo nivel. Máximo aprovechamiento del espacio para instalaciones de gran volumen.",
    features: [
      "Estructura metálica de alta resistencia",
      "Sistema deslizante con guías de precisión",
      "Módulos móviles con cerradura opcional",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "3865 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "2255 mm" },
      { label: "Fondo del armario móvil", value: "370 mm" },
      { label: "Niveles", value: "1" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "2" },
      { label: "Armarios móviles", value: "7" },
      { label: "Baldas metálicas", value: "21" },
      { label: "Paneles de malla metálica", value: "4" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-3600-370.png",
    gallery: [
      "/images/sliderack/products/sr-3600-370.png",
      "/images/sliderack/products/sr-3600-370-v2.png",
      "/images/sliderack/products/sr-3600-370-v3.png",
      "/images/sliderack/products/sr-3600-370-v4.png",
    ],
    related: ["sliderack-2700-370", "sliderack-2n-3600-370", "panel-perforado", "kit-balda"],
  },
  // ── SISTEMAS 1 NIVEL · Prof. 470 ──
  {
    slug: "sliderack-1825-470",
    name: "Sliderack 1825 × 470",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    shortDesc: "1825 × 470 mm",
    description:
      "Sistema de almacenaje deslizante compacto con profundidad extendida de 470 mm. Mayor capacidad por módulo para materiales de gran tamaño, manteniendo la misma precisión de guías y robustez estructural.",
    features: [
      "Estructura metálica de alta resistencia",
      "Sistema deslizante con guías de precisión",
      "Módulos móviles con cerradura opcional",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2090 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "2255 mm" },
      { label: "Fondo del armario móvil", value: "470 mm" },
      { label: "Niveles", value: "1" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "2" },
      { label: "Armarios móviles", value: "2" },
      { label: "Baldas metálicas", value: "6" },
      { label: "Paneles de malla metálica", value: "2" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-1825-470.png",
    gallery: [
      "/images/sliderack/products/sr-1825-470.png",
      "/images/sliderack/products/sr-1825-470-v2.png",
      "/images/sliderack/products/sr-1825-470-v3.png",
      "/images/sliderack/products/sr-1825-470-v4.png",
    ],
    related: ["sliderack-1825-370", "sliderack-2700-470", "puesto-trabajo", "cerradura"],
  },
  {
    slug: "sliderack-2700-470",
    name: "Sliderack 2700 × 470",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    shortDesc: "2700 × 470 mm",
    description:
      "Versión de profundidad extendida para materiales de mayor tamaño. Mismo sistema de precisión con mayor capacidad de almacenaje por módulo.",
    features: [
      "Estructura metálica de alta resistencia",
      "Sistema deslizante con guías de precisión",
      "Módulos móviles con cerradura opcional",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2965 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "2255 mm" },
      { label: "Fondo del armario móvil", value: "470 mm" },
      { label: "Niveles", value: "1" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "2" },
      { label: "Armarios móviles", value: "4" },
      { label: "Baldas metálicas", value: "12" },
      { label: "Paneles de malla metálica", value: "3" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2700-470.png",
    gallery: [
      "/images/sliderack/products/sr-2700-470.png",
      "/images/sliderack/products/sr-2700-470-v2.png",
      "/images/sliderack/products/sr-2700-470-v3.png",
      "/images/sliderack/products/sr-2700-470-v4.png",
    ],
    related: ["sliderack-2700-370", "sliderack-2n-2700-370", "kit-cajon", "cerradura"],
  },
  {
    slug: "sliderack-3600-470",
    name: "Sliderack 3600 × 470",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    shortDesc: "3600 × 470 mm",
    description:
      "El sistema deslizante de mayor capacidad en un solo nivel con profundidad extendida. Máximo almacenaje para instalaciones que requieren módulos de gran fondo.",
    features: [
      "Estructura metálica de alta resistencia",
      "Sistema deslizante con guías de precisión",
      "Módulos móviles con cerradura opcional",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "3865 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "2255 mm" },
      { label: "Fondo del armario móvil", value: "470 mm" },
      { label: "Niveles", value: "1" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "2" },
      { label: "Armarios móviles", value: "6" },
      { label: "Baldas metálicas", value: "18" },
      { label: "Paneles de malla metálica", value: "4" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-3600-470.png",
    gallery: [
      "/images/sliderack/products/sr-3600-470.png",
      "/images/sliderack/products/sr-3600-470-v2.png",
      "/images/sliderack/products/sr-3600-470-v3.png",
      "/images/sliderack/products/sr-3600-470-v4.png",
    ],
    related: ["sliderack-3600-370", "sliderack-2n-3600-470", "panel-perforado", "kit-balda"],
  },
  // ── SISTEMAS 2 NIVELES · Prof. 370 ──
  {
    slug: "sliderack-2n-1825-370",
    name: "Sliderack 2 Niveles 1825 × 370",
    category: "sistemas",
    badge: "2 Niveles",
    shortDesc: "1825 × 370 mm · 2 Niveles",
    description:
      "Sistema de dos niveles para duplicar la capacidad de almacenaje. Nivel inferior deslizante con nivel superior fijo para cajas y materiales pesados.",
    features: [
      "Dos niveles de almacenaje",
      "Nivel inferior deslizante, superior fijo",
      "Estructura reforzada para cargas pesadas",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2090 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "3505 mm" },
      { label: "Fondo del armario móvil", value: "370 mm" },
      { label: "Niveles", value: "2" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "4" },
      { label: "Armarios móviles", value: "3" },
      { label: "Baldas metálicas", value: "9" },
      { label: "Paneles de malla metálica", value: "4" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2n-1825-370.png",
    gallery: [
      "/images/sliderack/products/sr-2n-1825-370.png",
      "/images/sliderack/products/sr-2n-1825-370-v2.png",
      "/images/sliderack/products/sr-2n-1825-370-v3.png",
      "/images/sliderack/products/sr-2n-1825-370-v4.png",
    ],
    related: ["sliderack-1825-370", "sliderack-2n-2700-370", "puesto-trabajo", "kit-balda"],
  },
  {
    slug: "sliderack-2n-2700-370",
    name: "Sliderack 2 Niveles 2700 × 370",
    category: "sistemas",
    badge: "2 Niveles",
    shortDesc: "2700 × 370 mm · 2 Niveles",
    description:
      "Máxima capacidad en dos niveles. Configuración ideal para almacenes, talleres industriales y entornos con alta densidad de materiales.",
    features: [
      "Dos niveles de almacenaje",
      "Nivel inferior deslizante, superior fijo",
      "Estructura reforzada para cargas pesadas",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2965 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "3505 mm" },
      { label: "Fondo del armario móvil", value: "370 mm" },
      { label: "Niveles", value: "2" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "4" },
      { label: "Armarios móviles", value: "5" },
      { label: "Baldas metálicas", value: "15" },
      { label: "Paneles de malla metálica", value: "6" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2n-2700-370.png",
    gallery: [
      "/images/sliderack/products/sr-2n-2700-370.png",
      "/images/sliderack/products/sr-2n-2700-370-v2.png",
      "/images/sliderack/products/sr-2n-2700-370-v3.png",
      "/images/sliderack/products/sr-2n-2700-370-v4.png",
    ],
    related: ["sliderack-2700-370", "sliderack-2n-3600-370", "modulo", "cerradura"],
  },
  {
    slug: "sliderack-2n-3600-370",
    name: "Sliderack 2 Niveles 3600 × 370",
    category: "sistemas",
    badge: "2 Niveles",
    shortDesc: "3600 × 370 mm · 2 Niveles",
    description:
      "El sistema más grande de la gama Sliderack. Dos niveles de almacenaje con la máxima capacidad para instalaciones de gran escala.",
    features: [
      "Dos niveles de almacenaje",
      "Nivel inferior deslizante, superior fijo",
      "Estructura reforzada para cargas pesadas",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "3865 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "3505 mm" },
      { label: "Fondo del armario móvil", value: "370 mm" },
      { label: "Niveles", value: "2" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "4" },
      { label: "Armarios móviles", value: "7" },
      { label: "Baldas metálicas", value: "21" },
      { label: "Paneles de malla metálica", value: "8" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2n-3600-370.png",
    gallery: [
      "/images/sliderack/products/sr-2n-3600-370.png",
      "/images/sliderack/products/sr-2n-3600-370-v2.png",
      "/images/sliderack/products/sr-2n-3600-370-v3.png",
      "/images/sliderack/products/sr-2n-3600-370-v4.png",
    ],
    related: ["sliderack-3600-370", "sliderack-2n-2700-370", "puesto-trabajo", "panel-perforado"],
  },
  // ── SISTEMAS 2 NIVELES · Prof. 470 ──
  {
    slug: "sliderack-2n-1825-470",
    name: "Sliderack 2 Niveles 1825 × 470",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    shortDesc: "1825 × 470 mm · 2 Niveles",
    description:
      "Sistema de dos niveles con profundidad extendida de 470 mm. Duplica la capacidad de almacenaje con módulos de mayor fondo para materiales voluminosos.",
    features: [
      "Dos niveles de almacenaje",
      "Nivel inferior deslizante, superior fijo",
      "Estructura reforzada para cargas pesadas",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2090 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "3505 mm" },
      { label: "Fondo del armario móvil", value: "470 mm" },
      { label: "Niveles", value: "2" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "4" },
      { label: "Armarios móviles", value: "2" },
      { label: "Baldas metálicas", value: "6" },
      { label: "Paneles de malla metálica", value: "4" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2n-1825-470.png",
    gallery: [
      "/images/sliderack/products/sr-2n-1825-470.png",
      "/images/sliderack/products/sr-2n-1825-470-v2.png",
      "/images/sliderack/products/sr-2n-1825-470-v3.png",
      "/images/sliderack/products/sr-2n-1825-470-v4.png",
    ],
    related: ["sliderack-1825-470", "sliderack-2n-2700-470", "puesto-trabajo", "cerradura"],
  },
  {
    slug: "sliderack-2n-2700-470",
    name: "Sliderack 2 Niveles 2700 × 470",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    shortDesc: "2700 × 470 mm · 2 Niveles",
    description:
      "Dos niveles de almacenaje con profundidad extendida de 470 mm. Configuración ideal para entornos industriales que necesitan máxima capacidad por módulo.",
    features: [
      "Dos niveles de almacenaje",
      "Nivel inferior deslizante, superior fijo",
      "Estructura reforzada para cargas pesadas",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "2965 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "3505 mm" },
      { label: "Fondo del armario móvil", value: "470 mm" },
      { label: "Niveles", value: "2" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "4" },
      { label: "Armarios móviles", value: "4" },
      { label: "Baldas metálicas", value: "12" },
      { label: "Paneles de malla metálica", value: "6" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2n-2700-470.png",
    gallery: [
      "/images/sliderack/products/sr-2n-2700-470.png",
      "/images/sliderack/products/sr-2n-2700-470-v2.png",
      "/images/sliderack/products/sr-2n-2700-470-v3.png",
      "/images/sliderack/products/sr-2n-2700-470-v4.png",
    ],
    related: ["sliderack-2700-470", "sliderack-2n-3600-470", "modulo", "kit-balda"],
  },
  {
    slug: "sliderack-2n-3600-470",
    name: "Sliderack 2 Niveles 3600 × 470",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    shortDesc: "3600 × 470 mm · 2 Niveles",
    description:
      "El sistema más grande de la gama Sliderack con profundidad extendida. Dos niveles y módulos de 470 mm de fondo para la máxima capacidad de almacenaje.",
    features: [
      "Dos niveles de almacenaje",
      "Nivel inferior deslizante, superior fijo",
      "Estructura reforzada para cargas pesadas",
      "Compatible con todos los accesorios Sliderack",
      "Fabricado en España por Esnova Racks",
    ],
    specs: [
      { label: "Ancho de la estantería", value: "3865 mm" },
      { label: "Fondo de la estantería", value: "1160 mm" },
      { label: "Alto de la estantería", value: "3505 mm" },
      { label: "Fondo del armario móvil", value: "470 mm" },
      { label: "Niveles", value: "2" },
      { label: "Configuración", value: "Modular" },
    ],
    includes: [
      { label: "Bastidores de Rack", value: "2" },
      { label: "Largueros de Rack", value: "4" },
      { label: "Armarios móviles", value: "6" },
      { label: "Baldas metálicas", value: "18" },
      { label: "Paneles de malla metálica", value: "8" },
    ],
    capacity: [
      { label: "Capacidad de carga de la estantería", value: "Consultar" },
      { label: "Capacidad de carga por armario", value: "Consultar" },
    ],
    finish: "Pintado color Negro Mate RAL-9005",
    image: "/images/sliderack/products/sr-2n-3600-470.png",
    gallery: [
      "/images/sliderack/products/sr-2n-3600-470.png",
      "/images/sliderack/products/sr-2n-3600-470-v2.png",
      "/images/sliderack/products/sr-2n-3600-470-v3.png",
      "/images/sliderack/products/sr-2n-3600-470-v4.png",
    ],
    related: ["sliderack-3600-470", "sliderack-2n-2700-470", "puesto-trabajo", "panel-perforado"],
  },
  // ── ACCESORIOS ──
  {
    slug: "puesto-trabajo",
    name: "Puesto de Trabajo",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Mesa de trabajo integrada",
    description:
      "Superficie de trabajo integrable en el sistema Sliderack. Panel perforado posterior para organización de herramientas. Estructura robusta para uso intensivo.",
    features: [
      "Superficie de trabajo resistente",
      "Panel perforado incluido",
      "Integrable con cualquier modelo Sliderack",
      "Estructura de acero reforzada",
    ],
    specs: [
      { label: "Tipo", value: "Mesa de trabajo" },
      { label: "Panel", value: "Perforado incluido" },
      { label: "Material", value: "Acero laminado" },
      { label: "Compatibilidad", value: "Todos los modelos" },
    ],
    image: "/images/sliderack/products/acc-puesto-trabajo.png",
    gallery: ["/images/sliderack/products/acc-puesto-trabajo.png"],
    related: ["panel-perforado", "kit-cajon", "sliderack-2700-370"],
  },
  {
    slug: "panel-perforado",
    name: "Panel Perforado",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Organización de herramientas",
    description:
      "Panel perforado para organización vertical de herramientas. Instalación sencilla en cualquier módulo del sistema Sliderack.",
    features: [
      "Múltiples puntos de anclaje",
      "Compatible con ganchos estándar",
      "Instalación sin herramientas especiales",
      "Acabado resistente a la corrosión",
    ],
    specs: [
      { label: "Tipo", value: "Panel perforado" },
      { label: "Material", value: "Acero" },
      { label: "Acabado", value: "Pintura epoxi" },
      { label: "Compatibilidad", value: "Todos los modelos" },
    ],
    image: "/images/sliderack/products/acc-panel-perforado.png",
    gallery: ["/images/sliderack/products/acc-panel-perforado.png"],
    related: ["puesto-trabajo", "kit-balda", "sliderack-2700-370"],
  },
  {
    slug: "cerradura",
    name: "Cerradura",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Seguridad para módulos",
    description:
      "Sistema de cerradura para módulos Sliderack. Seguridad adicional para materiales sensibles o de alto valor.",
    features: [
      "Cerradura de seguridad con llave",
      "Instalación sencilla",
      "Compatible con todos los módulos",
      "Acabado resistente",
    ],
    specs: [
      { label: "Tipo", value: "Cerradura con llave" },
      { label: "Material", value: "Acero cromado" },
      { label: "Compatibilidad", value: "Todos los módulos" },
    ],
    image: "/images/sliderack/photos/logo-cerradura.jpg",
    gallery: ["/images/sliderack/photos/logo-cerradura.jpg"],
    related: ["kit-cajon", "modulo", "sliderack-1825-370"],
  },
  {
    slug: "kit-cajon",
    name: "Kit Cajón",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Cajones para módulos",
    description:
      "Kit de cajones divisorios para instalación en módulos Sliderack. Organización de piezas pequeñas y herramientas de mano.",
    features: [
      "Cajones con divisiones internas",
      "Guías de extracción suave",
      "Compatible con todos los módulos",
      "Capacidad ajustable",
    ],
    specs: [
      { label: "Tipo", value: "Cajón divisorio" },
      { label: "Divisiones", value: "Configurables" },
      { label: "Material", value: "Acero galvanizado" },
      { label: "Compatibilidad", value: "Todos los módulos" },
    ],
    image: "/images/sliderack/products/acc-kit-cajon.png",
    gallery: ["/images/sliderack/products/acc-kit-cajon.png"],
    related: ["cerradura", "kit-balda", "sliderack-2700-370"],
  },
  {
    slug: "kit-balda",
    name: "Kit Balda",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Baldas adicionales",
    description:
      "Baldas adicionales para ampliar la capacidad de almacenaje dentro de cada módulo. Ajustables en altura.",
    features: [
      "Baldas ajustables en altura",
      "Fácil instalación",
      "Compatible con profundidades 370 y 470 mm",
      "Alta capacidad de carga",
    ],
    specs: [
      { label: "Tipo", value: "Balda adicional" },
      { label: "Profundidades", value: "370 / 470 mm" },
      { label: "Material", value: "Acero" },
      { label: "Ajuste", value: "Altura variable" },
    ],
    image: "/images/sliderack/products/acc-kit-balda.png",
    gallery: ["/images/sliderack/products/acc-kit-balda.png"],
    related: ["kit-cajon", "modulo", "sliderack-3600-370"],
  },
  {
    slug: "modulo",
    name: "Módulo Adicional",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Amplía tu sistema",
    description:
      "Módulo adicional para ampliar la capacidad del sistema Sliderack. Se integra directamente en la estructura existente sin modificaciones.",
    features: [
      "Ampliación directa del sistema",
      "Sin modificación de estructura",
      "Disponible en profundidad 370 y 470 mm",
      "Incluye guías de deslizamiento",
    ],
    specs: [
      { label: "Tipo", value: "Módulo de ampliación" },
      { label: "Profundidades", value: "370 / 470 mm" },
      { label: "Material", value: "Acero laminado en frío" },
      { label: "Compatibilidad", value: "Todos los sistemas" },
    ],
    image: "/images/sliderack/products/acc-sistema-riveto.png",
    gallery: ["/images/sliderack/products/acc-sistema-riveto.png"],
    related: ["kit-balda", "cerradura", "sliderack-2700-370"],
  },
  {
    slug: "kit-perchero",
    name: "Kit Perchero",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Almacenaje de prendas",
    description:
      "Sistema de perchero integrado en los módulos Sliderack. Ideal para almacenar EPIs, uniformes y prendas de trabajo de forma ordenada y accesible.",
    features: [
      "Barra de colgar integrada",
      "Acceso directo a prendas",
      "Ideal para EPIs y uniformes",
      "Compatible con todos los módulos",
    ],
    specs: [
      { label: "Tipo", value: "Perchero integrado" },
      { label: "Uso", value: "EPIs, uniformes, prendas" },
      { label: "Material", value: "Acero" },
      { label: "Compatibilidad", value: "Todos los módulos" },
    ],
    image: "/images/sliderack/products/acc-perchero.png",
    gallery: ["/images/sliderack/products/acc-perchero.png", "/images/sliderack/products/acc-perchero1.png"],
    related: ["cerradura", "kit-balda", "sliderack-2700-370"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: "sistemas" | "accesorios"): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as Product[];
}
