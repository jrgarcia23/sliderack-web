export type L = { es: string; en?: string };

export interface Product {
  slug: string;
  name: string;
  nameEn?: string;
  category: "sistemas" | "accesorios";
  badge: string;
  priceFrom?: number;
  shortDesc: L;
  description: L;
  features: L[];
  specs: { label: L; value: L }[];
  includes?: { label: L; value: L }[];
  capacity?: { label: L; value: L }[];
  finish?: L;
  image: string;
  gallery: string[];
  related: string[];
}

export function l(field: L, locale: string): string {
  return locale === "en" && field.en !== undefined ? field.en : field.es;
}

export function getBadgeLabel(badge: string, locale: string): string {
  if (locale === "en") {
    const map: Record<string, string> = {
      "1 Nivel": "1 Level",
      "1 Nivel · Prof. 470": "1 Level · D. 470",
      "2 Niveles": "2 Levels",
      "2 Niveles · Prof. 470": "2 Levels · D. 470",
      Accesorio: "Accessory",
    };
    return map[badge] ?? badge;
  }
  return badge;
}

const SL = {
  anchura:    { es: "Ancho de la estantería",              en: "Shelving width" },
  fondo:      { es: "Fondo de la estantería",              en: "Shelving depth" },
  alto:       { es: "Alto de la estantería",               en: "Shelving height" },
  fondoArm:   { es: "Fondo del armario móvil",             en: "Mobile bay depth" },
  niveles:    { es: "Niveles",                             en: "Levels" },
  config:     { es: "Configuración",                       en: "Configuration" },
  bastidores: { es: "Bastidores de Rack",                  en: "Rack uprights" },
  largueros:  { es: "Largueros de Rack",                   en: "Rack crossbeams" },
  armarios:   { es: "Armarios móviles",                    en: "Mobile bays" },
  baldas:     { es: "Baldas metálicas",                    en: "Metal shelves" },
  mallas:     { es: "Paneles de malla metálica",           en: "Metal mesh panels" },
  capEst:     { es: "Parte de almacenaje superior",         en: "Upper storage section" },
  capArm:     { es: "Por armario móvil",                   en: "Per mobile bay" },
  capBalda:   { es: "Por balda de armario móvil",          en: "Per mobile bay shelf" },
  tipo:       { es: "Tipo",                                en: "Type" },
  material:   { es: "Material",                            en: "Material" },
  compat:     { es: "Compatibilidad",                      en: "Compatibility" },
  divisiones: { es: "Divisiones",                          en: "Dividers" },
  profunds:   { es: "Profundidades",                       en: "Depths" },
  ajuste:     { es: "Ajuste",                              en: "Adjustment" },
  uso:        { es: "Uso",                                 en: "Use" },
  acabado:    { es: "Acabado",                             en: "Finish" },
};

const MODULAR:        L = { es: "Modular" };
const CONSULTAR:      L = { es: "Consultar",              en: "Enquire" };
const FINISH:         L = { es: "Pintado color Negro Mate Texturizado RAL-9005", en: "Textured Matt Black RAL-9005 painted finish" };
const TODOS_MODELOS:  L = { es: "Todos los modelos",      en: "All models" };
const TODOS_ARMARIOS: L = { es: "Todos los armarios móviles", en: "All mobile bays" };

export const products: Product[] = [
  // ── SISTEMAS 1 NIVEL · Prof. 370 ──
  {
    slug: "sliderack-1-1837",
    name: "1-1837",
    category: "sistemas",
    badge: "1 Nivel",
    priceFrom: 3400,
    shortDesc: {
      es: "2090 × 1160 mm · 3 armarios móviles de 370 mm",
      en: "2090 × 1160 mm · 3 mobile bays, 370 mm depth",
    },
    description: {
      es: "Sistema deslizante compacto con 3 armarios móviles y 9 baldas. Ideal para talleres pequeños, zonas de trabajo auxiliares o garajes donde el espacio es limitado pero se necesita acceso rápido a herramientas y piezas organizadas por categoría. Con solo 2090 mm de ancho, encaja en paredes donde una estantería convencional desperdiciaría espacio en pasillos.",
      en: "Compact sliding system with 3 mobile bays and 9 shelves. Ideal for small workshops, auxiliary workstations or garages where space is tight but quick access to tools and parts organised by category is essential. At just 2090 mm wide, it fits on walls where conventional shelving would waste floor space in aisles.",
    },
    features: [
      { es: "3 armarios móviles deslizantes con 9 baldas metálicas",               en: "3 sliding mobile bays with 9 metal shelves" },
      { es: "Cada armario móvil soporta hasta 400 kg de carga",                    en: "Each mobile bay supports up to 400 kg" },
      { es: "Guías de precisión: se desliza con un solo dedo",                     en: "Precision rails: slides with a single finger" },
      { es: "Cerradura opcional para armarios con material sensible",              en: "Optional lock for bays containing sensitive materials" },
      { es: "Compatible con todos los accesorios Sliderack",                       en: "Compatible with all Sliderack accessories" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2090 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "2255 mm" } },
      { label: SL.fondoArm, value: { es: "370 mm" } },
      { label: SL.niveles,  value: { es: "1" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "2" } },
      { label: SL.armarios,   value: { es: "3" } },
      { label: SL.baldas,     value: { es: "9" } },
      { label: SL.mallas,     value: { es: "2" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "1-2737",
    category: "sistemas",
    badge: "1 Nivel",
    priceFrom: 5200,
    shortDesc: {
      es: "2965 × 1160 mm · 5 armarios móviles de 370 mm",
      en: "2965 × 1160 mm · 5 mobile bays, 370 mm depth",
    },
    description: {
      es: "El modelo más equilibrado de la gama. 5 armarios móviles deslizantes con 15 baldas ofrecen capacidad suficiente para organizar el utillaje completo de un taller mecánico de tamaño medio, manteniendo cada herramienta localizable y accesible sin mover otras estanterías. La configuración más elegida por talleres de automoción y servicios técnicos.",
      en: "The most balanced model in the range. 5 sliding mobile bays with 15 shelves provide enough capacity to organise all the tooling in a medium-sized mechanical workshop, keeping every tool locatable and accessible without moving other shelving. The most frequently chosen configuration for automotive workshops and technical services.",
    },
    features: [
      { es: "5 armarios móviles deslizantes con 15 baldas metálicas",            en: "5 sliding mobile bays with 15 metal shelves" },
      { es: "Cada armario móvil soporta hasta 400 kg de carga",                  en: "Each mobile bay supports up to 400 kg" },
      { es: "El más vendido para talleres de automoción",                         en: "Best-seller for automotive workshops" },
      { es: "Cerradura opcional para proteger herramientas de valor",             en: "Optional lock to protect high-value tools" },
      { es: "Ampliable con armarios móviles adicionales y accesorios",            en: "Expandable with additional mobile bays and accessories" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2965 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "2255 mm" } },
      { label: SL.fondoArm, value: { es: "370 mm" } },
      { label: SL.niveles,  value: { es: "1" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "2" } },
      { label: SL.armarios,   value: { es: "5" } },
      { label: SL.baldas,     value: { es: "15" } },
      { label: SL.mallas,     value: { es: "3" } },
    ],
    capacity: [
      { label: SL.capEst,    value: { es: "3.000 kg Máx.", en: "3,000 kg Max." } },
      { label: SL.capArm,    value: { es: "400 kg Máx.",   en: "400 kg Max." } },
      { label: SL.capBalda,  value: { es: "80 kg Máx.",    en: "80 kg Max." } },
    ],
    finish: FINISH,
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
    name: "1-3637",
    category: "sistemas",
    badge: "1 Nivel",
    priceFrom: 7200,
    shortDesc: {
      es: "3865 × 1160 mm · 7 armarios móviles de 370 mm",
      en: "3865 × 1160 mm · 7 mobile bays, 370 mm depth",
    },
    description: {
      es: "El sistema de mayor capacidad en un nivel con 7 armarios móviles deslizantes y 21 baldas. Diseñado para talleres industriales, centros logísticos y parques de bomberos que necesitan almacenar un gran volumen de herramientas, recambios o equipamiento con acceso rápido a cada armario. Ocupa menos de 4 metros de pared y elimina la necesidad de pasillos entre estanterías.",
      en: "The highest-capacity single-level system with 7 sliding mobile bays and 21 shelves. Designed for industrial workshops, logistics centres and fire stations that need to store large volumes of tools, spare parts or equipment with quick access to each bay. Occupies less than 4 metres of wall space and eliminates the need for aisles between shelving.",
    },
    features: [
      { es: "7 armarios móviles deslizantes con 21 baldas metálicas",            en: "7 sliding mobile bays with 21 metal shelves" },
      { es: "Máxima capacidad en un solo nivel de la gama",                       en: "Maximum capacity in a single level across the range" },
      { es: "Ideal para parques de bomberos y almacenes industriales",            en: "Ideal for fire stations and industrial warehouses" },
      { es: "Paneles perforados opcionales para herramientas",                    en: "Optional perforated panels for tools" },
      { es: "Estructura de acero con tratamiento anticorrosión",                  en: "Steel structure with anti-corrosion treatment" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "3865 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "2255 mm" } },
      { label: SL.fondoArm, value: { es: "370 mm" } },
      { label: SL.niveles,  value: { es: "1" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "2" } },
      { label: SL.armarios,   value: { es: "7" } },
      { label: SL.baldas,     value: { es: "21" } },
      { label: SL.mallas,     value: { es: "4" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "1-1847",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    priceFrom: 2600,
    shortDesc: {
      es: "2090 × 1160 mm · 2 armarios móviles de 470 mm",
      en: "2090 × 1160 mm · 2 mobile bays, 470 mm depth",
    },
    description: {
      es: "Versión compacta con profundidad extendida de 470 mm. 2 armarios móviles con 6 baldas de mayor fondo, pensadas para almacenar herramientas eléctricas, cajas de recambios voluminosas o equipos de diagnóstico que no caben en los armarios de 370 mm. Ideal para zonas de servicio técnico o puestos de trabajo especializados.",
      en: "Compact version with extended 470 mm depth. 2 mobile bays with 6 deeper shelves, designed for storing power tools, bulky parts boxes or diagnostic equipment that won't fit in the standard 370 mm bays. Ideal for technical service areas or specialist workstations.",
    },
    features: [
      { es: "2 armarios móviles deslizantes con 6 baldas de 470 mm de fondo",    en: "2 sliding mobile bays with 6 shelves at 470 mm depth" },
      { es: "100 mm más de profundidad que la versión estándar",                  en: "100 mm deeper than the standard version" },
      { es: "Perfecto para herramientas eléctricas y cajas voluminosas",          en: "Perfect for power tools and bulky cases" },
      { es: "Cerradura opcional para equipos de valor",                           en: "Optional lock for high-value equipment" },
      { es: "Mismo sistema de guías de precisión que toda la gama",              en: "Same precision rail system as the entire range" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2090 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "2255 mm" } },
      { label: SL.fondoArm, value: { es: "470 mm" } },
      { label: SL.niveles,  value: { es: "1" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "2" } },
      { label: SL.armarios,   value: { es: "2" } },
      { label: SL.baldas,     value: { es: "6" } },
      { label: SL.mallas,     value: { es: "2" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "1-2747",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    priceFrom: 4500,
    shortDesc: {
      es: "2965 × 1160 mm · 4 armarios móviles de 470 mm",
      en: "2965 × 1160 mm · 4 mobile bays, 470 mm depth",
    },
    description: {
      es: "4 armarios móviles deslizantes con 12 baldas de profundidad extendida (470 mm). La opción preferida cuando se necesita almacenar materiales de gran tamaño como kits de reparación, repuestos de automoción o equipos de medición en un taller de tamaño medio. Combina la versatilidad del ancho medio con la capacidad extra de los armarios profundos.",
      en: "4 sliding mobile bays with 12 extended-depth shelves (470 mm). The preferred option when large-format materials such as repair kits, automotive parts or measurement equipment need to be stored in a medium-sized workshop. Combines the versatility of a mid-width configuration with the extra capacity of the deep bays.",
    },
    features: [
      { es: "4 armarios móviles deslizantes con 12 baldas de 470 mm",            en: "4 sliding mobile bays with 12 shelves at 470 mm depth" },
      { es: "Capacidad de 400 kg por armario móvil con deslizamiento suave",     en: "400 kg per mobile bay with smooth sliding action" },
      { es: "Ideal para kits de reparación y repuestos voluminosos",              en: "Ideal for repair kits and bulky spare parts" },
      { es: "Kit de cajones divisorios disponible para piezas pequeñas",         en: "Drawer divider kit available for small items" },
      { es: "Fabricado en España con certificación ISO 9001",                    en: "Manufactured in Spain with ISO 9001 certification" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2965 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "2255 mm" } },
      { label: SL.fondoArm, value: { es: "470 mm" } },
      { label: SL.niveles,  value: { es: "1" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "2" } },
      { label: SL.armarios,   value: { es: "4" } },
      { label: SL.baldas,     value: { es: "12" } },
      { label: SL.mallas,     value: { es: "3" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "1-3647",
    category: "sistemas",
    badge: "1 Nivel · Prof. 470",
    priceFrom: 6600,
    shortDesc: {
      es: "3865 × 1160 mm · 6 armarios móviles de 470 mm",
      en: "3865 × 1160 mm · 6 mobile bays, 470 mm depth",
    },
    description: {
      es: "Máxima capacidad en un nivel con armarios profundos: 6 armarios móviles deslizantes y 18 baldas de 470 mm. Diseñado para almacenes industriales y centros de mantenimiento que gestionan grandes volúmenes de material pesado o voluminoso. La solución cuando necesitas el máximo almacenaje sin recurrir a un segundo nivel.",
      en: "Maximum single-level capacity with deep bays: 6 sliding mobile bays and 18 shelves at 470 mm depth. Designed for industrial warehouses and maintenance centres handling large volumes of heavy or bulky material. The solution when you need maximum storage without resorting to a second level.",
    },
    features: [
      { es: "6 armarios móviles deslizantes con 18 baldas de 470 mm",            en: "6 sliding mobile bays with 18 shelves at 470 mm depth" },
      { es: "Máxima capacidad en un nivel de toda la gama",                       en: "Maximum single-level capacity across the entire range" },
      { es: "Para almacenes industriales y centros de mantenimiento",             en: "For industrial warehouses and maintenance centres" },
      { es: "Paneles de malla metálica para ventilación del material",            en: "Metal mesh panels for material ventilation" },
      { es: "Estructura reforzada con acero laminado en frío",                   en: "Reinforced structure with cold-rolled steel" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "3865 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "2255 mm" } },
      { label: SL.fondoArm, value: { es: "470 mm" } },
      { label: SL.niveles,  value: { es: "1" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "2" } },
      { label: SL.armarios,   value: { es: "6" } },
      { label: SL.baldas,     value: { es: "18" } },
      { label: SL.mallas,     value: { es: "4" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "2-1837",
    category: "sistemas",
    badge: "2 Niveles",
    priceFrom: 3700,
    shortDesc: {
      es: "2090 × 1160 mm · 3 armarios móviles de 370 mm · 2 Niveles",
      en: "2090 × 1160 mm · 3 mobile bays, 370 mm · 2 Levels",
    },
    description: {
      es: "Duplica la capacidad del modelo compacto con un segundo nivel de almacenaje fijo sobre los armarios móviles deslizantes. El nivel inferior mantiene los 3 armarios móviles con 9 baldas accesibles con un dedo; el nivel superior añade almacenaje estático para cajas, material de uso menos frecuente o stock de reserva. Altura total de 3505 mm.",
      en: "Doubles the capacity of the compact model with a second fixed storage level above the sliding mobile bays. The lower level retains the 3 mobile bays with 9 shelves, accessible with a single finger; the upper level adds static storage for boxes, less frequently used material or reserve stock. Total height 3505 mm.",
    },
    features: [
      { es: "3 armarios móviles deslizantes (nivel inferior) + almacenaje fijo (superior)", en: "3 sliding mobile bays (lower level) + fixed storage (upper)" },
      { es: "Altura total 3505 mm — aprovecha el espacio vertical",               en: "Total height 3505 mm — maximises vertical space" },
      { es: "Estructura reforzada para soportar doble carga",                     en: "Reinforced structure for double load capacity" },
      { es: "Ideal para talleres con techos altos y espacio en planta limitado",  en: "Ideal for workshops with high ceilings and limited floor space" },
      { es: "Compatible con escaleras y plataformas de acceso",                   en: "Compatible with access ladders and platforms" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2090 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "3505 mm" } },
      { label: SL.fondoArm, value: { es: "370 mm" } },
      { label: SL.niveles,  value: { es: "2" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "4" } },
      { label: SL.armarios,   value: { es: "3" } },
      { label: SL.baldas,     value: { es: "9" } },
      { label: SL.mallas,     value: { es: "4" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "2-2737",
    category: "sistemas",
    badge: "2 Niveles",
    priceFrom: 5600,
    shortDesc: {
      es: "2965 × 1160 mm · 5 armarios móviles de 370 mm · 2 Niveles",
      en: "2965 × 1160 mm · 5 mobile bays, 370 mm · 2 Levels",
    },
    description: {
      es: "El modelo de dos niveles más versátil de la gama. 5 armarios móviles deslizantes con 15 baldas en el nivel inferior, más almacenaje fijo en el superior. Perfecto para talleres industriales que necesitan organizar herramientas de uso diario abajo y stock de repuestos o materiales pesados arriba, maximizando cada metro cuadrado de pared disponible.",
      en: "The most versatile two-level model in the range. 5 sliding mobile bays with 15 shelves on the lower level, plus fixed storage above. Perfect for industrial workshops that need to organise daily-use tools below and spare parts or heavy materials above, maximising every square metre of available wall space.",
    },
    features: [
      { es: "5 armarios móviles deslizantes + nivel superior fijo (15 baldas)",  en: "5 sliding mobile bays + fixed upper level (15 shelves)" },
      { es: "El modelo de 2 niveles más elegido por talleres industriales",       en: "Most popular 2-level model among industrial workshops" },
      { es: "6 paneles de malla para separación y ventilación",                   en: "6 mesh panels for separation and ventilation" },
      { es: "Armarios móviles de ampliación disponibles para crecer en horizontal", en: "Expansion mobile bays available for horizontal growth" },
      { es: "Fabricado en España con certificaciones ISO 9001 y 14001",           en: "Manufactured in Spain with ISO 9001 and 14001 certifications" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2965 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "3505 mm" } },
      { label: SL.fondoArm, value: { es: "370 mm" } },
      { label: SL.niveles,  value: { es: "2" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "4" } },
      { label: SL.armarios,   value: { es: "5" } },
      { label: SL.baldas,     value: { es: "15" } },
      { label: SL.mallas,     value: { es: "6" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "2-3637",
    category: "sistemas",
    badge: "2 Niveles",
    priceFrom: 7700,
    shortDesc: {
      es: "3865 × 1160 mm · 7 armarios móviles de 370 mm · 2 Niveles",
      en: "3865 × 1160 mm · 7 mobile bays, 370 mm · 2 Levels",
    },
    description: {
      es: "El sistema de mayor capacidad total de la gama Sliderack. 7 armarios móviles deslizantes con 21 baldas en el nivel inferior y almacenaje fijo completo en el superior. Diseñado para parques de bomberos, centros logísticos y grandes instalaciones industriales donde se gestiona un alto volumen de equipamiento, EPIs o materiales de intervención que deben estar siempre localizables.",
      en: "The highest total-capacity system in the Sliderack range. 7 sliding mobile bays with 21 shelves on the lower level and full fixed storage above. Designed for fire stations, logistics centres and large industrial facilities where a high volume of equipment, PPE or operational materials must always be locatable.",
    },
    features: [
      { es: "7 armarios móviles deslizantes + nivel superior (21 baldas)",       en: "7 sliding mobile bays + upper level (21 shelves)" },
      { es: "El sistema de mayor capacidad de toda la gama Sliderack",            en: "Highest capacity system in the entire Sliderack range" },
      { es: "8 paneles de malla metálica para organización visual",               en: "8 metal mesh panels for visual organisation" },
      { es: "Ideal para parques de bomberos y centros logísticos",                en: "Ideal for fire stations and logistics centres" },
      { es: "Estructura reforzada con acero de alta resistencia",                 en: "Reinforced structure with high-strength steel" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "3865 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "3505 mm" } },
      { label: SL.fondoArm, value: { es: "370 mm" } },
      { label: SL.niveles,  value: { es: "2" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "4" } },
      { label: SL.armarios,   value: { es: "7" } },
      { label: SL.baldas,     value: { es: "21" } },
      { label: SL.mallas,     value: { es: "8" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "2-1847",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    priceFrom: 2900,
    shortDesc: {
      es: "2090 × 1160 mm · 2 armarios móviles de 470 mm · 2 Niveles",
      en: "2090 × 1160 mm · 2 mobile bays, 470 mm · 2 Levels",
    },
    description: {
      es: "El modelo más compacto de dos niveles con profundidad extendida. 2 armarios móviles deslizantes de 470 mm en el nivel inferior para equipos voluminosos, más almacenaje fijo superior. La solución cuando necesitas almacenar material grande en un espacio reducido con acceso desde un solo punto de pared.",
      en: "The most compact two-level model with extended depth. 2 sliding mobile bays at 470 mm depth for bulky equipment on the lower level, plus fixed upper storage. The solution when large materials need to be stored in a tight space with access from a single wall point.",
    },
    features: [
      { es: "2 armarios móviles de 470 mm (inferior) + almacenaje fijo (superior)", en: "2 mobile bays at 470 mm (lower) + fixed storage (upper)" },
      { es: "Profundidad extra para equipos voluminosos y cajas grandes",          en: "Extra depth for bulky equipment and large cases" },
      { es: "Altura total 3505 mm — máximo aprovechamiento vertical",             en: "Total height 3505 mm — maximum vertical utilisation" },
      { es: "Cerradura con llave disponible para seguridad del material",          en: "Key lock available for material security" },
      { es: "Puesto de trabajo integrable en el lateral",                          en: "Workbench integratable on the side" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2090 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "3505 mm" } },
      { label: SL.fondoArm, value: { es: "470 mm" } },
      { label: SL.niveles,  value: { es: "2" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "4" } },
      { label: SL.armarios,   value: { es: "2" } },
      { label: SL.baldas,     value: { es: "6" } },
      { label: SL.mallas,     value: { es: "4" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "2-2747",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    priceFrom: 4900,
    shortDesc: {
      es: "2965 × 1160 mm · 4 armarios móviles de 470 mm · 2 Niveles",
      en: "2965 × 1160 mm · 4 mobile bays, 470 mm · 2 Levels",
    },
    description: {
      es: "4 armarios móviles profundos deslizantes con 12 baldas de 470 mm en el nivel inferior, más capacidad fija arriba. El sistema preferido por servicios de mantenimiento industrial que manejan repuestos de gran tamaño, herramientas pesadas y equipos de diagnóstico que necesitan fondo extra. Combina capacidad máxima con organización profesional.",
      en: "4 deep sliding mobile bays with 12 shelves at 470 mm on the lower level, plus fixed capacity above. The preferred system for industrial maintenance services handling large spare parts, heavy tools and diagnostic equipment that require extra depth. Combines maximum capacity with professional organisation.",
    },
    features: [
      { es: "4 armarios móviles de 470 mm + nivel superior fijo (12 baldas)",    en: "4 mobile bays at 470 mm + fixed upper level (12 shelves)" },
      { es: "Profundidad extendida para repuestos y equipos voluminosos",          en: "Extended depth for large spare parts and equipment" },
      { es: "Ideal para servicios de mantenimiento industrial",                    en: "Ideal for industrial maintenance services" },
      { es: "Baldas adicionales disponibles para personalizar alturas",            en: "Additional shelves available to customise heights" },
      { es: "Armarios móviles de ampliación para crecer horizontalmente",         en: "Expansion mobile bays for horizontal growth" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "2965 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "3505 mm" } },
      { label: SL.fondoArm, value: { es: "470 mm" } },
      { label: SL.niveles,  value: { es: "2" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "4" } },
      { label: SL.armarios,   value: { es: "4" } },
      { label: SL.baldas,     value: { es: "12" } },
      { label: SL.mallas,     value: { es: "6" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    name: "2-3647",
    category: "sistemas",
    badge: "2 Niveles · Prof. 470",
    priceFrom: 7100,
    shortDesc: {
      es: "3865 × 1160 mm · 6 armarios móviles de 470 mm · 2 Niveles",
      en: "3865 × 1160 mm · 6 mobile bays, 470 mm · 2 Levels",
    },
    description: {
      es: "La configuración de máxima capacidad absoluta de toda la gama. 6 armarios móviles profundos deslizantes con 18 baldas de 470 mm más nivel superior completo. Pensado para grandes instalaciones industriales, bases logísticas o centros de distribución donde cada metro cuadrado debe almacenar el máximo volumen posible de material pesado y voluminoso con acceso organizado.",
      en: "The absolute maximum-capacity configuration in the entire range. 6 deep sliding mobile bays with 18 shelves at 470 mm plus full upper level. Designed for large industrial facilities, logistics bases or distribution centres where every square metre must store the maximum possible volume of heavy and bulky material with organised access.",
    },
    features: [
      { es: "6 armarios móviles de 470 mm + nivel superior (18 baldas)",         en: "6 mobile bays at 470 mm + upper level (18 shelves)" },
      { es: "Configuración de máxima capacidad absoluta de la gama",              en: "Absolute maximum capacity configuration in the range" },
      { es: "8 paneles de malla para organización y ventilación",                 en: "8 mesh panels for organisation and ventilation" },
      { es: "Para bases logísticas y centros de distribución",                    en: "For logistics bases and distribution centres" },
      { es: "Estructura de acero reforzado con tratamiento anticorrosión",        en: "Reinforced steel structure with anti-corrosion treatment" },
    ],
    specs: [
      { label: SL.anchura,  value: { es: "3865 mm" } },
      { label: SL.fondo,    value: { es: "1160 mm" } },
      { label: SL.alto,     value: { es: "3505 mm" } },
      { label: SL.fondoArm, value: { es: "470 mm" } },
      { label: SL.niveles,  value: { es: "2" } },
      { label: SL.config,   value: MODULAR },
    ],
    includes: [
      { label: SL.bastidores, value: { es: "2" } },
      { label: SL.largueros,  value: { es: "4" } },
      { label: SL.armarios,   value: { es: "6" } },
      { label: SL.baldas,     value: { es: "18" } },
      { label: SL.mallas,     value: { es: "8" } },
    ],
    capacity: [
      { label: SL.capEst, value: CONSULTAR },
      { label: SL.capArm, value: CONSULTAR },
    ],
    finish: FINISH,
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
    nameEn: "Workbench",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "Mesa de trabajo integrada", en: "Integrated workbench" },
    description: {
      es: "Superficie de trabajo integrable en el sistema Sliderack. Panel perforado posterior para organización de herramientas. Estructura robusta para uso intensivo.",
      en: "Workbench surface integratable into the Sliderack system. Rear perforated panel for tool organisation. Robust structure for intensive use.",
    },
    features: [
      { es: "Superficie de trabajo resistente",                en: "Sturdy work surface" },
      { es: "Panel perforado incluido",                        en: "Perforated panel included" },
      { es: "Integrable con cualquier modelo Sliderack",       en: "Compatible with any Sliderack model" },
      { es: "Estructura de acero reforzada",                   en: "Reinforced steel structure" },
    ],
    specs: [
      { label: SL.tipo,     value: { es: "Mesa de trabajo",       en: "Workbench" } },
      { label: { es: "Panel", en: "Panel" }, value: { es: "Perforado incluido",   en: "Perforated panel included" } },
      { label: SL.material, value: { es: "Acero laminado",         en: "Rolled steel" } },
      { label: SL.compat,   value: TODOS_MODELOS },
    ],
    image: "/images/sliderack/products/acc-puesto-trabajo.webp",
    gallery: ["/images/sliderack/products/acc-puesto-trabajo.webp"],
    related: ["panel-perforado", "kit-5-cajones", "sliderack-1-2737"],
  },
  {
    slug: "panel-perforado",
    name: "Panel Perforado",
    nameEn: "Perforated Panel",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "Organización de herramientas", en: "Tool organisation" },
    description: {
      es: "Panel perforado para organización vertical de herramientas. Instalación sencilla en cualquier armario móvil del sistema Sliderack.",
      en: "Perforated panel for vertical tool organisation. Simple installation in any Sliderack mobile bay.",
    },
    features: [
      { es: "Múltiples puntos de anclaje",                        en: "Multiple anchor points" },
      { es: "Compatible con ganchos estándar",                    en: "Compatible with standard hooks" },
      { es: "Instalación sin herramientas especiales",            en: "Tool-free installation" },
      { es: "Acabado resistente a la corrosión",                  en: "Corrosion-resistant finish" },
    ],
    specs: [
      { label: SL.tipo,     value: { es: "Panel perforado",   en: "Perforated panel" } },
      { label: SL.material, value: { es: "Acero",             en: "Steel" } },
      { label: SL.acabado,  value: { es: "Pintura epoxi",     en: "Epoxy paint" } },
      { label: SL.compat,   value: TODOS_MODELOS },
    ],
    image: "/images/sliderack/products/acc-panel-perforado.webp",
    gallery: ["/images/sliderack/products/acc-panel-perforado.webp", "/images/sliderack/products/acc-panel-perforado-2.webp"],
    related: ["puesto-trabajo", "kit-balda", "sliderack-1-2737"],
  },
  {
    slug: "cerradura",
    name: "Cerradura",
    nameEn: "Lock",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "Seguridad para armarios móviles", en: "Security for mobile bays" },
    description: {
      es: "Sistema de cerradura para armarios móviles Sliderack. Seguridad adicional para materiales sensibles o de alto valor.",
      en: "Lock system for Sliderack mobile bays. Additional security for sensitive or high-value materials.",
    },
    features: [
      { es: "Cerradura de seguridad con llave",                   en: "Security lock with key" },
      { es: "Instalación sencilla",                               en: "Easy installation" },
      { es: "Compatible con todos los armarios móviles",          en: "Compatible with all mobile bays" },
      { es: "Acabado resistente",                                 en: "Resistant finish" },
    ],
    specs: [
      { label: SL.tipo,     value: { es: "Cerradura con llave",  en: "Keyed lock" } },
      { label: SL.material, value: { es: "Acero cromado",        en: "Chrome steel" } },
      { label: SL.compat,   value: TODOS_ARMARIOS },
    ],
    image: "/images/sliderack/photos/logo-cerradura.jpg",
    gallery: ["/images/sliderack/photos/logo-cerradura.jpg"],
    related: ["kit-5-cajones", "armario-movil-adicional", "sliderack-1-1837"],
  },
  {
    slug: "kit-5-cajones",
    name: "Kit 5 Cajones",
    nameEn: "5-Drawer Kit",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "5 cajones para armarios móviles", en: "5-drawer kit for mobile bays" },
    description: {
      es: "Kit compuesto por 5 cajones divisorios para instalación en armarios móviles Sliderack. Organización de piezas pequeñas y herramientas de mano. Es imprescindible colocar una balda sobre los cajones para evitar su caída.",
      en: "Kit of 5 drawer dividers for installation in Sliderack mobile bays. Organisation of small parts and hand tools. A shelf must be placed above the drawers to prevent them from falling.",
    },
    features: [
      { es: "Kit compuesto por 5 cajones",                        en: "Kit of 5 drawers" },
      { es: "Cajones con divisiones internas",                    en: "Drawers with internal dividers" },
      { es: "Guías de extracción suave",                         en: "Smooth extraction guides" },
      { es: "Compatible con todos los armarios móviles",          en: "Compatible with all mobile bays" },
    ],
    specs: [
      { label: SL.tipo,       value: { es: "Kit de 5 cajones divisorios", en: "5-drawer divider kit" } },
      { label: SL.divisiones, value: { es: "Configurables",               en: "Configurable" } },
      { label: SL.material,   value: { es: "Acero galvanizado",           en: "Galvanised steel" } },
      { label: SL.compat,     value: TODOS_ARMARIOS },
    ],
    image: "/images/sliderack/products/acc-kit-cajon-detalle.webp",
    gallery: ["/images/sliderack/products/acc-kit-cajon-detalle.webp", "/images/sliderack/products/acc-kit-cajon.webp"],
    related: ["cerradura", "kit-balda", "sliderack-1-2737"],
  },
  {
    slug: "kit-balda",
    name: "Kit Balda",
    nameEn: "Shelf Kit",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "Baldas adicionales", en: "Additional shelves" },
    description: {
      es: "Baldas adicionales para ampliar la capacidad de almacenaje dentro de cada armario móvil. Ajustables en altura.",
      en: "Additional shelves to expand the storage capacity within each mobile bay. Adjustable in height.",
    },
    features: [
      { es: "Baldas ajustables en altura",                        en: "Height-adjustable shelves" },
      { es: "Fácil instalación",                                  en: "Easy installation" },
      { es: "Compatible con profundidades 370 y 470 mm",          en: "Compatible with 370 and 470 mm depths" },
      { es: "Alta capacidad de carga",                            en: "High load capacity" },
    ],
    specs: [
      { label: SL.tipo,     value: { es: "Balda adicional",  en: "Additional shelf" } },
      { label: SL.profunds, value: { es: "370 / 470 mm" } },
      { label: SL.material, value: { es: "Acero",            en: "Steel" } },
      { label: SL.ajuste,   value: { es: "Altura variable",  en: "Variable height" } },
    ],
    image: "/images/sliderack/products/acc-kit-balda.webp",
    gallery: ["/images/sliderack/products/acc-kit-balda.webp"],
    related: ["kit-5-cajones", "armario-movil-adicional", "sliderack-1-3637"],
  },
  {
    slug: "armario-movil-adicional",
    name: "Armario Móvil Adicional",
    nameEn: "Additional Mobile Bay",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "Amplía tu sistema", en: "Expand your system" },
    description: {
      es: "Armario móvil adicional para ampliar la capacidad del sistema Sliderack. Se integra directamente en la estructura existente sin modificaciones.",
      en: "Additional mobile bay to expand the capacity of the Sliderack system. Integrates directly into the existing structure without modifications.",
    },
    features: [
      { es: "Ampliación directa del sistema",                     en: "Direct system expansion" },
      { es: "Sin modificación de estructura",                     en: "No structural modification required" },
      { es: "Disponible en profundidad 370 y 470 mm",             en: "Available in 370 and 470 mm depths" },
      { es: "Incluye guías de deslizamiento",                     en: "Includes sliding guides" },
    ],
    specs: [
      { label: SL.tipo,     value: { es: "Armario móvil de ampliación", en: "Expansion mobile bay" } },
      { label: SL.profunds, value: { es: "370 / 470 mm" } },
      { label: SL.material, value: { es: "Acero laminado en frío",      en: "Cold-rolled steel" } },
      { label: SL.compat,   value: { es: "Todos los sistemas",          en: "All systems" } },
    ],
    image: "/images/sliderack/products/acc-modulo-suspendido.webp",
    gallery: ["/images/sliderack/products/acc-modulo-suspendido.webp"],
    related: ["kit-balda", "cerradura", "sliderack-1-2737"],
  },
  {
    slug: "kit-perchero",
    name: "Kit Perchero",
    nameEn: "Wardrobe Rail Kit",
    category: "accesorios",
    badge: "Accesorio",
    shortDesc: { es: "Almacenaje de prendas", en: "Garment storage" },
    description: {
      es: "Sistema de perchero integrado en los armarios móviles Sliderack. Ideal para almacenar EPIs, uniformes y prendas de trabajo de forma ordenada y accesible.",
      en: "Integrated wardrobe rail system for Sliderack mobile bays. Ideal for storing PPE, uniforms and workwear in an organised and accessible manner.",
    },
    features: [
      { es: "Barra de colgar integrada",                          en: "Integrated hanging rail" },
      { es: "Acceso directo a prendas",                           en: "Direct garment access" },
      { es: "Ideal para EPIs y uniformes",                        en: "Ideal for PPE and uniforms" },
      { es: "Compatible con todos los armarios móviles",          en: "Compatible with all mobile bays" },
    ],
    specs: [
      { label: SL.tipo,     value: { es: "Perchero integrado",        en: "Integrated wardrobe rail" } },
      { label: SL.uso,      value: { es: "EPIs, uniformes, prendas",  en: "PPE, uniforms, workwear" } },
      { label: SL.material, value: { es: "Acero",                     en: "Steel" } },
      { label: SL.compat,   value: TODOS_ARMARIOS },
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
