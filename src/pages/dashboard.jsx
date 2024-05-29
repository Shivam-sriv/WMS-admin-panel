import {React, useState} from 'react';
import { FaHome } from "react-icons/fa";
const Dashboard = () => {
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
                    <FaHome size='20'/>
                  </span>
                </span>
                Dashboard  
              </h3>
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
export default Dashboard;