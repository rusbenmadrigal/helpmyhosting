import React, { Component } from "react";

class TeamCard extends Component {
  render() {
    return (
      <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Expertos</span>
            <h3>Nuestros Expertos Hosting</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="team-item-area">
                <div className="team-image">
                  <img src="/images/team/russ.jpg" alt="image" />
                </div>

                <div className="team-content">
                  <h3>Russ M</h3>
                  <span>Technical SEO</span>

                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rusbenmadrigal/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/soyruss"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/rusbenmadrigal"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/rusbenmadrigal/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-item-area">
                <div className="team-image">
                  <img src="/images/team/heiner.svg" alt="image" />
                </div>

                <div className="team-content">
                  <h3>Heiner Sevilla</h3>
                  <span>DevOps</span>

                  <ul className="team-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-item-area">
                <div className="team-image">
                  <img src="/images/team/pendiente.jpg" alt="image" />
                </div>

                <div className="team-content">
                  <h3>Jose Madrid</h3>
                  <span>JS Developer</span>

                  <ul className="team-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="team-animation">
          <div className="shape-img1">
            <img src="/images/shape/7.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/9.png" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/7.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/9.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/9.png" alt="image" />
          </div>
        </div>
      </section>
    );
  }
}

export default TeamCard;
