import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Recode() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API request when the component mounts
    axios.get('/get')
      .then((response) => {
        // Assuming the data is in response.data, set it in the state
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Student Record</h1>
      <ul>
        {data.map((item) => (
          <li key={item.roll_Number}>
            <strong>Roll Number:</strong> {item.roll_Number}
            <strong>Course:</strong> {item.course}
            <strong>Name:</strong> {item.name}
            <strong>Grade:</strong> {item.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recode;
