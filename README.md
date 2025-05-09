Nyla Talent - Plataforma de Cazatalentos
Descripción
Nyla Talent es una aplicación web desarrollada en React con TypeScript y Vite que implementa un sistema integral para la identificación, seguimiento y gestión de talentos y academias en el mundo del entretenimiento. La plataforma está diseñada para optimizar el proceso de reclutamiento de talentos siguiendo un modelo estructurado en cuatro fases principales.
Características Principales
Fase 1: Identificación de Academias y Escuelas de Talento

Búsqueda geográfica de instituciones
Herramientas de mapeo para localizar academias de danza, teatro, modelaje y canto
Recopilación y almacenamiento de información de contacto detallada

Fase 2: Llamadas Telefónicas

Planificación y registro de llamadas diarias (35-50 llamadas)
Documentación detallada de cada interacción
Seguimiento y control de resultados (interesados, no interesados, seguimientos)

Fase 3: Reportes y Evaluación

Generación de informes detallados para stakeholders
Gestión de base de datos de talentos con información segmentada
Análisis de resultados y métricas de rendimiento

Fase 4: Gestión y Seguimiento

Calendario de seguimiento para compromisos adquiridos
Evaluación continua del modelo de captación de talentos
Ajuste de estrategias basadas en métricas y resultados

Tecnologías Utilizadas

Frontend: React 18, TypeScript, Styled Components
Routing: React Router v6
Empaquetador: Vite
Estilos: CSS-in-JS con Styled Components
Integración de APIs:

API de Gemini para búsqueda de instituciones
API de Telnyx para gestión de llamadas



Requisitos Previos
Para instalar y ejecutar este proyecto, necesitarás:

Node.js (v16 o superior)
npm (v7 o superior)

Instalación

Clona este repositorio:

bashgit clone https://github.com/tu-usuario/nyla-talent-app.git
cd nyla-talent-app

Instala las dependencias:

bashnpm install

Configura las variables de entorno:

Crea un archivo .env.local en la raíz del proyecto
Añade tus claves de API (consulta .env.example para ver las variables requeridas)


Inicia el servidor de desarrollo:

bashnpm run dev
Estructura del Proyecto
nyla-talent-app/
├── public/               # Archivos estáticos
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── layout/       # Componentes de estructura
│   │   ├── ui/           # Componentes de interfaz básicos
│   │   ├── fase1/        # Componentes para Fase 1: Identificación
│   │   ├── fase2/        # Componentes para Fase 2: Llamadas
│   │   ├── fase3/        # Componentes para Fase 3: Reportes
│   │   └── fase4/        # Componentes para Fase 4: Gestión
│   ├── pages/            # Páginas principales
│   │   ├── HomePage.tsx
│   │   ├── fase1/
│   │   ├── fase2/
│   │   ├── fase3/
│   │   └── fase4/
│   ├── services/         # Servicios y APIs
│   ├── types/            # Definiciones de tipos TypeScript
│   ├── utils/            # Utilidades y funciones auxiliares
│   ├── styles/           # Estilos globales
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Punto de entrada
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
Uso
Fase 1: Identificación de Academias

Accede a la sección "Fase 1"
Utiliza el mapa o el formulario para buscar academias en áreas específicas
Registra la información detallada de cada institución

Fase 2: Llamadas Telefónicas

Planifica las llamadas a realizar
Registra cada llamada con todos los detalles relevantes
Clasifica los resultados según el interés mostrado

Fase 3: Reportes y Evaluación

Genera informes personalizados de actividades y resultados
Gestiona la base de datos de talentos potenciales
Analiza las métricas de rendimiento

Fase 4: Gestión y Seguimiento

Mantén un calendario de seguimiento con compromisos adquiridos
Documenta cada interacción de seguimiento
Evalúa el proceso y realiza ajustes según sea necesario

Implementación y Despliegue
Esta aplicación está configurada para despliegue en Vercel. Para desplegar:

Crea una cuenta en Vercel si aún no la tienes
Conecta tu repositorio de GitHub/GitLab/Bitbucket
Configura las variables de entorno necesarias
Realiza el despliegue desde el panel de Vercel

Alternativamente, puedes usar la CLI de Vercel:
bash# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel
Personalización
Cambio de Tema
Puedes personalizar los colores y estilos de la aplicación modificando las variables CSS en src/styles/variables.css.
Configuración de APIs
Ajusta la configuración de las APIs en los archivos correspondientes dentro de la carpeta src/services/.
Contribución
Para contribuir a este proyecto:

Haz un fork del repositorio
Crea una rama para tu funcionalidad (git checkout -b feature/amazing-feature)
Realiza tus cambios
Haz commit de tus cambios (git commit -m 'Add some amazing feature')
Haz push a la rama (git push origin feature/amazing-feature)
Abre un Pull Request

Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
Contacto
Si tienes preguntas o comentarios sobre el proyecto, por favor contacta a:

Email: [tu-email@ejemplo.com]
Web: [tu-sitio-web.com]


Desarrollado con ❤️ para Nyla Talent.