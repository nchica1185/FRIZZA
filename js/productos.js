/*
  Datos de muestra del catálogo (temporal).
  Forma según Documento Maestro §6. Cuando exista el backend, esta lista
  se reemplaza por la respuesta de GET /api/productos; el resto no cambia.
  "sabor" es solo un apoyo visual mientras no haya imagen real.
*/
const CATEGORIAS = {
  granizados: 'Granizados',
  cocteles: 'Cócteles',
  bebidas: 'Bebidas',
  combos: 'Combos',
  toppings: 'Toppings'
};

const PRODUCTOS = [
  { id: 1, nombre: 'Granizado de Fresa', descripcion: 'Fresa madura, hielo fino y un toque de limón.', precio: 12000, categoria: 'granizados', imagen: null, sabor: 'fresa', stock: 32, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 2, nombre: 'Granizado de Mango', descripcion: 'Mango maduro con chamoy suave y hielo escarchado.', precio: 12000, categoria: 'granizados', imagen: null, sabor: 'mango', stock: 18, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 3, nombre: 'Frizza Blue', descripcion: 'Nuestro granizado azul de la casa: cítrico, dulce y muy frío.', precio: 14000, categoria: 'granizados', imagen: null, sabor: 'azul', stock: 7, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 4, nombre: 'Mojito Tropical', descripcion: 'Ron, hierbabuena, lima y un toque de maracuyá.', precio: 18000, categoria: 'cocteles', imagen: null, sabor: 'menta', stock: 2, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 5, nombre: 'Piña Colada Frizza', descripcion: 'Piña, coco y ron, servida en granizado.', precio: 19000, categoria: 'cocteles', imagen: null, sabor: 'mango', stock: 10, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 6, nombre: 'Limonada de Coco', descripcion: 'Limón, crema de coco y hielo. Sin alcohol.', precio: 10000, categoria: 'bebidas', imagen: null, sabor: 'menta', stock: 25, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 7, nombre: 'Té Helado de Durazno', descripcion: 'Té negro frío con durazno natural.', precio: 8000, categoria: 'bebidas', imagen: null, sabor: 'mango', stock: 0, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 8, nombre: 'Combo Pareja', descripcion: 'Dos granizados a elegir y un topping para compartir.', precio: 26000, categoria: 'combos', imagen: null, sabor: 'fresa', stock: 15, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 9, nombre: 'Topping de Gomitas', descripcion: 'Gomitas de frutas para coronar tu granizado.', precio: 3000, categoria: 'toppings', imagen: null, sabor: 'fresa', stock: 40, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' },
  { id: 10, nombre: 'Topping de Frutos Rojos', descripcion: 'Fresa y mora en trozos, frescas del día.', precio: 4000, categoria: 'toppings', imagen: null, sabor: 'azul', stock: 20, estado: 'ACTIVO', fechaCreacion: '2026-09-01', fechaActualizacion: '2026-09-01' }
];
