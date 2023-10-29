
import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {

  return (
    <>
      <h1 style={{backgroundColor:"white", color:"black" }}>STUDENT MANAGEMENT SYSTEM</h1>
      <div>
        <Link to="/viewRecode">
        <button>STUDENT RECORDE</button>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/StudentRegistration">
        <button>ADD NEW STUDENT</button>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/Update">
        <button>UPDATE INFORMATION</button>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/Delete">
        <button>DELETE STUDENT</button>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/Recode">
        <button>FIND STUDENT</button>
        </Link>
      </div>
     
    </>
  );
}

export default Home;
