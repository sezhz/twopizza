import React, { useState } from "react";
import { useCart } from "./CartProvider";
import PhoneNumberInput from "./PhoneNumberInput";
import ValidationError from "./ValidationError";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [nameError, setNameError] = useState("");
  const [showCardFields, setShowCardFields] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardExpirationError, setCardExpirationError] = useState("");
  const [cardCVVError, setCardCVVError] = useState("");

  const formatCardNumber = (value) => {
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
  };

  const formatExpirationDate = (value) => {
    const cleanedValue = value.replace(/\D/g, "");

    if (cleanedValue.length > 2) {
      const firstTwoDigits = cleanedValue.slice(0, 2);
      const remainingDigits = cleanedValue.slice(2);

      const formattedValue =
        parseInt(firstTwoDigits, 10) > 12
          ? "12/" + remainingDigits
          : firstTwoDigits + "/" + remainingDigits;

      return formattedValue;
    }

    return cleanedValue;
  };

  const isFormValid = () => {
    const address = document.getElementById("address").value;
    const name = document.getElementById("name").value;

    setAddressError(address.trim() === "");
    setNameError(name.trim() === "");

    if (paymentMethod === "card") {
      setCardNumberError(cardNumber.trim() === "");
      setCardExpirationError(cardExpiration.trim() === "");
      setCardCVVError(cardCVV.trim() === "");
    }

    return (
      address.trim() !== "" &&
      name.trim() !== "" &&
      (paymentMethod !== "card" ||
        (cardNumber.trim() !== "" &&
          cardExpiration.trim() !== "" &&
          cardCVV.trim() !== ""))
    );
  };

  const handleOrderClick = () => {
    if (isFormValid()) {
      if (paymentMethod === "card") {
      }

      clearCart();
      setOrderPlaced(true);
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
                <ValidationError error={addressError} />
              </div>
              <div className="order-segment">
                <label htmlFor="name">Ім'я: </label> <br />
                <input
                  type="text"
                  id="name"
                  className="delivery-form"
                  onChange={() => setFormValid(isFormValid())}
                />
                <ValidationError error={nameError} />
              </div>
              <PhoneNumberInput />
              <div className="order-segment">
                <label htmlFor="deliveryTime">
                  Час доставки: <br />
                  <input
                    type="time"
                    id="deliveryTime"
                    className="delivery-time"
                  />
                </label>
              </div>
              <div className="order-segment">
                <h3>Сума до сплати: {totalSum} грн</h3>

                <label>Спосiб оплати: </label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => {
                        setPaymentMethod("cash");
                        setShowCardFields(false);
                      }}
                    />{" "}
                    Готiвка
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => {
                        setPaymentMethod("card");
                        setShowCardFields(true);
                      }}
                    />{" "}
                    Картка
                  </label>
                </div>
              </div>
              {showCardFields && (
                <div className="order-segment">
                  <label htmlFor="cardNumber">Номер картки:</label>
                  <br />
                  <input
                    type="text"
                    id="cardNumber"
                    className="delivery-card-number"
                    value={cardNumber}
                    onChange={(e) => formatCardNumber(e.target.value)}
                    maxLength="19"
                  />
                  <ValidationError error={cardNumberError} />
                </div>
              )}
              {showCardFields && (
                <div className="order-segment">
                  <label htmlFor="cardExpiration">Дiйсна до:</label>
                  <br />
                  <input
                    type="text"
                    id="cardExpiration"
                    className="delivery-expiration-form"
                    value={cardExpiration}
                    onChange={(e) =>
                      setCardExpiration(formatExpirationDate(e.target.value))
                    }
                    maxLength="5"
                  />
                  <ValidationError error={cardExpirationError} />
                </div>
              )}
              {showCardFields && (
                <div className="order-segment">
                  <label htmlFor="cardCVV">CVV:</label>
                  <br />
                  <input
                    type="text"
                    id="cardCVV"
                    className="delivery-cvv"
                    value={cardCVV}
                    onChange={(e) => setCardCVV(e.target.value)}
                    maxLength="3"
                  />
                  <ValidationError error={cardCVVError} />
                </div>
              )}
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
