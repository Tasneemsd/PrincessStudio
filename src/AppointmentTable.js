import React, { useEffect, useState } from "react";
import { ref, get, remove, update } from "firebase/database";
import { database } from "./Firebase";
import "./AppointmentTable.css";

export default function AppointmentTable({ userRole }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingAppointment, setEditingAppointment] = useState(null);
  

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsRef = ref(database, "appointments");
        const snapshot = await get(appointmentsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const appointmentsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setAppointments(appointmentsArray);
        } else {
          console.log("No appointments found");
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("Failed to load appointments. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = (id) => {
    const appointmentRef = ref(database, `appointments/${id}`);
    remove(appointmentRef)
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((err) => {
        console.error("Error deleting appointment:", err);
        alert("Failed to delete the appointment. Please try again.");
      });
  };

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
  };

  const handleSave = () => {
    const { id, ...updatedData } = editingAppointment;
    const appointmentRef = ref(database, `appointments/${id}`);

    update(appointmentRef, updatedData)
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === id ? { ...appointment, ...updatedData } : appointment
          )
        );
        setEditingAppointment(null);
      })
      .catch((err) => {
        console.error("Error updating appointment:", err);
        alert("Failed to update the appointment. Please try again.");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading appointments...</p>
        <img 
          src="https://thumbs.dreamstime.com/b/emotion-face-expression-mental-stress-depression-boredom-frustration-fatigue-concept-young-unhappy-sad-frustrated-depressed-woman-193934164.jpg" 
          width="350px" height="250px"
        />
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="no-appointments">
        <p>No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="appointment-table-container">
      <h2>Appointment Details</h2>
      {editingAppointment && (
        <div className="edit-form">
          <h3>Edit Appointment</h3>
          <label>
            Name:
            <input
              type="text"
              name="userName"
              value={editingAppointment.userName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="userEmail"
              value={editingAppointment.userEmail}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Service:
            <input
              type="text"
              name="service"
              value={editingAppointment.service}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Appointment Date:
            <input
              type="date"
              name="appointmentDate"
              value={editingAppointment.appointmentDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={editingAppointment.message}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditingAppointment(null)}>Cancel</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Appointment Date</th>
            <th>Message</th>
            {userRole === "owner" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.userName}</td>
              <td>{appointment.userEmail}</td>
              <td>{appointment.service}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.message}</td>
              {userRole === "owner" && (
                <td>
                  <div className="tt">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(appointment)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(appointment.id)}
                  >
                    Delete
                  </button>
                  </div>
                  
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
