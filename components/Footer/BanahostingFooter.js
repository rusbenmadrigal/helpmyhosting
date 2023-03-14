import React, { Component } from "react";

class BanahostingFoooter extends Component {
  render() {
    return (
      <div className="project-details-info">
        <div className="single-info-box">
          <h4>Fundado</h4>
          <span>2007</span>
        </div>
        <div className="single-info-box">
          <h4>Servidores</h4>
          <span>USA, Europa</span>
        </div>

        <div className="single-info-box">
          <h4>CMS Ideal</h4>
          <span>WordPress, Joomla.</span>
        </div>

        <div className="single-info-box">
          <h4>Revisor</h4>
          <ul className="social">
            <span>Russ Madrigal</span>
            <li>
              <a
                href="https://www.youtube.com/channel/UCNKD4zTYuRz5DAjofClGIOQ"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rusbenmadrigal" target="_blank">
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
            <li>
              <a
                href="https://www.linkedin.com/in/rusbenmadrigal/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="single-info-box">
          <a
            href="/out/banahosting/"
            target="_blank"
            className="btn btn-warning"
          >
            Visitar Banahosting
          </a>
        </div>
      </div>
    );
  }
}

export default BanahostingFoooter;
