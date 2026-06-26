import { useEffect, useState } from "react";
import "../Css/Cart.css";
import { useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";

function Cart() {
  const userid = localStorage.getItem("userid");
  const [cart, setCart] = useState([]);
  console.log(userid);
  useEffect(() => {
    fetch(`https://ecom-egvy.onrender.com/cart/gettocart/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }, []);

  //cart total
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += Number(item.price);
  });

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userid");
    navigate("/");
  };

  //home
  const home = () => {
    navigate("/user/allproducts");
  };

  //cartpage
  const cartpage = () => {
    navigate("/user/cart");
  };

  //deleteto cart
  const deletetocart = async (id) => {
    console.log(id);
    const response = await fetch(
      `https://ecom-egvy.onrender.com/cart/deletetocart/${id}`,
      {
        method: "DELETE",
      },
    );
    if (response.ok) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  //navi to checkout page
  const checkout=()=>{
    navigate("/user/cart/checkout");
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>ShopEase</h2>
        </div>

        <div className="nav-links">
          <button className="nav-btn" onClick={home}>
            Home
          </button>
          <button className="nav-btn" onClick={cartpage}>
            Cart
          </button>
          <button className="nav-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="cart-container">
        <h1 className="cart-title">My Cart</h1>

        {cart.map((carts) => (
          <div className="cart-card" key={carts.id}>
            <img src={carts.imageUrl} alt={carts.productName} />

            <div className="cart-details">
              <h2>{carts.productName}</h2>
              <h3>₹{carts.price}</h3>
            </div>
            <button
              className="remove-btn"
              onClick={() => deletetocart(carts.id)} > Remove
            </button>
          </div>
        ))}
        <div className="cart-total">
          <button onClick={checkout}>Checkout</button>
          <h2>Total: ₹{totalPrice}</h2>
        </div>
      </div>
    </div>
  );
}
export default Cart;
