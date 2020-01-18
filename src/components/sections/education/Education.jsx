import React, { Component } from "react";
import EducationHeading from "./EducationHeading";
import School from "./School";

class Education extends Component {
  state = {};
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <EducationHeading />
          <School />
        </div>
      </section>
    );
  }
}

export default Education;
