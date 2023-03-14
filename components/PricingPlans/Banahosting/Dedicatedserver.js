import React, { Component } from "react";
import Link from "next/link";

class BanahostingDedicated extends Component {
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
            <h3>Planes Servidores Dedicados Mensual</h3>
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
                        <h3>Value Deal</h3>
                        <p>Quad-Core Xeon E3-1230v2</p>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>159.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Intel Xeon:</strong> E3-1230v2 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 8GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Raid1 Hardware:</strong> 2x1000GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 100TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Webuzo Panel Premium:</strong> Gratis
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel/WHM:</strong> Opcional
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/" target="_blank">
                          <a className="price-btn-one">Comprar Servidor</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-ed0678">
                      <div className="pricing-header">
                      <h3>Deluxe</h3>
                        <p>Quad-Core Xeon E3-1230v2</p>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>179.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Intel Xeon:</strong> E3-1230v2 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 16GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Raid1 Hardware:</strong> 2x1000GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 100TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Webuzo Panel Premium:</strong> Gratis
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel/WHM:</strong> Opcional
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/" target="_blank">
                          <a className="price-btn-one">Comprar Servidor</a>
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
                      <h3>Premium</h3>
                        <p>Quad-Core Xeon E3-1230v2</p>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>220.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Intel Xeon:</strong> E3-1230v2 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 32GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Raid1 Hardware:</strong> 2x1000GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 100TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Webuzo Panel Premium:</strong> Gratis
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPanel/WHM:</strong> Opcional
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Datacenter:</strong> USA, Europa
                        </li>
                      </ul>

                      <div className="price-btn">
                        <Link href="/out/banahosting/" target="_blank">
                          <a className="price-btn-one">Comprar Servidor</a>
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

export default BanahostingDedicated;
