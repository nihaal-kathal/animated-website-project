import React, { useState } from "react";
import "../Styles/navbar.css";
import brandLogo from "../Assests/brandname.png";
// import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState("Home");
  return (
    <div className=" navbar">
      <div>
        <img src={brandLogo} alt="brandLogo" className=" brandLogo" />
      </div>
      <div>
        <div className="navbarItems">
          <div
            className="navbarItemsEach"
            onClick={() => setNavbarActive("Home")}
          >
            <a href="#home" className="anchortag">
              <div className="navbarItemsEachText">Home</div>
              {navbarActive !== "Home" ? (
                <div className="navbarActiveBar"></div>
              ) : (
                <div className="navbarNonActiveBar"></div>
              )}
            </a>
          </div>

          <div
            className="navbarItemsEach"
            onClick={() => setNavbarActive("Services")}
          >
            <a href="#servicesweoffer" className="anchortag">
              <div className="navbarItemsEachText">Services We Offer</div>
              {navbarActive !== "Services" ? (
                <div className="navbarActiveBar"></div>
              ) : (
                <div className="navbarNonActiveBar"></div>
              )}
            </a>
          </div>

          <div
            className="navbarItemsEach"
            onClick={() => setNavbarActive("Whatweadd")}
          >
            <a href="#whyus" className="anchortag">
              <div className="navbarItemsEachText"> Why Us?</div>

              {navbarActive !== "Whatweadd" ? (
                <div className="navbarActiveBar"></div>
              ) : (
                <div className="navbarNonActiveBar"></div>
              )}
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className="navbarItemsEach"
          onClick={() => setNavbarActive("Contact")}
        >
          <a href="#contactus" className="anchortag">
            <div className="navbarItemsEachText">Contact Us</div>

            {navbarActive !== "Contact" ? (
              <div className="navbarActiveBar  navbarNonActiveBarContactus"></div>
            ) : (
              <div className="navbarNonActiveBar"></div>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
