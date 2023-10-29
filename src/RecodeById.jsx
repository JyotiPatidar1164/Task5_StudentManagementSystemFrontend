import React, { useState, useEffect } from 'react';

const RecodeById = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(""); // Default user ID

  useEffect(() => {
    // Fetch data when the component mounts or userId changes
    fetchData();
  }, [userId]);

  const fetchData = () => {
    // Make an API request with the user's ID
    fetch(`/get/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
    <div style={{textAlign:"center",paddingTop:"0px",border:"20px"}}>
      <h1 style={{background:"white",color:"Black"}}>Find The Student Detail</h1>
      <br/>
      <br/>
      <br/>
      
      <label >Enter Roll Number           </label>
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br/><br/>
      <button onClick={fetchData}>Submit</button>
      {user ? (
        <div style={{ color:"white"}}>
          <h3>Roll Nubmer   :{user.roll_Number}</h3> 
          <h4>Name : {user.course}</h4>
          <h4>Email  : {user.name}</h4>
          <h4>Grade   : {user.grade}</h4>
          {/* Display other user properties */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default RecodeById;
