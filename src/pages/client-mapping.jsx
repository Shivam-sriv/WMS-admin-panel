import { React, useState } from 'react';
import { RiMapPinUserFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { MDBDataTable, MDBInput } from 'mdbreact';
import Select from 'react-select';
const Client_Mapping = () => {
const options = [
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" },
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" },
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" },
{ label: "Franklin Templeton Mutual Fund", value: "Franklin Templeton Mutual Fund" }
];
const data = {
columns: [
{
label: <input type="Checkbox"  className='form-check-input ms-2'/>,
field: 'checkbox',
sort: 'asc',
width: 150
},
{
label: 'Applicant',
field: 'applicant',
sort: 'asc',
width: 150
},
{
label: 'Address',
field: 'address',
sort: 'asc',
width: 150
},
{
label: 'Create Date',
field: 'create_date',
sort: 'asc',
width: 150
},
{
label: 'PAN',
field: 'pan',
sort: 'asc',
width: 270
},
{
label: 'ID',
field: 'id',
sort: 'asc',
width: 200
},
],
rows: [
{
checkbox: <input type="Checkbox"  className='form-check-input ms-2'/>,
applicant: 'Lorem Ipsum ',
address: 'Lorem Ipsum is simply dummy ',
create_date: '20/05/2024  ',
pan: 'SIPJKH205O',
id: '495654984',
},
]
};
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
                    <RiMapPinUserFill size='20' />
                  </span>
                </span>
                Client Mapping
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row  mt-5 shadow-search">
        <div className="col-12 col-md-3">
          <label htmlFor="applicant"><b>Applicant</b></label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-md-3 mt-lg-0 mt-2">
          <label htmlFor="applicant"><b>PAN</b></label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-md-2 mt-lg-0 mt-2">
          <label htmlFor="applicant"><b>From</b></label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 col-md-2 mt-lg-0 mt-2">
          <label htmlFor="applicant"><b>To</b></label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 col-md-2 align-self-center mt-4">
          <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn '>
          SHOW</Link>
        </div>
      </div>
      <div className="row mt-5 clientmap">
        <div className="col-12 bg-white p-3 table-shadow mb-5">
          <MDBDataTable
            data={data}
            tableFoot={false}
            responsive
            checkbox
            />
        </div>
      </div>
      <div className="row bg-white p-3 shadow-search mb-5">
        <div className="col-12 col-md-4">
          <Select
            options={options}
            />
        </div>
        <div className="col-12 col-md-8">
          <button className='text-white  custom-button  btn btn-success col-12 col-md-3 mt-3 mt-lg-0'>MERGE</button>
          <button className='text-white  custom-button  btn btn-success ms-0 ms-lg-3 col-12 col-md-3 mt-3 mt-lg-0'>SAVE</button>
          <button className='text-white  custom-button  btn btn-success ms-0 ms-lg-3 col-12 col-md-3 mt-3 mt-lg-0'>UPDATE</button>
        </div>
      </div>
    </div>
  </div>
</main>
</>
);
};
export default Client_Mapping;