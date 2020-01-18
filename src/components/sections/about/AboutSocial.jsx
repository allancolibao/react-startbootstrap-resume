import React, { Component } from "react";

class AboutSoial extends Component {
  render() {
    const { link, className } = this.props.social;
    return (
      <React.Fragment>
        <a href={link}>
          <i className={className}></i>
        </a>
      </React.Fragment>
    );
  }
}

export default AboutSoial;
