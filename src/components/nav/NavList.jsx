import React, { Component } from "react";
import NavLink from "./NavLink";

class NavList extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {this.props.navlink.map(navlink => (
            <NavLink key={navlink.id} navlink={navlink} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NavList;
