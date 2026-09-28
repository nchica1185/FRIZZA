e voy a dejar todo el contexto y las decisiones que ya hemos tomado. Quiero que uses esto junto con el Documento Maestro V2 que ya tienes como fuente de verdad del proyecto.

━━━━━━━━━━━━━━━━━━━━━━

¿QUÉ ES FRIZZA?
━━━━━━━━━━━━━━━━━━━━━━

FRIZZA es un proyecto de software empresarial para un negocio ficticio de granizados, cócteles y bebidas, ubicado en Armenia, Quindío, Colombia.

Slogan:

"Sabor que se siente frío."

No quiero construir solamente una página web bonita.

Quiero construir un SOFTWARE COMERCIAL REAL que pueda funcionar para un negocio y que posteriormente pueda evolucionar hacia un SaaS para múltiples negocios.

La visión final incluye:

Página pública para clientes.
Catálogo.
Carrito.
Checkout.
Pedidos.
Clientes.
Productos.
Categorías.
Inventario.
Ventas.
Dashboard administrativo.
Usuarios y roles.
Autenticación segura.
IA para análisis del negocio.
Pagos.
Preparación futura para SaaS.

━━━━━━━━━━━━━━━━━━━━━━
2. VISIÓN DEL PRODUCTO
━━━━━━━━━━━━━━━━━━━━━━

Quiero que FRIZZA tenga apariencia y funcionamiento de un producto comercial profesional.

NO quiero:

Una plantilla genérica.
Una página de práctica.
Código improvisado.
Funciones falsas que aparenten funcionar.
Datos inventados presentados como reales.
Arquitectura innecesariamente complicada.

Quiero construirlo de manera progresiva y profesional.

━━━━━━━━━━━━━━━━━━━━━━
3. STACK ACTUAL
━━━━━━━━━━━━━━━━━━━━━━

Inicialmente utilizaremos:

Frontend:

HTML5
CSS3
JavaScript

Backend:

Node.js
Express

Base de datos:

MongoDB
MongoDB Atlas

API:

REST API

Control de versiones:

Git
GitHub

Repositorio:

https://github.com/nchica1185/FRIZZA

No quiero migrar a React, Next.js u otra tecnología sin analizar primero si realmente aporta valor.

Si consideras que posteriormente debemos cambiar alguna tecnología por razones técnicas importantes, explícame primero el motivo y las ventajas/desventajas.

━━━━━━━━━━━━━━━━━━━━━━
4. ARQUITECTURA
━━━━━━━━━━━━━━━━━━━━━━

La arquitectura conceptual es:

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

El backend debe quedar preparado para crecer sin convertir el proyecto en un sistema innecesariamente complejo.

La idea inicial es un monolito modular bien organizado.

━━━━━━━━━━━━━━━━━━━━━━
5. PÁGINA PÚBLICA
━━━━━━━━━━━━━━━━━━━━━━

La página pública debe incluir:

Navbar.
Hero.
Identidad de marca FRIZZA.
Categorías.
Catálogo.
Tarjetas de productos.
Carrito.
Checkout.
Nosotros.
Contacto.
Footer.
Responsive para móvil, tablet y PC.

Categorías iniciales:

Granizados.
Cócteles.
Bebidas.
Combos.
Toppings.

Los productos posteriormente deberán venir del backend y MongoDB.

Por ahora podemos utilizar datos temporales para construir la interfaz, pero debemos dejar claramente preparada la estructura para reemplazarlos posteriormente por datos reales de la API.

━━━━━━━━━━━━━━━━━━━━━━
6. CARRITO Y PEDIDOS
━━━━━━━━━━━━━━━━━━━━━━

El cliente debe poder:

Ver productos.
Agregar productos.
Aumentar cantidades.
Disminuir cantidades.
Eliminar productos.
Ver subtotal.
Ver costo de envío cuando corresponda.
Ver total.
Ir al checkout.
Introducir sus datos.
Seleccionar método de pago.
Crear el pedido.
Recibir confirmación.

Los pedidos tendrán estados:

Pendiente.
Confirmado.
En preparación.
Listo.
Entregado.
Cancelado.

El estado del pago debe manejarse por separado del estado del pedido.

━━━━━━━━━━━━━━━━━━━━━━
7. DATOS DEL PEDIDO
━━━━━━━━━━━━━━━━━━━━━━

Un pedido debe poder manejar:

Cliente.
Nombre.
Teléfono.
Dirección.
Productos.
Cantidades.
Total.
Método de pago.
Estado del pedido.
Estado del pago.
Fecha.
Usuario responsable cuando corresponda.

Inicialmente el cliente podrá comprar sin crear una cuenta.

Más adelante podremos agregar cuentas de clientes.

━━━━━━━━━━━━━━━━━━━━━━
8. ADMINISTRACIÓN
━━━━━━━━━━━━━━━━━━━━━━

El sistema tendrá un panel administrativo profesional.

Debe incluir posteriormente:

Dashboard:

Ventas del día.
Ventas de la semana.
Ventas del mes.
Pedidos.
Productos.
Clientes.
Inventario.
Alertas de stock.
Ingresos.

Productos:

Crear.
Leer.
Editar.
Eliminar.
Nombre.
Descripción.
Precio.
Categoría.
Imagen.
Stock.
Estado.

Categorías:

Crear.
Editar.
Eliminar.
Activar/desactivar.

Pedidos:

Ver pedidos.
Ver detalles.
Cambiar estados.
Consultar cliente.
Consultar productos.
Consultar total.

Clientes:

Datos del cliente.
Teléfono.
Email cuando exista.
Dirección.
Fecha de registro.
Historial de pedidos.

Inventario:

Inicialmente será inventario de productos terminados.

Más adelante podremos evolucionarlo a inventario por ingredientes.

Ventas:

Debe existir una separación conceptual entre pedidos y ventas.

━━━━━━━━━━━━━━━━━━━━━━
9. USUARIOS Y ROLES
━━━━━━━━━━━━━━━━━━━━━━

Inicialmente:

ADMIN
EMPLEADO

Más adelante:

CLIENTE

La autenticación deberá ser segura.

NO quiero depender de sessionStorage como mecanismo de seguridad.

Posteriormente utilizaremos autenticación mediante tokens/sesiones seguras, contraseñas protegidas, autorización por roles y protección de rutas.

━━━━━━━━━━━━━━━━━━━━━━
10. FRIZZA AI
━━━━━━━━━━━━━━━━━━━━━━

Más adelante habrá un módulo llamado:

FRIZZA AI

Su función será ayudar al negocio a analizar información real.

Por ejemplo:

Analizar ventas.
Detectar productos con buen rendimiento.
Detectar productos con bajo movimiento.
Recomendar atención al inventario.
Generar ideas de promociones.
Generar textos para redes sociales.
Analizar tendencias del negocio.
Ayudar a tomar decisiones basadas en datos.

IMPORTANTE:

La IA NO debe inventar estadísticas.

Cuando analice ventas o inventario deberá utilizar datos reales provenientes de la base de datos.

La IA se implementará después de tener funcionando correctamente backend + base de datos + administración.

━━━━━━━━━━━━━━━━━━━━━━
11. PAGOS
━━━━━━━━━━━━━━━━━━━━━━

Inicialmente podemos manejar:

Efectivo.
Pago contra entrega.
Pago en el establecimiento.

Más adelante quiero integrar una pasarela de pago online como Mercado Pago o Stripe.

No implementes pagos online ahora si todavía no existe la infraestructura necesaria.

━━━━━━━━━━━━━━━━━━━━━━
12. PREPARACIÓN PARA SaaS
━━━━━━━━━━━━━━━━━━━━━━

La visión final es convertir FRIZZA en un SaaS.

Pero NO quiero implementar multi-tenancy completo ahora.

Primero debemos construir un producto funcional para un negocio.

La arquitectura debe quedar preparada conceptualmente para que posteriormente podamos tener:

Negocio
→ Productos
→ Pedidos
→ Clientes
→ Ventas
→ Inventario
→ Usuarios

y posteriormente:

Negocio 1
Negocio 2
Negocio 3
...

con los datos correctamente aislados.

━━━━━━━━━━━━━━━━━━━━━━
13. SEGURIDAD
━━━━━━━━━━━━━━━━━━━━━━

Quiero que la seguridad se tenga en cuenta desde el principio.

Debemos considerar:

Autenticación.
Autorización.
Roles.
Protección de rutas.
Contraseñas protegidas.
Variables de entorno.
No exponer claves secretas.
Validación de datos.
CORS.
Manejo correcto de errores.
Protección del panel administrativo.
Validación tanto frontend como backend.

No quiero secretos o API keys directamente dentro del código.

━━━━━━━━━━━━━━━━━━━━━━
14. API FUTURA
━━━━━━━━━━━━━━━━━━━━━━

La API debe terminar teniendo una estructura similar a:

/api/productos
/api/categorias
/api/pedidos
/api/clientes
/api/ventas
/api/auth/login
/api/auth/register

Puedes proponer una estructura mejor si existe una razón técnica clara.

━━━━━━━━━━━━━━━━━━━━━━
15. FORMA DE TRABAJAR
━━━━━━━━━━━━━━━━━━━━━━

Quiero que trabajes como un desarrollador senior guiándome durante el proyecto.

Pero recuerda que estoy aprendiendo desarrollo de software.

Por eso:

Explícame decisiones importantes.
No me ocultes errores.
No hagas cambios gigantes sin explicar qué estás haciendo.
Trabaja por etapas.
Mantén el proyecto funcional.
Prueba lo que construyas.
Si algo falla, corrígelo antes de continuar con funcionalidades dependientes.
No asumas que algo funciona si no lo has probado.
No inventes archivos o funcionalidades existentes.
Antes de reutilizar código existente, revisa el archivo.
Mantén el código organizado.
Evita dependencias innecesarias.
Evita sobreingeniería.

Puedes crear archivos nuevos cuando sean necesarios.

━━━━━━━━━━━━━━━━━━━━━━
16. FLUJO DE DESARROLLO
━━━━━━━━━━━━━━━━━━━━━━

Quiero trabajar aproximadamente así:

Diseñar.
Implementar.
Probar.
Corregir.
Revisar.
Guardar cambios en Git.
Subir a GitHub.
Continuar con la siguiente etapa.

GitHub será la fuente de verdad del proyecto.

No quiero acumular cambios enormes sin commits.

━━━━━━━━━━━━━━━━━━━━━━
17. ROADMAP
━━━━━━━━━━━━━━━━━━━━━━

FASE 1 — Diseño y experiencia pública

Construir página pública profesional.
Responsive.
Catálogo visual.
Navegación.
Identidad visual.
Experiencia comercial.

FASE 2 — Tienda funcional

Productos dinámicos.
Carrito.
Cantidades.
Totales.
Checkout.
Validaciones.
Creación de pedidos.
Confirmación.

FASE 3 — Backend

Node.js.
Express.
REST API.
Productos.
Categorías.
Pedidos.
Clientes.
Ventas.

FASE 4 — Base de datos

MongoDB.
MongoDB Atlas.
Modelos.
Conexión.
CRUD.
Persistencia.
Validaciones.

FASE 5 — Panel administrativo

Login.
Roles.
Dashboard.
Productos.
Categorías.
Pedidos.
Clientes.
Inventario.
Ventas.

FASE 6 — Seguridad y producción

Autenticación segura.
Autorización.
Protección de rutas.
Variables de entorno.
Validaciones.
Manejo de errores.
Deployment.

FASE 7 — FRIZZA AI

Análisis de ventas.
Inventario.
Recomendaciones.
Marketing.
Generación de contenido.
Uso de datos reales.

FASE 8 — Producto comercial / SaaS

Preparación multi-negocio.
Planes.
Suscripciones.
Onboarding.
Documentación.
Demo.
Soporte.
Lanzamiento.

━━━━━━━━━━━━━━━━━━━━━━
18. ESTADO ACTUAL
━━━━━━━━━━━━━━━━━━━━━━

Estamos comenzando la construcción desde cero.

El Documento Maestro V2 ya está actualizado y debe considerarse la fuente oficial.

El repositorio GitHub ya existe:

https://github.com/nchica1185/FRIZZA

No quiero volver a quedarnos únicamente en planificación.

QUIERO QUE EMPIECES A CONSTRUIR.

━━━━━━━━━━━━━━━━━━━━━━
19. QUÉ QUIERO AHORA
━━━━━━━━━━━━━━━━━━━━━━

Empieza por la FASE 1.

Construye desde cero la experiencia pública de FRIZZA.

Quiero que se vea como un producto comercial real.

Prioridades:

Diseño visual profesional.
Identidad FRIZZA.
Responsive.
Navegación.
Hero.
Categorías.
Catálogo.
Tarjetas de productos.
Carrito visual y funcional.
Nosotros.
Contacto.
Footer.
Microinteracciones.
Buena experiencia de usuario.

Utiliza HTML + CSS + JavaScript inicialmente.

No hagas todavía:

Backend.
MongoDB.
Login.
Panel administrativo.
IA.
Pagos online.
Multi-tenancy.

Primero necesitamos una excelente base pública.

━━━━━━━━━━━━━━━━━━━━━━
20. REGLA FINAL
━━━━━━━━━━━━━━━━━━━━━━

No quiero que me entregues únicamente código.

Quiero que realmente construyas el proyecto, revises lo que estás creando y me indiques cómo probarlo.

Si detectas un problema arquitectónico importante, detente y explícame la decisión antes de continuar.

Si puedes resolver algo de forma razonable sin bloquear el desarrollo, hazlo y documenta la decisión.

El objetivo final es que FRIZZA termine siendo un software comercial real que podamos presentar, probar con un negocio y posteriormente convertir en un SaaS.

Empieza ahora con la implementación de la FASE 1.