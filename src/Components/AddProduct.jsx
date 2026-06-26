import { useState } from "react";
import "../Css/AddProduct.css";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [productname, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("productname", productname);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await fetch("https://ecom-egvy.onrender.com/admin/addproduct", {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      if (response.ok) {
        alert(data);
      }
      console.log(data);

      setName("");
      setPrice(0);
      setStock(0);
      setCategory("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };
  return (
      <div className="products">
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            placeholder="enter the productname"
            value={productname}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />

          <label>Price:</label>
          <br />
          <input
            type="Number"
            placeholder="enter the productprice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />

          <label>Stock:</label>
          <br />
          <input
            type="Number"
            placeholder="enter the productstock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <br />
          <br />

          <label>Select file:</label>
          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <br />

          <label>category:</label>
          <br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">select category</option>
            <option value="Dress">Dress</option>
            <option value="Electronics">Electronics</option>
          </select>
          <br />
          <br />
          <button
            type="submit"
            disabled={!productname || !price || !category || !stock || !image}
          >
            Add
          </button>
        </form>
    </div>
  );
}
export default AddProduct;
