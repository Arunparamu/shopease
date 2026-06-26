import { useNavigate } from "react-router-dom";
import "../Css/Admin.css";

function Admin() {
  const navigate = useNavigate();
  return (
    <div className="admin-layout">
      <div className="sidebar">
        <h2>Admin Panel</h2>

        <button onClick={() => navigate("/admin/addproduct")}>
          Addproduct
        </button>
        <button onClick={() => navigate("/admin/viewproduct")}>
          ViewProduct
        </button>
        <button onClick={() => navigate("/addproduct")}>User</button>
        <button onClick={() => navigate("/addproduct")}>User</button>
        <button onClick={() => navigate("/addproduct")}>User</button>
      </div>

      <div className="content">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Admin;
