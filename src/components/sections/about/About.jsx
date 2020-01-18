import React, { Component } from "react";
import AboutHeading from "./AboutHeading";
import AboutSubheading from "./AboutSubheading";
import AboutParagraph from "./AboutParagraph";
import AboutSocials from "./AboutSocials";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: [
        {
          id: 1,
          className: "fab fa-facebook-f",
          link: "https://www.facebook.com/allancolibao/"
        },
        {
          id: 2,
          className: "fab fa-instagram",
          link: "https://www.instagram.com/allancolibao/"
        },
        {
          id: 3,
          className: "fab fa-twitter",
          link: "https://www.twitter.com/allancolibao/"
        },
        {
          id: 4,
          className: "fab fa-youtube",
          link:
            "https://www.youtube.com/channel/UC5_OnYjDnudoRCSPVCvnalw?view_as=subscriber"
        }
      ]
    };
  }
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <AboutHeading />
          <AboutSubheading />
          <AboutParagraph />
          <AboutSocials
            key={this.state.socials.id}
            socials={this.state.socials}
          />
        </div>
      </section>
    );
  }
}

export default About;
