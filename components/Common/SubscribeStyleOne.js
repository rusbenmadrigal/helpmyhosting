import React, { Component } from "react";

class SubscribeStyleOne extends Component {
  render() {
    return (
      <section className="subscribe-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-content">
                <h2>Suscríbete y recibe ofertas Hosting</h2>
                <span className="sub-title">
                  Recibe cupones hasta por el 99% de descuento.
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form className="newsletter-form">
                <a rel="nofollow" href="https://mailchi.mp/82e097db3df1/helpmyhosting" role="button" className="btn btn-pink btn-block rounded-pill" target="_blank" >¡Sí, Suscríbeme!</a>

              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubscribeStyleOne;
