import React, { Component } from "react";

class NavLink extends Component {
  render() {
      const { label , link} = this.props.navlink;
    return (
      <React.Fragment>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={link}>
            {label}
          </a>
        </li>
       
        
      </React.Fragment>
    );
  }
}

export default NavLink;
