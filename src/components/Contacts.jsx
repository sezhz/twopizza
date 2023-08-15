import React from "react";
import "../dist/styles.css";
import Map from "./Map";

const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="container">
        <div className="contacts-content">
          <a href="https://maps-generator.com/"></a>
          <h3>
            Адреса: <br /> вулиця Академіка Павлова, 44-Б
          </h3>
          <h3>
            Час роботи кафе: <br /> без вихідних з 12.00 до 19.00
          </h3>
          <h3>
            Час роботи доставки: <br /> без вихідних з 12.00 до 19.00
          </h3>
          <h3>
            телефони: <br /> (067) 778-92-28, (057) 752-92-12
          </h3>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
