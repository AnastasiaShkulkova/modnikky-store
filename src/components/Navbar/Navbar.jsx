import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/context";
import { StyledNav } from "./styles";

export function Navbar() {
  const { cartItems, menuOpen, setMenuOpen } = useContext(AppContext);
  return (
    <StyledNav>
      <nav className="nav-container">
        <div className="nav-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/assets/img/icons/hamburger-menu.svg" width={25} alt="" />
        </div>
        {menuOpen && (
          <div className="burger-menu-container">
            <div className="close-btn" onClick={() => setMenuOpen(false)}>
              <img src="/assets/img/icons/remove-icon.svg" alt="" />
            </div>
            <div className="burger-list">
              <p className="burger-items" href="#">
                NEW ARRIVALS
              </p>
              <p className="burger-items" href="#">
                SHOP
              </p>
              <p className="burger-items" href="#">
                COLLECTIONS
              </p>
            </div>
          </div>
        )}
        <div className="nav-block nav-options">
          <p className="options-tools" href="#">
            NEW ARRIVALS
          </p>
          <p className="options-tools" href="#">
            SHOP
          </p>
          <p className="options-tools" href="#">
            COLLECTIONS
          </p>
        </div>
        <div className="nav-block nav-image">
          <Link to={"/"}>
            <img
              src="/assets/img/icons/brand-logo.svg"
              className="logo"
              width={300}
              alt=""
            />
          </Link>
        </div>
        <div className="nav-block nav-options">
          <ul className="nav-block nav-options">
            <Link to={"/search"}>
              <li className="options-tools search-option">
                <img src="/assets/img/icons/search.svg" alt="" />
                SEARCH
              </li>
            </Link>
            <Link to={"/cart"}>
              <li className="options-tools">BAG({cartItems.length})</li>
            </Link>
            <Link to={"/signin"}>
              <li className="options-tools">SIGN IN</li>
            </Link>
            <li className="options-tools">
              <Link to={"/favorites"}>
                <img src="/assets/img/icons/wishlist-icon.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="mobile-icons">
          <li className="mobile-nav-icons">
            <Link to={"/search"}>
              <img src="/assets/img/icons/search.svg" width={25} alt="" />
            </Link>
          </li>
          <li className="mobile-nav-icons">
            <Link to={"/cart"}>
              <img src="/assets/img/icons/cart-icon.svg" width={25} alt="" />
            </Link>
          </li>
          <li className="mobile-nav-icons">
            <Link to={"/favorites"}>
              <img
                src="/assets/img/icons/wishlist-icon.svg"
                width={25}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
}
