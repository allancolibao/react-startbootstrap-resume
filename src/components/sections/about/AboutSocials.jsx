import React, { Component } from "react";
import AboutSocial from "./AboutSocial";

class AboutSocials extends Component {
  render() {
    return (
      <div className="social-icons">
        {this.props.socials.map(social => (
          <AboutSocial key={social.id} social={social} />
        ))}
      </div>
    );
  }
}

export default AboutSocials;
