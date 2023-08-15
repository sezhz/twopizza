import React from "react";
import "../dist/styles.css";
import PizzaData from "./PizzaData";
import PizzaItem from "./PizzaItem";

const Pizza = () => {
  return (
    <div className="pizza" id="pizza">
      <div className="container">
        <div className="pizza-section">
          <div className="catalog-list">
            <div className="row">
              {PizzaData.map((pizza, index) => (
                <PizzaItem
                  key={index}
                  imgSrc={pizza.imgSrc}
                  title={pizza.title}
                  description={pizza.description}
                  sizes={pizza.sizes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
