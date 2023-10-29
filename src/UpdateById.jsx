import React, { useState, useEffect } from 'react';

function UpdateById() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [course, setCourse] = useState('');

  // Fetch student data by ID when the component mounts
  useEffect(() => {
    // Replace 'yourApiUrl' with the actual API endpoint
    fetch(`/put/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setGrade(data.grade);
        setCourse(data.course);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdate = () => {
    // Create an updated student object
    const updatedStudent = {
      name: name,
      grade: grade,
      course: course,
    };

    // Send a PUT request to update the student data
    fetch(`/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedStudent),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Student data updated successfully');
        } else {
          alert('Failed to update student data');
        }
      })
      .catch((error) => {
        console.error('Error updating student data:', error);
      });
  };

  return (
    <div>
      <h2 styel={{backgroundColor:"white", color:"black" }}>Update Student Information</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br/>
      <br/>
      <br/>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <br/>
        <br/>
        <br/>
      <input
        type="text"
        placeholder="Student Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
        <br/>
        <br/>
        <br/>
      <input
        type="text"
        placeholder="Student Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
        <br/>  <br/>
        <br/>
      <button onClick={handleUpdate}>Update Student</button>
      <br/>
      <br/>
    </div>
  );
}

export default UpdateById;
