/*
  Capa de API provisional para pedidos.
  Reemplazar por POST /api/pedidos cuando exista el backend.
*/

async function crearPedido(payload) {
  const pedidoDemo = {
    id: `FRZ-${Date.now()}`,
    estadoPedido: 'PENDIENTE',
    estadoPago: 'PENDIENTE',
    mensaje: 'Pedido registrado en modo demostración. No se ha enviado al negocio ni a la base de datos aún.'
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...pedidoDemo,
        pedido: {
          ...pedidoDemo,
          cliente: payload.cliente,
          items: payload.items,
          metodoEntrega: payload.metodoEntrega,
          metodoPago: payload.metodoPago,
          subtotal: payload.subtotal,
          domicilio: payload.domicilio,
          total: payload.total
        }
      });
    }, 500);
  });
}
