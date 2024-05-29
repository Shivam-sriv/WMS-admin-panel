import React from "react";
import { FaArrowUp, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MDBDataTable, MDBInput } from 'mdbreact';
const Portfolio = () => {
const data = {
columns: [
{
label: 'Scheme/Company',
field: 'scheme',
sort: 'asc',
width: "500"
},
{
label: 'Folio',
field: 'folio',
sort: 'asc',
width: 200
},
{
label: 'Balance Units',
field: 'balance_unit',
sort: 'asc',
width: 150
},
{
label: 'Purchase',
field: 'purchase',
sort: 'asc',
width: 150
},
{
label: 'Current NAV',
field: 'current_nav',
sort: 'asc',
width: 270
},
{
label: 'Current Value',
field: 'current_value',
sort: 'asc',
width: 200
},
{
label: 'Gain/Loss',
field: 'gain_loss',
sort: 'asc',
width: 200
},
{
label: 'Days',
field: 'days',
sort: 'asc',
width: 200
},
{
label: 'Absolute Return %',
field: 'absolute_return',
sort: 'asc',
width: 200
},
{
label: 'CAGR %',
field: 'cagr',
sort: 'asc',
width: 200
},
],
rows: [
{
scheme: ' dummy text of the printing ',
folio: '4549825 ',
balance_unit: '50 ',
purchase: '150006 ',
current_nav: '85.5',
current_value: '4999.1',
gain_loss: '4150',
days: '21',
absolute_return: '10',
cagr: '40.55',
},
{
scheme: <b className="ms-3">Total</b>,
folio: ' ',
balance_unit: ' ',
purchase: <b>150006</b>,
current_nav: '',
current_value: <b>4999.1</b>,
gain_loss: <b>4150</b>,
days: '',
absolute_return: '',
cagr: <b>40.55</b>,
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
                Portfolio
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row  mt-5 shadow-search">
      <div className="col-12 col-md-4">
        <label htmlFor="applicant"><b>Applicant</b></label>
        <input type="text" className="form-control" />
      </div>
      <div className="col-12 col-md-4 mt-lg-0 mt-3">
        <label htmlFor="applicant"><b>Category</b></label>
        <select class="form-select" aria-label="Default select example">
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-12 col-md-2 align-self-center mt-4">
        <Link className='bg-gradient-primary text-white p-2 custom-button padding-btn '>
        SHOW</Link>
      </div>
    </div>
    <section className="upload-recm mt-5 portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-white p-lg-5 p-4 table-shadow mb-5">
            <div className='row shadowc p-3 mb-5 bg-hero'>
              <div className="col-12 table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Purchase Cost</th>
                      <th>Market Value</th>
                      <th>Day's Change</th>
                      <th>Dividend</th>
                      <th>Gain/Loss</th>
                      <th>CAGR(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>145500</td>
                      <td>159625</td>
                      <td>153</td>
                      <td>16</td>
                      <td>
                        1400 
                        <span>
                          <FaArrowUp className="text-success" />
                        </span>
                      </td>
                      <td>40.66</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='row shadowc p-3 mb-5 bg-hero mt-3'>
              <div className="col-12 table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Purchase Cost</th>
                      <th>Market Value</th>
                      <th>Gain/Loss</th>
                      <th>CAGR(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">Shivam Shrivastav</a></td>
                      <td>159625</td>
                      <td>16</td>
                      <td>
                        1400 
                        <span>
                          <FaArrowUp className="text-success" />
                        </span>
                      </td>
                      <td>40.66</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="">
              <MDBDataTable
                data={data}
                tableFoot={false}
                responsive
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>
</>
)
}
export default Portfolio