import React, { Component } from "react";
import Link from "next/link";

class BanahostingReseller extends Component {
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
            <h3>Planes Reseller Banahosting</h3>
          </div>

          <div className="tab pricing-tab">
            {/* Tabs Nav */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "monthly")}
              >
                Planes Mensuales
              </li>
              
            </ul>

            <div className="tab-content">
              <div id="monthly" className="tabs-item">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-f6f5fb">
                      <div className="pricing-header">
                        <h3>Reseller 1</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>23.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 100GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 5,000GB (5TB)
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Cuentas CPanel:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel / WHM:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Software De Facturación:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Migración Gratuita:</strong> Incluido (CPanel)
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
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
                        <h3>Reseller 2</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>39.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 200GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 10,000GB (10TB)
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Cuentas CPanel:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel / WHM:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Software De Facturación:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Migración Gratuita:</strong> Incluido (CPanel)
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
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
                        <h3>Reseller 3</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>49.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento:</strong> 300GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Cuentas CPanel:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel / WHM:</strong> SIN LÍMITE
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Software De Facturación:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Migración Gratuita:</strong> Incluido (CPanel)
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Certificado SSL:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
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

export default BanahostingReseller;
