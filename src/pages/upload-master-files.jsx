import React from "react";
import { FaClipboardCheck, FaUpload } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Fade } from "react-bootstrap";
import { Upload } from "../uploader/upload";
import {Cams} from "../validators/cams"
import { Karvy } from "../validators/karvy";
const Upload_Master_Files = () => {
const camsCallback = (json) => {
const cams = new Cams(json[0]);
cams.isKeysExist()
console.log(cams.valid)
}
const karvyCallback = (json) => {
const karvy = new Karvy(json[0]);
karvy.isKeysExist();
console.log(karvy.valid);
}
const camsUploader = (e) => {
const upload = new Upload(e.target.files[0], camsCallback);
upload.read();
};
const karvyUploader = (e) => {
const upload = new Upload(e.target.files[0],karvyCallback)
upload.read();
// e.target.value = null;
}  
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
                    <FaClipboardCheck size='20'/>
                  </span>
                </span>
                Upload Master Files
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-4">
          <Tabs
            defaultActiveKey="cams"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
            transition={Fade}
            >
            <Tab eventKey="cams" title="CAMS">
              <div className="upload-section  py-3 d-flex">
                <FaUpload className="fs-2 me-3 align-self-center" />
                <input
                  type="file"
                  name="file"
                  // id=""
                  onChange={camsUploader}
                  className="input-style"
                  />
              </div>
            </Tab>
            <Tab eventKey="karvy" title="KARVY">
              <div className="upload-section py-3 d-flex">
                <FaUpload className="fs-2 me-3 align-self-center" />
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={karvyUploader}
                  className="input-style"
                  />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</main>
</>
);
};
export default Upload_Master_Files;