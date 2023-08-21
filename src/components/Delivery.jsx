import React from "react";
import "../dist/styles.css";

const Delivery = () => {
  return (
    <div id="delivery" className="delivery">
      <div className="container">
        <div className="delivery-content">
          <h3>Доставка працює 25 / 8</h3>
          <h3>
            Час доставки: моментально - маємо найшвидші телепорти <br />
            та космічні кораблі
          </h3>
          <h3>
            Відправимо до будь-якої точки галактики
            <br />
            (та за її межi)
          </h3>
          <h3>Способи оплати:</h3>
          <h4>- готівка</h4>
          <h4>- картка</h4>
          <h4>- переказ</h4>
          <h4>- шматок піци (2 шматки, якщо менше 30см)</h4>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
