import React, { useState } from "react";
import { PizzaCart } from "../utils/Pizzas"; // Assuming you have a PizzaCart array in utils

const Cart = () => {
  const [listaPizzas, setListaPizzas] = useState(PizzaCart);

  function calcularTotal() {
    let total = 0;
    listaPizzas.forEach((pizza) => {
      total += pizza.price * pizza.quantity;
    });
    return total;
  }

  function sumarCantidad(params) {
    const nuevaCantidad = [...listaPizzas];

        let encontrada = nuevaCantidad.findIndex((pizza) => pizza.id === params.id);
    
        nuevaCantidad[encontrada].quantity += 1;

        setListaPizzas(nuevaCantidad);
  }

  function restarCantidad(params) {
    const nuevaCantidad = [...listaPizzas];

    let encontrada = nuevaCantidad.findIndex((pizza) => pizza.id === params.id);

    if (nuevaCantidad[encontrada].quantity === 1) {
      const filteredPizzas = nuevaCantidad.filter((pizza) => pizza.id !== params.id);
      setListaPizzas(filteredPizzas);
    } else {
      nuevaCantidad[encontrada].quantity -= 1;
      setListaPizzas(nuevaCantidad);
    }
  }

  const renderCart = listaPizzas.map((pizza) => {
    return (
      <li key={pizza.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', textAlign: 'left' }}>
        <div style={{ width: '60%' }}>
          <img src={pizza.img} alt={pizza.name} style={{ maxWidth: '5%', paddingRight: '1%' }} />
          {pizza.name}
        </div>
        <div style={{ width: '20%' }}>
          ${pizza.price}
        </div>
        <div style={{ width: '20%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button type="button" className="btn btn-outline-danger" onClick={ () => restarCantidad(pizza)}>-</button>
          <span>{pizza.quantity}</span>
          <button type="button" className="btn btn-outline-primary" onClick={ () => sumarCantidad(pizza)}>+</button>
        </div>
      </li>
    );
  });

  return (
    <div style={{ padding: '5%' }}>
      <h2 style={{ padding: '2%' }}>Detalles del pedido:</h2>
      <ul>{renderCart}</ul>
      <h1 style={{ padding: '2%' }}>Total: ${calcularTotal()}</h1>
      <button type="button" className="btn btn-dark" style={{ margin: '2%' }}>Pagar</button>
    </div>
  );
};

export default Cart;