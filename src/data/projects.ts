export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  period: string;
  type: "professional" | "academic" | "freelance" | "personal";
  metrics?: { label: string; value: string }[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: "macntfs",
    title: "MacNTFS",
    subtitle: "App nativa macOS para lectura/escritura NTFS",
    description:
      "Aplicación nativa de macOS construida con Swift 6 y SwiftUI que permite leer y escribir en discos NTFS (Windows) sin reformatear. Detecta discos automáticamente, los monta con soporte completo de escritura y ofrece un gestor de archivos integrado con drag-and-drop.",
    highlights: [
      "Detección automática de discos vía DiskArbitration API con montaje R/W en un clic usando ntfs-3g",
      "Gestor de archivos integrado: copiar, mover, renombrar, eliminar con verificación de integridad",
      "Wizard de primera ejecución que instala dependencias (macFUSE, ntfs-3g) con diálogos nativos",
      "Soporte Apple Silicon + Intel, dark mode, bilingüe (EN/ES) con cambio instantáneo",
      "XPC Services para operaciones privilegiadas (mount/unmount con root) de forma segura",
    ],
    stack: [
      "Swift 6",
      "SwiftUI",
      "DiskArbitration",
      "macFUSE",
      "ntfs-3g",
      "XPC Services",
      "Shell",
    ],
    period: "Jun 2026",
    type: "personal",
    github: "https://github.com/JhojanAlexanderCalambasRamirez/MacNTFS",
    metrics: [
      { label: "Plataforma", value: "macOS" },
      { label: "Licencia", value: "MIT" },
    ],
  },
  {
    id: "mdconverter",
    title: "MdConverter",
    subtitle: "Conversor de documentos a Markdown, multiplataforma",
    description:
      "Aplicación de escritorio multiplataforma (macOS y Windows) que convierte documentos locales a Markdown limpio y estructurado. Soporta PDF, DOCX, XLSX, PPTX, CSV, HTML, JSON, XML, EPUB y más. Todo el procesamiento ocurre localmente, sin enviar archivos a servidores externos.",
    highlights: [
      "Arquitectura de tres capas: frontend React + TypeScript, backend Rust (Tauri v2) y sidecar Python como proceso persistente",
      "Protocolo de comunicación JSON sobre stdin/stdout entre Tauri y Python con correlación de IDs por request",
      "Motor de conversión MarkItDown de Microsoft con wrapper propio para manejo de errores y resolución de rutas",
      "Conversión individual y por lotes con seguimiento de progreso por archivo y soporte de cancelación",
      "Distribución nativa: .dmg para macOS y .exe (NSIS installer) para Windows, con scripts de build automatizados",
      "Drag & drop, dark/light mode, bilingüe (EN/ES), manejo de colisiones de nombres en archivos de salida",
    ],
    stack: [
      "Tauri v2",
      "Rust",
      "React",
      "TypeScript",
      "Python",
      "MarkItDown",
      "UV",
      "PyInstaller",
    ],
    period: "Jun 2026",
    type: "personal",
    github: "https://github.com/JhojanAlexanderCalambasRamirez/MdConverter",
    metrics: [
      { label: "Plataformas", value: "2" },
      { label: "Formatos", value: "10+" },
    ],
  },
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
    title: "BatteryIPhoneStatus",
    subtitle: "Monitor de batería iPhone en tiempo real desde macOS",
    description:
      "Sistema nativo dual-platform (macOS + iOS) en Swift y SwiftUI. La app iOS lee la batería del iPhone y la envía al Mac, donde se muestra en la barra de menú con notificaciones inteligentes. Descubrimiento automático entre dispositivos vía Bonjour/mDNS, sin configurar IPs ni servidores externos.",
    highlights: [
      "Menu bar nativo en macOS con icono dinámico de batería y notificaciones (20%, 10%, 100%)",
      "Descubrimiento automático entre dispositivos vía Bonjour/mDNS, sin configurar IPs",
      "Comunicación TCP en red local con Network.framework (NWListener, NWBrowser, NWConnection)",
      "Swift Package compartido entre ambas apps para modelos y constantes de red",
      "UI con círculo de progreso animado en iOS, reconexión automática si se pierde la conexión",
    ],
    stack: [
      "Swift",
      "SwiftUI",
      "Network.framework",
      "Bonjour/mDNS",
      "UserNotifications",
      "XcodeGen",
      "Swift Package Manager",
    ],
    period: "Dic 2024 – 2026",
    type: "personal",
    github: "https://github.com/JhojanAlexanderCalambasRamirez/BatteryIPhoneStatus",
    metrics: [
      { label: "Plataformas", value: "2" },
      { label: "Actualización", value: "60s" },
    ],
  },
];
