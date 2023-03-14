import React, { Component } from "react";
import Link from "next/link";

class Raiolareseller extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <section className="pricing-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Planes Reseller Mensual</h3>
          </div>

          <div className="tab pricing-tab">
            {/* Tabs Nav */}
            <ul className="tabs"></ul>

            <div className="tab-content">
              <div id="monthly" className="tabs-item">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-f6f5fb">
                      <div className="pricing-header">
                        <h3>Reseller Comienzo</h3>
                      </div>

                      <div className="price">
                        <strong>€</strong>
                        <span>39.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Cuentas a crear:</strong> Hasta 30
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Espacio total:</strong> 50GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>RAM por cuenta:</strong> 1024MB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU por cuenta:</strong> 50% de 1 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>cPanel/WHM:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>DNS propios:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Migración gratis :</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Versiones de PHP:</strong> Más recientes
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/raiola/">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-ed0678">
                      <div className="pricing-header">
                      <h3>Reseller Base</h3>
                      </div>

                      <div className="price">
                        <strong>€</strong>
                        <span>59.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Cuentas a crear:</strong> Hasta 50
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Espacio total:</strong> 100GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>RAM por cuenta:</strong> 1024MB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU por cuenta:</strong> 50% de 1 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>cPanel/WHM:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>DNS propios:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Migración gratis :</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Versiones de PHP:</strong> Más recientes
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/raiola/">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>

                      <div className="pricing-shape">
                        <img src="/images/pricing-shape.png" alt="image" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-edfbf8">
                      <div className="pricing-header">
                      <h3>Reseller Profesional</h3>
                      </div>

                      <div className="price">
                        <strong>€</strong>
                        <span>79.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Cuentas a crear:</strong> Hasta 70
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Espacio total:</strong> 200GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>RAM por cuenta:</strong> 1024MB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU por cuenta:</strong> 50% de 1 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>cPanel/WHM:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>DNS propios:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Migración gratis :</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Versiones de PHP:</strong> Más recientes
                        </li>
                      </ul>
                      <div className="price-btn">
                        <Link href="/out/raiola/">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Raiolareseller;
