import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const ListaPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="container">
      <header className="row col">
        <h1>ListaPage</h1>
      </header>
      <section className="row">
        <article className="col">
          <h2>Lista</h2>
          <ul>
            {products.map((item) => (
              <li key={item.name}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};
