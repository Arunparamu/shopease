import { useState } from "react";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import Admin from "./Components/Admin";
import ViewProduct from "./Components/ViewProduct";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import AllProducts from "./Components/AllProducts";
import Cart from "./Components/Cart"
import CheckOut from "./Components/CheckOut";
import OrderSuccess from "./Components/OrderSuccess";
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/admin/addproduct" element={<AddProduct/>}/>
              <Route path="/admin/viewproduct" element={<ViewProduct/>}/>
              <Route path="/user/signup" element={<Signup/>}/>
              <Route path="/user/signin" element={<Signin/>}/>
              <Route path="/user/allproducts" element={<AllProducts/>}/>
              <Route path="/user/cart" element={<Cart/>}/>
              <Route path="/user/cart/checkout" element={<CheckOut/>}/>
              <Route path="/user/cart/checkout/ordersuccess" element={<OrderSuccess/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
