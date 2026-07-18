# ReacTivate - E-commerce de Indumentaria 👗👕👶

¡Bienvenido a **ReacTivate**! Este es un proyecto de comercio electrónico para indumentaria desarrollado en **React.js** y **Vite**, completamente integrado con **Firebase (Firestore + Auth)** para la persistencia de datos y gestión de usuarios.

El sitio web está desplegado en producción y se puede visitar en:  
👉 **[https://market-site-beige.vercel.app](https://market-site-beige.vercel.app)**

---

## 🚀 Características Principales

### 🛒 Sección Pública (Comprador)
* **Exploración del catálogo**: Vista dinámica de productos clasificados en categorías (*Dama*, *Hombre*, *Infantil*).
* **Filtros por Categoría**: Navegación fluida e instantánea usando enrutamiento dinámico con `react-router-dom`.
* **Detalle del Producto**: Ficha descriptiva de cada artículo con imágenes flexibles y adaptables.
* **Carrito de Compras Completo**:
  * Agregar productos al carrito con control de stock/cantidad.
  * Visualización del total de ítems en el menú en tiempo real.
  * Vista de detalle del carrito con cálculo de subtotales, totales y botón para vaciar/quitar ítems de forma individual.

### 🛡️ Sección Privada (Administración)
* **Autenticación Protegida**: Acceso mediante un guardián de rutas (`ProtectedRoute`) y contexto de autenticación integrado con **Firebase Auth**.
* **Dashboard Administrativo**: Panel privado desde el cual se lista todo el catálogo con opciones rápidas de gestión.
* **CRUD Completo de Productos**:
  * **Creación**: Formulario con validación integrada que permite cargar un producto, subir su imagen directamente a la nube (**imgBB API**) y guardarlo en Firestore.
  * **Edición**: Formulario que precarga la información del producto y su imagen actual para facilitar actualizaciones de stock, precio o descripciones.
  * **Eliminación**: Remoción inmediata del producto de la base de datos de Firestore.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend**: React.js (Componentes funcionales, Hooks avanzados: `useState`, `useEffect`, `useContext`, `useParams`).
* **Enrutamiento**: `react-router-dom` (Rutas dinámicas, layouts anidados con `<Outlet />`).
* **Estilos**: Vanilla CSS con variables nativas de diseño y optimización responsiva móvil mediante *media queries*.
* **Base de Datos**: Firebase Firestore (Lectura, creación, actualización y eliminación de documentos en tiempo real).
* **Autenticación**: Firebase Authentication (Proveedor de correo y contraseña).
* **Imágenes**: imgBB API para carga de archivos binarios mediante `FormData`.
* **Configuraciones de Producción**: Redirección integrada para Single Page Applications (SPA) con `vercel.json` y `_redirects`.

---

## ⚙️ Instalación y Ejecución en Entorno Local

Sigue estos sencillos pasos para clonar y ejecutar el proyecto localmente en tu computadora:

### 1. Clonar el repositorio
Abre tu consola o terminal y ejecuta:
```bash
git clone https://github.com/johnnysamir/MarketSite.git
```

### 2. Acceder al directorio del proyecto
```bash
cd MarketSite
```

### 3. Instalar las dependencias
Instala todas las librerías necesarias (incluyendo Firebase y React Router):
```bash
npm install
```

### 4. Iniciar el servidor de desarrollo local
```bash
npm run dev
```
Una vez iniciado, abre tu navegador y entra a:  
👉 **`http://localhost:5173`**

### 5. Compilar para producción (Opcional)
Si deseas compilar el código optimizado para producción:
```bash
npm run build
```
Esto creará una carpeta llamada `dist/` con los archivos listos para subir a cualquier hosting.

---

## 🔐 Credenciales de Acceso para Pruebas (Admin)

Para acceder al Panel de Control de administración y probar las funciones CRUD:

1. Ve a la ruta oculta en el navegador: **`/admin`** (o directamente a `/login` si no estás logueado).
2. Ingresa los siguientes datos de autenticación:
   * **Usuario / Correo**: `admin@admin.com`
   * **Contraseña**: `admin1234`

---

## 📂 Estructura del Código

* `/src/components`: Componentes reutilizables de la interfaz organizados por áreas (Footer, Header, Nav, Cart, adminComponents, ItemListContainer, ItemDetailContainer).
* `/src/context`: Proveedores de contexto global (`CartContext` para el estado de las compras y `AuthContext` para el estado de inicio de sesión).
* `/src/firebase`: Configuración e inicialización de la conexión con el SDK de Firebase.
* `/src/services`: Consultas asíncronas a la base de datos de Firestore y servicio de carga de imágenes (imgBB).
* `/src/utils`: Funciones helper de validación y utilidades secundarias.
* `/public`: Contiene recursos estáticos como el archivo de redirecciones `_redirects` para Netlify.
* `/vercel.json`: Reglas de reescritura de rutas para despliegues en Vercel.
