import React, { Component } from "react";
import About from "./about/About";
import Experiences from "./experience/Experiences";
import Education from "./education/Education";
import Skills from "./skills/Skills";

class MainSections extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <About component={About} />
        <hr className="m-0"></hr>
        <Experiences component={Experiences} />
        <hr className="m-0"></hr>
        <Education component={Education} />
        <hr className="m-0"></hr>
        <Skills component={Skills} />
        <hr className="m-0"></hr>
      </div>
    );
  }
}

export default MainSections;
