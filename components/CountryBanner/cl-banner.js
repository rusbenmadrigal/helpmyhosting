import React, { Component } from "react";
import Link from "next/link";

class CLbanner extends Component {
  render() {
    let { pageTitle, breadcrumbTextOne, breadcrumbTextTwo, breadcrumbUrl } =
      this.props;

    return (
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1 className="second-h1">{pageTitle}</h1>
            <ul>
              <div className="mt-1 text-center">
                <img
                  src="/images/flag-cl.png"
                  width="10%"
                  alt="Mejor Hosting Costa Rica"
                />
              </div>
              <br />
              <li>{breadcrumbTextTwo}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CLbanner;
