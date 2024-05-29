import { React, useState } from 'react';
import { FaDatabase } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import { MDBDataTable, MDBInput } from 'mdbreact';
const Data_Management = () => {
const data = {
columns: [
{
    label: <input type="Checkbox"  className='form-check-input ms-2'/>,
    field: 'checkbox',
    sort: 'asc',
    width: 150
},
{
label: 'Folio',
field: 'folio',
sort: 'asc',
width: 200
},
{
label: 'Scheme',
field: 'scheme',
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
label: 'Pan',
field: 'pan',
sort: 'asc',
width: 270
},
{
label: 'AUM',
field: 'aum',
sort: 'asc',
width: 200
},
{
    label: 'Valuation Date',
    field: 'valuation_date',
    sort: 'asc',
    width: 200
    },
],
rows: [
{
checkbox: <input type="Checkbox"  className='form-check-input ms-2'/>,
folio: '5645619854',
scheme: 'Lorem Ipsum is simply dummy text of the printing ',
applicant: 'Lorem Ipsum  ',
pan: 'SKHP56DH',
aum: '4999.1',
valuation_date:'Invalid Date',
},
{
    checkbox: <input type="Checkbox"  className='form-check-input ms-2'/>,
    folio: '5645619854',
    scheme: 'Lorem Ipsum is simply dummy text of the printing ',
    applicant: 'Lorem Ipsum  ',
    pan: 'SKHP56DH',
    aum: '4999.1',
    valuation_date:'Invalid Date',
},
{
    checkbox: <input type="Checkbox"  className='form-check-input ms-2'/>,
    folio: '5645619854',
    scheme: 'Lorem Ipsum is simply dummy text of the printing ',
    applicant: 'Lorem Ipsum  ',
    pan: 'SKHP56DH',
    aum: '4999.1',
    valuation_date:'Invalid Date',
},
]
};
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
                    <FaDatabase size='23' />
                  </span>
                </span>
               Data Management
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-12 ">
        <div className='row justify-content-center'>
         
          <Tabs className="mt-5 sipstpswp transaction">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-6">
                <TabList>
                  <Tab>Search Name</Tab>
                  <Tab>Search Folio</Tab>
                  <Tab>Search Pan</Tab>
                </TabList>
                <div className='my-5'>
              <TabPanel className="">
                <div className="row">
                    <div className="col-9">
                    <input type="text" className='form-control' />
                    </div>
                    <div className="col-3 align-self-center">
                    <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn '>
                SHOW</Link>
                    </div>
                </div>
              
             
              </TabPanel>
              <TabPanel>
              <input type="text" className='form-control' />
              </TabPanel>
              <TabPanel>
              <input type="text" className='form-control' />
              </TabPanel>
            </div>
              </div>
            </div>
           
          </Tabs>
        </div>
      </div>

      <div className="col-12">
      <section className="upload-recm ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12 bg-white p-lg-5 p-2 table-shadow mb-5">
                        <MDBDataTable
                          data={data}
                          tableFoot={false}
                          responsive
                          />
                      </div>
                    </div>
                  </div>
                </section>
      </div>
    </div>
  </div>
</main>
</>
);
}
export default Data_Management;