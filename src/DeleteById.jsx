import React, { useState } from 'react';

const DeleteStudent = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    // Send a DELETE request to the backend API
    fetch(`/deleteStudent/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.text(); // Extract the response text
        } else {
          throw new Error('Failed to delete student');
        }
      })
      .then((data) => {
        setMessage(data); // Display the response message
      })
      .catch((error) => {
        setMessage('Error: ' + error.message);
      });
  };

  return (
    <div>
        <h2 style={{background:"white",paddingTop:"0px"}}>DELETE STUDENT</h2>
        <br/>
        <br/>
        <br/>
        <lable>Enter Stuent Roll Number  :</lable>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <br/>
      <br/>
      <button onClick={handleDelete}>Delete Student</button>
      <div>{message}</div>
    </div>
  );
};

export default DeleteStudent;
