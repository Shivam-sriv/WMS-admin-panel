import { React, useState } from 'react';
import { BiDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MDBDataTable, MDBInput } from 'mdbreact';
import Select from 'react-select';
const Aum_Listing = () => {
const options = [
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" },
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" },
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" },
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" }
];

return (
<>
<main id="main">
  <div className="content-wrapper">
    <div className="container-fluid">
      <div className="page-nav">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header ms-2">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <span>
                    <BiDetail size='20' />
                  </span>
                </span>
                Aum Listing
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 shadow-search aum-listing ">
       <table className='table table-striped table-bordered'>
        <tr className='grand-total-bg sticky-aum'>
        <th><input type="Checkbox"  className='form-check-input ms-2'/></th>
        <th><span className='ps-2'>AMC</span></th>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
       </table>

       <div className="col-12 col-md-2 offset-md-10 align-self-center mt-4 sticky-bottom">
          <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn '>
         Get Scheme</Link>
        </div>
      </div>
      
      <div className="aum-listing bg-white p-3 shadow-search my-5">
      <table className='table table-striped table-bordered'>
        <tr className='grand-total-bg sticky-aum'>
        <th><input type="Checkbox"  className='form-check-input ms-2'/></th>
        <th><span className='ps-2'>Scheme</span></th>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
        <tr>
        <td><input type="Checkbox"  className='form-check-input ms-2'/></td>
        <td><p>Franklin Templeton Mutual Fund</p></td>
        </tr>
       </table>
       <div className="col-12 col-md-2 offset-md-10 align-self-center mt-4 sticky-bottom">
          <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn '>
         Calculate</Link>
        </div>
      </div>
    </div>
  </div>
</main>
</>
);
};
export default Aum_Listing;