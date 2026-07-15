export interface Experience {
  role: string;
  company: string;
  companyDescription?: string;
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
      "Empresa de tecnología geoespacial especializada en sistemas de gestión catastral para entidades públicas colombianas.",
    period: "Sep 2025 – Feb 2026",
    location: "Cali, Colombia",
    highlights: [
      "Diseñé e implementé el backend del sistema catastral con Django REST Framework bajo el estándar internacional LADM-COL v4.1, gestionando +50,000 registros prediales activos de entes municipales",
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
