import React from "react";
import cart from "../img/cart.png";
import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { cartItems, removeItemFromCart } = useCart([]);

  const cartTotalClasses =
    cartItems.length > 0 ? "cart-total active" : "cart-total";

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
    <div className="sidebar">
      <div className="small-cart">
        <div className="small-cart__cont">
          <div className="small-cart__header">
            <div className="small-cart__icon">
              <img src={cart} alt="cart" />
            </div>
            <div className={cartTotalClasses}>
              <div className="cart-sum">
                <h1>{totalSum} грн</h1>
              </div>
              <div className="cart-count">
                <h1>{cartItems.length} шт</h1>
              </div>
            </div>
          </div>

          <div className="cart-items">
            <ul>
              {groupedCartItems.map((item, index) => (
                <li key={index}>
                  <div className="cart-item-info">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div>
                      {item.title} - {item.size.diameter}
                    </div>
                    <div>
                      {item.size.price * item.quantity} грн - {item.quantity} шт
                    </div>
                    <div>
                      <button
                        className="remove-cart-item"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        вилучити з кошика
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/cart" className="cart-order">
            Оформити
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
