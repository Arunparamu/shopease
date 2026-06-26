import { useNavigate } from "react-router-dom";
import "../Css/OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="check-circle">
          ✓
        </div>

        <h1>Order Completed</h1>

        <p>Thank you for your purchase!</p>

        <button
          className="continue-btn"
          onClick={() => navigate("/user/allproducts")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;