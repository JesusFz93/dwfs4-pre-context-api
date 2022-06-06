import React, { createContext, useState } from "react";

export const ProductsContext = createContext({});

const initialState = [];

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(initialState);

  const agregaProducto = (producto) => {
    const newProduct = {
      id: products.length,
      name: producto.name,
      price: producto.price,
    };

    setProduct([...products, newProduct]);
  };

  return (
    <ProductsContext.Provider value={{ products, agregaProducto }}>
      {children}
    </ProductsContext.Provider>
  );
};
