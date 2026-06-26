import { useState } from "react";
import "../Css/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://ecom-egvy.onrender.com/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if(response.ok)
    {
      alert("data saved successfully");
    }
    else{
      alert("already exit mail");
    }

    const data = await response.json();
  };

  return (
    <div className="signup-container">
      <form  className="signup-form" onSubmit={handlesubmit}>
        <h2>SignUp</h2>
        <label>Email:</label>
        <br />
        <input
          type="mail"
          placeholder="enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <br/>
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
          signUp
        </button>
        <br/>
        <br/>
      </form>
      <button onClick={()=>navigate("/user/signin")}>SignIn</button>
    </div>
  );
}
export default Signup;
