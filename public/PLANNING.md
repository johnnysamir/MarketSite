# Planning - MarketSite E-commerce con Mercado Pago

## 📌 Descripción del Proyecto

Página de comercio electrónico que permite a los usuarios comprar productos a través de Mercado Pago como pasarela de pago.

---

## 📋 FASE 1: Setup y Configuración ⚙️

**Duración: 1-2 días**

### Dependencias a instalar

- `@mercadopago/sdk-js` - SDK oficial de Mercado Pago
- `react-router-dom` - Navegación entre páginas
- `zustand` o Context API - Gestión de estado
- `axios` - Peticiones HTTP
- `tailwindcss` o `material-ui` - Estilos
- `zod` o `yup` - Validación de formularios

### Estructura de carpetas

```
src/
├── components/     (Componentes reutilizables)
├── pages/         (Páginas principales)
├── hooks/         (Custom hooks)
├── context/       (Estado global)
├── services/      (Llamadas API)
├── utils/         (Funciones auxiliares)
└── config/        (Configuración)
```

---

## 🏗️ FASE 2: Estructura de Componentes

**Duración: 2-3 días**

### Componentes necesarios

- Header/Navbar (logo, búsqueda, carrito, login)
- Footer
- ProductCard (tarjeta de producto)
- ProductGrid (galería de productos)
- CartSidebar/Modal (carrito)
- CheckoutForm
- PaymentGateway (integración Mercado Pago)

### Páginas necesarias

- Home (landing page)
- Productos (catálogo con filtros)
- Detalle de Producto
- Carrito
- Checkout
- Confirmación de Pago
- Mi Cuenta/Perfil (opcional en v1)

---

## 💾 FASE 3: Funcionalidades Core

**Duración: 3-4 días**

- ✅ Listado de productos (mock data o API)
- ✅ Sistema de carrito (agregar/eliminar/actualizar cantidad)
- ✅ Cálculo de totales (subtotal, impuestos, envío)
- ✅ Gestión de estado global con Zustand o Context
- ✅ Persistencia en localStorage
- ✅ Búsqueda y filtros de productos

---

## 💳 FASE 4: Integración Mercado Pago

**Duración: 3-4 días**

### 1. Configuración

- Registrarse en Mercado Pago
- Obtener credenciales (Public Key, Access Token)
- Modo sandbox para testing

### 2. Implementación

- Inicializar SDK de Mercado Pago
- Crear preferencia de pago (Backend)
- Integrar Checkout Pro o Wallet
- Manejo de callbacks/webhooks
- Validación de pagos exitosos

### 3. Flujo de Pago

```
Carrito → Checkout → Preferencia MP → Redirect → MP → Callback → Confirmación
```

---

## 🖥️ FASE 5: Backend (Node.js + Express)

**Duración: 2-3 días**

- Servidor Express
- Rutas para gestionar:
  - Productos (`GET /api/products`)
  - Carrito (`POST /api/cart`)
  - Pedidos (`POST /api/orders`)
  - Preferencias MP (`POST /api/create-preference`)
- Base de datos (MongoDB o PostgreSQL)
- Validación y autenticación básica
- Webhooks de Mercado Pago

---

## 🧪 FASE 6: Optimización y Testing

**Duración: 2-3 días**

- Tests unitarios (Jest)
- Tests de integración
- Optimización de imágenes
- Lazy loading
- Seguridad (sanitizar inputs, HTTPS, CORS)
- Performance audit

---

## 🚀 FASE 7: Deployment

**Duración: 1 día**

### Frontend

- Vercel, Netlify o GitHub Pages
- Variables de entorno (.env)

### Backend

- Heroku, Railway, Render o Azure
- Base de datos alojada (MongoDB Atlas, PostgreSQL)

### Configuración

- Dominio personalizado
- HTTPS
- Variables de entorno de producción

---

## 📊 Timeline Estimado: 2-3 semanas

**Tareas por hacer:**

- [ ] Fase 1: Instalar dependencias
- [ ] Fase 2: Crear estructura de componentes
- [ ] Fase 3: Implementar funcionalidades core
- [ ] Fase 4: Integrar Mercado Pago
- [ ] Fase 5: Desarrollar backend
- [ ] Fase 6: Testing y optimización
- [ ] Fase 7: Deploy en producción
