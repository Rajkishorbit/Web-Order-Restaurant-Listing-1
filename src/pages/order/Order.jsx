import Description from "./components/description/Description";
import FoodInfo from "./components/foodInfo/FoodInfo";
import MenuBar from "./components/menuBar/MenuBar";
import { Navbar } from "./components/navbar/Navbar";

function Order() {
  return (
    <div className="order">
    
      <Navbar/>
      <Description/>
      <FoodInfo/>
      <MenuBar/>
    </div>
  );
}

export default Order;
