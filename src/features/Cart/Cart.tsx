import React from 'react';
import './Cart.scss';
import CartItems from "../../app/components/CartItems/CartItems";
import CartSummary from "../../app/components/CartSummary/CartSummary";

function Cart() {
  return (
    <main className="container">
        <div className="fs-2 text-center p-4 mb-4">Ваша карзина (4 продукта)</div>

        <CartItems />

        <CartSummary />
    </main>
  );
}

export default Cart;
