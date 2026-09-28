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
const estadoPedido = {
  metodoEntrega: 'DOMICILIO',
  metodoPago: 'EFECTIVO'
};
const toast = $('toast');
let tToast;

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
  if (!panel || !overlay) return;
  panel.classList.add('open');
  overlay.classList.add('show');
}

function cerrarCarrito() {
  const panel = $('cartPanel');
  const overlay = $('cartOverlay');
  if (!panel || !overlay) return;
  panel.classList.remove('open');
  overlay.classList.remove('show');
}

function subtotalCarrito() {
  return carrito.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);
}

function domicilioCarrito() {
  return carrito.length > 0 && estadoPedido.metodoEntrega === 'DOMICILIO' ? DOMICILIO_FIJO : 0;
}

function totalCarrito() {
  return subtotalCarrito() + domicilioCarrito();
}

function itemExiste(productId) {
  return carrito.find((item) => Number(item.id) === Number(productId));
}

function actualizarCamposEntrega() {
  const direccionField = $('direccionField');
  const direccionInput = $('direccionCliente');
  const esDomicilio = estadoPedido.metodoEntrega === 'DOMICILIO';

  if (direccionField) {
    direccionField.hidden = !esDomicilio;
  }
  if (direccionInput) {
    direccionInput.required = esDomicilio;
    direccionInput.setAttribute('aria-invalid', 'false');
    direccionInput.disabled = !esDomicilio;
  }
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
            <span>${precio.format(item.precio)}</span>
            <span>x${item.cantidad}</span>
          </div>
          <div class="cart-item-actions">
            <div class="qty-controls">
              <button type="button" data-cart-action="decrease" data-id="${item.id}" aria-label="Disminuir cantidad">−</button>
              <span class="qty-value">${item.cantidad}</span>
              <button type="button" data-cart-action="increase" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
            </div>
            <button type="button" class="delete-btn" data-cart-action="remove" data-id="${item.id}">Eliminar</button>
          </div>
        </div>
        <strong>${precio.format(item.precio * item.cantidad)}</strong>
      </div>
    `).join('');
  }

  const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  badge.textContent = cantidadTotal;
  toggle.classList.toggle('has-items', cantidadTotal > 0);
  checkoutButton.disabled = carrito.length === 0;
  emptyCartButton.disabled = carrito.length === 0;

  subtotalEl.textContent = precio.format(subtotalCarrito());
  envioEl.textContent = precio.format(domicilioCarrito());
  totalEl.textContent = precio.format(totalCarrito());
}

function agregarAlCarrito(productId) {
  const producto = PRODUCTOS.find((item) => Number(item.id) === Number(productId));
  if (!producto) return;
  if (producto.stock <= 0) {
    mostrarToast('Este producto está agotado en este momento.', true);
    return;
  }

  const itemActual = itemExiste(productId);
  if (itemActual) {
    if (itemActual.cantidad >= producto.stock) {
      mostrarToast(`Máximo disponible: ${producto.stock} unidades.`, true);
      return;
    }
    itemActual.cantidad += 1;
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

  if (item.cantidad > 1) {
    item.cantidad -= 1;
  } else {
    const index = carrito.findIndex((entry) => Number(entry.id) === Number(productId));
    if (index >= 0) carrito.splice(index, 1);
  }

  renderCarrito();
}

function aumentarCantidad(productId) {
  const producto = PRODUCTOS.find((item) => Number(item.id) === Number(productId));
  const item = itemExiste(productId);
  if (!producto || !item) return;

  if (item.cantidad >= producto.stock) {
    mostrarToast(`Máximo disponible: ${producto.stock} unidades.`, true);
    return;
  }

  item.cantidad += 1;
  renderCarrito();
}

function eliminarDelCarrito(productId) {
  const index = carrito.findIndex((item) => Number(item.id) === Number(productId));
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

  const errores = [];

  if (nombre.length < 2) {
    errores.push({ campo: form.nombreCliente, mensaje: 'Escribe tu nombre completo para continuar.' });
  }

  if (!/^[0-9+\s()-]{7,15}$/.test(telefono)) {
    errores.push({ campo: form.telefonoCliente, mensaje: 'Ingresa un teléfono válido.' });
  }

  if (radioEntrega && radioEntrega.value === 'DOMICILIO' && direccion.length < 6) {
    errores.push({ campo: form.direccionCliente, mensaje: 'Indica la dirección exacta para el domicilio.' });
  }

  if (!radioPago) {
    errores.push({ campo: null, mensaje: 'Selecciona un método de pago.' });
  }

  form.querySelectorAll('input[aria-invalid="true"]').forEach((campo) => campo.setAttribute('aria-invalid', 'false'));

  if (errores.length) {
    const primero = errores[0];
    if (primero.campo) {
      primero.campo.setAttribute('aria-invalid', 'true');
      primero.campo.focus();
    }
    mostrarToast(primero.mensaje, true);
    return false;
  }

  return { nombre, telefono, direccion, metodoEntrega: radioEntrega.value, metodoPago: radioPago.value };
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
      id: item.id,
      nombre: item.nombre,
      cantidad: item.cantidad,
      precio: item.precio
    })),
    metodoEntrega: validacion.metodoEntrega,
    metodoPago: validacion.metodoPago,
    subtotal: subtotalCarrito(),
    domicilio: domicilioCarrito(),
    total: totalCarrito()
  };
}

async function enviarPedido(payload) {
  if (!payload) return;
  try {
    const respuesta = await crearPedido(payload);
    const confirmacion = $('orderConfirmation');
    const texto = $('confirmationText');
    if (confirmacion && texto) {
      confirmacion.classList.add('visible');
      texto.textContent = `${respuesta.mensaje} Pedido ${respuesta.pedido?.id || 'demo'} en estado ${respuesta.pedido?.estadoPedido || 'PENDIENTE'}.`;
    }
    mostrarToast(respuesta.mensaje || 'Pedido creado en modo demostración.', false);
    carrito.length = 0;
    renderCarrito();
    const form = $('checkoutForm');
    if (form) form.reset();
    estadoPedido.metodoEntrega = 'DOMICILIO';
    estadoPedido.metodoPago = 'EFECTIVO';
    const entregaInput = document.querySelector('input[name="metodoEntrega"][value="DOMICILIO"]');
    const pagoInput = document.querySelector('input[name="metodoPago"][value="EFECTIVO"]');
    if (entregaInput) entregaInput.checked = true;
    if (pagoInput) pagoInput.checked = true;
    actualizarCamposEntrega();
  } catch (error) {
    mostrarToast(error?.message || 'No pudimos completar el pedido en este momento.', true);
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
  const agotado = p.stock <= 0;
  const [a] = SABORES[p.sabor] || SABORES.fresa;
  return `<article class="card" style="--a:${a}">
    <div class="card-img">${copa(p.sabor)}</div>
    <div class="card-body">
      <p class="tag">${esc(CATEGORIAS[p.categoria] || p.categoria)}</p>
      <h3>${esc(p.nombre)}</h3>
      <p>${esc(p.descripcion)}</p>
      <div class="card-foot">
        <strong>${precio.format(p.precio)}</strong>
        <button class="btn sm" type="button" data-id="${p.id}" ${agotado ? 'disabled' : ''}>${agotado ? 'Agotado' : 'Agregar'}</button>
      </div>
    </div>
  </article>`;
}

function pintarCatalogo() {
  if (!grid || !filtros) return;
  const lista = PRODUCTOS.filter((p) => p.estado === 'ACTIVO' && (categoriaActiva === 'todos' || p.categoria === categoriaActiva));
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
  if (!panel) return;
  panel.classList.toggle('open');
  $('cartOverlay')?.classList.toggle('show');
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

document.querySelectorAll('input[name="metodoEntrega"]').forEach((input) => {
  input.addEventListener('change', (event) => {
    estadoPedido.metodoEntrega = event.target.value;
    actualizarCamposEntrega();
    renderCarrito();
  });
});

document.querySelectorAll('input[name="metodoPago"]').forEach((input) => {
  input.addEventListener('change', (event) => {
    estadoPedido.metodoPago = event.target.value;
  });
});

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

$('anio').textContent = new Date().getFullYear();
actualizarCamposEntrega();
renderCarrito();
pintarCatalogo();
