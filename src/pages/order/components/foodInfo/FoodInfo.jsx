import React from "react";
import "./FoodInfo.css";
import NachoDaddy from "../../../../img/nachodaddy.jpg";

const FoodInfo = () => {
  return (
    <div className="foodInfo">
      <img className="foodImage" src={NachoDaddy} alt="Nacho Daddy" />
      <div className="foodTextContainer">
        <div className="foodTitle">
          <div className="titleIcon">
            <div className="titleIconText">
              <h2>Nacho Daddy (Downtown)</h2>
            </div>
            <div className="titleIconIcon">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
          </div>
          Las Vegas
        </div>
        <div className="foodDetails">
          <div className="foodDetail">
            <h3>4.0</h3>
            <h5>78 Reviews</h5>
          </div>
          <div className="foodDetail">
            <h3>30-40 min</h3>
            <h5>Preparation Time</h5>
          </div>
          <div className="foodDetail">
            <h3>3.0 miles</h3>
            <h5>Distance</h5>
          </div>
          <div className="foodDetail">
            <h3>10:00 am to 11:00 pm</h3>
            <h5>Open Hours</h5>
          </div>
        </div>
        <div className="searchContainer">
          <input
            className="search"
            type="text"
            placeholder="Search (within the menu)"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodInfo;
