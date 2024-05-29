import React from 'react';

import { FaChevronUp, FaChevronDown, FaHome, FaUpload, FaUser } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { FaClipboardCheck, FaRandom,FaChartLine ,FaDatabase} from "react-icons/fa";

import { TfiControlEject,TfiStatsDown } from "react-icons/tfi";
import { BiTransfer,BiDetail } from "react-icons/bi";
import { MdSip,MdSavings } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { RiMapPinUserFill } from "react-icons/ri";

const Sidebar = () => {

  const [toggle, setToggle] = React.useState(false);
  const [toggle1, setToggle1] = React.useState(false);
 

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item" >
            <NavLink to="/" activeClassName="nav-link" className="d-flex nav-link-c">
            <span className="menu-icon"><FaHome /></span>
              <span className="menu-title">Dashboard</span>
             
            </NavLink>
          </li>
          
         
          <li className="nav-item drop" >
            <Link className="nav-link collapsed navc" onClick={() => { setToggle(!toggle) }}>
            <span className="menu-icon"><FaUpload /></span>            
              <span className='ps-3 main-sidenav'>Upload</span>
              <FaChevronDown className={toggle ? "ms-8  dshow d-none" : "ms-8  dshow "} />
              <FaChevronUp className={toggle ? "ms-8  ddshow collapseshow " : "ms-8  ddshow collapseshow d-none"} />
            </Link>
            <ul id="components-nav" className={toggle ? `nav-content collapse show` : `nav-content collapse`} data-bs-parent="#sidebar-nav">
              <li className='ps-3'>
                <NavLink to="/upload-master-files" className="nav-link ">
                <span className="menu-icon"> <FaClipboardCheck className="nav-icon" /></span>  <span className='ps-2'>Upload Master Files</span>
                </NavLink>
              </li>
              <li className='ps-3'>
                <NavLink to="/portfolio-review" activeClassName="nav-link ">
                <span className="menu-icon">  <FaRandom className="nav-icon" /></span><span className='ps-2'>Upload Transaction Files</span>
                </NavLink>
              </li>
              <li className='ps-3'>
                <NavLink to="/jettison" activeClassName="nav-link ">
                <span className="menu-icon"> <TfiControlEject  size={25} /> </span><span className='ps-2'>Upload NAV</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item" >
            <NavLink to="/sipstpswp"  className="d-flex nav-link-c">
            <span className="menu-icon"><MdSip /></span>
              <span className="menu-title">SIP / STP</span>
             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/transaction"  className="d-flex nav-link-c">
            <span className="menu-icon"><BiTransfer /></span>
              <span className="menu-title">Transaction</span>
             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/tax-saving-investments"  className="d-flex nav-link-c">
            <span className="menu-icon"><MdSavings /></span>
              <span className="menu-title">Tax Saving Investments</span>
             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/dividend"  className="d-flex nav-link-c">
            <span className="menu-icon">< BsBank  /></span>
              <span className="menu-title">Dividend</span>
             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/folio-details"  className="d-flex nav-link-c">
            <span className="menu-icon"><BiDetail /></span>
              <span className="menu-title">Folio Details</span>
             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/portfolio"  className="d-flex nav-link-c">
            <span className="menu-icon"><FaChartLine /></span>
              <span className="menu-title">Portfolio</span>
             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/data-management"  className="d-flex nav-link-c">
            <span className="menu-icon"><FaDatabase /></span>
              <span className="menu-title">Data Management</span>             
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/clientmapping"  className="d-flex nav-link-c">
            <span className="menu-icon"><RiMapPinUserFill /></span>
              <span className="menu-title">Client Mapping</span>
             
            </NavLink>
          </li>
          <li className="nav-item drop" >
            <Link className="nav-link collapsed navc" onClick={() => { setToggle(!toggle) }}>
            <span className="menu-icon"><FaUser /></span>            
              <span className='ps-3 main-sidenav'>AUM Reconciliation </span>
              <FaChevronDown className={toggle ? "ms-2rem  dshow d-none" : "ms-2rem  dshow "} />
              <FaChevronUp className={toggle ? "ms-2rem  ddshow collapseshow " : "ms-2rem  ddshow collapseshow d-none"} />
            </Link>
            <ul id="components-nav" className={toggle ? `nav-content collapse show` : `nav-content collapse`} data-bs-parent="#sidebar-nav">
              <li className='ps-3'>
                <NavLink to="/" className="nav-link ">
                <span className="menu-icon"> <FaUpload className="nav-icon" /></span>  <span className='ps-2'> AUM Uploading</span>
                </NavLink>
              </li>
              <li className='ps-3'>
                <NavLink to="/aum-listing" activeClassName="nav-link ">
                <span className="menu-icon">  <BiDetail className="nav-icon" /></span><span className='ps-2'>AUM Listing</span>
                </NavLink>
              </li>
              <li className='ps-3'>
                <NavLink to="/reconciliation-listing" activeClassName="nav-link ">
                <span className="menu-icon"> <BiDetail  size={25} /> </span><span className='ps-2'>Reconciliation Listing</span>
                </NavLink>
              </li>
            </ul>
          </li>
         
        </ul>

      </aside>

    </>
  );
}

export default Sidebar;



