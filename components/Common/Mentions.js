import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  oop: true,
  nav: false,
  dots: false,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: false,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

class Mentions extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="partner-section ptb-100">
        <div className="container">
          <h6>Nos mencionan en:</h6>
          {this.state.display ? (
            <OwlCarousel
              className="partner-slider owl-carousel owl-theme"
              {...options}
            >
              <div className="partner-item">
                <a
                  href="https://www.crunchbase.com/organization/helpmyhosting"
                  target="_blank"
                >
                  <img
                    src="/images/partners/crunchbase.png"
                    alt="CrunchBase.com"
                  />
                </a>
              </div>
              <div className="partner-item">
                <a href="https://www.businessinsider.com/" target="_blank">
                  <img
                    src="/images/partners/BusinessInsider.png"
                    alt="Business Insider"
                  />
                </a>
              </div>
              <div className="partner-item">
                <a href="https://techcrunch.com/" target="_blank">
                  <img src="/images/partners/tc.png" alt="Tech Crunch" />
                </a>
              </div>
              <div className="partner-item">
                <a href="https://www.huffpost.com/" target="_blank">
                  <img
                    src="/images/partners/huffpost.png"
                    alt="The Huffington Post"
                  />
                </a>
              </div>
              <div className="partner-item">
                <a href="https://www.geekwire.com/" target="_blank">
                  <img src="/images/partners/geekwire.png" alt="Geek Wire" />
                </a>
              </div>
              {/*
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="#"
                    alt="partner"
                  />
                </a>
              </div>

              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partnar/hostinger-ico.png" alt="partner" />
                </a>
              </div>

              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partnar/raiola-ico.png" alt="partner" />
                </a>
              </div>
          */}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Mentions;
