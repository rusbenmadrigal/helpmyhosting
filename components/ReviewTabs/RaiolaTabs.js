import React, { Component } from "react";
import Raiolaecommerce from "../PricingPlans/Raiola/Ecommerce";
import Raiolavps from "../PricingPlans/Raiola/Raiolavps";
import Raiolareseller from "../PricingPlans/Raiola/Reseller";
import Raiolawebhosting from "../PricingPlans/Raiola/Webhosting";
import Raiolawordpress from "../PricingPlans/Raiola/Wordpresshosting";

class RaiolaTabs extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
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
      <section className="tab-section">
        <div className="container">
          <div className="section-title">
            <hr className="My-3" />
            <h3>Planes Raiola Networks 2023</h3>
          </div>

          <div className="tab boosting-list-tab">
            {/* Tabs Nav */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                <i className="flaticon-analysis-2"></i>
                <span>Web Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab2")}
                className="bg-eff7e9"
              >
                <i className="flaticon-hand"></i>
                <span>Hosting WordPress</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab3")}
                className="bg-fff8f0"
              >
                <i className="flaticon-digital-marketing"></i>
                <span>E-commerce Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab4")}
                className="bg-ecfaf7"
              >
                <i className="flaticon-email"></i>
                <span>VPS Administrado</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab5")}
                className="bg-f2f0fb"
              >
                <i className="flaticon-network"></i>
                <span>Hosting Reseller</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab6")}
                className="bg-c5ebf9"
              >
                <i className="flaticon-analysis-1"></i>
                <span>Dominios</span>
              </li>
            </ul>

            <div className="tab_content">
              {/* Tabs Item 01 */}
              <div id="tab1" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Plan Hosting Compartido</h2>
                      <p>
                        En su plan de Hosting compartido, Raiola Networks ofrece
                        una buena variedad de opciones de hosting dependiendo
                        del proyecto que usted vaya a crear, el precio va desde
                        de lo 5,95 € mensuales, me hubiese gustado que tuviesen
                        la opción de pagar con dólares, ya que es mejor para los
                        clientes de LATAM. En su plan básico de hosting ofrecen
                        la posibilidad de albergar 1 único sitio web (similar a
                        los demás planes de la competencia) con 5GB de espacio
                        en el disco.
                      </p>
                      <Raiolawebhosting/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Item 02 */}
              <div id="tab2" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Raiola Hosting WordPress</h2>
                      <p>
                        En los análisis realizados, hemos determinado que Raiola
                        Networks es uno de los mejores proveedores de Hosting en
                        español para WordPress. Tiene una alta velocidad de
                        carga y estabilidad, sus discos están montados en SSD
                        NVMe, esto permite que tu sitio web pueda obtener un
                        mayor rendimiento en la mayoría de las circunstancias,
                        inclusive si tiene niveles de tráfico por encima de las
                        2,000 visitas diarias.
                      </p>
                      <Raiolawordpress/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs Item 03 */}
              <div id="tab3" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Hosting WooCommerce & PrestaShop</h2>
                      <p>
                        Si tienes o vas a crear una tiendan virtual necesitas
                        potencia en tu hosting y esto exactamente es lo que
                        ofrece Raiola Networks. Traen al mercado hispano un
                        servicio de <strong>hosting para e-commerce</strong>{" "}
                        optimizado para los CMS más populares tales como:
                        WooCommerce y PrestaShop. En su plan básico ofrece la
                        opción de albergar un único sitio web, con un espacio
                        máximo de 5GB de espacio SSD y 100GB de transferencia,
                        los precios van desde los 5.95 euros.
                      </p>
                      <Raiolaecommerce/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Item 04 */}
              <div id="tab4" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Servidores VPS Administrados</h2>
                      <p>
                        Un VPS es una muy buena opción para ejecutar software
                        sin que este consuma los recursos de tu ordenador
                        personal, también se puede alojar un sitio web,
                        almacenamientos de caché entre otras opciones. Tener un
                        VPS conlleva a saber sobre servidores para así lograr
                        tenerle optimizado y seguro, lo cual para alguien quien
                        no sea especialista en el tema puede convertirse en un
                        verdadero dolor de cabeza. Es por eso que, Raiola ahora
                        ofrece la opción de comprar VPS Administrado, con
                        precios que van desde los 49,95 euros al mes, empezando
                        con 1GB de RAM y 10GB de almacenamiento SSD.
                      </p>
                      <Raiolavps/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs Item 05 */}
              <div id="tab5" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Hosting Reseller</h2>
                      <p>
                        Si usted está interesado(a) en crear su marca de hosting
                        propia, Raiola Networks es una opción interesante.
                        Ofrecen servicio de Hosting Reseller desde 39,95 euros,
                        el cual le permite crear hasta 30 cuentas, las cuales
                        son administradas con VHM y podrás crear tus propios
                        paquetes y limitación en cada servicio. Es un plan
                        básico, pero en caso de necesitar mayor potencia, usted
                        puede elegir el plan Avanzado el cual le permite tener
                        hasta 90 cuentas de hosting por 99,95 euros mensuales.
                      </p>
                      <Raiolareseller/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Item 06 */}
              <div id="tab6" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Dominios y Transferencia</h2>
                      <p>
                        En lo personal prefiero comprar mis dominios web en
                        proveedores como GoDaddy o Namechep, sin embargo, para
                        quienes no tengan mucho conocimiento en DNS o bien
                        simplemente quieren mantener todos sus recursos en un
                        mismo lugar, comprar el dominio con Raiola Networks
                        puede ser una buena opción, sin embargo, los precios al
                        ser en euros la renovación te saldrá más cara de lo
                        normal. Además, ofrecen el servicio de SSL para quienes
                        necesiten un certificado de mayor peso, en lo personal
                        con el certificado de Let’s Encrypt me es suficiente, el
                        cual es gratuito y se instala desde el cPanel.
                      </p>
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

export default RaiolaTabs;
