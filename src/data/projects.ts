export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  period: string;
  type: "professional" | "academic" | "freelance";
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "gis-catastro",
    title: "GIS & Catastro",
    subtitle: "Plataforma de gestión catastral geoespacial",
    description:
      "Sistema fullstack para gestión de +50,000 registros catastrales bajo estándar internacional LADM-COL v4.1, con vistas interactivas para geometrías espaciales y formularios complejos con validaciones en tiempo real.",
    highlights: [
      "APIs RESTful con Django REST Framework, autenticación y validaciones a nivel de servicio",
      "Reducción de ~40% en tiempos de respuesta optimizando consultas espaciales con GeoDjango y PostGIS",
      "Vistas interactivas en React para consulta y edición de geometrías (GeoJSON, Shapefile)",
      "Transformaciones de coordenadas EPSG:9377/4326 y validaciones topológicas",
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
    period: "Sep 2025 – Feb 2026",
    type: "professional",
    metrics: [
      { label: "Registros", value: "+50k" },
      { label: "Optimización", value: "~40%" },
    ],
  },
  {
    id: "ai-classifier",
    title: "Clasificación de Imágenes con IA",
    subtitle: "Sistema MLOps en Azure Cloud",
    description:
      "Pipeline completo de ML: entrenamiento de modelo DeiT-Tiny + SVM con MLflow, API REST con FastAPI + gRPC, interfaz web para clasificación en tiempo real, y despliegue containerizado en Azure con escalado automático.",
    highlights: [
      "Modelo DeiT-Tiny + SVM entrenado con MLflow en Azure ML (cluster elástico, escala a 0)",
      "API REST con FastAPI + canal gRPC en Azure Container Instance, arranque en frío <30s",
      "Docker multi-arquitectura (linux/amd64) desde Apple Silicon a Azure Container Registry",
      "Kubernetes con HPA para escalado automático estable ante picos de tráfico 3x",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "Azure ML",
      "Kubernetes",
      "MLflow",
      "PyTorch",
      "HuggingFace",
      "gRPC",
    ],
    period: "2025 – 2026",
    type: "academic",
    metrics: [
      { label: "Cold start", value: "<30s" },
      { label: "Escalado", value: "3x" },
    ],
  },
  {
    id: "battery-monitor",
    title: "Monitoreo de Batería en Tiempo Real",
    subtitle: "App de escritorio con datos en vivo",
    description:
      "Aplicación de monitoreo con comunicación bidireccional vía Socket.IO, UI reactiva para datos en vivo sin recarga, persistencia en Firebase/Firestore con sincronización multi-dispositivo, empaquetada como app de escritorio con Electron.",
    highlights: [
      "Servidor Node.js + Express.js con Socket.IO, latencia <500ms",
      "UI reactiva en JavaScript puro optimizada para datos en vivo",
      "Firebase/Firestore para persistencia y sincronización multi-dispositivo",
      "Empaquetado como app de escritorio con Electron.js",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Electron.js",
      "JavaScript",
      "Firebase",
      "Firestore",
    ],
    period: "Dic 2024 – Ene 2025",
    type: "freelance",
    metrics: [{ label: "Latencia", value: "<500ms" }],
  },
];
