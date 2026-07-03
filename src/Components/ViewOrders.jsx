import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Css/ViewOrders.css";

function ViewOrders() {
  const navigate = useNavigate();
  const [vieworders, viewSetOrders] = useState([]);

  // Fetch orders when page loads
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `https://ecom-egvy.onrender.com/order/fetchallorder?userid=${parseInt(
          localStorage.getItem("userid")
        )}`
      );

      const data = await response.json();
      viewSetOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("userid");
    navigate("/");
  };

  const home = () => {
    navigate("/user/allproducts");
  };

  const cartpage = () => {
    navigate("/user/cart");
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

          <button className="nav-btn">
            Orders
          </button>

          <button className="nav-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="orders-container">
        <h2 className="title">My Orders</h2>

        {vieworders.length === 0 ? (
          <h3 className="empty">No Orders Found</h3>
        ) : (
          vieworders.map((order) => (
            <div key={order.id} className="order-card">
              <img
                src={order.imageurl}
                alt={order.productname}
                className="order-image"
              />

              <div className="order-details">
                <h3>{order.productname}</h3>

                <p>
                  <strong>Price:</strong> ₹{order.price}
                </p>

                <p>
                  <strong>Delivery Address:</strong> {order.address}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewOrders;