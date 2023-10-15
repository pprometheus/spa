import React from "react";
import "./Navbar.css";
import Upic from "../assets/userprofile.jpeg";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faUser} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const Navbar = ({userRole }) => {

  console.log(userRole)


  const navigate = useNavigate()

  return (
    <div className="sidebar-container">
      <div className="profile">
        <div class="dropdown">
          <FontAwesomeIcon className="icon" icon={faUser} color="white" /> 

            <div class="dropdown-content">
            <span>Hello, {userRole === 'admin' ? 'admin' : 'client'}</span>
            <button onClick={() => { navigate("/login"); localStorage.clear()}}>Logout</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
