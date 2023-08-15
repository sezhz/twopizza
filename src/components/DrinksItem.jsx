import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { v4 as uuidv4 } from "uuid";

const DrinksItem = ({ imgSrc, title, sizes }) => {
  const [selectedVolume, setSelectedVolume] = useState(sizes[0]);
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    const selectedItem = {
      id: uuidv4(),
      imgSrc,
      title,
      size: selectedVolume,
    };
    addItemToCart(selectedItem);
  };

  return (
    <div className="catalog-item-cont">
      <div className="catalog-item">
        <div className="img-cont">
          <img src={imgSrc} alt={title} className="drinks-pic" />
        </div>
        <div className="text-cont">
          <div className="item-title">{title}</div>
          <form className="catalog-product-form">
            <div className="item-params">
              {sizes.map((size, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedVolume === size}
                    onChange={() => setSelectedVolume(size)}
                  />
                  {size.diameter}
                </label>
              ))}
            </div>
          </form>
          <div className="catalog-item-button">
            <div className="price">
              {selectedVolume.oldPrice && (
                <div className="old-price">{selectedVolume.oldPrice} грн</div>
              )}
              {selectedVolume.price} грн
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

export default DrinksItem;
