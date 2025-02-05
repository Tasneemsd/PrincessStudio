import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in successfully.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
