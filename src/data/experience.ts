export interface Experience {
  role: string;
  company: string;
  companyDescription?: string;
  summary?: string;
  period: string;
  location?: string;
  highlights: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "Valle Avanza S.A.S",
    companyDescription:
      "Tecnología geoespacial para digitalización catastral en el sector público colombiano.",
    summary:
      "Responsable del diseño y desarrollo completo de la plataforma web para la gestión de predios urbanos y rurales. Valle Avanza construye sistemas que permiten a municipios colombianos digitalizar su catastro bajo el estándar internacional LADM-COL v4.1, el mismo marco normativo adoptado por el IGAC y las autoridades catastrales del país. Mi trabajo abarcó el ciclo completo: modelado de datos geoespaciales, APIs para operaciones catastrales críticas, y una interfaz que permite a funcionarios municipales consultar, editar y validar geometrías prediales sin depender de software GIS especializado. Los sistemas que construí operan sobre datos reales de más de 50,000 predios activos.",
    period: "Sep 2025 – Feb 2026",
    location: "Cali, Colombia",
    highlights: [
      "Diseñé e implementé el backend del sistema catastral con Django REST Framework bajo LADM-COL v4.1, gestionando +50,000 registros prediales activos para entes municipales",
      "Optimicé consultas geoespaciales críticas con GeoDjango y PostGIS logrando una reducción del ~40% en tiempos de respuesta, con impacto directo en la productividad de operadores de campo",
      "Desarrollé el frontend geoespacial en React para visualizar y editar geometrías prediales (GeoJSON, Shapefile) en tiempo real, eliminando la dependencia de herramientas GIS externas en el flujo de trabajo",
      "Diseñé flujos de captura de datos para perfiles no técnicos con validaciones automáticas: integridad topológica, referencias cruzadas y reglas normativas, reduciendo errores sin intervención del área técnica",
      "Implementé transformaciones entre sistemas de referencia EPSG:9377 y EPSG:4326 garantizando conformidad con el marco legal catastral colombiano vigente",
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "GeoDjango",
      "React",
      "JavaScript",
      "PostgreSQL",
      "PostGIS",
    ],
  },
];
