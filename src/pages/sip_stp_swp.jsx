import { React, useState } from 'react';
import { MdSip } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MDBDataTable, MDBInput } from 'mdbreact';
const Sip_Stp_Swp = () => {
const data = {
columns: [
{
label: 'Date',
field: 'date',
sort: 'asc',
width: "500"
},
{
label: 'Investor Name',
field: 'investor_name',
sort: 'asc',
width: 200
},
{
label: 'Folio No',
field: 'folio_no',
sort: 'asc',
width: 150
},
{
label: 'Scheme Name',
field: 'scheme_name',
sort: 'asc',
width: 150
},
{
label: 'Nature',
field: 'nature',
sort: 'asc',
width: 270
},
{
label: 'Amount',
field: 'amount',
sort: 'asc',
width: 200
},
],
rows: [
{
date: '24-06-2024',
investor_name: 'Lorem Ipsum ',
folio_no: '4235645619854 ',
scheme_name: 'Lorem Ipsum is simply dummy text of the printing  ',
nature: 'SIP',
amount: '4999.1',
},
{
date: '24-06-2024',
investor_name: 'Lorem Ipsum ',
folio_no: '4235645619854 ',
scheme_name: 'Lorem Ipsum is simply dummy text of the printing  ',
nature: 'SIP',
amount: '4999.1',
},
{
date: '24-06-2024',
investor_name: 'Lorem Ipsum ',
folio_no: '4235645619854 ',
scheme_name: 'Lorem Ipsum is simply dummy text of the printing  ',
nature: 'SIP',
amount: '4999.1',
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
                    <MdSip size='23' />
                  </span>
                </span>
                SIP / STP / SWP
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-12 ">
        <div className='row justify-content-center'>
          <div className="col-12 col-md-4">
            <input type="date" className='form-control' name="" id="" />
          </div>
          <Tabs className="mt-5 sipstpswp">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-4">
                <TabList>
                  <Tab>All Data</Tab>
                  <Tab>Client Wise</Tab>
                </TabList>
              </div>
            </div>
            <div className='my-5'>
              <TabPanel className="">
                <section className="upload-recm ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12 bg-white p-lg-5 p-2 table-shadow mb-5">
                        <div className='shadowc p-3 mb-5 bg-hero'>
                          <h6 className='mb-3 text-black'>Transaction Type  :</h6>
                          <input type="radio" id="sip" name="transact" value="SIP" className="form-check-input"/>
                          <label for="sip" className='ps-2'>SIP</label>
                          <input  type="radio" id="stp" name="transact" value="STP" className='ms-3 form-check-input'/>
                          <label for="stp" className='ps-2'>STP</label>
                          <input type="radio" id="swp" name="transact" value="SWP" className='ms-3 form-check-input'/>
                          <label for="swp" className='ps-2'>SWP</label>
                        </div>
                        <MDBDataTable
                          data={data}
                          tableFoot={false}
                          responsive                                                             
                          />
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel>
                <section className="upload-recm ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12 bg-white p-lg-5 p-4 table-shadow mb-5">
                        <div className='row shadowc p-3 mb-5 bg-hero'>
                          <div className='col-12 col-md-4'>
                            <h6 className='mb-3 text-black'>Applicant</h6>
                            <input type="text" name="" id="" className='form-control' />
                          </div>
                          <div className="col-12 col-md-8 text-lg-end mt-3 mt-lg-0">
                            <h6 className='mb-3 text-black'>Transaction Type  :</h6>
                            <input type="radio" id="sip" name="transact" value="SIP" className='form-check-input'/>
                            <label for="sip" className='ps-2'>SIP</label>
                            <input type="radio" id="stp" name="transact" value="STP" className='ms-3 form-check-input'/>
                            <label for="stp" className='ps-2'>STP</label>
                            <input type="radio" id="swp" name="transact" value="SWP" className='ms-3 form-check-input'/>
                            <label for="swp" className='ps-2'>SWP</label>
                          </div>
                        </div>
                        <MDBDataTable
                          data={data}
                          tableFoot={false}
                          responsive
                          />
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</main>
</>
);
}
export default Sip_Stp_Swp;