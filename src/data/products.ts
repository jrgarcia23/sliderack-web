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
    slug: "sliderack-1-1837",
    name: "Sliderack 1-1837",
    category: "sistemas",
    badge: "1 Nivel",
    shortDesc: "2090 × 1160 mm · 3 armarios móviles de 370 mm",
    description:
      "Sistema deslizante compacto con 3 armarios móviles y 9 baldas. Ideal para talleres pequeños, zonas de trabajo auxiliares o garajes donde el espacio es limitado pero se necesita acceso rápido a herramientas y piezas organizadas por categoría. Con solo 2090 mm de ancho, encaja en paredes donde una estantería convencional desperdiciaría espacio en pasillos.",
    features: [
      "3 armarios móviles deslizantes con 9 baldas metálicas",
      "Cada armario móvil soporta hasta 150 kg de carga",
      "Guías de precisión: se desliza con un solo dedo",
      "Cerradura opcional para armarios con material sensible",
      "Compatible con todos los accesorios Sliderack",
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
    image: "/images/sliderack/products/sr-1825-370.webp",
    gallery: [
      "/images/sliderack/products/sr-1825-370.webp",
      "/images/sliderack/products/sr-1825-370-v2.webp",
      "/images/sliderack/products/sr-1825-370-v3.webp",
      "/images/sliderack/products/sr-1825-370-v4.webp",
    ],
    related: ["sliderack-1-2737", "sliderack-2-1837", "kit-5-cajones", "cerradura"],
  },
  {
    slug: "sliderack-1-2737",
    name: "Sliderack 1-2737",
    category: "sistemas",
    badge: "1 Nivel",
    shortDesc: "2965 × 1160 mm · 5 armarios móviles de 370 mm",
    description:
      "El modelo más equilibrado de la gama. 5 armarios móviles deslizantes con 15 baldas ofrecen capacidad suficiente para organizar el utillaje completo de un taller mecánico de tamaño medio, manteniendo cada herramienta localizable y accesible sin mover otras estanterías. La configuración más elegida por talleres de automoción y servicios técnicos.",
    features: [
      "5 armarios móviles deslizantes con 15 baldas metálicas",
      "Cada armario móvil soporta hasta 150 kg de carga",
      "El más vendido para talleres de automoción",
      "Cerradura opcional para proteger herramientas de valor",
      "Ampliable con armarios móviles adicionales y accesorios",
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
    image: "/images/sliderack/products/sr-2700-370.webp",
    gallery: [
      "/images/sliderack/products/sr-2700-370.webp",
      "/images/sliderack/products/sr-2700-370-v2.webp",
      "/images/sliderack/products/sr-2700-370-v3.webp",
      "/images/sliderack/products/sr-2700-370-v4.webp",
    ],
    related: ["sliderack-1-3637", "sliderack-2-2737", "puesto-trabajo", "armario-movil-adicional"],
  },
  {
    slug: "sliderack-1-3637",
    name: "Sliderack 1-3637",
    category: "sistemas",
    badge: "1 Nivel",
    shortDesc: "3865 × 1160 mm · 7 armarios móviles de 370 mm",
    description:
      "El sistema de mayor capacidad en un nivel con 7 armarios móviles deslizantes y 21 baldas. Diseñado para talleres industriales, centros logísticos y parques de bomberos que necesitan almacenar un gran volumen de herramientas, recambios o equipamiento con acceso rápido a cada armario. Ocupa menos de 4 metros de pared y elimina la necesidad de pasillos entre estanterías.",
    features: [
      "7 armarios móviles deslizantes con 21 baldas metálicas",
      "Máxima capacidad en un solo nivel de la gama",
      "Ideal para parques de bomberos y almacenes industriales",
      "Paneles perforados opcionales para herramientas",
      "Estructura de acero con tratamiento anticorrosión",
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
    image: "/images/sliderack/products/sr-3600-370.webp",
    gallery: [
      "/images/sliderack/products/sr-3600-370.webp",
      "/images/sliderack/products/sr-3600-370-v2.webp",
      "/images/sliderack/products/sr-3600-370-v3.webp",
      "/images/sliderack/products/sr-3600-370-v4.webp",
    ],
    related: ["sliderack-1-2737", "sliderack-2-3637", "panel-perforado", "kit-balda"],
  },
  // ── SISTEMAS 1 NIVEL · Prof. 470 ──
  {
    slug: "sliderack-1-1847",
    name: "Sliderack 1-1847",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    shortDesc: "2090 × 1160 mm · 2 armarios móviles de 470 mm",
    description:
      "Versión compacta con profundidad extendida de 470 mm. 2 armarios móviles con 6 baldas de mayor fondo, pensadas para almacenar herramientas eléctricas, cajas de recambios voluminosas o equipos de diagnóstico que no caben en los armarios de 370 mm. Ideal para zonas de servicio técnico o puestos de trabajo especializados.",
    features: [
      "2 armarios móviles deslizantes con 6 baldas de 470 mm de fondo",
      "100 mm más de profundidad que la versión estándar",
      "Perfecto para herramientas eléctricas y cajas voluminosas",
      "Cerradura opcional para equipos de valor",
      "Mismo sistema de guías de precisión que toda la gama",
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
    image: "/images/sliderack/products/sr-1825-470.webp",
    gallery: [
      "/images/sliderack/products/sr-1825-470.webp",
      "/images/sliderack/products/sr-1825-470-v2.webp",
      "/images/sliderack/products/sr-1825-470-v3.webp",
      "/images/sliderack/products/sr-1825-470-v4.webp",
    ],
    related: ["sliderack-1-1837", "sliderack-1-2747", "puesto-trabajo", "cerradura"],
  },
  {
    slug: "sliderack-1-2747",
    name: "Sliderack 1-2747",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    shortDesc: "2965 × 1160 mm · 4 armarios móviles de 470 mm",
    description:
      "4 armarios móviles deslizantes con 12 baldas de profundidad extendida (470 mm). La opción preferida cuando se necesita almacenar materiales de gran tamaño como kits de reparación, repuestos de automoción o equipos de medición en un taller de tamaño medio. Combina la versatilidad del ancho medio con la capacidad extra de los armarios profundos.",
    features: [
      "4 armarios móviles deslizantes con 12 baldas de 470 mm",
      "Capacidad de 150 kg por armario móvil con deslizamiento suave",
      "Ideal para kits de reparación y repuestos voluminosos",
      "Kit de cajones divisorios disponible para piezas pequeñas",
      "Fabricado en España con certificación ISO 9001",
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
    image: "/images/sliderack/products/sr-2700-470.webp",
    gallery: [
      "/images/sliderack/products/sr-2700-470.webp",
      "/images/sliderack/products/sr-2700-470-v2.webp",
      "/images/sliderack/products/sr-2700-470-v3.webp",
      "/images/sliderack/products/sr-2700-470-v4.webp",
    ],
    related: ["sliderack-1-1847", "sliderack-2-2747", "kit-5-cajones", "cerradura"],
  },
  {
    slug: "sliderack-1-3647",
    name: "Sliderack 1-3647",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    shortDesc: "3865 × 1160 mm · 6 armarios móviles de 470 mm",
    description:
      "Máxima capacidad en un nivel con armarios profundos: 6 armarios móviles deslizantes y 18 baldas de 470 mm. Diseñado para almacenes industriales y centros de mantenimiento que gestionan grandes volúmenes de material pesado o voluminoso. La solución cuando necesitas el máximo almacenaje sin recurrir a un segundo nivel.",
    features: [
      "6 armarios móviles deslizantes con 18 baldas de 470 mm",
      "Máxima capacidad en un nivel de toda la gama",
      "Para almacenes industriales y centros de mantenimiento",
      "Paneles de malla metálica para ventilación del material",
      "Estructura reforzada con acero laminado en frío",
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
    image: "/images/sliderack/products/sr-3600-470.webp",
    gallery: [
      "/images/sliderack/products/sr-3600-470.webp",
      "/images/sliderack/products/sr-3600-470-v2.webp",
      "/images/sliderack/products/sr-3600-470-v3.webp",
      "/images/sliderack/products/sr-3600-470-v4.webp",
    ],
    related: ["sliderack-1-3637", "sliderack-2-3647", "panel-perforado", "kit-balda"],
  },
  // ── SISTEMAS 2 NIVELES · Prof. 370 ──
  {
    slug: "sliderack-2-1837",
    name: "Sliderack 2-1837",
    category: "sistemas",
    badge: "2 Niveles",
    shortDesc: "2090 × 1160 mm · 3 armarios móviles de 370 mm · 2 Niveles",
    description:
      "Duplica la capacidad del modelo compacto con un segundo nivel de almacenaje fijo sobre los armarios móviles deslizantes. El nivel inferior mantiene los 3 armarios móviles con 9 baldas accesibles con un dedo; el nivel superior añade almacenaje estático para cajas, material de uso menos frecuente o stock de reserva. Altura total de 3505 mm.",
    features: [
      "3 armarios móviles deslizantes (nivel inferior) + almacenaje fijo (superior)",
      "Altura total 3505 mm — aprovecha el espacio vertical",
      "Estructura reforzada para soportar doble carga",
      "Ideal para talleres con techos altos y espacio en planta limitado",
      "Compatible con escaleras y plataformas de acceso",
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
    image: "/images/sliderack/products/sr-2n-1825-370.webp",
    gallery: [
      "/images/sliderack/products/sr-2n-1825-370.webp",
      "/images/sliderack/products/sr-2n-1825-370-v2.webp",
      "/images/sliderack/products/sr-2n-1825-370-v3.webp",
      "/images/sliderack/products/sr-2n-1825-370-v4.webp",
    ],
    related: ["sliderack-1-1837", "sliderack-2-2737", "puesto-trabajo", "kit-balda"],
  },
  {
    slug: "sliderack-2-2737",
    name: "Sliderack 2-2737",
    category: "sistemas",
    badge: "2 Niveles",
    shortDesc: "2965 × 1160 mm · 5 armarios móviles de 370 mm · 2 Niveles",
    description:
      "El modelo de dos niveles más versátil de la gama. 5 armarios móviles deslizantes con 15 baldas en el nivel inferior, más almacenaje fijo en el superior. Perfecto para talleres industriales que necesitan organizar herramientas de uso diario abajo y stock de repuestos o materiales pesados arriba, maximizando cada metro cuadrado de pared disponible.",
    features: [
      "5 armarios móviles deslizantes + nivel superior fijo (30 baldas totales)",
      "El modelo de 2 niveles más elegido por talleres industriales",
      "6 paneles de malla para separación y ventilación",
      "Armarios móviles de ampliación disponibles para crecer en horizontal",
      "Fabricado en España con certificaciones ISO 9001 y 14001",
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
    image: "/images/sliderack/products/sr-2n-2700-370.webp",
    gallery: [
      "/images/sliderack/products/sr-2n-2700-370.webp",
      "/images/sliderack/products/sr-2n-2700-370-v2.webp",
      "/images/sliderack/products/sr-2n-2700-370-v3.webp",
      "/images/sliderack/products/sr-2n-2700-370-v4.webp",
    ],
    related: ["sliderack-1-2737", "sliderack-2-3637", "armario-movil-adicional", "cerradura"],
  },
  {
    slug: "sliderack-2-3637",
    name: "Sliderack 2-3637",
    category: "sistemas",
    badge: "2 Niveles",
    shortDesc: "3865 × 1160 mm · 7 armarios móviles de 370 mm · 2 Niveles",
    description:
      "El sistema de mayor capacidad total de la gama Sliderack. 7 armarios móviles deslizantes con 21 baldas en el nivel inferior y almacenaje fijo completo en el superior. Diseñado para parques de bomberos, centros logísticos y grandes instalaciones industriales donde se gestiona un alto volumen de equipamiento, EPIs o materiales de intervención que deben estar siempre localizables.",
    features: [
      "7 armarios móviles deslizantes + nivel superior (42 baldas totales)",
      "El sistema de mayor capacidad de toda la gama Sliderack",
      "8 paneles de malla metálica para organización visual",
      "Ideal para parques de bomberos y centros logísticos",
      "Estructura reforzada con acero de alta resistencia",
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
    image: "/images/sliderack/products/sr-2n-3600-370.webp",
    gallery: [
      "/images/sliderack/products/sr-2n-3600-370.webp",
      "/images/sliderack/products/sr-2n-3600-370-v2.webp",
      "/images/sliderack/products/sr-2n-3600-370-v3.webp",
      "/images/sliderack/products/sr-2n-3600-370-v4.webp",
    ],
    related: ["sliderack-1-3637", "sliderack-2-2737", "puesto-trabajo", "panel-perforado"],
  },
  // ── SISTEMAS 2 NIVELES · Prof. 470 ──
  {
    slug: "sliderack-2-1847",
    name: "Sliderack 2-1847",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    shortDesc: "2090 × 1160 mm · 2 armarios móviles de 470 mm · 2 Niveles",
    description:
      "El modelo más compacto de dos niveles con profundidad extendida. 2 armarios móviles deslizantes de 470 mm en el nivel inferior para equipos voluminosos, más almacenaje fijo superior. La solución cuando necesitas almacenar material grande en un espacio reducido con acceso desde un solo punto de pared.",
    features: [
      "2 armarios móviles de 470 mm (inferior) + almacenaje fijo (superior)",
      "Profundidad extra para equipos voluminosos y cajas grandes",
      "Altura total 3505 mm — máximo aprovechamiento vertical",
      "Cerradura con llave disponible para seguridad del material",
      "Puesto de trabajo integrable en el lateral",
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
    image: "/images/sliderack/products/sr-2n-1825-470.webp",
    gallery: [
      "/images/sliderack/products/sr-2n-1825-470.webp",
      "/images/sliderack/products/sr-2n-1825-470-v2.webp",
      "/images/sliderack/products/sr-2n-1825-470-v3.webp",
      "/images/sliderack/products/sr-2n-1825-470-v4.webp",
    ],
    related: ["sliderack-1-1847", "sliderack-2-2747", "puesto-trabajo", "cerradura"],
  },
  {
    slug: "sliderack-2-2747",
    name: "Sliderack 2-2747",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    shortDesc: "2965 × 1160 mm · 4 armarios móviles de 470 mm · 2 Niveles",
    description:
      "4 armarios móviles profundos deslizantes con 12 baldas de 470 mm en el nivel inferior, más capacidad fija arriba. El sistema preferido por servicios de mantenimiento industrial que manejan repuestos de gran tamaño, herramientas pesadas y equipos de diagnóstico que necesitan fondo extra. Combina capacidad máxima con organización profesional.",
    features: [
      "4 armarios móviles de 470 mm + nivel superior fijo (24 baldas)",
      "Profundidad extendida para repuestos y equipos voluminosos",
      "Ideal para servicios de mantenimiento industrial",
      "Baldas adicionales disponibles para personalizar alturas",
      "Armarios móviles de ampliación para crecer horizontalmente",
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
    image: "/images/sliderack/products/sr-2n-2700-470.webp",
    gallery: [
      "/images/sliderack/products/sr-2n-2700-470.webp",
      "/images/sliderack/products/sr-2n-2700-470-v2.webp",
      "/images/sliderack/products/sr-2n-2700-470-v3.webp",
      "/images/sliderack/products/sr-2n-2700-470-v4.webp",
    ],
    related: ["sliderack-1-2747", "sliderack-2-3647", "armario-movil-adicional", "kit-balda"],
  },
  {
    slug: "sliderack-2-3647",
    name: "Sliderack 2-3647",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    shortDesc: "3865 × 1160 mm · 6 armarios móviles de 470 mm · 2 Niveles",
    description:
      "La configuración de máxima capacidad absoluta de toda la gama. 6 armarios móviles profundos deslizantes con 18 baldas de 470 mm más nivel superior completo. Pensado para grandes instalaciones industriales, bases logísticas o centros de distribución donde cada metro cuadrado debe almacenar el máximo volumen posible de material pesado y voluminoso con acceso organizado.",
    features: [
      "6 armarios móviles de 470 mm + nivel superior (36 baldas totales)",
      "Configuración de máxima capacidad absoluta de la gama",
      "8 paneles de malla para organización y ventilación",
      "Para bases logísticas y centros de distribución",
      "Estructura de acero reforzado con tratamiento anticorrosión",
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
    image: "/images/sliderack/products/sr-2n-3600-470.webp",
    gallery: [
      "/images/sliderack/products/sr-2n-3600-470.webp",
      "/images/sliderack/products/sr-2n-3600-470-v2.webp",
      "/images/sliderack/products/sr-2n-3600-470-v3.webp",
      "/images/sliderack/products/sr-2n-3600-470-v4.webp",
    ],
    related: ["sliderack-1-3647", "sliderack-2-2747", "puesto-trabajo", "panel-perforado"],
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
    image: "/images/sliderack/products/acc-puesto-trabajo.webp",
    gallery: ["/images/sliderack/products/acc-puesto-trabajo.webp"],
    related: ["panel-perforado", "kit-5-cajones", "sliderack-1-2737"],
  },
  {
    slug: "panel-perforado",
    name: "Panel Perforado",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Organización de herramientas",
    description:
      "Panel perforado para organización vertical de herramientas. Instalación sencilla en cualquier armario móvil del sistema Sliderack.",
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
    image: "/images/sliderack/products/acc-panel-perforado.webp",
    gallery: ["/images/sliderack/products/acc-panel-perforado.webp"],
    related: ["puesto-trabajo", "kit-balda", "sliderack-1-2737"],
  },
  {
    slug: "cerradura",
    name: "Cerradura",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Seguridad para armarios móviles",
    description:
      "Sistema de cerradura para armarios móviles Sliderack. Seguridad adicional para materiales sensibles o de alto valor.",
    features: [
      "Cerradura de seguridad con llave",
      "Instalación sencilla",
      "Compatible con todos los armarios móviles",
      "Acabado resistente",
    ],
    specs: [
      { label: "Tipo", value: "Cerradura con llave" },
      { label: "Material", value: "Acero cromado" },
      { label: "Compatibilidad", value: "Todos los armarios móviles" },
    ],
    image: "/images/sliderack/photos/logo-cerradura.jpg",
    gallery: ["/images/sliderack/photos/logo-cerradura.jpg"],
    related: ["kit-5-cajones", "armario-movil-adicional", "sliderack-1-1837"],
  },
  {
    slug: "kit-5-cajones",
    name: "Kit 5 Cajones",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "5 cajones para armarios móviles",
    description:
      "Kit compuesto por 5 cajones divisorios para instalación en armarios móviles Sliderack. Organización de piezas pequeñas y herramientas de mano. Es imprescindible colocar una balda sobre los cajones para evitar su caída.",
    features: [
      "Kit compuesto por 5 cajones",
      "Cajones con divisiones internas",
      "Guías de extracción suave",
      "Compatible con todos los armarios móviles",
    ],
    specs: [
      { label: "Tipo", value: "Kit de 5 cajones divisorios" },
      { label: "Divisiones", value: "Configurables" },
      { label: "Material", value: "Acero galvanizado" },
      { label: "Compatibilidad", value: "Todos los armarios móviles" },
    ],
    image: "/images/sliderack/products/acc-kit-cajon.webp",
    gallery: ["/images/sliderack/products/acc-kit-cajon.webp"],
    related: ["cerradura", "kit-balda", "sliderack-1-2737"],
  },
  {
    slug: "kit-balda",
    name: "Kit Balda",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Baldas adicionales",
    description:
      "Baldas adicionales para ampliar la capacidad de almacenaje dentro de cada armario móvil. Ajustables en altura.",
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
    image: "/images/sliderack/products/acc-kit-balda.webp",
    gallery: ["/images/sliderack/products/acc-kit-balda.webp"],
    related: ["kit-5-cajones", "armario-movil-adicional", "sliderack-1-3637"],
  },
  {
    slug: "armario-movil-adicional",
    name: "Armario Móvil Adicional",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Amplía tu sistema",
    description:
      "Armario móvil adicional para ampliar la capacidad del sistema Sliderack. Se integra directamente en la estructura existente sin modificaciones.",
    features: [
      "Ampliación directa del sistema",
      "Sin modificación de estructura",
      "Disponible en profundidad 370 y 470 mm",
      "Incluye guías de deslizamiento",
    ],
    specs: [
      { label: "Tipo", value: "Armario móvil de ampliación" },
      { label: "Profundidades", value: "370 / 470 mm" },
      { label: "Material", value: "Acero laminado en frío" },
      { label: "Compatibilidad", value: "Todos los sistemas" },
    ],
    image: "/images/sliderack/products/acc-sistema-riveto.webp",
    gallery: ["/images/sliderack/products/acc-sistema-riveto.webp"],
    related: ["kit-balda", "cerradura", "sliderack-1-2737"],
  },
  {
    slug: "kit-perchero",
    name: "Kit Perchero",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: "Almacenaje de prendas",
    description:
      "Sistema de perchero integrado en los armarios móviles Sliderack. Ideal para almacenar EPIs, uniformes y prendas de trabajo de forma ordenada y accesible.",
    features: [
      "Barra de colgar integrada",
      "Acceso directo a prendas",
      "Ideal para EPIs y uniformes",
      "Compatible con todos los armarios móviles",
    ],
    specs: [
      { label: "Tipo", value: "Perchero integrado" },
      { label: "Uso", value: "EPIs, uniformes, prendas" },
      { label: "Material", value: "Acero" },
      { label: "Compatibilidad", value: "Todos los armarios móviles" },
    ],
    image: "/images/sliderack/products/acc-perchero.webp",
    gallery: ["/images/sliderack/products/acc-perchero.webp", "/images/sliderack/products/acc-perchero1.webp"],
    related: ["cerradura", "kit-balda", "sliderack-1-2737"],
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
