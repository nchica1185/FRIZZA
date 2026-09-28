# 🍹 FRIZZA

## Documento Maestro del Proyecto

**Versión:** 2.0
**Estado:** Desarrollo de producto
**Tipo:** Software empresarial + tienda web + sistema de gestión + IA
**Empresa de demostración:** FRIZZA
**Ubicación:** Armenia, Quindío, Colombia
**Slogan:** “Sabor que se siente frío.”

---

# 1. Visión del proyecto

FRIZZA es un proyecto de software empresarial desarrollado inicialmente alrededor de un negocio ficticio de granizados, cócteles y bebidas.

El objetivo es construir un **producto funcional y comercial**, no solamente una página web de demostración.

El sistema debe permitir que un negocio pueda:

* Mostrar sus productos en Internet.
* Recibir pedidos.
* Administrar productos.
* Controlar inventario.
* Gestionar clientes.
* Gestionar ventas.
* Administrar empleados.
* Consultar estadísticas.
* Utilizar herramientas de inteligencia artificial.

FRIZZA será inicialmente el negocio utilizado para desarrollar y demostrar el sistema.

La arquitectura deberá permitir que posteriormente el software pueda convertirse en un **SaaS multi-negocio**, donde diferentes empresas utilicen la misma plataforma sin acceder a los datos de otros negocios.

---

# 2. Objetivo principal

Construir una aplicación web empresarial funcional que pueda ser presentada como un producto comercial real.

El sistema debe tener dos experiencias principales:

### Cliente

Una página web pública donde pueda:

* Conocer el negocio.
* Ver el menú.
* Consultar productos.
* Agregar productos al carrito.
* Realizar pedidos.
* Seleccionar método de entrega.
* Seleccionar método de pago.
* Consultar información del pedido.

### Negocio

Un panel privado donde pueda:

* Administrar productos.
* Administrar categorías.
* Gestionar pedidos.
* Gestionar clientes.
* Controlar inventario.
* Registrar ventas.
* Consultar estadísticas.
* Administrar usuarios.
* Utilizar FRIZZA AI.
* Configurar el negocio.

---

# 3. Visión comercial

El proyecto se desarrollará inicialmente como una solución para FRIZZA.

Sin embargo, las decisiones importantes de arquitectura deberán evitar que el sistema quede completamente limitado a una sola empresa.

La evolución prevista será:

```text
FRIZZA
   ↓
Producto funcional
   ↓
Producto comercial
   ↓
Preparación multi-negocio
   ↓
SaaS
```

La primera versión no necesita implementar completamente el sistema multi-negocio.

Debe estar **preparada para evolucionar hacia él**.

---

# 4. Usuarios

## 4.1 Cliente

El cliente podrá utilizar la tienda sin necesidad de crear una cuenta inicialmente.

Podrá:

* Ver productos.
* Filtrar categorías.
* Consultar detalles.
* Agregar productos al carrito.
* Modificar cantidades.
* Realizar pedidos.
* Registrar sus datos para el pedido.
* Consultar el estado de su pedido.

Posteriormente podrá implementarse una cuenta de cliente.

---

## 4.2 Empleado

El empleado tendrá acceso a las funciones necesarias para la operación diaria.

Podrá:

* Iniciar sesión.
* Consultar pedidos.
* Cambiar estados de pedidos según sus permisos.
* Consultar productos.
* Consultar inventario.
* Registrar ventas.
* Consultar información necesaria para la operación.

---

## 4.3 Administrador del negocio

Tendrá acceso completo al negocio.

Podrá:

* Gestionar productos.
* Gestionar categorías.
* Gestionar inventario.
* Gestionar pedidos.
* Gestionar clientes.
* Gestionar ventas.
* Gestionar empleados.
* Consultar estadísticas.
* Configurar el negocio.
* Utilizar FRIZZA AI.

---

## 4.4 Futuro administrador de plataforma

Cuando el sistema se convierta en SaaS existirá un nivel superior encargado de administrar la plataforma completa.

Podrá:

* Crear negocios.
* Gestionar cuentas de negocios.
* Gestionar planes.
* Gestionar suscripciones.
* Administrar la plataforma.
* Consultar información técnica y comercial necesaria.

Este rol no será necesario para la primera versión de FRIZZA.

---

# 5. Página pública

La página pública debe sentirse como una página comercial real.

Debe funcionar correctamente en:

* Computador.
* Tablet.
* Teléfono.

## Inicio

Debe incluir:

* Logo.
* Navegación.
* Hero principal.
* Slogan.
* Productos destacados.
* Categorías.
* Beneficios.
* Información del negocio.
* Botones de acción.
* Redes sociales.
* Información de contacto.

## Menú

Debe permitir:

* Ver todos los productos.
* Filtrar por categoría.
* Consultar precios.
* Consultar imágenes.
* Consultar descripciones.
* Agregar productos al carrito.

Categorías iniciales:

* Granizados.
* Cócteles.
* Bebidas.
* Combos.
* Toppings.

---

# 6. Catálogo de productos

Cada producto deberá poder manejar:

* ID.
* Nombre.
* Descripción.
* Precio.
* Categoría.
* Imagen.
* Stock.
* Estado.
* Fecha de creación.
* Fecha de actualización.

Estados:

```text
ACTIVO
INACTIVO
```

Los productos inactivos no deberán aparecer como disponibles para realizar pedidos.

Posteriormente podrán incorporarse:

* Tamaños.
* Sabores.
* Extras.
* Toppings.
* Variaciones de precio.
* Productos compuestos.

---

# 7. Carrito

El carrito permitirá:

* Agregar productos.
* Eliminar productos.
* Aumentar cantidades.
* Disminuir cantidades.
* Vaciar carrito.
* Calcular subtotal.
* Calcular domicilio.
* Calcular descuentos cuando corresponda.
* Calcular total.

Ejemplo:

```text
Granizado de Fresa
$12.000 x 2

Subtotal: $24.000
Domicilio: $5.000

TOTAL: $29.000
```

Los cálculos importantes deberán validarse también en el backend para evitar manipulación desde el navegador.

---

# 8. Checkout y pedidos

El cliente podrá realizar un pedido proporcionando:

* Nombre.
* Teléfono.
* Dirección cuando corresponda.
* Productos.
* Cantidades.
* Método de entrega.
* Método de pago.

Métodos de entrega iniciales:

```text
DOMICILIO
RECOGER_EN_LOCAL
```

Estados del pedido:

```text
PENDIENTE
CONFIRMADO
EN_PREPARACION
LISTO
ENTREGADO
CANCELADO
```

El sistema deberá controlar las transiciones permitidas entre estados.

---

# 9. Pagos

El sistema deberá separar:

**Estado del pedido**

de:

**Estado del pago**

Ejemplo:

```text
Pedido:
EN_PREPARACION

Pago:
PAGADO
```

Estados iniciales de pago:

```text
PENDIENTE
PAGADO
RECHAZADO
REEMBOLSADO
```

Inicialmente podrá existir pago contra entrega o en el establecimiento.

Posteriormente se podrá integrar una pasarela de pago.

La integración de pagos en línea se realizará únicamente cuando el sistema básico de pedidos esté estable.

---

# 10. Panel administrativo

El panel administrativo será una de las partes principales del producto.

Debe verse y funcionar como un software empresarial real.

## Dashboard

Debe mostrar información como:

* Ventas del día.
* Ventas de la semana.
* Ventas del mes.
* Pedidos pendientes.
* Pedidos completados.
* Ticket promedio.
* Productos vendidos.
* Clientes.
* Productos con stock bajo.

También podrá incluir:

* Gráficos.
* Comparaciones por periodos.
* Productos más vendidos.
* Métodos de pago.
* Horarios con mayor actividad.

Las estadísticas deberán calcularse a partir de datos reales de la base de datos.

---

# 11. Gestión de productos

El administrador podrá:

* Crear productos.
* Editar productos.
* Eliminar productos.
* Activar productos.
* Desactivar productos.
* Subir imágenes.
* Modificar precios.
* Modificar categorías.
* Modificar descripciones.
* Gestionar stock.

El sistema deberá validar la información antes de guardarla.

---

# 12. Inventario

La primera versión utilizará un modelo sencillo de inventario basado en productos.

El sistema deberá:

* Mostrar stock.
* Reducir stock según las reglas definidas.
* Detectar stock bajo.
* Detectar stock crítico.
* Impedir pedidos cuando un producto no esté disponible.
* Mostrar alertas al administrador.

Ejemplo:

```text
Producto              Stock       Estado

Granizado Fresa       32          DISPONIBLE
Granizado Mango       18          DISPONIBLE
Frizza Blue            7          STOCK_BAJO
Mojito Tropical        2          STOCK_CRITICO
```

En una versión posterior se podrá implementar inventario por ingredientes.

Ejemplo:

```text
Fresa
Mango
Hielo
Azúcar
Ron
Vodka
Jarabes
```

Esto permitirá controlar el inventario real utilizado en la preparación de bebidas.

---

# 13. Clientes

El sistema podrá almacenar información de clientes asociada a sus pedidos.

Datos posibles:

* ID.
* Nombre.
* Teléfono.
* Correo.
* Dirección.
* Fecha de registro.
* Historial de pedidos.

La primera versión permitirá realizar pedidos sin cuenta.

Posteriormente se podrá implementar:

* Registro.
* Inicio de sesión.
* Historial personal.
* Direcciones guardadas.
* Perfil de cliente.

---

# 14. Ventas

Las ventas representarán las operaciones comerciales realizadas por el negocio.

Una venta podrá estar relacionada con un pedido, pero el sistema también deberá permitir registrar ventas realizadas directamente en el establecimiento.

Esto permitirá manejar:

```text
Venta desde la página web
Venta desde el establecimiento
```

La información podrá incluir:

* ID.
* Fecha.
* Productos.
* Cantidades.
* Cliente cuando exista.
* Total.
* Método de pago.
* Usuario que registró la venta.

---

# 15. FRIZZA AI

FRIZZA AI será el asistente inteligente del sistema.

Su función será ayudar al administrador a comprender la información del negocio y generar contenido útil.

## Análisis de ventas

Ejemplos:

```text
¿Cuánto vendimos este mes?

¿Qué productos se vendieron más?

¿Cuál fue nuestro día con mayores ventas?

¿Cómo fueron las ventas de los últimos 30 días?
```

## Inventario

Ejemplos:

```text
¿Qué productos tienen stock bajo?

¿Qué productos necesitan atención?

¿Qué productos se están agotando?
```

## Marketing

Podrá generar:

* Publicaciones para Instagram.
* Descripciones.
* Promociones.
* Ideas de campañas.
* Textos publicitarios.

## Regla fundamental

La IA no deberá inventar estadísticas.

El flujo será:

```text
BASE DE DATOS
      ↓
BACKEND
      ↓
CÁLCULO DE DATOS
      ↓
FRIZZA AI
      ↓
RESPUESTA
```

La IA interpretará información real proporcionada por el sistema.

---

# 16. Arquitectura

Arquitectura inicial:

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
SERVICIOS EXTERNOS
```

Servicios externos podrán incluir:

* IA.
* Almacenamiento de imágenes.
* Pagos.
* Correo.
* Notificaciones.

El backend será el encargado de controlar la comunicación con estos servicios.

---

# 17. Tecnologías

## Frontend inicial

* HTML5.
* CSS3.
* JavaScript.

Se priorizará comprender correctamente estas tecnologías antes de incorporar frameworks.

## Backend

* Node.js.
* Express.js.

## Base de datos

* MongoDB.
* MongoDB Atlas.

## Control de versiones

* Git.
* GitHub.

## Futuras tecnologías

Podrán evaluarse posteriormente:

* React.
* Next.js.
* Servicios cloud.
* Pasarelas de pago.
* Servicios de almacenamiento.
* Herramientas avanzadas de IA.

No se incorporarán tecnologías solamente por ser populares.

---

# 18. API

El backend utilizará una API REST.

Ejemplos iniciales:

```text
GET     /api/productos
POST    /api/productos
GET     /api/productos/:id
PUT     /api/productos/:id
DELETE  /api/productos/:id

GET     /api/categorias
POST    /api/categorias

GET     /api/pedidos
POST    /api/pedidos
GET     /api/pedidos/:id
PUT     /api/pedidos/:id

GET     /api/clientes
GET     /api/clientes/:id

GET     /api/ventas
POST    /api/ventas

POST    /api/auth/login
POST    /api/auth/register
```

Las rutas podrán evolucionar durante el desarrollo.

---

# 19. Autenticación y seguridad

La seguridad será parte de la arquitectura desde las primeras versiones del backend.

El sistema deberá contemplar:

* Autenticación.
* Autorización.
* Roles.
* Protección de rutas.
* Contraseñas protegidas.
* Validación de entradas.
* Variables de entorno.
* Protección de información sensible.
* CORS correctamente configurado.
* Manejo de errores.
* Control de acceso al panel administrativo.

Roles iniciales:

```text
ADMIN
EMPLEADO
```

El rol CLIENTE podrá incorporarse cuando se implemente el sistema de cuentas.

---

# 20. Preparación para SaaS

La primera versión funcionará principalmente para FRIZZA.

Sin embargo, la arquitectura deberá permitir posteriormente asociar la información a un negocio.

Conceptualmente:

```text
NEGOCIO
   │
   ├── Productos
   ├── Pedidos
   ├── Clientes
   ├── Ventas
   ├── Inventario
   └── Usuarios
```

En la futura versión SaaS:

```text
PLATAFORMA
   │
   ├── NEGOCIO A
   │     ├── Productos
   │     ├── Pedidos
   │     └── Ventas
   │
   ├── NEGOCIO B
   │     ├── Productos
   │     ├── Pedidos
   │     └── Ventas
   │
   └── NEGOCIO C
         ├── Productos
         ├── Pedidos
         └── Ventas
```

Un negocio nunca deberá poder acceder a los datos de otro negocio.

La implementación completa de multi-tenencia queda para una fase posterior.

---

# 21. Diseño

FRIZZA debe tener una identidad visual:

* Moderna.
* Premium.
* Refrescante.
* Juvenil.
* Tropical.
* Minimalista.

La interfaz debe transmitir la sensación de una marca comercial real.

Debe priorizar:

* Excelente navegación.
* Diseño responsive.
* Jerarquía visual.
* Botones claros.
* Imágenes atractivas.
* Animaciones moderadas.
* Buen rendimiento.
* Accesibilidad básica.
* Experiencia móvil.

La página pública y el panel administrativo tendrán diseños diferentes, pero deberán pertenecer al mismo producto.

---

# 22. Estructura del proyecto

La estructura actual:

```text
FRIZZA/
│
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
├── img/
└── docs/
    └── DOCUMENTO_MAESTRO.md
```

A medida que se implemente el backend:

```text
FRIZZA/
│
├── frontend/
├── backend/
├── docs/
├── img/
├── .gitignore
└── README.md
```

La estructura definitiva dependerá de la arquitectura implementada.

---

# 23. Git y GitHub

El proyecto utiliza Git y GitHub.

Repositorio:

```text
nchica1185/FRIZZA
```

La rama principal es:

```text
main
```

Cada avance importante deberá guardarse mediante commits.

Ejemplos:

```text
chore: estructura inicial de FRIZZA
feat: diseño de la página pública
feat: catálogo de productos
feat: carrito de compras
feat: sistema de pedidos
feat: backend inicial
feat: conexión con MongoDB
feat: panel administrativo
feat: autenticación
feat: FRIZZA AI
```

No se deberán realizar cambios grandes sin conservar una versión funcional anterior.

---

# 24. Trabajo con diferentes IAs

El proyecto podrá utilizar diferentes herramientas de IA.

## ChatGPT

Responsabilidades:

* Arquitectura.
* Planificación.
* Explicación.
* Aprendizaje.
* Resolución de problemas.
* Revisión de decisiones.
* Organización del proyecto.

## Claude

Responsabilidades:

* Análisis de arquitectura.
* Revisión de grandes cantidades de código.
* Refactorización.
* Detección de problemas.
* Segunda opinión técnica.

## Cursor

Responsabilidades:

* Edición del código.
* Implementación dentro del proyecto.
* Navegación entre archivos.
* Asistencia durante programación.
* Detección de errores.

## GitHub

Será la fuente de verdad del código.

Ninguna IA deberá asumir que una modificación realizada por otra IA es correcta automáticamente.

Las decisiones importantes deberán revisarse antes de incorporarse al proyecto.

---

# 25. Reglas de desarrollo

1. Construir primero funcionalidades reales y útiles.
2. No crear funcionalidades innecesarias.
3. Mantener el código organizado.
4. No modificar archivos sin revisarlos.
5. No asumir contenido de archivos que no hayan sido revisados.
6. Probar cada funcionalidad antes de continuar.
7. Mantener una versión funcional del proyecto.
8. Utilizar Git para controlar cambios.
9. Explicar las partes importantes del código.
10. Priorizar seguridad.
11. Validar datos en frontend y backend.
12. Mantener separadas las responsabilidades.
13. No exponer claves secretas.
14. No inventar estadísticas.
15. Utilizar datos reales para FRIZZA AI.
16. Diseñar pensando en evolución futura.
17. No incorporar tecnologías innecesarias.
18. Evitar modificar demasiados módulos simultáneamente.
19. Resolver errores antes de continuar con funcionalidades dependientes.
20. Mantener la experiencia del cliente como una prioridad.

---

# 26. MVP comercial

Antes de construir funciones avanzadas, se deberá conseguir una primera versión completamente funcional.

El MVP deberá incluir:

### Cliente

* Página pública.
* Catálogo.
* Categorías.
* Carrito.
* Checkout.
* Creación de pedidos.
* Estado del pedido.

### Negocio

* Login.
* Dashboard.
* Productos.
* Categorías.
* Pedidos.
* Clientes.
* Inventario.
* Ventas.

### Sistema

* Backend.
* API REST.
* MongoDB.
* Autenticación.
* Validaciones.
* Seguridad básica.

Una vez estable el MVP:

* Pagos online.
* Notificaciones.
* FRIZZA AI.
* Reportes avanzados.
* Multi-negocio.
* Suscripciones.

---

# 27. Roadmap

## FASE 1 — Diseño y experiencia pública

* [x] Crear proyecto.
* [x] Crear estructura inicial.
* [x] Crear HTML inicial.
* [x] Crear Documento Maestro.
* [x] Crear repositorio GitHub.
* [ ] Diseño visual comercial.
* [ ] Responsive.
* [ ] Catálogo visual.
* [ ] Navegación completa.
* [ ] Página pública terminada.

## FASE 2 — Tienda funcional

* [ ] Productos dinámicos.
* [ ] Carrito.
* [ ] Cantidades.
* [ ] Cálculo de totales.
* [ ] Checkout.
* [ ] Validaciones.
* [ ] Creación de pedidos.
* [ ] Confirmación al cliente.

## FASE 3 — Backend

* [ ] Node.js.
* [ ] Express.
* [ ] API REST.
* [ ] Productos.
* [ ] Categorías.
* [ ] Pedidos.
* [ ] Clientes.
* [ ] Ventas.

## FASE 4 — Base de datos

* [ ] MongoDB.
* [ ] MongoDB Atlas.
* [ ] Modelos.
* [ ] Conexión.
* [ ] CRUD.
* [ ] Persistencia.
* [ ] Validaciones.

## FASE 5 — Panel administrativo

* [ ] Login.
* [ ] Roles.
* [ ] Dashboard.
* [ ] Gestión de productos.
* [ ] Gestión de categorías.
* [ ] Gestión de pedidos.
* [ ] Gestión de clientes.
* [ ] Inventario.
* [ ] Ventas.

## FASE 6 — Seguridad y producción

* [ ] Autenticación segura.
* [ ] Autorización.
* [ ] Variables de entorno.
* [ ] Validación backend.
* [ ] Manejo de errores.
* [ ] Protección de rutas.
* [ ] Pruebas.
* [ ] Deploy.

## FASE 7 — FRIZZA AI

* [ ] Conectar servicio de IA.
* [ ] Análisis de ventas.
* [ ] Análisis de inventario.
* [ ] Marketing.
* [ ] Recomendaciones.
* [ ] Control de costos.
* [ ] Protección de datos.

## FASE 8 — Producto comercial

* [ ] Mejorar onboarding.
* [ ] Preparar configuración de negocios.
* [ ] Preparar arquitectura multi-negocio.
* [ ] Crear sistema de planes.
* [ ] Suscripciones.
* [ ] Documentación para clientes.
* [ ] Demo comercial.
* [ ] Soporte.
* [ ] Preparar lanzamiento.

---

# 28. Estado actual

Actualmente FRIZZA se encuentra en:

**FASE 1 — Diseño y experiencia pública**

Ya existe:

* Proyecto local.
* HTML inicial.
* CSS.
* JavaScript.
* Carpeta de imágenes.
* Documento Maestro.
* Repositorio GitHub.
* Primer commit.
* Rama `main`.
* Repositorio remoto configurado.

El siguiente objetivo es construir la **experiencia pública comercial de FRIZZA**.

La página debe empezar a verse como un producto que podría mostrarse a un cliente real.

---

# 29. Principio del proyecto

FRIZZA no será desarrollado únicamente para cumplir una actividad académica.

El objetivo es aprender a construir un producto de software completo y profesional:

```text
IDEA
  ↓
REQUISITOS
  ↓
ARQUITECTURA
  ↓
DISEÑO
  ↓
FRONTEND
  ↓
BACKEND
  ↓
BASE DE DATOS
  ↓
AUTENTICACIÓN
  ↓
PEDIDOS Y VENTAS
  ↓
ADMINISTRACIÓN
  ↓
IA
  ↓
PRUEBAS
  ↓
DEPLOY
  ↓
PRODUCTO COMERCIAL
  ↓
SAAS
```

FRIZZA será primero el negocio de demostración.

El objetivo final será tener un software que pueda evolucionar hasta convertirse en una plataforma que diferentes negocios puedan utilizar.

**Principio fundamental:**

> Construir como producto comercial desde el principio, pero evolucionar hacia SaaS paso a paso.
