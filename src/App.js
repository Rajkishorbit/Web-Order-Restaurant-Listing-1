
import React from "react";
import BellIcon from 'react-bell-icon';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MyFavourites from "./favourites";
import MyDonation from "./donation";
import MyOrder from "./order";
import MyGift from "./gift";

import Order from "./pages/order/Order";

function App() {
  return (
    
<HashRouter>

<nav id="mynav">



<Link to="/favourites" className="mylink">Favourites</Link>
<Link to="/donation" className="mylink">Donation</Link>
<Link to="/order" className="mylink">Order</Link>
<Link to="/gift" className="mylink">Gift</Link>

  

</nav>
<Routes>
<Route exact path="/favourites" element={<MyFavourites/>} />
<Route exact path="/donation" element={<MyDonation/>} />
<Route exact path="/order" element={<Order/>} />
<Route exact path="/gift" element={<MyGift/>} />

</Routes>
</HashRouter>
    

          
  
  );
}

export default App;

