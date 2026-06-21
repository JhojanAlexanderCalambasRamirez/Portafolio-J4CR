export type Role = "fullstack" | "backend" | "frontend";

export const profile = {
  name: "Alexander Calambas Ramírez",
  firstName: "Alexander",
  lastName: "Calambas",
  email: "alexandercalambas23@gmail.com",
  phone: "+57 312 239 6877",
  location: "Cali, Colombia",
  github: "https://github.com/JhojanAlexanderCalambasRamirez",
  linkedin: "https://www.linkedin.com/in/j4cr/",
  roles: {
    fullstack: {
      title: "Desarrollador Fullstack",
      tagline: "Python · React · TypeScript · Azure · IA/MLOps",
      bio: "Construyo productos digitales de principio a fin. Diseño interfaces en React, desarrollo APIs robustas en Python y despliego todo en Azure, incluyendo modelos de Machine Learning. Soluciones completas que funcionan en producción, no solo en demos.",
    },
    backend: {
      title: "Desarrollador Backend",
      tagline: "Python · FastAPI · Django · Azure · IA/MLOps",
      bio: "Diseño y construyo APIs que escalan. Python, FastAPI y Django son mis herramientas principales, desplegadas en Azure con prácticas de MLOps. Optimizo consultas, proceso datos a gran escala y llevo modelos de ML del notebook a producción real.",
    },
    frontend: {
      title: "Desarrollador Frontend",
      tagline: "React · JavaScript · UI/UX · Integración de APIs",
      bio: "Creo interfaces que los usuarios quieren usar. React, TypeScript y un enfoque centrado en el usuario, con la capacidad de integrar APIs y datos en tiempo real con criterio de arquitectura. Desde el prototipo en Figma hasta producción.",
    },
  },
  education: [
    {
      degree: "Especialización en Inteligencia Artificial",
      institution: "Universidad Autónoma de Occidente",
      location: "Cali",
      period: "2025 – 2026",
      current: false,
    },
    {
      degree: "Ingeniería Multimedia",
      institution: "Universidad Autónoma de Occidente",
      location: "Cali",
      period: "2020 – 2025",
      current: false,
    },
  ],
} as const;
