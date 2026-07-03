import { useState } from "react";
import "../Css/CheckOut.css";
import { useNavigate } from "react-router-dom";


function CheckOut() {
  const [address, setAddress] = useState("");
  const[name,setName]=useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const userid = Number(localStorage.getItem("userid"));

    const response = await fetch("https://ecom-egvy.onrender.com/order/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userid,
        address: address,
        username:name,
      }),
    });

    if (response.ok) {
      alert("order placed successfully");
      navigate("/user/cart/checkout/ordersuccess");
    }
    else
    {
      alert("order failed");
    }
  };

  //logout
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("userid");
    navigate("/")
  };

  //home
  const home=()=>{
    navigate("/user/allproducts")
  }

  //cartpage
  const cartpage=()=>{
    navigate("/user/cart")
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>ShopEase</h2>
        </div>

        <div className="nav-links">
          <button className="nav-btn" onClick={home}>Home</button>
          <button className="nav-btn" onClick={cartpage}>Cart</button>
          <button className="nav-btn" onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="checkout-container">
      <form className="checkout-form" onSubmit={handlesubmit}>
        <h2>Checkout</h2>
        <label>Username:</label>
        <input
          type="text"
          value={name}
          placeholder="enter the name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br/>
        <br/>
        <label>Address:</label>
        <br/>
        <input
          type="text"
          value={address}
          placeholder="enter the address"
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <br/>
        <button type="submit">Place Order</button>
      </form>
    </div>
    </div>
  );
}
export default CheckOut;
