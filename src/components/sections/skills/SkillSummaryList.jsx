import React, { Component } from "react";

class SkillSummaryList extends Component {
  render() {
    const { skillTitle } = this.props.skills;
    return (
      <React.Fragment>
        <li>
          <i className="fa-li fa fa-check"></i>
          {skillTitle}
        </li>
      </React.Fragment>
    );
  }
}

export default SkillSummaryList;
