import React, { Component } from "react";
import Link from "next/link";

class Raiolavps extends Component {
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
            <h3>Planes VPS Administrado Mensual</h3>
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
                        <h3>VPS administrado 1</h3>
                      </div>

                      <div className="price">
                        <strong>€</strong>
                        <span>5.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 10GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> No medida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>vCore o CPU:</strong> 1
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Conexión:</strong> 100Mbps
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Administración:</strong> Parcial incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>DNS externos:</strong> 2 DNS
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
                          <strong>Garantía:</strong> 30 Días
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
                      <h3>VPS administrado 2</h3>
                      </div>

                      <div className="price">
                        <strong>€</strong>
                        <span>7.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 20GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> No medida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>vCore o CPU:</strong> 2
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Conexión:</strong> 100Mbps
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Administración:</strong> Parcial incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>DNS externos:</strong> 2 DNS
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
                          <strong>Garantía:</strong> 30 Días
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
                      <h3>VPS administrado 3</h3>
                      </div>

                      <div className="price">
                        <strong>€</strong>
                        <span>9.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 30GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> No medida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>vCore o CPU:</strong> 4
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Conexión:</strong> 100Mbps
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Administración:</strong> Parcial incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>DNS externos:</strong> 2 DNS
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
                          <strong>Garantía:</strong> 30 Días
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

export default Raiolavps;
