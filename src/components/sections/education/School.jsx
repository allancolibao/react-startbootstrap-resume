import React, { Component } from "react";
import Course from "./Course";
import Year from "./Year";

class School extends Component {
  render() {
    return (
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">
            Computer Systems Technological College (CSTC)
          </h3>
          <Course />
        </div>
        <Year />
      </div>
    );
  }
}

export default School;
