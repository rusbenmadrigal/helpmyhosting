import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="content">
                <h4>WhatsApp</h4>
                <p>(506) 8745 8989</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="content">
                <h4>E-mail</h4>
                <p>help@helpmyhosting.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="contact-box">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="content">
                <h4>Locación</h4>
                <p>
                San Jose, Costa Rica 20201 <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
