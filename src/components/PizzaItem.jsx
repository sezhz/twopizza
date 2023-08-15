import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { v4 as uuidv4 } from "uuid";

const PizzaItem = ({ imgSrc, title, description, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    const selectedItem = {
      id: uuidv4(),
      imgSrc,
      title,
      description,
      size: selectedSize,
      price: selectedSize.price,
    };
    addItemToCart(selectedItem);
  };

  return (
    <div className="catalog-item-cont">
      <div className="catalog-item">
        <div className="img-cont">
          <img src={imgSrc} alt={title} className="pizza-pic" />
        </div>
        <div className="text-cont">
          <div className="item-title">{title}</div>
          <div className="item-text">{description}</div>
          <form className="catalog-product-form">
            <div className="item-params">
              {sizes.map((size, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                  />
                  {size.diameter}
                </label>
              ))}
            </div>
          </form>
          <div className="catalog-item-button">
            <div className="price">
              {selectedSize.oldPrice && (
                <div className="old-price">{selectedSize.oldPrice} грн</div>
              )}
              {selectedSize.price} грн
            </div>
            <button className="add-cart-button" onClick={handleAddToCart}>
              До кошику
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
