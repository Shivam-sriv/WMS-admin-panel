import { React, useState } from 'react';
import { BiDetail } from "react-icons/bi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import { MDBDataTable, MDBInput } from 'mdbreact';
const Reconciliation_Listing = () => {
const data = {
columns: [
{
    label: 'Scheme',
    field: 'scheme',
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
label: 'Units(Cal)',
field: 'units_cal',
sort: 'asc',
width: 150
},
{
label: 'Units(RTA)',
field: 'units_rta',
sort: 'asc',
width: 150
},
{
label: 'Diff',
field: 'diff',
sort: 'asc',
width: 270
},
{
label: 'Applicant',
field: 'applicant',
sort: 'asc',
width: 200
},
{
    label: 'RTA Applicant',
    field: 'rta_applicant',
    sort: 'asc',
    width: 200
    },
    {
        label: 'RTA',
        field: 'rta',
        sort: 'asc',
        width: 200
        },
{
    label: 'AUM Date',
    field: 'aum_date',
    sort: 'asc',
    width: 200
    },
    {
    label: 'Status',
    field: 'status',
    sort: 'asc',
    width: 200
    },
],
rows: [
{
    scheme:'Lorem Ipsum is simply dummy text of the printing ',
folio: '5645619854',
units_cal: '452.65 ',
units_rta: '452.65',
diff: '0.00',
aum: '4999.1',
applicant:'Lorem Ipsum',
rta_applicant:'Lorem Ipsum',
rta:'CAMS',
aum_date:'19-04-24',
status:' ',
},
{
    scheme:'Lorem Ipsum is simply dummy text of the printing ',
folio: '5645619854',
units_cal: '452.65 ',
units_rta: '452.65',
diff: '0.00',
aum: '4999.1',
applicant:'Lorem Ipsum',
rta_applicant:'Lorem Ipsum',
rta:'CAMS',
aum_date:'19-04-24',
status:' ',
},
{
    scheme:'moresfdj Ipsum is simply dummy text of the printing ',
folio: '5645619854',
units_cal: '452.65 ',
units_rta: '452.65',
diff: '0.00',
aum: '4999.1',
applicant:'Lorem Ipsum',
rta_applicant:'Lorem Ipsum',
rta:'CAMS',
aum_date:'19-04-24',
status:' ',
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
                    <BiDetail size='23' />
                  </span>
                </span>
                Reconciliation Listing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5  reconciliation">
      <div className="col-12 ">
        <div className='row justify-content-center'>
         
          <Tabs className="mt-5 sipstpswp transaction">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-6">
                <TabList>
                  <Tab>Unmatched</Tab>
                  <Tab>Missing</Tab>
                  <Tab>Matched</Tab>
                </TabList>
                </div>
                <div className='my-5'>
              <TabPanel className="">
              <div className="row">
                      <div className="col-md-12 bg-white p-lg-5 p-2 table-shadow mb-5">
                        <MDBDataTable
                          data={data}
                          tableFoot={false}
                          responsive
                         sortable={true}
                          />
                      </div>
                    </div>
              
             
              </TabPanel>
              <TabPanel>
              <div className="row">
                      <div className="col-md-12 bg-white p-lg-5 p-2 table-shadow mb-5">
                        <MDBDataTable
                          data={data}
                          tableFoot={false}
                          responsive
                          />
                      </div>
                    </div>
              </TabPanel>
              <TabPanel>
              <div className="row">
                      <div className="col-md-12 bg-white p-lg-5 p-2 table-shadow mb-5">
                        <MDBDataTable
                          data={data}
                          tableFoot={false}
                          responsive
                          />
                      </div>
                    </div>
              </TabPanel>
            </div>
             
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
export default Reconciliation_Listing;