import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase"; 
import "./Login.css";

export default function Login() {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (action === "Sign Up") {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Account created successfully!");
        setAction("Login");
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Login successful!");
        navigate("/home"); 
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h2 style={{color:"white"}}>{action === "Login" ? "Login" : "Create an Account"}</h2>
        </div>
        <div className="inputs">
          <div className="input">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzPZylzg2WbKyBLcuWmlamC0SULqZCi90Pg&s"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email-Id"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input">
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            {action}
          </button>
          <div className="toggle-action">
            {action === "Login" ? (
              <p style={{color:"whitesmoke"}}>
                Don't have an account?{" "}
                <span style={{color:"whitesmoke"}} onClick={() => setAction("Sign Up")}>Sign Up</span>
              </p>
            ) : (
              <p style={{color:"whitesmoke"}}>
                Already have an account?{" "}
                <span  style={{color:"whitesmoke"}} onClick={() => setAction("Login")}>Login</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
