import React, { useState } from "react";
import { useCart } from "./CartProvider";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderClick = () => {

    // логiка обробки замовлення

    clearCart();
    setOrderPlaced(true);
  }

  return (
    <div id="cart" className="cart">
      <div className="container">
        <div className="cart-content">
          <h2>Кошик</h2>
          {cartItems.length > 0 ? (
            <div className="order-cont">
              <div className="order-segment">
                <label htmlFor="address">Адреса: </label>
                <input type="text" id="address" name="address" />
              </div>
              <div className="order-segment">
                <label htmlFor="name">Ім`я: </label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="order-segment">
                <label htmlFor="phone">Номер телефону: </label>
                <input type="text" id="phoneNumber" name="phoneNumber" />
              </div>
              <div className="order-segment">
                <label htmlFor="deliveryTime">Час доставки: </label>
                <input type="time" id="deliveryTime" name="deliveryTime" />
              </div>
              <div className="order-segment">
                <label>Спосіб оплати: </label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />{" "}
                    Готівка
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />{" "}
                    Картка
                  </label>
                </div>
              </div>
              <button onClick={handleOrderClick}>Замовити</button>
            </div>
          ) : (
            <p>Ваш кошик не мiстить товарiв</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
