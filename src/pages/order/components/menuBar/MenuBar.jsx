import React from "react";
import "./MenuBar.css";
import Burger from "../../../../img/nachodaddy.jpg";
const MenuBar = () => {
  return (
    <div className="menubar">
      <nav>
        <ul className="menubarList">
          <li>
            <h2>Menu</h2>
          </li>
          <li>
            <h2>About</h2>
          </li>
          <li>
            <h2>Reviews</h2>
          </li>
        </ul>
      </nav>
      <div className="menuContent">
        <div className="sidebar">
          <nav>
            <ul className="sidebarList">
              <li>
                <p>Popular (20)</p>
              </li>
              <li>
                <p>Famous For (30)</p>
              </li>
              <li>
                <p>Lunch Special (10)</p>
              </li>
              <li>
                <p>Breakfast (9)</p>
              </li>
              <li>
                <p>Starters (10)</p>
              </li>
              <li>
                <p>Deserts (5)</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <div className="contentHeading">
            <h5>Popular</h5>



            <div className="contentItem">
              <div className="contentPhoto">
                <img className="burgerPhoto" src={Burger} alt="Burger" />
                <div className="increment">
                  <button className="incrementButton">+</button>
                  <div>2</div>
                  <button className="incrementButton">-</button>
                </div>
              </div>
              <div className="contentDesc">
                <div className="contentTitle">
                  <h3>Crispy Chicken Sandwich</h3>
                </div>
                <div className="contentDesc">
                  Our Spicy italian sandwich is a combo of pepperoni and Genoa
                  salami. Pir on
                </div>
                <div className="contentIcons">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
              </div>
              <div className="contentPrice"><h2>$8.58</h2></div>
            </div>



            


            <div className="contentItem">
              <div className="contentPhoto">
                <img className="burgerPhoto" src={Burger} alt="Burger" />
                <div className="increment">
                  <button className="incrementButton">+</button>
                  <div>2</div>
                  <button className="incrementButton">-</button>
                </div>
              </div>
              <div className="contentDesc">
                <div className="contentTitle">
                  <h3>Crispy Chicken Sandwich</h3>
                </div>
                <div className="contentDesc">
                  Our Spicy italian sandwich is a combo of pepperoni and Genoa
                  salami. Pir on
                </div>
                <div className="contentIcons">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
              </div>
              <div className="contentPrice"><h2>$8.58</h2></div>
            </div>


            
            


            <div className="contentItem">
              <div className="contentPhoto">
                <img className="burgerPhoto" src={Burger} alt="Burger" />
                <div className="increment">
                  <button className="incrementButton">+</button>
                  <div>2</div>
                  <button className="incrementButton">-</button>
                </div>
              </div>
              <div className="contentDesc">
                <div className="contentTitle">
                  <h3>Crispy Chicken Sandwich</h3>
                </div>
                <div className="contentDesc">
                  Our Spicy italian sandwich is a combo of pepperoni and Genoa
                  salami. Pir on
                </div>
                <div className="contentIcons">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
              </div>
              <div className="contentPrice"><h2>$8.58</h2></div>
            </div>


            
            


            <div className="contentItem">
              <div className="contentPhoto">
                <img className="burgerPhoto" src={Burger} alt="Burger" />
                <div className="increment">
                  <button className="incrementButton">+</button>
                  <div>2</div>
                  <button className="incrementButton">-</button>
                </div>
              </div>
              <div className="contentDesc">
                <div className="contentTitle">
                  <h3>Crispy Chicken Sandwich</h3>
                </div>
                <div className="contentDesc">
                  Our Spicy italian sandwich is a combo of pepperoni and Genoa
                  salami. Pir on
                </div>
                <div className="contentIcons">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
              </div>
              <div className="contentPrice"><h2>$8.58</h2></div>
            </div>


            
            


            <div className="contentItem">
              <div className="contentPhoto">
                <img className="burgerPhoto" src={Burger} alt="Burger" />
                <div className="increment">
                  <button className="incrementButton">+</button>
                  <div>2</div>
                  <button className="incrementButton">-</button>
                </div>
              </div>
              <div className="contentDesc">
                <div className="contentTitle">
                  <h3>Crispy Chicken Sandwich</h3>
                </div>
                <div className="contentDesc">
                  Our Spicy italian sandwich is a combo of pepperoni and Genoa
                  salami. Pir on
                </div>
                <div className="contentIcons">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
              </div>
              <div className="contentPrice"><h2>$8.58</h2></div>
            </div>


            
          </div>
        </div>
        <div className="cart">
          <div className="couponContainer">
            <div className="couponLabel">Coupon Code</div>
            <div className="couponInput">
              <i class="fa-solid fa-ticket"></i>
              <input
                className="couponInputInput"
                type="text"
                placeholder="Enter coupon"
              />
              <button className="couponButton">Apply</button>
            </div>
          </div>
          <div className="cartSystem">
            <div className="cartLabel">
              Your Cart (6 items)
              <div className="cartButtonContainer">
                <button className="quickest">
                  <p>Quickest</p>
                  {/* <p>15 - 20 min</p> */}
                </button>
                <button className="schedule">
                  <p>Schedule</p>
                  {/* <p>Select date and time</p> */}
                </button>
              </div>
              <div className="cartItemContainer">
                <div className="cartItemHeadline">
                  <div className="slno">2</div>
                  <div className="product">Crispy Chicken Sandwitch</div>
                  <div className="add">
                    <button className="addButton"> - </button>
                    <div>2</div>
                    <button className="addButton"> + </button>
                  </div>
                </div>
                <div className="productDesc">
                  <p>No cheese, No Potato Roll, Add Butter, Add Mayonese</p>
                </div>
                <div className="productInstruction">
                  <input
                    className="instruction"
                    type="text"
                    placeholder="Special Instruction"
                  />
                </div>
                <div className="total">
                  <h4 className="extra">Add on Extras</h4>
                  <h3>$7.58</h3>
                </div>
              </div>
              <div className="cartItemContainer">
                <div className="cartItemHeadline">
                  <div className="slno">2</div>
                  <div className="product">Crispy Chicken Sandwitch</div>
                  <div className="add">
                    <button className="addButton"> - </button>
                    <div>2</div>
                    <button className="addButton"> + </button>
                  </div>
                </div>
                <div className="productDesc">
                  <p>No cheese, No Potato Roll, Add Butter, Add Mayonese</p>
                </div>
                <div className="productInstruction">
                  <input
                    className="instruction"
                    type="text"
                    placeholder="Special Instruction"
                  />
                </div>
                <div className="total">
                  <h4 className="extra">Add on Extras</h4>
                  <h3>$7.58</h3>
                </div>
              </div>
              <div className="cartItemContainer">
                <div className="cartItemHeadline">
                  <div className="slno">2</div>
                  <div className="product">Crispy Chicken Sandwitch</div>
                  <div className="add">
                    <button className="addButton"> - </button>
                    <div>2</div>
                    <button className="addButton"> + </button>
                  </div>
                </div>
                <div className="productDesc">
                  <p>No cheese, No Potato Roll, Add Butter, Add Mayonese</p>
                </div>
                <div className="productInstruction">
                  <input
                    className="instruction"
                    type="text"
                    placeholder="Special Instruction"
                  />
                </div>
                <div className="total">
                  <h4 className="extra">Add on Extras</h4>
                  <h3>$7.58</h3>
                </div>
              </div>
              <button className="checkout">Continue to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
