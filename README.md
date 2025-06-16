# WebSyS - Sitio Web con Astro y Sanity CMS

## 🚀 Configuración del Proyecto

### Requisitos Previos
- Node.js 18+ 
- NPM o Yarn
- Cuenta en Sanity.io
- Cuenta en Vercel (para deployment)

### Instalación

1. **Clonar el repositorio**
```bash
git clone [tu-repositorio]
cd websys
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales de Sanity:
- `PUBLIC_SANITY_PROJECT_ID`: ID de tu proyecto en Sanity
- `PUBLIC_SANITY_DATASET`: Generalmente "production"
- `SANITY_API_READ_TOKEN`: (Opcional) Token para contenido draft

### Desarrollo

```bash
npm run dev
```

El sitio estará disponible en http://localhost:4321

### Build para Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes siguiendo Atomic Design
│   │   ├── atoms/    # Componentes básicos
│   │   ├── molecules/# Componentes compuestos
│   │   └── organisms/# Componentes complejos
│   ├── layouts/      # Layouts de página
│   ├── lib/          # Utilidades y configuración
│   │   ├── sanity.ts # Funciones de Sanity
│   │   └── sanityClient.ts # Cliente de Sanity
│   ├── pages/        # Páginas del sitio
│   └── styles/       # Estilos globales
└── admin/            # Sanity Studio

```

## 🔧 Configuración Técnica

### Optimizaciones Implementadas

1. **Modo Híbrido**: SSG por defecto con SSR opcional
2. **Manejo de Errores**: Try-catch en todas las llamadas a Sanity
3. **Validación de Props**: Componentes validan datos antes de renderizar
4. **Lazy Loading**: Imágenes cargan bajo demanda
5. **Code Splitting**: Splide se carga en chunk separado

### Seguridad

- Variables de entorno protegidas
- .gitignore configurado correctamente
- Validación de tipos con TypeScript
- Sanitización de datos de Sanity

## 🚀 Deployment en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel
3. Deploy automático en cada push a main

## 📝 Notas Importantes

- El proyecto usa Astro 5+ con configuración híbrida
- Sanity CMS maneja todo el contenido
- Tailwind CSS para estilos
- Splide.js para carruseles

## 🐛 Solución de Problemas

### Error: Variables de entorno faltantes
Asegúrate de tener configurado `.env` con las variables requeridas

### Error: Imágenes no cargan
Verifica que el proyecto de Sanity esté configurado correctamente

### Build falla en Vercel
Revisa que todas las variables de entorno estén configuradas en Vercel