import React from "react";
import { BiTransfer, BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Select from 'react-select';
const Folio_Details = () => {
    const options = [
        { label: "2022-2023", value: "2022-2023" },
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
                                            Folio Details
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-folio">
                        <h3 className="mt-5 text-center">View Folio</h3>
                        <div className="row  mt-4 shadow-search">

                            <div className="col-12 col-md-4 ">
                                <label htmlFor="applicant"><b>Applicant</b></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-md-4 mt-lg-0 mt-3">
                                <label htmlFor="applicant"><b>Folio</b></label>
                                <Select
                                    options={options}
                                />
                            </div>
                            <div className="col-12 col-md-4 mt-lg-0 mt-3">
                                <label htmlFor="applicant"><b>Scheme</b></label>
                                <Select
                                    options={options}
                                />
                            </div>

                        </div>

                        </div>
                        <div className="folio-details foliod mb-5">
                        <h3 className="mt-5 text-center">Folio Details</h3>
                        <div className="row  mt-4 shadow-search">
                            <div className="col-12 table-responsive">
                             <h5 className="bb-dot pb-3">Shivam Shrivastav</h5>
                               <table className="table">
                                <thead>
                                    <tr>
                                        <th>Units</th>
                                        <th>Current value</th>
                                        <th>Bank</th>
                                        <th>Account No.</th>
                                        <th>Joint 1</th>
                                        <th>Joint 2</th>
                                        <th>Nominee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr> 
                                        <td>45.2</td>
                                        <td>4562</td>
                                        <td>UBI</td>
                                        <td>4564654643</td>
                                        <td></td>
                                        <td></td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                </tbody>
                               </table>
                            </div>
                           

                        </div>

                        </div>




                    </div>
                </div>
            </main>


        </>
    )
}

export default Folio_Details