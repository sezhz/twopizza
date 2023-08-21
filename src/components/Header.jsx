import React, { useEffect, useState } from "react";
import "../dist/styles.css";
import logo from "../img/logo.png";
import NavItem from "./NavItem";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="header" className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-cont">
        <div className="logo">
          <img
            className="header-logo"
            src={logo}
            alt="logo"
            onClick={scrollToTop}
          />
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <NavItem to="/pizza" label="Пiца" />
            <NavItem to="/drinks" label="Напої" />
            <NavItem to="/delivery" label="Доставка" />
            <NavItem to="/contacts" label="Контакти" />
          </ul>
        </nav>
      </div>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default Header;
