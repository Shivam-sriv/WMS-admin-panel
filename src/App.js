import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import Wrap from "./navbar/wrap";
import Dashboard from "./pages/dashboard";
import Upload_Master_Files from "./pages/upload-master-files";
import Login from "./pages/login";
import Foliocamsmapping from "./pages/foliocamsmapping";
import Foliokarvymapping from "./pages/foliokarvymapping";
import Sip_Stp_Swp from "./pages/sip_stp_swp";
import Client_Mapping from "./pages/client-mapping";
import Tax_Saving_Investment from "./pages/tax-saving-investment";
import Dividend from "./pages/dividend";
import Transaction from "./pages/transaction";
import Portfolio from "./pages/portfolio";
import Folio_Details from "./pages/folio-details";
import Portfolio_Detail_Report from "./pages/portfolio-detail-report";
import Data_Management from "./pages/data-management";
import Aum_Listing from "./pages/aum-listing";
import Reconciliation_Listing from "./pages/reconciliation-listing";
const App = () => {

  return (
    <div>
      <BrowserRouter>
      
        
       
        <Routes>
          <Route  element={<Wrap Component={Dashboard} />} path="/"/>
          <Route  element={<Wrap Component={Upload_Master_Files} />} path="/upload-master-files"/>
          <Route  element={<Wrap Component={Foliocamsmapping} />} path="/foliocamsmapping"/>
          <Route  element={<Wrap Component={Foliokarvymapping} />} path="/foliokarvymapping"/>
          <Route  element={<Wrap Component={Sip_Stp_Swp} />} path="/sipstpswp"/>
          <Route  element={<Wrap Component={Client_Mapping} />} path="/clientmapping"/>
          <Route  element={<Wrap Component={Tax_Saving_Investment} />} path="/tax-saving-investments"/>
          <Route  element={<Wrap Component={Dividend} />} path="/dividend"/>
          <Route  element={<Wrap Component={Transaction} />} path="/transaction"/>
          <Route  element={<Wrap Component={Portfolio} />} path="/portfolio"/>
          <Route  element={<Wrap Component={Folio_Details} />} path="/folio-details"/>
          <Route  element={<Wrap Component={Portfolio_Detail_Report} />} path="/portfolio-detail-report"/>
          <Route  element={<Wrap Component={Data_Management} />} path="/data-management"/>
          <Route  element={<Wrap Component={Aum_Listing} />} path="/aum-listing"/>
          <Route  element={<Wrap Component={Reconciliation_Listing} />} path="/reconciliation-listing"/>
          <Route path="/login" element={<Login />} />
    
         
         
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
