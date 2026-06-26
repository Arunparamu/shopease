import { useEffect, useState } from "react";
import "../Css/ViewProduct.css";
function ViewProduct(){
    const[product ,setProduct]=useState([]);
    useEffect(()=>{
        fetch("https://ecom-egvy.onrender.com/admin/viewproduct")
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data);
        });
    },[]);

    return(
        <div className="product-container"> 
            {product.map((products)=>(
                <div  className="product-card" key={products.id}>
                    <h2>ProductName: {products.productname}</h2>
                    <h2>Price: {products.price}</h2>
                    <h3>Stock: {products.stock}</h3>
                    <p>ProductCategory: {products.category}</p>
                    <img src={products.imageurl} alt="no"/>
                </div>
            ))}
        </div>
    );
}
export default ViewProduct;