import React, { Component } from "react";
import SkillSummaryHeading from "./SkillSummaryHeading";
import SkillSummaryList from "./SkillSummaryList";

class SkillSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: 1,
          skillTitle: "Web Development"
        },
        {
          id: 2,
          skillTitle: "Graphic Design"
        },
        {
          id: 3,
          skillTitle: "Video Creator"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <SkillSummaryHeading component={SkillSummaryHeading} />
        <ul className="fa-ul mb-0">
          {this.state.skills.map(skills => (
            <SkillSummaryList key={skills.id} skills={skills} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default SkillSummary;
