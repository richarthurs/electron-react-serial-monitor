import React from "react";
import Timeline from "./Timeline";
import CommandSubmitForm from "./CommandSubmit";
import InfoBar from "./InfoBar";
import Tabs from "react-bootstrap/lib/Tabs"
import Tab from "react-bootstrap/lib/Tab"
import RANavBar from "./RANavBar";

const MainComponent = () => (


<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">


  <Tab eventKey={1} title="Monitor">
    
  <div>
    <InfoBar />
    <div className="col-md-10 offset-md-1">
    <CommandSubmitForm />
    </div>
  <div className="row mt-5">
    <div className="col-md-10 offset-md-1">
    <h2>OBC Data</h2>
      <Timeline />
    </div>
  </div>
  </div>
  </Tab>
  <Tab eventKey={2} title="Command Creation">
        <InfoBar />

  </Tab>
</Tabs>


  
);
export default MainComponent;