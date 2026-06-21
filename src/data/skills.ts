export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend & UI/UX",
    items: [
      "React.js",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "Figma",
      "Responsive",
      "WCAG",
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "DRF",
      "Node.js",
      "Express.js",
      "gRPC",
      "REST APIs",
      "Socket.IO",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "Azure ML",
      "Azure Container Instance",
      "Azure Container Registry",
      "Docker",
      "Kubernetes",
      "ARM Templates",
      "Azure CLI",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    name: "ML & IA",
    items: [
      "PyTorch",
      "scikit-learn",
      "HuggingFace",
      "MLflow",
      "OpenCV",
      "NumPy",
      "Streamlit",
    ],
  },
  {
    name: "Bases de datos",
    items: [
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
    ],
  },
  {
    name: "Herramientas",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jupyter", "Scrum"],
  },
];
