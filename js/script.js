/* FRIZZA · Página pública (Fase 2). Depende de js/productos.js y js/api.js */

const SABORES = {
  fresa: ['#FF4F79', '#FFB3C4'],
  mango: ['#FFB627', '#FFE29A'],
  azul: ['#12A7E0', '#9BE3FA'],
  menta: ['#2CCB9A', '#A6F0D8']
};
const precio = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
const $ = (id) => document.getElementById(id);
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const DOMICILIO_FIJO = 5000;

const carrito = [];
const seleccionCheckout = {
  metodoEntrega: 'DOMICILIO',
  metodoPago: 'EFECTIVO'
};
const toast = $('toast');
let tToast;
let productosCatalogo = [];

function mostrarToast(mensaje, esError = false) {
  if (!toast) return;
  toast.textContent = mensaje;
  toast.classList.toggle('error', esError);
  toast.classList.add('on');
  clearTimeout(tToast);
  tToast = setTimeout(() => {
    toast.classList.remove('on');
    toast.classList.remove('error');
  }, 3000);
}

function setFieldError(input, message) {
  if (!input) return;
  const errorId = input.getAttribute('aria-describedby');
  const errorNode = errorId ? document.getElementById(errorId) : null;

  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (errorNode) {
    errorNode.textContent = message || '';
    errorNode.hidden = !message;
  }
}

function setGroupError(fieldset, message) {
  if (!fieldset) return;
  const errorId = fieldset.getAttribute('aria-describedby');
  const errorNode = errorId ? document.getElementById(errorId) : null;

  fieldset.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (errorNode) {
    errorNode.textContent = message || '';
    errorNode.hidden = !message;
  }
}

function limpiarErroresFormulario() {
  const form = $('checkoutForm');
  if (!form) return;

  const campos = [
    form.nombreCliente,
    form.telefonoCliente,
    form.direccionCliente,
    form.querySelector('fieldset[data-name="metodoEntrega"]'),
    form.querySelector('fieldset[data-name="metodoPago"]'),
    form.mayorEdad
  ];

  campos.forEach((campo) => {
    if (campo && campo.matches && campo.matches('fieldset')) {
      setGroupError(campo, '');
    } else if (campo) {
      setFieldError(campo, '');
    }
  });
}

function actualizarEstadoCheckboxMayor() {
  const mayorEdadGroup = $('mayorEdadGroup');
  const mayorEdadInput = $('mayorEdad');
  const requiereEdad = carrito.some((item) => String(item.categoria) === 'cocteles');

  if (!mayorEdadGroup || !mayorEdadInput) return;

  mayorEdadGroup.hidden = !requiereEdad;
  mayorEdadInput.required = requiereEdad;

  if (!requiereEdad) {
    mayorEdadInput.checked = false;
    setFieldError(mayorEdadInput, '');
  }
}

function copa(sabor) {
  const [a, b] = SABORES[sabor] || SABORES.fresa;
  return `<svg viewBox="0 0 120 160" style="--a:${a};--b:${b}" aria-hidden="true">
    <path d="M76 4 64 52" stroke="#0A2540" stroke-width="6" stroke-linecap="round"/>
    <path d="M20 56h80l-11 92a8 8 0 0 1-8 7H39a8 8 0 0 1-8-7z" fill="var(--a)"/>
    <path d="M17 58a43 32 0 0 1 86 0z" fill="var(--b)"/>
    <path d="M36 80l6 56" stroke="#fff" stroke-opacity=".35" stroke-width="6" stroke-linecap="round"/>
  </svg>`;
}

function abrirCarrito() {
  const panel = $('cartPanel');
  const overlay = $('cartOverlay');
  const closeButton = $('cartClose');
  if (!panel || !overlay || !closeButton) return;

  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  panel.inert = false;
  overlay.classList.add('show');
  closeButton.focus();
}

function cerrarCarrito() {
  const panel = $('cartPanel');
  const overlay = $('cartOverlay');
  const toggle = $('cartToggle');
  if (!panel || !overlay) return;

  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  panel.inert = true;
  overlay.classList.remove('show');
  if (toggle) toggle.focus();
}

function subtotalCarrito() {
  return carrito.reduce((suma, item) => suma + (Number(item.precio) * Number(item.cantidad)), 0);
}

function domicilioCarrito() {
  return carrito.length > 0 && seleccionCheckout.metodoEntrega === 'DOMICILIO' ? DOMICILIO_FIJO : 0;
}

function totalCarrito() {
  return subtotalCarrito() + domicilioCarrito();
}

function itemExiste(productId) {
  return carrito.find((item) => String(item.id) === String(productId));
}

function actualizarCamposEntrega() {
  const direccionField = $('direccionField');
  const direccionInput = $('direccionCliente');
  const esDomicilio = seleccionCheckout.metodoEntrega === 'DOMICILIO';

  if (direccionField) {
    direccionField.hidden = !esDomicilio;
  }
  if (direccionInput) {
    direccionInput.required = esDomicilio;
    direccionInput.setAttribute('aria-invalid', 'false');
    direccionInput.disabled = !esDomicilio;
    if (!esDomicilio) {
      setFieldError(direccionInput, '');
    }
  }
}

function getSubmitText() {
  return MODO_DEMO ? 'Simular pedido' : 'Confirmar pedido';
}

function renderCarrito() {
  const panelItems = $('cartItems');
  const subtotalEl = $('cartSubtotal');
  const envioEl = $('cartEnvio');
  const totalEl = $('cartTotal');
  const badge = $('cartCountBadge');
  const toggle = $('cartToggle');
  const checkoutButton = $('checkoutSubmit');
  const emptyCartButton = $('emptyCart');

  if (!panelItems || !subtotalEl || !envioEl || !totalEl || !badge || !toggle || !checkoutButton || !emptyCartButton) return;

  if (!carrito.length) {
    panelItems.innerHTML = '<div class="cart-empty">Tu carrito está vacío. Agrega una bebida para continuar.</div>';
    emptyCartButton.style.display = 'none';
  } else {
    emptyCartButton.style.display = 'inline-flex';
    panelItems.innerHTML = carrito.map((item) => `
      <div class="cart-item">
        <div>
          <h4>${esc(item.nombre)}</h4>
          <div class="cart-item-meta">
            <span>${precio.format(Number(item.precio))}</span>
            <span>x${Number(item.cantidad)}</span>
          </div>
          <div class="cart-item-actions">
            <div class="qty-controls">
              <button type="button" data-cart-action="decrease" data-id="${esc(String(item.id))}" aria-label="Disminuir cantidad">−</button>
              <span class="qty-value">${Number(item.cantidad)}</span>
              <button type="button" data-cart-action="increase" data-id="${esc(String(item.id))}" aria-label="Aumentar cantidad">+</button>
            </div>
            <button type="button" class="delete-btn" data-cart-action="remove" data-id="${esc(String(item.id))}">Eliminar</button>
          </div>
        </div>
        <strong>${precio.format(Number(item.precio) * Number(item.cantidad))}</strong>
      </div>
    `).join('');
  }

  const cantidadTotal = carrito.reduce((sum, item) => sum + Number(item.cantidad), 0);
  badge.textContent = cantidadTotal;
  toggle.classList.toggle('has-items', cantidadTotal > 0);
  checkoutButton.disabled = carrito.length === 0;
  emptyCartButton.disabled = carrito.length === 0;
  checkoutButton.textContent = getSubmitText();

  subtotalEl.textContent = precio.format(subtotalCarrito());
  envioEl.textContent = precio.format(domicilioCarrito());
  totalEl.textContent = precio.format(totalCarrito());
  actualizarEstadoCheckboxMayor();
}

function agregarAlCarrito(productId) {
  const producto = productosCatalogo.find((item) => String(item.id) === String(productId));
  if (!producto) return;
  if (Number(producto.stock) <= 0) {
    mostrarToast('Este producto está agotado en este momento.', true);
    return;
  }

  const itemActual = itemExiste(productId);
  if (itemActual) {
    if (Number(itemActual.cantidad) >= Number(producto.stock)) {
      mostrarToast(`Máximo disponible: ${producto.stock} unidades.`, true);
      return;
    }
    itemActual.cantidad = Number(itemActual.cantidad) + 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      categoria: producto.categoria,
      sabor: producto.sabor,
      cantidad: 1
    });
  }

  renderCarrito();
  abrirCarrito();
  mostrarToast(`${producto.nombre} agregado al carrito.`);
}

function disminuirCantidad(productId) {
  const item = itemExiste(productId);
  if (!item) return;

  if (Number(item.cantidad) > 1) {
    item.cantidad = Number(item.cantidad) - 1;
  } else {
    const index = carrito.findIndex((entry) => String(entry.id) === String(productId));
    if (index >= 0) carrito.splice(index, 1);
  }

  renderCarrito();
}

function aumentarCantidad(productId) {
  const producto = productosCatalogo.find((item) => String(item.id) === String(productId));
  const item = itemExiste(productId);
  if (!producto || !item) return;

  if (Number(item.cantidad) >= Number(producto.stock)) {
    mostrarToast(`Máximo disponible: ${producto.stock} unidades.`, true);
    return;
  }

  item.cantidad = Number(item.cantidad) + 1;
  renderCarrito();
}

function eliminarDelCarrito(productId) {
  const index = carrito.findIndex((item) => String(item.id) === String(productId));
  if (index >= 0) {
    carrito.splice(index, 1);
    renderCarrito();
  }
}

function vaciarCarrito() {
  carrito.length = 0;
  renderCarrito();
}

function validarFormulario() {
  const form = $('checkoutForm');
  if (!form) return false;

  const nombre = form.nombreCliente.value.trim();
  const telefono = form.telefonoCliente.value.trim();
  const direccion = form.direccionCliente.value.trim();
  const radioEntrega = form.querySelector('input[name="metodoEntrega"]:checked');
  const radioPago = form.querySelector('input[name="metodoPago"]:checked');
  const mayorEdad = form.mayorEdad;
  const tieneCocteles = carrito.some((item) => String(item.categoria) === 'cocteles');

  const errores = [];

  if (nombre.length < 2) {
    errores.push({ campo: form.nombreCliente, mensaje: 'Escribe tu nombre completo.' });
  }

  const telefonoNormalizado = telefono.replace(/[+\s().-]/g, '');
  if (!/^(?:57)?3\d{9}$/.test(telefonoNormalizado)) {
    errores.push({ campo: form.telefonoCliente, mensaje: 'Teléfono móvil colombiano inválido. Usa 10 dígitos y empieza en 3.' });
  }

  if (radioEntrega && radioEntrega.value === 'DOMICILIO' && direccion.length < 6) {
    errores.push({ campo: form.direccionCliente, mensaje: 'Indica la dirección exacta para el domicilio.' });
  }

  if (!radioPago) {
    errores.push({ campo: form.querySelector('fieldset[data-name="metodoPago"]'), mensaje: 'Selecciona un método de pago.' });
  }

  if (tieneCocteles && (!mayorEdad || !mayorEdad.checked)) {
    errores.push({ campo: mayorEdad, mensaje: 'Debes confirmar que eres mayor de 18 años.' });
  }

  limpiarErroresFormulario();

  if (errores.length) {
    errores.forEach(({ campo, mensaje }) => {
      if (!campo) return;
      if (campo.matches && campo.matches('fieldset')) {
        setGroupError(campo, mensaje);
      } else {
        setFieldError(campo, mensaje);
      }
    });

    const primerInvalido = errores[0].campo;
    if (primerInvalido && primerInvalido.focus) primerInvalido.focus();
    mostrarToast(errores[0].mensaje, true);
    return false;
  }

  return {
    nombre,
    telefono,
    direccion,
    metodoEntrega: radioEntrega ? radioEntrega.value : seleccionCheckout.metodoEntrega,
    metodoPago: radioPago ? radioPago.value : seleccionCheckout.metodoPago
  };
}

function obtenerPayloadPedido() {
  const validacion = validarFormulario();
  if (!validacion) return null;

  return {
    cliente: {
      nombre: validacion.nombre,
      telefono: validacion.telefono,
      direccion: validacion.metodoEntrega === 'DOMICILIO' ? validacion.direccion : null
    },
    items: carrito.map((item) => ({
      id: String(item.id),
      cantidad: Number(item.cantidad)
    })),
    metodoEntrega: validacion.metodoEntrega,
    metodoPago: validacion.metodoPago
  };
}

async function enviarPedido(payload) {
  const form = $('checkoutForm');
  const checkoutButton = $('checkoutSubmit');
  if (!payload || !form || !checkoutButton) return;

  checkoutButton.disabled = true;
  checkoutButton.textContent = 'Enviando…';

  try {
    const respuesta = await crearPedido(payload);
    const confirmacion = $('orderConfirmation');
    const texto = $('confirmationText');
    if (confirmacion && texto) {
      confirmacion.classList.add('visible');
      confirmacion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (MODO_DEMO) {
        texto.textContent = 'Simulación: tu pedido NO fue enviado. Este flujo es solo demostrativo y no llegó al negocio.';
      } else {
        texto.textContent = respuesta.mensaje || 'Pedido enviado correctamente.';
      }
    }
    mostrarToast(respuesta.mensaje || 'Pedido en modo demostración.', false);
    carrito.length = 0;
    renderCarrito();
    form.reset();
    seleccionCheckout.metodoEntrega = 'DOMICILIO';
    seleccionCheckout.metodoPago = 'EFECTIVO';
    const entregaInput = document.querySelector('input[name="metodoEntrega"][value="DOMICILIO"]');
    const pagoInput = document.querySelector('input[name="metodoPago"][value="EFECTIVO"]');
    if (entregaInput) entregaInput.checked = true;
    if (pagoInput) pagoInput.checked = true;
    actualizarCamposEntrega();
    limpiarErroresFormulario();
  } catch (error) {
    mostrarToast(error?.message || 'No pudimos completar el pedido en este momento.', true);
    if (confirmacion) {
      confirmacion.classList.remove('visible');
    }
  } finally {
    checkoutButton.disabled = carrito.length === 0;
    checkoutButton.textContent = getSubmitText();
  }
}

/* ---- Navbar móvil ---- */
const nav = $('nav'), burger = $('burger');
function menuMovil(abrir) {
  nav.dataset.open = abrir;
  burger.setAttribute('aria-expanded', abrir);
}
if (burger && nav) {
  burger.addEventListener('click', () => menuMovil(nav.dataset.open !== 'true'));
}
const links = $('links');
if (links) {
  links.addEventListener('click', (e) => {
    if (e.target.closest('a')) menuMovil(false);
  });
}

/* ---- Hero: selector de sabor ---- */
const hero = document.querySelector('.hero');
const heroCopa = $('heroCopa');
function elegirSabor(sabor) {
  if (!hero || !heroCopa) return;
  hero.dataset.sabor = sabor;
  heroCopa.innerHTML = copa(sabor);
  heroCopa.classList.remove('pop');
  void heroCopa.offsetWidth;
  heroCopa.classList.add('pop');
  document.querySelectorAll('.sabores .chip').forEach((c) => c.setAttribute('aria-pressed', c.dataset.sabor === sabor));
}
const sabores = document.querySelector('.sabores');
if (sabores) {
  sabores.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) elegirSabor(chip.dataset.sabor);
  });
}
if (heroCopa) heroCopa.innerHTML = copa('fresa');

/* ---- Catálogo ---- */
const grid = $('grid');
const filtros = $('filtros');
let categoriaActiva = 'todos';

function tarjeta(p) {
  const agotado = Number(p.stock) <= 0;
  const [a] = SABORES[p.sabor] || SABORES.fresa;
  return `<article class="card" style="--a:${a}">
    <div class="card-img">${copa(p.sabor)}</div>
    <div class="card-body">
      <p class="tag">${esc(CATEGORIAS[p.categoria] || p.categoria)}</p>
      <h3>${esc(p.nombre)}</h3>
      <p>${esc(p.descripcion)}</p>
      <div class="card-foot">
        <strong>${precio.format(Number(p.precio))}</strong>
        <button class="btn sm" type="button" data-id="${esc(String(p.id))}" ${agotado ? 'disabled' : ''}>${agotado ? 'Agotado' : 'Agregar'}</button>
      </div>
    </div>
  </article>`;
}

function pintarCatalogo() {
  if (!grid || !filtros || !productosCatalogo.length) return;
  const lista = productosCatalogo.filter((p) => p.estado === 'ACTIVO' && (categoriaActiva === 'todos' || p.categoria === categoriaActiva));
  grid.innerHTML = lista.length ? lista.map(tarjeta).join('') : '<p class="vacio">Aún no hay productos en esta categoría. Prueba con otra.</p>';
  filtros.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c.dataset.cat === categoriaActiva));
}

function filtrar(cat) {
  categoriaActiva = cat;
  pintarCatalogo();
}

if (filtros) {
  filtros.innerHTML = [['todos', 'Todos'], ...Object.entries(CATEGORIAS)]
    .map(([k, v]) => `<button class="chip" type="button" data-cat="${k}" aria-pressed="false">${v}</button>`).join('');
  filtros.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) filtrar(chip.dataset.cat);
  });
}

document.querySelector('.cats')?.addEventListener('click', (e) => {
  const cat = e.target.closest('.cat');
  if (cat) filtrar(cat.dataset.cat);
});

grid?.addEventListener('click', (e) => {
  const button = e.target.closest('button[data-id]:not(:disabled)');
  if (!button) return;
  agregarAlCarrito(button.dataset.id);
});

$('cartToggle')?.addEventListener('click', () => {
  const panel = $('cartPanel');
  const overlay = $('cartOverlay');
  if (!panel || !overlay) return;

  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    cerrarCarrito();
    return;
  }

  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  panel.inert = false;
  overlay.classList.add('show');
  $('cartClose')?.focus();
});

$('emptyCart')?.addEventListener('click', () => {
  vaciarCarrito();
  mostrarToast('Carrito vaciado.');
});

$('cartClose')?.addEventListener('click', cerrarCarrito);
$('cartOverlay')?.addEventListener('click', cerrarCarrito);

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-cart-action]');
  if (!trigger) return;
  const action = trigger.dataset.cartAction;
  const productId = trigger.dataset.id;

  if (action === 'increase') aumentarCantidad(productId);
  if (action === 'decrease') disminuirCantidad(productId);
  if (action === 'remove') eliminarDelCarrito(productId);
});

document.addEventListener('keydown', (event) => {
  const panel = $('cartPanel');
  if (event.key === 'Escape' && panel && panel.classList.contains('open')) {
    cerrarCarrito();
  }
});

document.querySelectorAll('input[name="metodoEntrega"]').forEach((input) => {
  input.addEventListener('change', (event) => {
    seleccionCheckout.metodoEntrega = event.target.value;
    actualizarCamposEntrega();
    renderCarrito();
  });
});

document.querySelectorAll('input[name="metodoPago"]').forEach((input) => {
  input.addEventListener('change', (event) => {
    seleccionCheckout.metodoPago = event.target.value;
  });
});

const nombreInput = $('nombreCliente');
const telefonoInput = $('telefonoCliente');
const direccionInput = $('direccionCliente');
const mayorEdadInput = $('mayorEdad');
const entregaFieldset = document.querySelector('fieldset[data-name="metodoEntrega"]');
const pagoFieldset = document.querySelector('fieldset[data-name="metodoPago"]');

if (nombreInput) {
  nombreInput.addEventListener('input', () => {
    if (nombreInput.value.trim().length >= 2) setFieldError(nombreInput, '');
  });
}
if (telefonoInput) {
  telefonoInput.addEventListener('input', () => {
    const telefonoNormalizado = telefonoInput.value.replace(/[+\s().-]/g, '');
    if (/^(?:57)?3\d{9}$/.test(telefonoNormalizado)) setFieldError(telefonoInput, '');
  });
}
if (direccionInput) {
  direccionInput.addEventListener('input', () => {
    if (direccionInput.value.trim().length >= 6) setFieldError(direccionInput, '');
  });
}
if (mayorEdadInput) {
  mayorEdadInput.addEventListener('change', () => {
    if (mayorEdadInput.checked) setFieldError(mayorEdadInput, '');
  });
}
if (entregaFieldset) {
  entregaFieldset.addEventListener('change', () => {
    setGroupError(entregaFieldset, '');
  });
}
if (pagoFieldset) {
  pagoFieldset.addEventListener('change', () => {
    setGroupError(pagoFieldset, '');
  });
}

$('checkoutForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!carrito.length) {
    mostrarToast('Agrega al menos un producto antes de confirmar.', true);
    return;
  }

  const payload = obtenerPayloadPedido();
  if (!payload) return;

  await enviarPedido(payload);
});

async function cargarCatalogo() {
  productosCatalogo = await obtenerProductos();
  pintarCatalogo();
  renderCarrito();
}

$('anio').textContent = new Date().getFullYear();
actualizarCamposEntrega();
renderCarrito();
actualizarEstadoCheckboxMayor();
if (typeof obtenerProductos === 'function') {
  cargarCatalogo();
}
