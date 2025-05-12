#  Factored - Aplicación de Perfil de Empleado

Este es un proyecto fullstack creado como parte de una prueba técnica. La aplicación permite ver el perfil de un empleado con su nombre, cargo, foto y un gráfico de habilidades técnicas.

El diseño y el funcionamiento fueron pensados para ser claros, visuales y fáciles de usar, incluso por personas que no tienen conocimientos en programación.

---

##  ¿Qué contiene?

- Página de inicio con bienvenida y botón de acceso.
- Página de perfil del empleado con:
  - Foto generada automáticamente.
  - Nombre y cargo.
  - Gráfico que muestra su nivel en diferentes habilidades (como Python, Java, etc).
- Página de error (404) cuando se entra a una dirección incorrecta.
- Estilo visual moderno con fondo negro y letras blancas.
- Colores personalizados.
- Toda la aplicación está "empaquetada" en contenedores para que se pueda ejecutar fácilmente con un solo comando.

---

##  ¿Cómo se construyó?

1. **Frontend (lo que ve el usuario):**
   - Hecho con **React**, un sistema para construir interfaces web.
   - Se usó **Material UI** para los botones y los textos.
   - Se usó **Chart.js** para dibujar el gráfico circular de habilidades.
   - Estilo oscuro y moderno.

2. **Backend (la parte que da los datos):**
   - Construido con **FastAPI**, una herramienta para crear APIs rápidas.
   - La API devuelve la información del perfil del empleado en formato JSON.

3. **Docker (empaquetado del proyecto):**
   - Se usó **Docker** y **Docker Compose** para que cualquier persona pueda ejecutar el proyecto fácilmente sin instalar herramientas técnicas por separado.
