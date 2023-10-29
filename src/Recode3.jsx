import React, { useState, useEffect } from 'react';
import './Recode.css';

function Recode3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/get')//proxit set krne ke bad pura url nhi dalte
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App" >
      <h1 style={{backgroundColor:"white", color:"black" }}>Student Recode</h1>
      <table>
        <th>Roll Number</th>
        <th>Name</th>
        <th>Course</th>
        <th>Grade</th>
      </table>
        {data.map((item) => (
          <table key={item.roll_Number} >


            <tr>
           <td> {item.roll_Number}</td>
           <td> {item.name}</td> 
           <td>  {item.course}</td> 
           <td> {item.grade}</td> 
            </tr>
          </table>
        ))}
      
    </div>
  );
}

export default Recode3;
