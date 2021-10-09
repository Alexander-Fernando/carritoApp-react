import React from 'react';
import { Productos } from './Productos';

export const Tienda = ({ productos, agregarProducto }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <Productos productos={productos} agregarProducto={agregarProducto} />
    </div>
  );
};
