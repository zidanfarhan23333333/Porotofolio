import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <div className="nav-content">
          <img className="logo" src="./assets/images/porto.png" alt="" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skils</a>
            </li>
            <li>
              <a className="menu-item">Pengalaman</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hubungi
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
