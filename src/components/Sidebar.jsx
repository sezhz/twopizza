import React, { useState } from "react";
import cart from "../img/cart.png";
import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import lilcart from "../img/mini-cart.png";

const Sidebar = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const {
    cartItems,
    removeItemFromCart,
    addItemToCart,
    removeItemsByTitleAndSize,
  } = useCart([]);

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

  const handleAddToCart = (item) => {
    const selectedItem = {
      id: uuidv4(),
      imgSrc: item.imgSrc,
      title: item.title,
      description: item.description,
      size: item.size,
      price: item.size.price,
    };
    addItemToCart(selectedItem);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      removeItemFromCart(item.id);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarClosed(!isSidebarClosed);
    const newSidebarState = isSidebarClosed ? "closed" : "";
    window.location.href = `/cart?sidebar=${newSidebarState}`;
  };

  return (
    <div className={`sidebar ${isSidebarClosed ? "closed" : ""}`}>
      <div className="sidebar-line">
        <div className="cart-label">
          <span>
            <img src={lilcart} alt="cart" />
          </span>
        </div>
      </div>
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
                    <div className="change-quantity-container">
                      <button
                        className="change-quantity-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </button>
                      <button
                        className="change-quantity-btn"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <button
                        className="remove-cart-item"
                        onClick={() =>
                          removeItemsByTitleAndSize(
                            item.title,
                            item.size.diameter
                          )
                        }
                      >
                        вилучити з кошика
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/cart"
            className="cart-order"
            onClick={() => handleSidebarToggle()}
          >
            Оформити
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
