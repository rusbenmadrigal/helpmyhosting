import React, { Component } from "react";

class Russ extends Component {
  render() {
    return (
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">Acerca de Russ</h3>
                <h6 className="theme-color lead">
                  Technical SEO & ReactJS Dev
                </h6>
                <p>
                  Fundador de <mark>HelpMyHosting.com</mark> Con más 12 años de
                  experiencia en el sector del SEO y 3 como desarrollador de
                  ReactJS, además me encanta la creación de proyecto "Nichos"
                  para monetizar con diversas formas, siendo de mis favoritas Google AdSense. Todas las reseñas que publico
                  se basan en experiencias REALES, tratando de recomendarte el
                  mejor servicio de hosting para tu proyecto.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img src="/images/saas-image/russ.png" title="" alt="" />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="500" data-speed="500">
                    <a
                      href="https://www.instagram.com/rusbenmadrigal/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </h6>
                  <p className="m-0px font-w-600">Instagram</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="150" data-speed="150">
                    <a
                      href="https://www.linkedin.com/in/rusbenmadrigal/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </h6>
                  <p className="m-0px font-w-600">LinkedIn</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="850" data-speed="850">
                    <a
                      href="https://twitter.com/rusbenmadrigal"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </h6>
                  <p className="m-0px font-w-600">Twitter</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="count-data text-center">
                  <h6 className="count h2" data-to="190" data-speed="190">
                    <a href="https://github.com/rusbenmadrigal" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </h6>
                  <p className="m-0px font-w-600">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Russ;
