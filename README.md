[README.md](https://github.com/user-attachments/files/26955535/README.md)
# 🛫 RunwaySync — Plataforma Web RunwaySync

Proyecto monolítico con **Express.js** + **EJS** + **Mongoose**, implementando un sistema de autenticación y gestión de usuarios con arquitectura MVC.

---

## 🚀 Inicio rápido

```bash
npm install
npm run dev       # Modo desarrollo con nodemon
npm start         # Modo producción
```

Abre: <http://localhost:3000>

---

## 🏗️ Arquitectura y estructura

```
RunwaySync/
│
├── src/
│   ├── app.js                   # Bootstrap de la aplicación (punto de entrada)
│   │
│   ├── controllers/             # (En desarrollo) Controladores de dominio
│   │
│   └── routes/
│       └── router.js            # Rutas principales de la aplicación
│
├── views/
│   ├── layouts/
│   │   └── main.ejs             # Layout base compartido
│   ├── index.ejs                # Página de inicio de empresa
│   ├── login.ejs                # Formulario de inicio de sesión
│   ├── register.ejs             # Formulario de registro
│   ├── dashboard.ejs            # Panel principal del usuario
│   ├── recuperar.ejs            # Inicio de recuperación de contraseña
│   ├── verificar-codigo.ejs     # Verificación de código de seguridad
│   ├── nueva-contrasena.ejs     # Ingreso de nueva contraseña
│   └── confirmacion.ejs         # Confirmación de cambio exitoso
│
├── public/
│   ├── css/
│   │   └── style.css            # Hoja de estilos global
│   ├── svg/
│   │   ├── 9.svg                # SVG de fondo
│   │   ├── 10.svg               # SVG de portada (landing)
│   │   └── 13.svg               # SVG decorativo adicional
│   └── images/                  # Imágenes estáticas del proyecto
│
├── package.json
└── .gitignore
```

---

## 🧩 Patrones arquitectónicos aplicados

| Patrón | Dónde | Propósito |
| --- | --- | --- |
| **MVC** | routes / views / (controllers pendiente) | Separación de presentación, lógica y datos |
| **Router Module** | src/routes/router.js | Centraliza todas las rutas en un único módulo |
| **Front Controller** | src/app.js | Punto de entrada único que monta el router principal |
| **Static Assets** | public/ | Servicio de archivos estáticos (CSS, SVG, imágenes) |

---

## 🔄 Rutas de la aplicación

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/` | Página de inicio / landing |
| GET | `/login` | Formulario de inicio de sesión |
| POST | `/login` | Procesar credenciales (TODO: validar con BD) |
| GET | `/register` | Formulario de registro |
| POST | `/register` | Guardar usuario (TODO: guardar en BD) |
| GET | `/dashboard` | Panel principal del usuario autenticado |
| GET | `/recuperar` | Inicio del flujo de recuperación de contraseña |
| POST | `/recuperar` | Enviar código de verificación |
| GET | `/verificar-codigo` | Ingresar código recibido |
| POST | `/verificar-codigo` | Validar código |
| GET | `/nueva-contrasena` | Formulario para nueva contraseña |
| POST | `/nueva-contrasena` | Guardar nueva contraseña |
| GET | `/confirmacion` | Pantalla de confirmación del cambio exitoso |

---

## 🔐 Flujo de recuperación de contraseña

```
/recuperar  →  /verificar-codigo  →  /nueva-contrasena  →  /confirmacion
```

El flujo completo está implementado a nivel de rutas y vistas. La integración con base de datos (envío de correo, validación de código, actualización de contraseña) está pendiente de implementación en los controladores.

---

## 🔌 Conexión a base de datos (Mongoose)

El proyecto incluye **Mongoose** como dependencia para la conexión con MongoDB. La integración está pendiente de implementarse en los controladores. Para conectar:

```javascript
// Ejemplo de integración en src/app.js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/runwaysync')
  .then(() => console.log('MongoDB conectado ✅'))
  .catch(err => console.error('Error de conexión:', err));
```

---

## 🎨 Vistas y diseño

Las vistas utilizan **EJS** con estilos inline por componente. El diseño sigue una estética de moda de alta gama:

- **Landing (`/`)** — Fondo SVG a pantalla completa con botones superpuestos de login y registro
- **Login / Register** — Cards centradas con fondo SVG decorativo, campos con bordes redondeados
- **Dashboard** — Layout de tres columnas con barra superior, sidebar lateral y área de contenido principal
- **Flujo de recuperación** — Pantallas minimalistas con guía paso a paso

---

## 📦 Dependencias

| Paquete | Uso |
| --- | --- |
| `express` | Framework web (v5) |
| `ejs` | Motor de plantillas |
| `mongoose` | ODM para MongoDB |
| `nodemon` | Hot-reload en desarrollo |

## 🛠️ Estado del proyecto

| Funcionalidad | Estado |
| --- | --- |
| Rutas y vistas de autenticación | ✅ Implementado |
| Dashboard UI | ✅ Implementado |
| Flujo de recuperación de contraseña | ✅ Implementado (vistas y rutas) |
| Lógica de negocio en controladores | 🔄 En desarrollo |
| Integración con MongoDB | 🔄 Pendiente |
| Validación de formularios | 🔄 Pendiente |
| Autenticación con sesiones/JWT | 🔄 Pendiente |
