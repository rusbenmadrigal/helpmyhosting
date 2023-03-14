import React, { Component } from "react";
import Link from "next/link";

class BanahostingPricing extends Component {
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
            <h3>Planes de Alojamiento Web Banahosting</h3>
          </div>

          <div className="tab pricing-tab">
            {/* Tabs Nav */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "monthly")}
              >
                Mensual
              </li>
              <li onClick={(e) => this.openTabSection(e, "yearly")}>Anual</li>
            </ul>

            <div className="tab-content">
              <div id="monthly" className="tabs-item">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-f6f5fb">
                      <div className="pricing-header">
                        <h3>Bana Starter</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>4.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitio Web Para Alojar:</strong> 1
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> Ilimitado SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> Ilimitada
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>SSL Gratis:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Instalación 1-Click:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad :</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Potencia De CPU:</strong> 3.8GHz
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Capacidad de Memoria:</strong> 4GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA/UE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía de Devolución:</strong> 30 Días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-ed0678">
                      <div className="pricing-header">
                        <h3>Bana Professional</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>6.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> ILIMITADOS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> Ilimitado SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>SSL Gratis:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Potencia De CPU:</strong> 5.8GHz
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 6GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía De Devolución:</strong> 30 días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/">
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
                        <h3>Bana Corporate</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>107.46</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> ILIMITADOS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> Ilimitado SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>SSL Gratis:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Potencia De CPU:</strong> 6.9GHz
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 8GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía De Devolución:</strong> 30 días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/" target="_blank">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="yearly" className="tabs-item">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-f6f5fb">
                      <div className="pricing-header">
                        <h3>Bana Starter</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>53.45</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitio Web Para Alojar:</strong> 1
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> Ilimitado SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> Ilimitada
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>SSL Gratis:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Instalación 1-Click:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad :</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Potencia De CPU:</strong> 3.8GHz
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Capacidad de Memoria:</strong> 4GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA/UE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía de Devolución:</strong> 30 Días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/" target="_blank">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-ed0678">
                      <div className="pricing-header">
                        <h3>Bana Professional</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>75.06</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> ILIMITADOS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> Ilimitado SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>SSL Gratis:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Potencia De CPU:</strong> 5.8GHz
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 6GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía De Devolución:</strong> 30 días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/" target="_blank">
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
                        <h3>Bana Corporate</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>9.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> ILIMITADOS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> Ilimitado SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>SSL Gratis:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Potencia De CPU:</strong> 6.9GHz
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 8GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía De Devolución:</strong> 30 días
                        </li>
                      </ul>
                      <div className="price-btn">
                        <Link href="/out/banahosting/">
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

export default BanahostingPricing;
