import React, { Component } from "react";
import Link from "next/link";

class HostingerCpanel extends Component {
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
            <h3>Plan Cpanel Hosting</h3>
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
                        <h3>cPanel Hosting Silver</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>1.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 30GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 1TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> 1 Web
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Instalación 1-Click:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> 1 por semana
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>E-mails:</strong> 1 cuenta
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Data Center:</strong> USA, Europa, Asia
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Base de datos MySQL:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía:</strong> 30 Días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/hostinger/">
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-ed0678">
                      <div className="pricing-header">
                        <h3>cPanel Hosting Gold</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>3.25</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 30GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> SIN LIMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> 50
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Instalación 1-Click:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> 1 por semana
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>E-mails:</strong> 1000
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Data Center:</strong> USA, Europa, Asia
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Base de datos MySQL:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía:</strong> 30 Días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/hostinger/">
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
                      <h3>Pro (alternativa)</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>11.59</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 200GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> SIN LIMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> 300
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Instalación 1-Click:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> 1 al día
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>E-mails:</strong> 100
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Data Center:</strong> USA, Europa, Asia
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Base de datos MySQL:</strong> Ilimitado
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía:</strong> 30 Días
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/hostinger/">
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

export default HostingerCpanel;
