import React from "react";
import Timeline from "./Timeline";
import CommandSubmitForm from "./CommandSubmit";

const MainComponent = () => (
  <div>
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

);
export default MainComponent;