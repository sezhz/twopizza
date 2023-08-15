import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }

    function showPosition(position) {
      const iframe = document.getElementById("map-iframe");
      const mapSrc = iframe.getAttribute("src");
      const newSrc = `${mapSrc}&center=${position.coords.latitude},${position.coords.longitude}`;
      iframe.setAttribute("src", newSrc);
    }

    getLocation();
  }, []);

  return (
    <iframe
      id="map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41046.5183647319!2d36.30571105254881!3d49.98497100160525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0a0ad64df05%3A0xbe4c2a55c43a0dbe!2z0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDQsdGD0LvRjNCy0LDRgA!5e0!3m2!1sru!2sua!4v1692019526137!5m2!1sru!2sua"
      loading="lazy"
      samesite="Strict"
      title="map"
      style={{ width: "100%", height: "45rem", border: "0px" }}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
