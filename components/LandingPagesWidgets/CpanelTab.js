import React, { Component } from "react";
import BanahostingDedicated from "../PricingPlans/Banahosting/Dedicatedserver";
import BanahostingReseller from "../PricingPlans/Banahosting/Resellerhosting";
import BanahostingSemidedicated from "../PricingPlans/Banahosting/Semidedicated";
import BanahostinVPS from "../PricingPlans/Banahosting/Vps";
import BanahostingPricing from "../PricingPlans/Banahosting/Webhosting";

class CpanelTab extends Component {
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
            <h3>El Mejor cPanel Hosting 2024</h3>
          </div>
          <div className="container"></div>
          <div className="container">
            <div className="content">
              <p>
                De acuerdo con nuestra experiencia, hemos elegido a BanaHosting
                como el <strong>mejor cPanel Hosting 2024</strong>, ya que he
                utilizado este servicio de alojamiento web por más de 6 años y
                en todo ese tiempo siempre se han preocupado por ofrecer la
                última versión del cPanel, esto permite que al utilizar el
                servicio de web hosting sea mucho más sencillo. Por supuesto,
                hay otros <a href="mejor-hosting/">servicios de hosting</a> que
                también ofrecen cPanel; sin embargo, con BanaHosting es con el
                cual me he sentido más cómodo al trabajar.
              </p>
              <p>
                Una de las ventajas de utilizar hosting con cPanel es la
                facilidad de crear correos electrónicos, bases de datos,
                instalación de CMS y acceder al webmail. Los siguientes son los
                planes que ofrece BanaHosting en todos los planes hay un
                excelente servicio para la instalación y manejos de WordPress,
                usted puede escoger un plan desde los $4.95, aunque en lo
                personal recomiendo el plan <strong>Bana Professional</strong>{" "}
                por $9.95, ya que usted puede agregar dominios de manera
                ilimitada.
              </p>
            </div>
          </div>
          <br />
          <br />
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
                <span>Reseller Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab3")}
                className="bg-fff8f0"
              >
                <i className="flaticon-digital-marketing"></i>
                <span>Hosting Semi-Dedicado</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab4")}
                className="bg-ecfaf7"
              >
                <i className="flaticon-email"></i>
                <span>Servidores VPS</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab5")}
                className="bg-f2f0fb"
              >
                <i className="flaticon-network"></i>
                <span>Servidores Dedicados</span>
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
                      <h2>Plan Hostins Compartido con cPanel</h2>
                      <p>
                        Banahosting ofrece el servicio de{" "}
                        <strong>Hosting compartido</strong> el cual forma parte
                        de su plan básico de alojamiento web, este plan es ideal
                        para quienes están empezando un proyecto web, puede
                        iniciar con el plan básico de $4.95 al mes e ir
                        incrementando hasta llegar al plan Bana Corporate para
                        web con mayor tráfico y requerimiento de recursos el
                        cual tiene un precio de $9.95. Los planes de Banahosting
                        son (desde mi punto de vista) una excelente opción para
                        todos los usuarios quienes están comenzando un proyecto
                        web, ya que el precio es muy accesible y la calidad de
                        hosting es mu buena, sin embargo, si usted ya tiene un
                        sitio web con 100,000 visitas mensuales, lo mejor seria
                        que opte por un plan de mayor potencia o bien vaya
                        pensando en un servidor dedicado para correr su
                        aplicación web.
                      </p>
                      <BanahostingPricing />
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
                      <h2>Banahosting Reseller con cPanel</h2>
                      <p>
                        El plan <strong>Reseller de Banahosting</strong> es una
                        excelente opción para quienes están pensando en comenzar
                        su propio negocio de venta de hosting o bien puede ser
                        utilizado para compartir cuentas de hosting
                        independientes con sus colegas (por ejemplo, un curso de
                        TI o Marketing). Actualmente, Banahosting emplea
                        tecnología de vanguardia la cual incluye, pero no limita
                        a una red 100% Juniper, CloudLinux Enterprise y un
                        centro de datos de alta calidad el cual tiene múltiples
                        conexiones con red GIGe.
                      </p>
                      <BanahostingReseller />
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
                      <h2>Banahosting Semi Dedicado con cPanel</h2>
                      <p>
                        Si usted busca un servicio de hosting para una web con
                        mucho tráfico puede considerar adquirir el servicio de{" "}
                        <strong>Hospedaje Semi Dedicado de Banahosting</strong>{" "}
                        el cual le brinda un alto desempeño y estabilidad para
                        su web. Utilizando poderosa tecnología la cual incluye
                        una red 100% Juniper, Cloud Enterprise y con centros de
                        datos de clase mundial con conexiones múltiples de red
                        GIGe redundantes, Banahosting Semi Dedicado se convierte
                        en una de sus mejores opciones para adquirir un servidor
                        a un buen precio con un alto desempeño online. Al
                        adquirir el cualquiera de los planes con pago anual
                        usted ahorra un 10% en su compra, lo cual es un
                        beneficio adicional que Brinda Banahosting.
                      </p>
                      <BanahostingSemidedicated />
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
                      <h2>Planes Servidores VPS con cPanel</h2>
                      <p>
                        Con Banahosting usted puede adquirir una máquina virtual
                        la cual cuenta con un sano equilibrio de memoria y
                        hyper-threads de los mejores procesadores de su clase.
                        Este tipo de servidor está diseñado para cubrir las más
                        amplias gamas de trabajo incluyendo el alojamiento de
                        sitios web ya sea creados con CMS o bien una aplicación
                        web creada con React JS tecnologías similares.{" "}
                        <strong>Comprar un Servidor VPS</strong> con Banahosting
                        también le permite albergar bases de datos de tamaño
                        medios y aplicaciones empresariales. Al comprar el
                        servicio de Servidores VPS anual, tiene un descuento del
                        10%.
                      </p>
                      <BanahostinVPS />
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
                      <h2>Servidores Dedicados con cPanel</h2>
                      <p>
                        Recientemente, Banahosting empezó a ofrecer el servicio
                        de Servidores Dedicados, los cuales son una excelente
                        opción para empresas que necesiten de altos recursos
                        para sus bases de datos, aplicaciones web y
                        empresariales. El precio del servicio inicia en $159
                        dólares mensuales, hay diferentes opciones cada una con
                        más potencia y con un precio más elevado, si usted
                        adquiere el un servidor dedicado de pago anual ahorra un
                        10% en su compra. ¡Así que no espere más! Adquiera un
                        servidor dedicado para su empresa con un excelente
                        precio, proveído por uno de nuestras mejores calificadas
                        empresas de hosting web.
                      </p>
                      <BanahostingDedicated />
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
                      <h2>Dominios y Transferencia con cPanel</h2>
                      <p>
                        Actualmente, Banahosting ofrece el servicio de registro
                        de dominios o Transferencia, los precios son similares a
                        los registradores tales como NameCheap.com creo que
                        registrar un dominio en Banahosting es una buena opción
                        para quien quiere tener todos sus datos en un único
                        lugar, sin embargo, si usted es una persona o empresa
                        que brinda servicio de creación de sitios web, lo mejor
                        seria utilizar un registrador como NameCheap.com para la
                        compra de dominios, ya que permite mayor flexibilidad en
                        temas de configuración para cada uno de sus clientes.
                      </p>

                      <p>
                        {" "}
                        Por otra parte, los precio en registradores tienden a
                        ser más económicos el primer año, por lo general cuando
                        compro un dominio en NameCheap.com el primer año pago
                        tan solo $8.99 mientras que en Banahosting pago $12.95,
                        la diferencia es poca e inclusive irrelevante para
                        alguien quien solo vaya a comprar un dominio, pero el
                        gasto se nota bastante cuando ya usted compra por encima
                        de 100 dominios.
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

export default CpanelTab;
