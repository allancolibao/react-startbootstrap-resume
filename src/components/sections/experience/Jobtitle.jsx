import React, { Component } from "react";

class Jobtitle extends Component {
  render() {
    const {
      label,
      company,
      duration,
      desc1,
      desc2,
      desc3,
      desc4,
      desc5,
      desc6,
      desc7,
      desc8,
      desc9,
      desc10,
      desc11
    } = this.props.job;
    return (
      <React.Fragment>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{label}</h3>
            <div className="subheading mb-3">{company}</div>
            <p>{desc1}</p>
            <p>{desc2}</p>
            <p>{desc3}</p>
            <p>{desc4}</p>
            <p>{desc5}</p>
            <p>{desc6}</p>
            <p>{desc7}</p>
            <p>{desc8}</p>
            <p>{desc9}</p>
            <p>{desc10}</p>
            <p>{desc11}</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">{duration}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jobtitle;
