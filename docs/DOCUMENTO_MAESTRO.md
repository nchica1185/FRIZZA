# 🍹 FRIZZA

## Documento Maestro del Proyecto

**Versión:** 0.1
**Estado:** Planificación / Prototipo
**Tipo de proyecto:** Software empresarial + página web + sistema de gestión
**Empresa:** Ficticia
**Ubicación ficticia:** Armenia, Quindío, Colombia
**Slogan:** “Sabor que se siente frío.”

---

# 1. Descripción general

FRIZZA es una empresa ficticia dedicada a la venta de granizados, cócteles y bebidas refrescantes.

El proyecto consiste en desarrollar un sistema de software completo para gestionar el negocio y, al mismo tiempo, una página web para que los clientes puedan conocer los productos y realizar pedidos.

El objetivo no es crear solamente una página web bonita. El objetivo es construir un **software funcional para una empresa**, utilizando tecnologías modernas y agregando herramientas de inteligencia artificial.

FRIZZA será utilizado como proyecto de aprendizaje para adquirir experiencia en desarrollo de software, desarrollo web, bases de datos, APIs, autenticación, inteligencia artificial, despliegue y posteriormente comercialización de software.

---

# 2. Objetivos

## Objetivo principal

Construir un sistema web completo para administrar las operaciones de FRIZZA y permitir a los clientes consultar productos y realizar pedidos.

## Objetivos secundarios

* Crear una página web profesional.
* Crear un catálogo de productos.
* Implementar un carrito de compras.
* Registrar pedidos.
* Crear un sistema de usuarios.
* Crear un panel administrativo.
* Gestionar productos.
* Gestionar inventario.
* Gestionar clientes.
* Registrar ventas.
* Mostrar estadísticas.
* Incorporar inteligencia artificial.
* Crear una API backend.
* Utilizar una base de datos.
* Desplegar el sistema en Internet.
* Mantener el proyecto organizado y escalable.

---

# 3. Usuarios del sistema

FRIZZA tendrá inicialmente tres tipos de usuarios.

## Cliente

Puede:

* Ver la página principal.
* Ver el catálogo.
* Filtrar productos.
* Ver información de productos.
* Agregar productos al carrito.
* Modificar cantidades.
* Realizar pedidos.
* Consultar información básica del negocio.

## Empleado

Puede:

* Iniciar sesión.
* Ver pedidos.
* Actualizar estados de pedidos.
* Consultar productos.
* Consultar inventario.
* Registrar ventas.

## Administrador

Tiene acceso completo al sistema.

Puede:

* Gestionar usuarios.
* Gestionar productos.
* Gestionar categorías.
* Gestionar inventario.
* Gestionar pedidos.
* Gestionar clientes.
* Consultar ventas.
* Ver estadísticas.
* Utilizar las herramientas de IA.
* Configurar diferentes aspectos del sistema.

---

# 4. Página pública

La página pública será la parte que verá cualquier visitante.

## Inicio

Debe mostrar:

* Logo FRIZZA.
* Menú de navegación.
* Imagen principal.
* Slogan.
* Botón para ver el menú.
* Productos destacados.
* Beneficios.
* Información de FRIZZA.
* Contacto.
* Redes sociales.

## Menú

Debe permitir:

* Ver todos los productos.
* Filtrar por categoría.
* Ver precio.
* Ver imagen.
* Ver descripción.
* Agregar productos al carrito.

Categorías iniciales:

* Granizados.
* Cócteles.
* Bebidas.
* Combos.
* Toppings.

---

# 5. Carrito

El carrito debe permitir:

* Agregar productos.
* Eliminar productos.
* Aumentar cantidades.
* Disminuir cantidades.
* Calcular subtotal.
* Calcular domicilio cuando corresponda.
* Calcular total.
* Vaciar carrito.

Ejemplo:

Producto:
Granizado de Fresa

Precio:
$12.000

Cantidad:
2

Subtotal:
$24.000

---

# 6. Sistema de pedidos

El cliente podrá crear un pedido proporcionando información básica.

Datos iniciales:

* Nombre.
* Teléfono.
* Dirección.
* Productos.
* Cantidades.
* Total.
* Método de pago.

Estados posibles:

* Pendiente.
* Confirmado.
* En preparación.
* Listo.
* Entregado.
* Cancelado.

El administrador y los empleados podrán actualizar el estado del pedido.

---

# 7. Panel administrativo

El panel administrativo será una de las partes principales del proyecto.

## Dashboard

Debe mostrar información como:

* Ventas del día.
* Ventas de la semana.
* Ventas del mes.
* Número de pedidos.
* Productos vendidos.
* Clientes registrados.
* Productos con inventario bajo.

También podrá incluir gráficos.

---

# 8. Gestión de productos

El administrador podrá:

* Crear productos.
* Editar productos.
* Eliminar productos.
* Activar/desactivar productos.
* Subir imágenes.
* Cambiar precios.
* Cambiar categorías.
* Cambiar descripción.
* Modificar inventario.

Cada producto tendrá inicialmente:

* ID.
* Nombre.
* Descripción.
* Precio.
* Categoría.
* Imagen.
* Stock.
* Estado.
* Fecha de creación.

---

# 9. Inventario

El sistema deberá controlar el inventario de los productos.

Ejemplo:

| Producto        | Stock | Estado        |
| --------------- | ----: | ------------- |
| Granizado Fresa |    32 | Disponible    |
| Granizado Mango |    18 | Disponible    |
| Frizza Blue     |     7 | Stock bajo    |
| Mojito Tropical |     2 | Stock crítico |

El sistema podrá generar alertas cuando un producto tenga poco inventario.

---

# 10. Clientes

El sistema podrá almacenar:

* ID.
* Nombre.
* Teléfono.
* Correo electrónico.
* Dirección.
* Fecha de registro.
* Historial de pedidos.

Posteriormente se podrán crear estadísticas de clientes.

---

# 11. Ventas

El sistema debe registrar las ventas realizadas.

Información:

* ID de venta.
* Fecha.
* Productos.
* Cantidades.
* Cliente.
* Total.
* Método de pago.
* Usuario que registró la venta.

Esto permitirá generar estadísticas.

---

# 12. Inteligencia artificial

FRIZZA tendrá un módulo llamado:

## 🤖 FRIZZA AI

La IA será utilizada como asistente para el administrador.

Funciones previstas:

### Análisis de ventas

Ejemplo:

“Analiza las ventas de los últimos 30 días.”

La IA podrá utilizar los datos disponibles para generar un resumen.

### Recomendaciones

Ejemplo:

“¿Qué productos tuvieron mayor cantidad de ventas?”

### Inventario

Ejemplo:

“¿Qué productos necesitan atención por bajo inventario?”

### Promociones

Ejemplo:

“Genera tres ideas de promociones utilizando los productos disponibles.”

### Marketing

La IA podrá ayudar a generar:

* Publicaciones para Instagram.
* Descripciones de productos.
* Textos promocionales.
* Ideas de campañas.

La IA no deberá inventar datos de ventas. Cuando se utilicen estadísticas reales, deberá recibir información proveniente de la base de datos.

---

# 13. Arquitectura tecnológica

La arquitectura inicial será:

```text
CLIENTE
   ↓
FRONTEND
   ↓
API REST
   ↓
BACKEND
   ↓
BASE DE DATOS
   ↓
SERVICIOS DE IA
```

## Frontend

Tecnologías iniciales:

* HTML5
* CSS3
* JavaScript

Posteriormente se podrá evaluar:

* React
* Next.js

No se utilizarán tecnologías avanzadas antes de comprender su función.

## Backend

Tecnologías previstas:

* Node.js
* Express.js

El backend será responsable de:

* Usuarios.
* Autenticación.
* Productos.
* Pedidos.
* Clientes.
* Inventario.
* Ventas.
* Comunicación con servicios externos.

## Base de datos

Se planea utilizar:

**MongoDB**

Posiblemente mediante:

**MongoDB Atlas**

---

# 14. API

El backend utilizará una API REST.

Ejemplos de rutas futuras:

```text
GET     /api/productos
POST    /api/productos
PUT     /api/productos/:id
DELETE  /api/productos/:id

GET     /api/pedidos
POST    /api/pedidos
PUT     /api/pedidos/:id

GET     /api/clientes
POST    /api/clientes

POST    /api/auth/login
POST    /api/auth/register
```

Las rutas definitivas podrán cambiar durante el desarrollo.

---

# 15. Autenticación y seguridad

El sistema deberá tener autenticación.

Los usuarios tendrán diferentes permisos según su rol.

Roles:

```text
ADMIN
EMPLEADO
CLIENTE
```

El sistema deberá evitar que un usuario normal acceda a funciones administrativas.

La autenticación definitiva se implementará después de tener funcionando el sistema básico.

---

# 16. Diseño

FRIZZA tendrá una identidad visual moderna.

Concepto:

* Refrescante.
* Juvenil.
* Moderno.
* Premium.
* Tropical.
* Minimalista.

La interfaz debe funcionar correctamente en:

* Computadores.
* Tablets.
* Teléfonos.

Se priorizará:

* Buena navegación.
* Botones claros.
* Imágenes grandes.
* Animaciones moderadas.
* Buena legibilidad.
* Diseño responsive.

---

# 17. Estructura inicial del proyecto

La estructura actual es:

```text
FRIZZA/
│
├── index.html
│
├── css/
│   └── estilos.css
│
├── js/
│   └── script.js
│
└── img/
```

A medida que el proyecto crezca podrá convertirse en:

```text
FRIZZA/
│
├── frontend/
│
├── backend/
│
├── database/
│
├── docs/
│
├── img/
│
├── .gitignore
└── README.md
```

La estructura definitiva dependerá de la arquitectura seleccionada.

---

# 18. Control de versiones

El proyecto utilizará Git y GitHub.

Repositorio:

FRIZZA

Las versiones importantes deberán guardarse mediante commits.

Ejemplo:

```text
v0.1 - Estructura inicial
v0.2 - Diseño de página
v0.3 - Catálogo
v0.4 - Carrito
v0.5 - Backend
v0.6 - Base de datos
v0.7 - Login
v0.8 - Panel administrativo
v0.9 - IA
v1.0 - Primera versión completa
```

No se deberán hacer cambios grandes sin guardar previamente una versión estable.

---

# 19. Uso de diferentes IAs

FRIZZA podrá utilizar diferentes herramientas de IA.

## ChatGPT

Responsabilidades principales:

* Planificación.
* Explicación del código.
* Arquitectura.
* Resolución de problemas.
* Revisión de decisiones.
* Aprendizaje.

## Claude

Responsabilidades posibles:

* Revisión de grandes cantidades de código.
* Refactorización.
* Análisis de arquitectura.
* Detección de errores.
* Generación de código cuando sea necesario.

## Cursor

Responsabilidades posibles:

* Edición directa del código.
* Navegación entre archivos.
* Asistencia durante programación.
* Detección de errores.

## Regla principal

Todas las IAs deben trabajar utilizando este documento como referencia.

Ninguna IA debe cambiar la arquitectura principal del proyecto sin que la decisión sea revisada.

---

# 20. Reglas de desarrollo

1. No crear funcionalidades innecesarias.
2. No utilizar tecnologías que todavía no sean necesarias.
3. Explicar las partes importantes del código.
4. Mantener el código organizado.
5. Evitar duplicación innecesaria.
6. Probar cada funcionalidad antes de continuar.
7. Guardar versiones funcionales en Git.
8. No modificar muchos sistemas al mismo tiempo.
9. No asumir cómo funciona un archivo que no ha sido revisado.
10. Priorizar seguridad en usuarios, contraseñas y datos.
11. Mantener separadas las responsabilidades del frontend y backend.
12. La IA debe utilizar datos reales del sistema cuando haga análisis.
13. No introducir información ficticia en estadísticas que se presenten como reales.
14. Mantener el proyecto escalable para futuras funciones.

---

# 21. Roadmap

## FASE 1 — Prototipo

* [x] Crear proyecto.
* [x] Crear estructura inicial.
* [x] Crear HTML inicial.
* [ ] Diseño profesional.
* [ ] Responsive.
* [ ] Catálogo.

## FASE 2 — Frontend funcional

* [ ] Productos dinámicos.
* [ ] Carrito.
* [ ] Cálculo de totales.
* [ ] Formulario de pedido.
* [ ] Validaciones.
* [ ] Mensajes al usuario.

## FASE 3 — Backend

* [ ] Node.js.
* [ ] Express.
* [ ] API REST.
* [ ] Productos.
* [ ] Pedidos.
* [ ] Clientes.

## FASE 4 — Base de datos

* [ ] MongoDB.
* [ ] Modelos.
* [ ] Conexión.
* [ ] CRUD.
* [ ] Persistencia.

## FASE 5 — Administración

* [ ] Login.
* [ ] Roles.
* [ ] Dashboard.
* [ ] Productos.
* [ ] Inventario.
* [ ] Pedidos.
* [ ] Clientes.
* [ ] Ventas.

## FASE 6 — IA

* [ ] Conectar API de IA.
* [ ] FRIZZA AI.
* [ ] Análisis de ventas.
* [ ] Inventario.
* [ ] Marketing.
* [ ] Recomendaciones.

## FASE 7 — Producción

* [ ] Seguridad.
* [ ] Variables de entorno.
* [ ] Deploy.
* [ ] Dominio.
* [ ] Pruebas.
* [ ] Optimización.
* [ ] Documentación.

## FASE 8 — Producto comercial

* [ ] Definir modelo de negocio.
* [ ] Crear demostración.
* [ ] Crear documentación para clientes.
* [ ] Preparar instalación/configuración.
* [ ] Crear sistema de planes.
* [ ] Preparar soporte.

---

# 22. Estado actual

FRIZZA se encuentra actualmente en:

**FASE 1 — PROTOTIPO**

Ya existe:

* Estructura inicial del proyecto.
* `index.html`.
* `css/estilos.css`.
* `js/script.js`.
* Carpeta `img`.

El siguiente objetivo técnico es construir el diseño visual profesional del frontend.

---

# 23. Principio del proyecto

FRIZZA no debe convertirse únicamente en un proyecto para “hacer que funcione”.

El objetivo es aprender a construir software de principio a fin:

```text
IDEA
 ↓
REQUISITOS
 ↓
DISEÑO
 ↓
PROGRAMACIÓN
 ↓
BASE DE DATOS
 ↓
API
 ↓
IA
 ↓
PRUEBAS
 ↓
DEPLOY
 ↓
PRODUCTO
```

FRIZZA será utilizado como proyecto de aprendizaje para posteriormente desarrollar soluciones de software para empresas reales.
