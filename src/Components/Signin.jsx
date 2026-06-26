import { useState } from "react";
import "../Css/Signin.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://ecom-egvy.onrender.com/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
      if (response.ok) 
      {
        const user = await response.json();
        localStorage.setItem("userid", user.id);
        navigate("/user/allproducts");
      } 
      else 
      {
        alert("invalid");
      }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handlesubmit}>
        <h2>SignIn</h2>
        <label>Email:</label>
        <br />
        <input
          type="mail"
          placeholder="enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={!email || !password}>
          signin
        </button>
        <br />
        <br />
      </form>
      <button onClick={() => navigate("/user/signup")}>signUp</button>
    </div>
  );
}
export default Signin;
