import React, { Component } from "react";
import Link from "next/link";

class HostingerVps extends Component {
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
            <h3>Planes VPS Hosting</h3>
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
                        <h3>VPS 1</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>3.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>vCPU:</strong> 1 Núcleo
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria (RAM):</strong> 1 GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento SSD:</strong> 20 GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Geekbench:</strong> 608 puntos
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Ancho de banda:</strong> 1 TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Límite de inodo:</strong> 1 310 720
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>IP dedicada:</strong> Incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Acceso root:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Red de 100 Mb/s:</strong> Incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>IPV4 & IPV6:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Soporte:</strong> 24/7/365
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
                        <h3>VPS 2</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>8.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>vCPU:</strong> 2 Núcleos
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria (RAM):</strong> 2 GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento SSD:</strong> 40 GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Geekbench:</strong> 991 puntos
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Ancho de banda</strong> 3 TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Límite de inodo:</strong> 2 621 440
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>IP dedicada:</strong> Incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Acceso root:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Red de 100 Mb/s:</strong> Incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>IPV4 & IPV6:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Soporte:</strong> 24/7/365
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
                        <h3>VPS 2</h3>
                      </div>

                      <div className="price">
                        <strong>$</strong>
                        <span>12.95</span>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>vCPU:</strong> 3 Núcleos
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Memoria (RAM):</strong> 3 GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Almacenamiento SSD:</strong> 80 GB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Geekbench:</strong> 1 770 puntos
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Ancho de banda</strong> 4 TB
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Límite de inodo:</strong> 2 621 440
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>IP dedicada:</strong> Incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Acceso root:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Red de 100 Mb/s:</strong> Incluida
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>IPV4 & IPV6:</strong> Incluido
                        </li>
                        <li>
                          <i className="flaticon-check-mark"></i>
                          <strong>Soporte:</strong> 24/7/365
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

export default HostingerVps;
