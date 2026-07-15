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
      "macOS puede leer discos NTFS (el formato de Windows) pero no escribir en ellos de forma nativa: es una limitación del sistema operativo. MacNTFS resuelve eso con una app Swift 6 que detecta el disco automáticamente, lo monta con soporte completo de escritura y expone un gestor de archivos con drag-and-drop. Sin reformatear el disco, sin abrir la terminal, sin pagar por software de terceros. El reto técnico principal fue manejar operaciones privilegiadas de mount/unmount con root de forma segura usando XPC Services, siguiendo el modelo de seguridad de Apple.",
    highlights: [
      "Detecta cualquier disco NTFS conectado vía DiskArbitration API y lo monta con escritura completa en un clic mediante ntfs-3g, sin intervención del usuario",
      "Gestor de archivos integrado con drag-and-drop: copiar, mover, renombrar y eliminar archivos con verificación de integridad tras cada operación",
      "Wizard de configuración inicial que instala macFUSE y ntfs-3g con diálogos nativos sin necesidad de abrir la terminal",
      "XPC Services para aislar operaciones privilegiadas (mount/unmount con root) del proceso principal, siguiendo las guías de seguridad de macOS",
      "Universal Binary para Apple Silicon e Intel, dark mode nativo, interfaz bilingüe EN/ES con cambio instantáneo",
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
      "Convertir un PDF, un DOCX o una presentación de PowerPoint a Markdown limpio y estructurado es más difícil de lo que parece: cada formato tiene su propia estructura interna y parsing diferente. MdConverter lo resuelve con una arquitectura de tres capas: interfaz en React/TypeScript, motor nativo en Rust con Tauri v2 y un sidecar Python que ejecuta la conversión real como proceso persistente. Todo el procesamiento ocurre localmente, ningún archivo sale del equipo. Soporta PDF, DOCX, XLSX, PPTX, CSV, HTML, JSON, XML, EPUB y más. Disponible como instalador nativo para macOS y Windows.",
    highlights: [
      "Arquitectura de tres capas desacopladas: frontend React/TypeScript, runtime nativo en Rust (Tauri v2) y sidecar Python que arranca una sola vez como proceso persistente",
      "Canal de comunicación JSON sobre stdin/stdout entre Tauri y el sidecar Python, con correlación de IDs por request para manejar múltiples conversiones en paralelo",
      "Motor de conversión basado en MarkItDown de Microsoft con wrapper propio para normalización de rutas, manejo de errores y compatibilidad en ambas plataformas",
      "Conversión individual y por lotes con progreso en tiempo real por archivo, cancelación en cualquier momento y manejo automático de colisiones de nombres",
      "Distribución nativa lista para usar: instalador .dmg firmado para macOS y .exe (NSIS) para Windows, generados por scripts de build automatizados",
      "Drag & drop, dark/light mode nativo, interfaz bilingüe EN/ES",
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
      "El catastro es el inventario oficial de todos los predios de un municipio: su ubicación, sus límites exactos, su propietario. Digitalizarlo bajo el estándar internacional LADM-COL v4.1 es un requisito legal en Colombia. Este sistema gestiona +50,000 predios activos de municipios reales con un backend geoespacial sobre PostGIS, consulta y edición de geometrías directamente en el navegador, y flujos de captura diseñados para funcionarios municipales sin formación técnica en GIS. El principal desafío fue mantener la integridad topológica de las geometrías mientras el sistema operaba bajo consultas espaciales complejas a gran escala.",
    highlights: [
      "Backend con Django REST Framework: APIs RESTful, autenticación por roles y validaciones geoespaciales a nivel de servicio bajo el estándar LADM-COL v4.1",
      "Reducción del ~40% en tiempos de respuesta mediante optimización de consultas espaciales con GeoDjango y PostGIS sobre +50,000 registros prediales",
      "Frontend en React para visualizar y editar geometrías prediales (GeoJSON, Shapefile) en tiempo real, reemplazando software GIS externo en el flujo operativo",
      "Formularios multistep con validaciones automáticas: integridad topológica, referencias cruzadas y reglas normativas, diseñados para perfiles no técnicos",
      "Transformaciones entre sistemas de referencia EPSG:9377 y EPSG:4326 conformes al marco legal catastral colombiano",
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
    subtitle: "Pipeline MLOps de extremo a extremo en Azure",
    description:
      "La mayoría de los proyectos de ML se quedan en el notebook. Este no. El objetivo era construir un sistema completo: desde el entrenamiento reproducible hasta el despliegue en producción en Azure con escalado automático. El modelo combina DeiT-Tiny (vision transformer) con un clasificador SVM, se entrena y versiona con MLflow sobre Azure ML, y se expone vía API REST y canal gRPC para consumo en tiempo real. El reto central fue hacer que el pipeline funcionara de forma idéntica en una Mac Apple Silicon y en un cluster de Azure, con arranque en frío menor a 30 segundos.",
    highlights: [
      "Modelo DeiT-Tiny + SVM entrenado y versionado con MLflow sobre Azure ML, con cluster elástico que escala a cero para optimizar costos en inactividad",
      "API REST con FastAPI y canal gRPC paralelo desplegados en Azure Container Instance: arranque en frío menor a 30 segundos desde estado detenido",
      "Pipeline de build Docker multi-arquitectura (linux/amd64) compilado desde Apple Silicon y publicado directo a Azure Container Registry sin emulación",
      "Orquestación con Kubernetes y HPA (Horizontal Pod Autoscaler) para escalar automáticamente ante picos de tráfico de hasta 3x la carga base",
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
      "Apple no expone el nivel de batería del iPhone a otras apps ni al Mac de forma nativa: es información que queda atrapada en el dispositivo. BatteryIPhoneStatus lo resuelve con dos apps coordinadas en Swift: una en iOS que lee la batería y actúa como servidor de red local, y una en macOS que muestra el porcentaje en la barra de menú con notificaciones automáticas. El descubrimiento de dispositivos es automático vía Bonjour/mDNS: sin configurar IPs, sin cuentas, sin servidores externos. Todo ocurre en la red local.",
    highlights: [
      "Menu bar nativo en macOS con ícono de batería que se actualiza en tiempo real y notificaciones automáticas en umbrales críticos: 20%, 10% y carga completa",
      "Descubrimiento automático de dispositivos en la red local vía Bonjour/mDNS: el Mac encuentra el iPhone sin configurar nada manualmente",
      "Comunicación TCP directa con Network.framework (NWListener, NWBrowser, NWConnection) y reconexión automática si se pierde la conexión",
      "Swift Package local compartido entre ambas apps para modelos de datos y constantes de red, garantizando coherencia entre plataformas",
      "UI iOS con círculo de progreso animado y estado de conexión en tiempo real",
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
