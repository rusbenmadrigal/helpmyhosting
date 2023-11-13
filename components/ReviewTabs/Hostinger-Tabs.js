import React, { Component } from "react";
import HostingerCloud from "../PricingPlans/Hostinger/Cloudhosting";
import HostingerCpanel from "../PricingPlans/Hostinger/Cpanelhosting";
import HostingerVps from "../PricingPlans/Hostinger/Vpshosting";
import HostingerWebhosting from "../PricingPlans/Hostinger/Webhosting";
import HostingerWordpress from "../PricingPlans/Hostinger/Wordpresshosting";
import SiteGroundReseller from "../PricingPlans/Siteground/Reseller";

class HostingerTabs extends Component {
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
            <h3>Planes Hostinger 2024</h3>
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
                <span>CPanel Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab4")}
                className="bg-ecfaf7"
              >
                <i className="flaticon-email"></i>
                <span>Cloud Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab5")}
                className="bg-f2f0fb"
              >
                <i className="flaticon-network"></i>
                <span>VPS Hosting</span>
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
                        El plan de hosting compartido de Hostinger es la primera
                        opción para quienes buscan un hosting económico para su
                        proyecto, con el plan básico usted puede compra un
                        servicio de hosting por menos de $2 dólares al mes, esto
                        le incluye la opción de 1 a 50 sitios web, dependiendo
                        del plan que hosting elija, además cuenta con
                        administrador cPanel el cual le permite realizar la
                        configuración de archivos, CMS, correos electrónicos,
                        SSL y más en tan solo unos clics.
                      </p>
                      <HostingerWebhosting />
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
                      <h2>Hosting WordPress</h2>
                      <p>
                        Hostinger ofrece un servicio de alojamiento web 100%
                        dedicado a WordPress, esto permite que haya una alta
                        optimización en la base de datos y en la entrega de los
                        archivos al cliente, ya que utiliza el sistema de
                        LiteSpeed WebServer uno de los servidores más rápidos
                        del mundo. Por otra parte, ofrece alta seguridad lo cual
                        mantiene tu hosting WordPress libre de ataques de
                        hackeo, incorpora ciento de plantillas y Plug-ins
                        Freemium.
                      </p>
                      <HostingerWordpress />
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
                      <h2>cPanel Hosting</h2>
                      <p>
                        El cPanel Hosting es un servicio de hosting que permite
                        el fácil uso y administración de tus sitios web, correo
                        y CMS mediante una interfaz gráfica amigable con el
                        usuario. A diferencia de los servidores, en donde la
                        administración de los archivos se actúa mediante una
                        terminal empleando Linux o Windows el cPanel es mucho
                        más sencillo, usted no necesita saber de líneas de
                        comprando ni temas de programación para lograr usar el
                        cPanel. Actualmente, Hostinger Hosting cPanel le permite
                        hacer una gran cantidad de acciones como por ejemplo,
                        instalar WordPress o un certificado SSL en menos de 5
                        clics.
                      </p>
                      <HostingerCpanel />
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
                      <h2>Cloud Hosting</h2>
                      <p>
                        Hostinger Cloud Hosting es un plan de alojamiento web de
                        alto rendimiento, ideal para quienes vana iniciar un
                        sitio web que necesite muchos recursos o bien migrar un
                        proyecto el cual ya tenga por encima de las 10 mil
                        visitas mensuales. Los servidores del plan Cloud Hosting
                        comienzan con 3GB de RAM lo cual es bastante potente y
                        puede mantener en óptimas condiciones la experiencia de
                        usuario en una web con latos volúmenes de tráfico.
                        Importante mencionar que, Hostinger ofrece un dominio
                        web totalmente gratis con la compra de cualquier plan de
                        Cloud Hosting, así que no esperes y elige el tuyo.
                      </p>
                      <HostingerCloud />
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
                      <h2>Plan VPS Hosting</h2>
                      <p>
                        Hostinger ofrece servidores privados (VPS) con IP
                        dedicada, ideal para quienes están buscando un espacio
                        para ejecutar programas remotos, los precios por un VPS
                        van desde los $3.95 hasta los $77.99. En términos
                        termino de precios vs. beneficios Hostinger es altamente
                        competitivo, de hecho es uno de los pocos servicios de
                        VPS Hosting barato que existe en el mercado hispano,
                        además de ofrecer un acceso completo al ROOT ideal para
                        administradores de servidores, permitiendo que en todo
                        momento puedan tener el control completo del Servidor
                        Dedicado.
                      </p>
                      <HostingerVps />
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
                        Hostinger ofrece el servicio de registro y transferencia
                        de dominios de todo tipo e inclusive usted puede
                        registrar dominios territoriales (puede que necesite
                        presentar permisos adicionales). En lo personal creo
                        que, la mejor opción para comprar un dominio web, es
                        mediante un registrador tales como: NameCheap o GoDaddy,
                        aunque registrar un dominio con Hostinger puede ser una
                        alternativa para quienes no tienen mucha experiencia con
                        DNS o bien gustan de tener todos sus datos en un solo
                        lugar.
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

export default HostingerTabs;
