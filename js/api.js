/*
  Capa de API provisional para pedidos.
  Reemplazar por POST /api/pedidos cuando exista el backend.
*/
const MODO_DEMO = true;

async function obtenerProductos() {
  // TODO: reemplazar por GET /api/productos.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...PRODUCTOS]);
    }, 0);
  });
}

async function crearPedido(payload) {
  if (MODO_DEMO) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          mensaje: 'Simulación: tu pedido NO fue enviado. Este flujo es solo demostrativo.',
          pedido: {
            cliente: payload.cliente,
            items: payload.items,
            metodoEntrega: payload.metodoEntrega,
            metodoPago: payload.metodoPago
          }
        });
      }, 700);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        mensaje: 'Pedido creado correctamente.',
        pedido: {
          cliente: payload.cliente,
          items: payload.items,
          metodoEntrega: payload.metodoEntrega,
          metodoPago: payload.metodoPago
        }
      });
    }, 700);
  });
}
