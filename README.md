Nyla Talent - Plataforma de Cazatalentos
<p align="center">
  <img src="public/images/logo.png" alt="Nyla Talent Logo" width="200"/>
</p>
<p align="center">
  <a href="#descripción">Descripción</a> •
  <a href="#características-principales">Características</a> •
  <a href="#tecnologías-utilizadas">Tecnologías</a> •
  <a href="#instalación">Instalación</a> •
  <a href="#uso">Uso</a> •
  <a href="#implementación-y-despliegue">Despliegue</a> •
  <a href="#contribución">Contribución</a> •
  <a href="#licencia">Licencia</a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/React-18.0.0-blue" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.4-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-4.3.5-yellow" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>
Descripción
Nyla Talent es una aplicación web desarrollada en React con TypeScript y Vite que implementa un sistema integral para la identificación, seguimiento y gestión de talentos y academias en el mundo del entretenimiento. La plataforma está diseñada para optimizar el proceso de reclutamiento de talentos siguiendo un modelo estructurado en cuatro fases principales.
<p align="center">
  <img src="public/images/hero-bg.jpg" alt="Nyla Talent Dashboard" width="800"/>
</p>
Características Principales
Fase 1: Identificación de Academias y Escuelas de Talento

Búsqueda Geográfica: Localización de academias en áreas específicas de Estados Unidos
Herramientas de Mapeo: Identificación visual de instituciones de talento
Recopilación de Datos: Almacenamiento estructurado de información de contacto

<details>
<summary>🔍 Ver más detalles</summary>
<br>
<ul>
  <li>Integración con APIs de geolocalización</li>
  <li>Filtros por tipo de academia (danza, teatro, modelaje, canto)</li>
  <li>Sistema de validación de datos de contacto</li>
  <li>Importación y exportación de bases de datos de instituciones</li>
</ul>
</details>
Fase 2: Llamadas Telefónicas

Planificación: Organización de 35-50 llamadas diarias
Registro Detallado: Documentación de hora, contacto, duración y resultado
Seguimiento: Control de compromisos adquiridos en cada llamada

<details>
<summary>📞 Ver más detalles</summary>
<br>
<ul>
  <li>Sistema de temporizador para control de duración de llamadas</li>
  <li>Categorización automática de resultados (interesado, no interesado, seguimiento)</li>
  <li>Plantillas predefinidas para diferentes tipos de llamadas</li>
  <li>Integración con API de Telnyx para realizar llamadas directamente</li>
</ul>
</details>
Fase 3: Reportes y Evaluación

Informes Periódicos: Generación de reportes con métricas clave
Base de Datos de Talentos: Organización de información por edades, disciplinas y disponibilidad
Análisis de Datos: Visualización de métricas de rendimiento y conversión

<details>
<summary>📊 Ver más detalles</summary>
<br>
<ul>
  <li>Dashboards personalizables con gráficos interactivos</li>
  <li>Generación de informes en múltiples formatos (PDF, Excel, CSV)</li>
  <li>Segmentación avanzada de datos para análisis específicos</li>
  <li>Sistema de alertas para métricas por debajo de objetivos</li>
</ul>
</details>
Fase 4: Gestión y Seguimiento

Calendario de Compromisos: Gestión visual de fechas de seguimiento
Documentación de Interacciones: Registro histórico de cada contacto
Evaluación Continua: Análisis y ajuste de estrategias

<details>
<summary>📅 Ver más detalles</summary>
<br>
<ul>
  <li>Sincronización con calendarios externos (Google Calendar, Outlook)</li>
  <li>Sistema de recordatorios automatizados</li>
  <li>Flujos de trabajo personalizables según tipo de compromiso</li>
  <li>Panel de evaluación de rendimiento y eficiencia</li>
</ul>
</details>
Tecnologías Utilizadas
<p align="center">
  <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/-Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />
  <img src="https://img.shields.io/badge/-React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
</p>

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
Añade tus claves de API:

VITE_GEMINI_API_KEY=tu_clave_api_gemini
VITE_TELNYX_API_KEY=tu_clave_api_telnyx

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
<p align="center">
  <img src="public/images/fase1-screenshot.png" alt="Fase 1 Screenshot" width="600"/>
</p>

Accede a la sección "Fase 1"
Utiliza el mapa o el formulario para buscar academias en áreas específicas
Registra la información detallada de cada institución

Fase 2: Llamadas Telefónicas
<p align="center">
  <img src="public/images/fase2-screenshot.png" alt="Fase 2 Screenshot" width="600"/>
</p>

Planifica las llamadas a realizar
Registra cada llamada con todos los detalles relevantes
Clasifica los resultados según el interés mostrado

Fase 3: Reportes y Evaluación
<p align="center">
  <img src="public/images/fase3-screenshot.png" alt="Fase 3 Screenshot" width="600"/>
</p>

Genera informes personalizados de actividades y resultados
Gestiona la base de datos de talentos potenciales
Analiza las métricas de rendimiento

Fase 4: Gestión y Seguimiento
<p align="center">
  <img src="public/images/fase4-screenshot.png" alt="Fase 4 Screenshot" width="600"/>
</p>

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
¿Quieres contribuir? ¡Genial! Sigue estos pasos:

Haz un fork del repositorio
Crea una rama para tu funcionalidad (git checkout -b feature/amazing-feature)
Realiza tus cambios
Haz commit de tus cambios (git commit -m 'Add some amazing feature')
Haz push a la rama (git push origin feature/amazing-feature)
Abre un Pull Request

Roadmap

 Implementación de autenticación de usuarios
 Integración con sistemas CRM populares
 Desarrollo de aplicación móvil complementaria
 Funcionalidades de IA para predicción de interés
 Expansión de integraciones con plataformas de telefonía

Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
Contacto
<p align="center">
  <a href="mailto:contact@example.com">
    <img src="https://www.antaresinnovate.com/es" alt="page" />
  </a>

</p>

<p align="center">
  Desarrollado con ❤️ para Nyla Talent
</p>