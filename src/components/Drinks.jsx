import React from "react";
import "../dist/styles.css";
import DrinksData from "./DrinksData";
import DrinksItem from "./DrinksItem";

const Drinks = () => {
  return (
    <div className="drinks" id="drinks">
      <div className="container">
        <div className="drinks-section">
          <div className="catalog-list">
            <div className="row">
              {DrinksData.map((drink, index) => (
                <DrinksItem
                  key={index}
                  imgSrc={drink.imgSrc}
                  title={drink.title}
                  description={drink.description}
                  sizes={drink.sizes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
