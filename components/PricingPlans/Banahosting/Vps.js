import React, { Component } from "react";
import Link from "next/link";

class BanahostinVPS extends Component {
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
                        <h3>VPS Ultra-10</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>20.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU Cores:</strong> 2 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 4GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Capacidad En Disco:</strong> 80GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 6TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Webuzo Panel Premium:</strong> Incluido
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
                          <a className="price-btn-one">Comprar Hosting</a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box bg-ed0678">
                      <div className="pricing-header">
                      <h3>VPS Ultra-11</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>40.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU Cores:</strong> 4 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 8GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Capacidad En Disco:</strong> 160GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 8TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Webuzo Panel Premium:</strong> Incluido
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
                      <h3>VPS Ultra-12</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>80.00</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>CPU Cores:</strong> 8 CPU
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria:</strong> 16GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Capacidad En Disco:</strong> 320GB SSD
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Transferencia:</strong> 10TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Webuzo Panel Premium:</strong> Incluido
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

export default BanahostinVPS;
