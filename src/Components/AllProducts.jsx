import { useEffect, useState } from "react";
import "../Css/AllProduct.css";
import { useNavigate } from "react-router-dom";


function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecom-egvy.onrender.com/admin/viewproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addtocart = async (productid,productname,price,imageurl) => {
    const userid = parseInt(localStorage.getItem("userid"));
    if(!userid)
    {
      navigate("/user/signin");
    }
    const response = await fetch("https://ecom-egvy.onrender.com/cart/addtocart", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userid,
        productid: productid,
        productname:productname,
        price:price,
        imageurl:imageurl,
      }),
    });
    if (response.ok) {
      const data = await response.text();
      alert(data);
    } else {
      alert("invalid");
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
    <div className="product-con">
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
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageurl} alt={product.productname} />
            <h2>{product.productname}</h2>
            <h2>₹{product.price}</h2>
            <h3>Stock: {product.stock}</h3>
            <h3>Category: {product.category}</h3>
            <button onClick={() => addtocart(product.id,product.productname,product.price,product.imageurl)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AllProducts;
