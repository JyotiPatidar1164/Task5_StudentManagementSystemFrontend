// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Define the URL of the backend API
    const apiUrl = 'http://localhost:8080/get';

    // Fetch data from the backend API
    axios.get(apiUrl)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
