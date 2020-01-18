import React, { Component } from "react";
import ExperienceHeading from "./ExperienceHeading";
import Experience from "./Experience";

class Experiences extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <ExperienceHeading />
          <Experience />
        </div>
      </section>
    );
  }
}

export default Experiences;
