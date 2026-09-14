# 🎲 Historia Cubos — Generador Web de Historias

[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Plataforma-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![Tecnología](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20Vanilla-orange.svg)](#características-técnicas)
[![Audio](https://img.shields.io/badge/Audio-Web%20Audio%20API-purple.svg)](#sonido-inmersivo)

> **Historia Cubos** es una aplicación web interactiva diseñada para estimular la creatividad, la improvisación verbal, la creación de cuentos y la inspiración en juegos de rol. Combina dados 3D temáticos con efectos sonoros procedurales y un diseño moderno de tema oscuro.

---

## ✨ Características Principales

- 🎨 **6 Ediciones Temáticas Disponibles**:
  - **Original (Naranja)**: Elementos cotidianos, naturaleza, personajes y símbolos clásicos.
  - **Acciones (Azul)**: Verbos dinámicos, movimiento, interacción y resolución de problemas.
  - **Viajes (Verde)**: Medios de transporte, destinos icónicos, expedición y descubrimientos.
  - **Fantasía (Púrpura)**: Magia, criaturas legendarias, artefactos antiguos y hechizos.
  - **Héroes (Rojo)**: Superpoderes, villanos, batallas colosales y tecnología futurista.
  - **Misterio (Violeta)**: Enigmas policíacos, casas abandonadas, pistas y suspense gótico.
- 🎲 **Mecánica de Dados 3D Isométrica**: Renderizado volumétrico por CSS con sombreado dinámico, efecto de giro y animación realista de rebote.
- 🔒 **Fijación / Bloqueo de Dados**: Haz clic sobre cualquier dado en la mesa para bloquearlo y relanzar únicamente el resto para crear giros en la trama.
- 🔊 **Efectos Sonoros Sintetizados**: Sonidos orgánicos de dados chocando generados en tiempo real mediante **Web Audio API** (sin depender de archivos de audio externos).
- ✨ **Disparador Narrativo (Story Prompts)**: Frases inspiradoras aleatorias para comenzar tu relato con un solo clic.
- 📋 **Copiar Tirada**: Copia la combinación de símbolos y textos de inmediato al portapapeles en formato limpio listo para compartir en Discord, WhatsApp o notas de rol.
- 📱 **Diseño 100% Responsivo y Táctil**: Adaptado perfectamente para pantallas móviles, tabletas y ordenadores de escritorio.
- ⚡ **Zero-Config / Estático**: No requiere servidores backend, Node.js ni compilación previa. ¡Funciona al instante abriendo el archivo o mediante **GitHub Pages**!

---

## 🚀 Despliegue en GitHub Pages (Paso a Paso)

Para publicar tu juego gratis en la web y jugarlo desde cualquier móvil o navegador:

### 1. Inicializar el Repositorio y Subir a GitHub
Abre una terminal o consola en la carpeta del proyecto y ejecuta:

```bash
# 1. Inicializar el repositorio Git local (si no lo has hecho)
git init

# 2. Agregar todos los archivos al seguimiento
git add .

# 3. Crear el primer commit
git commit -m "Initial release: Web version of Historia Cubos"

# 4. Cambiar el nombre de la rama principal a main
git branch -M main

# 5. Conectar con tu repositorio en GitHub
git remote add origin https://github.com/GrAlmazan/historia-cubos.git

# 6. Subir los archivos por primera vez
git push -u origin main
```

### 2. Activar GitHub Pages con 1 Clic
1. Entra a tu repositorio en GitHub: [https://github.com/GrAlmazan/historia-cubos](https://github.com/GrAlmazan/historia-cubos)
2. Haz clic en la pestaña **Settings** (Configuración) en la parte superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment** > **Branch**:
   - Selecciona la rama: **`main`**.
   - Selecciona la carpeta: **`/ (root)`**.
5. Haz clic en **Save** (Guardar).
6. En unos segundos, GitHub activará tu enlace público:
   `https://gralmazan.github.io/historia-cubos/`

---

## 💻 Ejecución en Local

Puedes probar y jugar la aplicación en tu computadora de dos formas:

### Opción A (La más rápida)
Haz doble clic sobre el archivo `index.html` en el explorador de archivos para abrirlo en tu navegador favorito.

### Opción B (Servidor local de desarrollo con Python)
En la carpeta del proyecto, ejecuta:

```bash
python -m http.server 8000
```
Y abre en tu navegador `http://localhost:8000`.

---

## 🎯 Reglas y Dinámicas de Juego Sugeridas

### 1. El Cuento Clásico (9 Dados)
1. Selecciona 9 dados (o usa el botón rápido *"Clásico"*).
2. Lanza los dados y observa los símbolos resultantes.
3. Comienza con la frase disparadora: *"Érase una vez..."*.
4. Construye un relato de principio a fin conectando los 9 símbolos en 3 actos:
   - **Introducción** (3 primeros dados): Presenta al protagonista y el mundo.
   - **Nudo o Conflicto** (3 dados siguientes): Introduce el obstáculo o desafío.
   - **Desenlace** (3 últimos dados): Resuelve la aventura de forma creativa.

### 2. Cadena de Narración (Modo Multijugador)
- Si juegas con amigos o familia, sentaos en círculo.
- Cada jugador elige un dado de la mesa y añade dos o tres frases a la historia, pasándole el turno al siguiente participante.

### 3. Aventura de Rol / Generador de Misiones
- Lanza un dado de *Fantasía* (para el villano o criatura), uno de *Viajes* (para el lugar remoto), uno de *Misterio* (para la pista o trampa) y uno de *Acciones* (para la misión requerida).

---

## 🛠️ Estructura del Proyecto

```text
Historia Cubos/
├── index.html           # Estructura semántica, modales y accesibilidad
├── style.css            # Diseño dark glassmorphism y estilos de cubos 3D
├── data.js              # Base de datos de 6 ediciones y caras de dados en español
├── audio.js             # Síntesis procedural de sonidos con Web Audio API
├── app.js               # Lógica interactiva de juego, bloqueos y animaciones
├── historia_cubos.py    # Versión original de escritorio en Python / Pygame
├── LICENSE              # Licencia MIT y Deslinde Legal
├── README.md            # Documentación general y guía de publicación
└── .gitignore           # Archivos temporales y de caché ignorados por Git
```

---

## 📜 Licencia

Este proyecto se distribuye bajo los términos de la **Licencia MIT**. Eres libre de usarlo, modificarlo, redistribuirlo y adaptarlo para fines educativos, personales o comerciales. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## ⚖️ Descargo de Responsabilidad Legal (Disclaimer)

**Historia Cubos** es un proyecto de código abierto independiente desarrollado con fines lúdicos y pedagógicos.

- **Originalidad de Código y Gráficos**: Todo el código fuente en JavaScript, CSS, HTML, las paletas cromáticas, los textos en español y la implementación visual son de autoría original e independiente.
- **Sin Afiliación**: Este proyecto **no está afiliado, patrocinado, respaldado ni asociado** de ninguna manera con *Rory's Story Cubes*, The Creativity Hub Ltd., Asmodee Group ni con ninguna de sus marcas comerciales.
- Todas las marcas registradas o referencias conceptuales pertenecen a sus respectivos propietarios legales y se usan aquí únicamente con fines descriptivos del género de dados de narración.
