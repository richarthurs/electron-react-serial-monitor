import React from "react";
import SerialData from "./SerialData";
import CommandSubmitForm from "./CommandSubmit";

const MainComponent = () => (
  <div>
    <div className="col-md-4 offset-md-1">
    <CommandSubmitForm />
    </div>
  <div className="row mt-5">
    <div className="col-md-7 offset-md-1">
    <h2>OBC Data</h2>
      <SerialData />
    </div>
  </div>
  </div>

);
export default MainComponent;