import React, { Component } from "react";
import LanguagesTools from "./LanguagesTools";
import DesignTools from "./DesignTools";
import SkillSummary from "./SkillSummary";

class Skills extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <LanguagesTools component={LanguagesTools} />
          <DesignTools component={DesignTools} />
          <SkillSummary component={SkillSummary} />
        </div>
      </section>
    );
  }
}

export default Skills;
