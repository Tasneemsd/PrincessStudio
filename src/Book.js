
import React, { useState } from "react";
import { database, ref, push } from "./Firebase";

export default function AppointmentForm() {
 
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [service, setService] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const appointmentData = {
      userName,
      userEmail,
      service,
      appointmentDate,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
   
      await push(ref(database, "appointments"), appointmentData);
      
    
      alert("Appointment successfully booked!");
      

      setUserName("");
      setUserEmail("");
      setService("");
      setAppointmentDate("");
      setMessage("");
    } catch (error) {
      console.error("Error booking appointment: ", error);
      alert("There was an error booking your appointment. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "deeppink",
        opacity: "0.8",
        width: "250px",
        height: "550px",
        marginTop: "80px",
        marginLeft: "22px",
      }}
    >
      <h1
        style={{
          color: "purple",
          textDecorationColor: "white",
          textDecoration: "underline",
        }}
      >
        Book an appointment
      </h1>

      <input
        style={{ marginTop: "10px", borderRadius: "5px", fontSize: "15px" }}
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <br />
      <br />
      <input
        style={{ borderRadius: "5px", fontSize: "15px" }}
        type="email"
        placeholder="Enter your email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />
      <br />
      <br />
      <label htmlFor="service" style={{ color: "white" }}>
        Choose a Service:
      </label>
      <select
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        style={{
          marginBottom: "10px",
          borderRadius: "5px",
          fontSize: "15px",
          width: "100%",
        }}
        required
      >
        <option value="">--Select a Service--</option>
        <option value="Hair Cut">Hair Cut</option>
        <option value="Facial">Facial</option>
        <option value="Manicure">Manicure</option>
        <option value="Pedicure">Pedicure</option>
        <option value="Makeup">Makeup</option>
        <option value="Massage">Bridal Package</option>
      </select>
      <br />
      <br />
      <label htmlFor="appointment-date" style={{ color: "white" }}>
        Appointment Date:
      </label>
      <input
        id="appointment-date"
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        style={{
          marginBottom: "10px",
          borderRadius: "5px",
          fontSize: "15px",
          width: "100%",
        }}
        required
      />
      <br />
      
      <label htmlFor="message" style={{ color: "white" }}>
        Additional Details:
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4" cols="6"
        placeholder="Any special requests or notes"
        style={{
          marginBottom: "10px",
          borderRadius: "5px",
          fontSize: "15px",
          width: "100%",
        }}
      />
      <br />
      
      <button
        type="submit"
        style={{
          width: "150px",
          marginLeft: "50px",
          borderRadius: "5px",
          color: "white",
          boxShadow: "10px 10px 30px white",
          backgroundColor: "crimson",
          borderColor: "crimson",
        }}
      >
        Book Appointment
      </button>
    </form>
  );
};


