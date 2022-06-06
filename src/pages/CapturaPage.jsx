import React, { useState, useRef, useEffect } from "react";

const initialValues = {
  name: "",
  price: "",
};

export const CapturaPage = () => {
  const [form, setForm] = useState(initialValues);
  const nameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.name === "") {
      return nameRef.current.focus();
    }

    console.log(form);

    setForm(initialValues);
    nameRef.current.focus();
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="container">
      <header className="row col">
        <h1>Captura</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Nombre
              </label>
              <input
                ref={nameRef}
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameInputHelp"
                autoComplete="off"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priceInput" className="form-label">
                Precio
              </label>
              <input
                type="text"
                className="form-control"
                id="priceInput"
                aria-describedby="priceInputHelp"
                autoComplete="off"
                value={form.price}
                onChange={(e) => {
                  setForm({ ...form, price: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Capturar
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};
