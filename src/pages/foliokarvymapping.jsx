import {React, useState} from 'react';
import { FaSearchengin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiUserSearchFill } from "react-icons/ri";
const Foliokarvymapping = () => {
return (
<>
<main id="main">
  <div className="content-wrapper">
    <div className="page-nav">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header ms-2">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <span>
                    <RiUserSearchFill size='20'/>
                  </span>
                </span>
                KARVY CLIENT MAPPING
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-10 ">
        <div className='row shadowc bg-white px-3'>
          <div className="col-12">
            <table className='table text-center '>
              <thead>
                <tr>
                  <th> </th>
                  <th>NAME</th>
                  <th>PAN</th>
                  <th>FOLIO</th>
                  <th>ADDRESS</th>
                  <th>GPAN</th>
                  <th>PRODUCT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="radio" name="" id="" /> </td>
                  <td>BFC Capital Pvt Ltd </td>
                  <td>AFSDH3SDFA </td>
                  <td>1154254512 </td>
                  <td>CP 61 VIRAJ kHAND </td>
                  <td>0AFSDH3SDFA </td>
                  <td>
                    <Link className='bg-gradient-primary text-white p-2 custom-button'>
                    NEW CLIENT</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row shadowc bg-white py-5 mt-5">
          <div className="col-4">
            <input type="text" className='form-control' placeholder='Applicant' />
          </div>
          <div className="col-4">
            <input type="text" className='form-control' placeholder='PAN' />
          </div>
          <div className="col-4 align-self-center">
            <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn'>
            SHOW</Link>
          </div>
        </div>
        <div className='row shadowc bg-white px-3 mt-5'>
          <div className="col-12">
            <table className='table text-center '>
              <thead>
                <tr>
                  <th> </th>
                  <th>NAME</th>
                  <th>PAN</th>
                  <th>ADDRESS</th>
                  <th>NAV DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="radio" name="" id="" /> </td>
                  <td>BFC Capital Pvt Ltd </td>
                  <td>AFSDH3SDFA </td>
                  <td>1154254512 </td>
                  <td>CP 61 VIRAJ kHAND </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
            <div className="py-3">
              <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn'>
              MERGE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</>
);
}
export default Foliokarvymapping;