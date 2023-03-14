import React, { Component } from "react";

class RaiolaCta extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-12"></div>
          <div className="row p-2 bg-white border rounded single-features-item-featured">
            <div className="col-md-3 mt-1">
              <img
                className="img-fluid img-responsive rounded product-image"
                src="/images/raiola-lg.svg"
              />
            </div>
            <div className="col-md-6 mt-1">
              <h5>Raiola Network</h5>
              <div className="d-flex flex-row">
                <div className="ratings mr-2">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half" />
                </div>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <span>1 Sitio web</span>
                <span className="dot" />
                <span>5GB Almacenamineto</span>
                <span className="dot" />
                <span>10 Cuenta de correo</span>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <span>100GB Ancho de banda</span>
                <span className="dot" />
                <span>1 MYSQL</span>
                <span className="dot" />
                <span>
                  Soporte en español
                  <br />
                </span>
              </div>
              <br />
              <p className="text-justify text-truncate para mb-0">
                CUPON:{" "}
                <div className="d-inline p-2 bg-success text-white">
                  CAZAHOSTING
                </div>{" "}
                <br />
              </p>
            </div>
            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-row align-items-center">
                <h4 className="mr-1">Desde $6.10/mes</h4>
                {/*<span className="strike-text">$20.99</span>*/}
              </div>
              <h6 className="text-success">Servicio Básico</h6>
              <div className="d-flex flex-column mt-4">
                <a
                  href="/out/raiola/"
                  className="btn btn-warning btn-sm"
                  role="button"
                >
                  Comprar Hosting
                </a>
                <a className="btn btn-outline-white btn-sm mt-2" role="button">
                  <div className="tab-shape">
                    <img src="/images/tab/one.svg" width="30%" alt="image" />
                  </div>
                  Garantía de devolución de 30 días
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RaiolaCta;
