import React, { useState } from "react";
import { useCart } from "./CartProvider";
import PhoneNumberInput from "./PhoneNumberInput";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const isFormValid = () => {
    const address = document.getElementById("address").value;
    const name = document.getElementById("name").value;
    const deliveryTime = document.getElementById("deliveryTime").value;

    return (
      address.trim() !== "" && name.trim() !== "" && deliveryTime.trim() !== ""
    );
  };

  const handleOrderClick = () => {
    if (isFormValid()) {
      // логiка обробки замовлення

      clearCart();
      setOrderPlaced(true);
    } else {
      alert("Заполните обязательные поля!");
    }
  };

  const groupedCartItems = cartItems.reduce((groupedItems, item) => {
    const existingItemIndex = groupedItems.findIndex(
      (groupedItem) =>
        groupedItem.title === item.title &&
        groupedItem.size.diameter === item.size.diameter
    );
    if (existingItemIndex !== -1) {
      groupedItems[existingItemIndex].quantity += 1;
    } else {
      groupedItems.push({ ...item, quantity: 1 });
    }
    return groupedItems;
  }, []);

  const totalSum = groupedCartItems.reduce(
    (total, item) => +total + +(item.size.price * item.quantity),
    0
  );

  return (
    <div id="cart" className="cart">
      <div className="container">
        <div className="cart-content">
          <h2>Оформлення замовлення</h2>
          {cartItems.length > 0 ? (
            <div className="order-cont">
              <div className="order-segment">
                <label htmlFor="address">Адреса: </label> <br />
                <input
                  type="text"
                  id="address"
                  className="delivery-form"
                  onChange={() => setFormValid(isFormValid())}
                />
              </div>
              <div className="order-segment">
                <label htmlFor="name">Ім`я: </label> <br />
                <input
                  type="text"
                  id="name"
                  className="delivery-form"
                  onChange={() => setFormValid(isFormValid())}
                />
              </div>
              <PhoneNumberInput />
              <div className="order-segment">
                <label htmlFor="deliveryTime">
                  Час доставки: <br />
                  <input
                    type="time"
                    id="deliveryTime"
                    className="delivery-time"
                    onChange={() => setFormValid(isFormValid())}
                  />
                </label>
              </div>
              <div className="order-segment">
                <h3>Сума до оплати: {totalSum} грн</h3>

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
                      className="paymentMethod"
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
