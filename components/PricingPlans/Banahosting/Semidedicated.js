import React, { Component } from "react";
import Link from "next/link";

class BanahostingSemidedicated extends Component {
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
            <h3>Planes Semi Dedicado Mensual</h3>
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
                        <h3>Semi-Dedicated Start</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>25.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 50 SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> SIN LIMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> 5 webs
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU Cores:</strong> 4 Disponibles
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 8GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Inodes:</strong> 2,000,000 Millones
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS y Web App
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> En USA
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía:</strong> 30 Días
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
                        <h3>Semi-Dedicated PRO</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>45.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 100 SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> SIN LIMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> 10 webs
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU Cores:</strong> 6 Disponibles
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 10GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Inodes:</strong> 3,000,000 Millones
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS y Web App
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> En USA
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía:</strong> 30 Días
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
                        <h3>Semi-Dedicated PRO</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>60.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 150 SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> SIN LIMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Sitios Web Para Alojar:</strong> 15 webs
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU Cores:</strong> 8 Disponibles
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 12GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Inodes:</strong> 4,000,000 Millones
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>1-Click:</strong> Para CMS y Web App
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Copias De Seguridad:</strong> Automáticas
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> En USA
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Garantía:</strong> 30 Días
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BanahostingSemidedicated;
