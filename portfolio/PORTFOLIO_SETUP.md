# Mi Portafolio Personal

Este es un portafolio personal desarrollado con **React** y **Vite**.

## Características

- ✨ Diseño moderno y responsivo
- ⚡ Desarrollado con Vite para máximo rendimiento
- 📱 Totalmente adaptable a dispositivos móviles
- 🎨 Componentes reutilizables
- 🚀 Deploy listo para GitHub Pages

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navegación principal
│   │   ├── Hero.jsx          # Sección hero
│   │   ├── About.jsx         # Acerca de mí
│   │   ├── Projects.jsx      # Galería de proyectos
│   │   ├── Contact.jsx       # Formulario de contacto
│   │   ├── Footer.jsx        # Pie de página
│   │   └── *.css             # Estilos de cada componente
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos globales
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos base
├── package.json              # Dependencias del proyecto
├── vite.config.js            # Configuración de Vite
└── index.html                # HTML principal
```

## Instalación

1. Navega al directorio del proyecto:
```bash
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Build

Para crear una compilación de producción:

```bash
npm run build
```

## Deploy en GitHub Pages

### Paso 1: Actualizar el repositorio
Asegúrate de que tu repositorio está configurado correctamente:

1. Crea un repositorio en GitHub llamado `portfolio` (o el nombre que prefieras)
2. Reemplaza `[TU_USUARIO]` en `package.json` con tu usuario de GitHub

### Paso 2: Configurar git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[TU_USUARIO]/portfolio.git
git branch -M main
git push -u origin main
```

### Paso 3: Deploy

Ejecuta el comando de deploy:

```bash
npm run deploy
```

Esto compilará el proyecto y subirá los archivos a la rama `gh-pages`.

### Paso 4: Habilitar GitHub Pages

1. Ve a las configuraciones de tu repositorio en GitHub
2. Busca la sección **Pages**
3. En **Source**, selecciona `Deploy from a branch`
4. Selecciona la rama `gh-pages`

Tu portafolio estará disponible en: `https://[TU_USUARIO].github.io/portfolio`

## Personalización

### Actualizar información personal

1. **Header/Logo** → Edita `src/components/Header.jsx`
2. **Descripción** → Edita `src/components/Hero.jsx`
3. **Acerca de mí** → Edita `src/components/About.jsx`
4. **Proyectos** → Actualiza el array `projects` en `src/components/Projects.jsx`
5. **Enlaces de contacto** → Edita `src/components/Footer.jsx`

### Cambiar colores

Los colores principales se definen en los archivos CSS de cada componente:

- Color primario: `#667eea`
- Color secundario: `#764ba2`

Puedes cambiar estos valores en los archivos CSS de los componentes.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run deploy` - Compila y deploy a GitHub Pages
- `npm run lint` - Ejecuta el linter

## Tecnologías utilizadas

- **React 19** - Librería UI
- **Vite** - Build tool
- **gh-pages** - Deploy a GitHub Pages
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Lógica de la aplicación

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contacto

Para cualquier pregunta o sugerencia, puedes contactarme a través del formulario en el portafolio.

---

¡Espero que disfrutes de tu portafolio! 🚀
