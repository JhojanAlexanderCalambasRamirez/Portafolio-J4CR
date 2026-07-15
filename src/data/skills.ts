export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend & UI/UX",
    description: "Interfaces modernas, accesibles y centradas en el usuario",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Figma",
      "Responsive Design",
      "WCAG",
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    description: "Servicios escalables, APIs robustas y comunicación en tiempo real",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "REST APIs",
      "gRPC",
      "Socket.IO",
    ],
  },
  {
    id: "azure",
    name: "Azure Cloud",
    description: "Infraestructura cloud, MLOps y servicios administrados en Azure",
    items: [
      "Azure Machine Learning",
      "Azure Container Instance",
      "Azure Container Registry",
      "Azure Virtual Machines",
      "Azure Blob Storage",
      "Azure CLI",
      "ARM Templates",
    ],
  },
  {
    id: "containers",
    name: "Contenedores & Orquestación",
    description: "Empaquetado, despliegue y escalado automático de servicios",
    items: [
      "Docker",
      "Kubernetes",
      "Kubernetes HPA",
      "Minikube",
      "Docker multi-arch",
      "PyInstaller",
    ],
  },
  {
    id: "cicd",
    name: "CI/CD & Automatización",
    description: "Pipelines de integración continua y automatización de infraestructura",
    items: [
      "GitHub Actions",
      "Git",
      "Linux",
      "Shell Scripting",
      "PowerShell",
    ],
  },
  {
    id: "ml",
    name: "ML & Modelos",
    description: "Entrenamiento, evaluación y despliegue de modelos en producción",
    items: [
      "PyTorch",
      "scikit-learn",
      "HuggingFace Transformers",
      "MLflow",
      "OpenCV",
      "NumPy",
      "Streamlit",
      "MarkItDown",
    ],
  },
  {
    id: "databases",
    name: "Bases de datos",
    description: "Almacenamiento relacional, geoespacial, NoSQL y en tiempo real",
    items: [
      "PostgreSQL",
      "PostGIS",
      "GeoDjango",
      "MongoDB",
      "MySQL",
      "Firebase / Firestore",
      "Supabase",
    ],
  },
];
