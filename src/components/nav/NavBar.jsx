import React, { Component } from "react";
import NavList from "./NavList";
import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlink: [
        { id: 1, label: "About", link: "#about" },
        { id: 2, label: "Experience", link: "#experience" },
        { id: 3, label: "Education", link: "#education" },
        { id: 4, label: "Skills", link: "#skills" }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <NavBrand profile={this.props.profile} />
          <NavToggler />
          <NavList key={this.state.navlink.id} navlink={this.state.navlink} />
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
