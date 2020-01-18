import React, { Component } from "react";
import Jobtitle from "./Jobtitle";

class Job extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.job.map(job => (
          <Jobtitle key={job.id} job={job} />
        ))}
      </React.Fragment>
    );
  }
}

export default Job;
