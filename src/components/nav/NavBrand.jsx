import React, { Component } from "react";

class NavBrand extends Component {
  render() {
    const { profile } = this.props;
    return (
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <h2 className="navbar-brand d-block d-lg-none">
          <i className="fa fa-code"></i> Arcdev
        </h2>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={profile}
            alt=""
          ></img>
        </span>
      </a>
    );
  }
}

export default NavBrand;
