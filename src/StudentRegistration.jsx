import React, { useState } from 'react';
import axios from 'axios';

const StudentRegistration = () => {
  const url = "/post"; // Replace with your API endpoint

  const initialState = {
    name: "",
    course: "",
    grade: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [userRecords, setUserRecords] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the data in the POST request
    axios
      .post(url, formData)
      .then((response) => {
        console.log('Response:', response.data);
        setResponseMessage(response.data);
        // Optionally, you can handle the response or display a success message
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseMessage("Registration failed. Please try again.");
        // Optionally, you can handle errors and display an error message
      });

    const newUserRecord = { ...formData };
    setUserRecords([...userRecords, newUserRecord]);

    // Reset form fields
    setFormData(initialState);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "skyblue" }}>Student Registration</h1>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            value={formData.name}
            onChange={handleInput}
            name="name"
            id="name"
            required
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="course">Course</label>
          <input
            type="text"
            autoComplete="off"
            value={formData.course}
            onChange={handleInput}
            name="course"
            id="course"
            required
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            autoComplete="off"
            value={formData.grade}
            onChange={handleInput}
            name="grade"
            id="grade"
            required
          />
        </div>
        <br />
        <br />
      
        <button type="submit">Register Student</button>
        <br />
        <br />
      </form>
      {responseMessage && <p>{responseMessage}</p>}

      <div>
        <h3>Student Records</h3>
        <ul>
          {userRecords.map((record, index) => (
            <li key={index}>

             Name: {record.name}, Course: {record.course}, Grade: {record.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentRegistration;
