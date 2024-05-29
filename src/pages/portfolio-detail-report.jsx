import React from "react";
import { FaArrowUp, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MDBDataTable, MDBInput } from 'mdbreact';
const Portfolio_Detail_Report = () => {
    const data = {
        columns: [
        {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: "500"
        },

      
        {
        label: 'Nature',
        field: 'nature',
        sort: 'asc',
        width: 200
        },
        {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 150
        },
        {
        label: 'NAV/Rate',
        field: 'nav',
        sort: 'asc',
        width: 150
        },
        {
        label: 'Unit/Nos',
        field: 'unit',
        sort: 'asc',
        width: 270
        },
        {
        label: 'Balance',
        field: 'balance',
        sort: 'asc',
        width: 200
        },
        {
        label: 'RTA',
        field: 'rta',
        sort: 'asc',
        width: 200
        },
        
        ],
        
        rows: [
        {
        date: ' 12-10-2023 ',
        nature: 'Purchase ',
        amount: '245652.5',
        nav: '541654 ',
        unit: '121585',
        balance: '4999.1',
        rta: 'CAMS',
       
        },
        {
            date: '  ',
            nature: <b>Current Value</b> ,
            amount: <b>245652.5</b>,
            nav: <b>541654 </b>,
            unit: <b>121585</b>,
            balance: '',
            rta: '',
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
                    <FaChartLine size='23' />
                  </span>
                </span>
                Portfolio Detail Report
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row  mt-5 shadow-search p-report">
        <div className="col-12 table-responsive">
     <table className="table table-bordered mb-0">
        <tr>
            <th className="min-10">Name</th>
            <td className="min-10">Shivam Shrivastav [DGHKHHJG]</td>
            <th className="min-10">Folio Number</th>
            <td className="min-10">51658956</td>
        </tr>
        <tr>
        <th>Scheme Name</th>
            <td>XYZ</td>
            <th>MOH</th>
            <td>IND</td> 
        </tr>
        <tr>
        <th>Nominee</th>
            <td>Santosh</td>
            <th>Bank</th>
            <td>Bank of India</td> 
        </tr>

     </table>
     </div>
    </div>
    <section className="upload-recm my-5 portfolio">
      <div className="container-fluid">
        <div className="row table-shadow bg-white  px-3 py-3">
          <div className="col-12">
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
</main>
</>
)
}
export default Portfolio_Detail_Report