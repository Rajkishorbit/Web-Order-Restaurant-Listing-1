import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="left">
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="center">
          <h2>Favorites</h2>
          <h2>Donation</h2>
          <h2>Order</h2>
          <h2>Gift</h2>
        </div>
        <div className="right">
          <div className="bellContainer">
            <i class="fa-solid fa-bell"></i>
            <div className="bellBadge">
              1
            </div>
          </div>
          <div className="cartContainer">
            <i class="fa-solid fa-cart-shopping"></i>
            <div className="cartBadge">
              1
            </div>
          </div>
          <div className="profileContainer">
            <i class="fa-solid fa-circle-user"></i>
            <div className="profileBadge">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
