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
    companyDescription: "Soluciones geoespaciales para el sector público",
    period: "Sep 2025 – Feb 2026",
    location: "Cali, Colombia",
    highlights: [
      "APIs RESTful con DRF para +50,000 registros catastrales (LADM-COL v4.1)",
      "Reducción ~40% en tiempos de respuesta con GeoDjango y PostGIS",
      "Vistas interactivas en React para geometrías espaciales (GeoJSON, Shapefile)",
      "Formularios complejos con validaciones en tiempo real para perfiles no técnicos",
      "Transformaciones de coordenadas EPSG:9377/4326 y validaciones topológicas",
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "GeoDjango",
      "React",
      "PostgreSQL",
      "PostGIS",
    ],
  },
];
