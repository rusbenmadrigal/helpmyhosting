import React, { Component } from "react";
import CloudHosting from "../PricingPlans/Siteground/Cloud";
import Ecommerce from "../PricingPlans/Siteground/Ecommerce";
import SiteGroundReseller from "../PricingPlans/Siteground/Reseller";
import SiteGrounWebhosting from "../PricingPlans/Siteground/Webhosting";
import WordPress from "../PricingPlans/Siteground/WordPress";

class SitegroundTabs extends Component {
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
            <h3>Planes Siteground 2023</h3>
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
                <span>Cloud Hosting</span>
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
                        Como primera opción, SiteGround ofrece el servicio de
                        hosting compartido, el cual es ideal para negocios
                        pequeños o medianos, los precios van desde $3.99 al mes
                        lo cual es bástate accesible. Si usted va a empezar un
                        blog personal, una tienda en línea o bien monetización
                        mediante un medio de comunicación, este plan es adecuado
                        para usted, sin embargo, si tu sitio web llega a ser muy
                        popular deberá hacer un Upgrade a alguno de los planes
                        superiores, ya que el plan básico es ideal para una web
                        con menos de 10.000 mil visitas mensuales.
                      </p>
                      <SiteGrounWebhosting/>
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
                      <h2>SiteGroung Hosting WordPress</h2>
                      <p>
                        SiteGround ofrecer el servicio de web hosting 100%
                        dedicado a WordPress, este es un plan ideal para quienes
                        utilizan el CMS de código abierto o bien para quienes
                        van a crear una tienda en línea basada en WP. cuenta con
                        la versión más reciente de PHP esto permite que sea
                        compatible con la última versión de WordPress y que tu
                        sitio web no tenga ningún problema con temas o plug-ins
                        de WordPress.
                      </p>
                      <WordPress/>
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
                      <h2>Hosting WooCommerce gestionado</h2>
                      <p>
                        Este es un servicio de hosting web ideal para quienes
                        tienen o van a iniciar un comercio en línea (E-commerce)
                        el servicio de alojamiento WordPress ofrecido por
                        SiteGround permite que usted pueda estar siempre
                        empleando la mejor tecnología para comercios en línea,
                        principalmente para WooCommerce. El servicio ofrece la
                        pre-instalación de WooCommerce plug-in, configuración de
                        pagos con PayPal, diferentes opciones de carrito de
                        compra y más.
                      </p>
                      <Ecommerce/>
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
                      <h2>SiteGround Cloud Hosting</h2>
                      <p>
                        Para quienes están buscando un servicio de hosting del
                        más alto nivel, el Cloud Hosting es una solución ideal.
                        SiteGround tiene a su disposición el servicio de hosting
                        en la nube con alta potencia, la cual va desde 8GB en
                        núcleos de CPU, con una capacidad de transferencia de
                        5TB en su versión básica, ideal para quienes están
                        buscando una solución de hosting para alto trafico web.
                        El espacio de SSD va desde las 40GB en la versión básica
                        (Jump Start) hasta 160GB en su versión superior (Super
                        Power).
                      </p>
                      <CloudHosting/>
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
                        Esta es la versión de Reseller de SiteGround, en lo
                        personal creo que hay opciones mejores, como por ejemplo
                        el servicio de Reseller de BanaHosting, ofrecen más
                        opciones y flexibilidad. Lo positivo de este servicio
                        para revender hosting de SiteGround es la marca en sí,
                        ya que al ofrecer un servicio de hosting se podría sacar
                        algo de “ventaja” al mencionar que tus servidores se
                        alojan con SiteGround. Por lo demás, no le veo mayo
                        ventaja y optaría por un servicio de reseller el cual me
                        ofrezca más opciones y mayor capacidad de almacenamiento
                        para mis clientes.
                      </p>
                      <SiteGroundReseller/>
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
                        SiteGround ofrece la opción de comprar dominios
                        regionales e internacionales, en lo personal
                        recomendaría utilizar un registrador tal como NameCheap
                        con el que pagas alrededor de $8 dólares el primer año y
                        puedes mover tu dominio de manera rápida hacia otro
                        registrador cuando quieras. Con SiteGround los dominios
                        son mucho más caros, por ejemplo: Para comprar un .COM
                        debes pagar desde $17.99 lo cual es casi un 100% más que
                        en NameCheap. Yo recomendaría comprar un dominio en
                        SiteGround únicamente si no tienes experiencia con DNS o
                        bien si por alguna circunstancia mayor no puedes
                        comprarlo en un registrador externo.
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

export default SitegroundTabs;
