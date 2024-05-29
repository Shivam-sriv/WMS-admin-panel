import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FiLogOut,FiUser } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
const Profile_Dropdown=()=>
{
    return(

        <>
        
        <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <Dropdown.Item href="#/action-1" className='dropdown-header'><h6>Shivam Shrivastav</h6>
                  <span>Web Designer</span></Dropdown.Item>       
        <Dropdown.Item href="#/action-3" className='border-top'> <Link className="dropdown-item d-flex align-items-center" to="/user-profile">
                      <FiUser className='me-3 text-bluec fs-19'/>
                    <span>My Profile</span>
                  </Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className='border-top'><Link className="dropdown-item d-flex align-items-center" to="/user-profile">
              <CiSettings className="me-3 text-bluec fs-19"/>
                    <span>Account Settings</span>
                  </Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className='border-top'>  <Link className="dropdown-item d-flex align-items-center" to="#">
                    <FiLogOut className='me-3 text-bluec fs-19' />
                    <span><Link to="/login" className="text-black">Sign Out</Link></span>
                  </Link></Dropdown.Item>
      </Dropdown.Menu>
        
        </>
    )
}

export default Profile_Dropdown