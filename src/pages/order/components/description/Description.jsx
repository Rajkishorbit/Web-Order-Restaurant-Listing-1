import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="infoContainer">
        <div className="home">
          <i class="fa-solid fa-location-arrow"></i>
          <h2>Home</h2>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="address">
          101 Independence Avenue, S.E, Washington, DC, 20559-6000
        </div>
        <div className="path">Home / Las Vegas / Nacho Daddy</div>
      </div>
      <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="coin">
        <div className="div">
          <i class="fa-regular fa-coin"></i>
        </div>
        <div className="div">
          <i class="fa-brands fa-bitcoin"></i>
          500
        </div>
      </div>
    </div>
  );
};

export default Description;
