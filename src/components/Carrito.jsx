import React from 'react';
import styled from 'styled-components';

export const Carrito = ({compras}) => {
  return (
    <div>
      <h3>Carrito de compras</h3>
      {compras.length > 0 ? (
        compras.map(({ id, cantidad, nombre }) => (
          <Producto key={id}>
            <NombreProducto>{nombre}</NombreProducto>
            Cantidad: {cantidad}
          </Producto>
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

const Producto = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color #000;
`;
