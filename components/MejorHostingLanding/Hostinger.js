import React, { Component } from "react";
import HostingerWidget from "../../components/Widgets/HostingerWidget";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

class MejorHostingHostinger extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>4: Hostinger</span>
            <h2>Opiniones Hostinger 2023</h2>
            <p>
              Fundado en 2004 y con sus oficinas centrales en Kaunas, Lituania.
              Hostinger se ha convertido en uno de los servicios de hosting web
              más populares, principalmente en el mercado de hosting barato.
              Cuenta con más de 30 millones de usuarios alrededor del mundo, lo
              cual convierte a Hostinger en un servicio de alojamiento web muy
              confiable. Si bien el servicio de hosting es relativamente bueno
              para proyectos pequeños, no lo es tanto para proyectos grandes, ya
              que su espacio tiende a ser muy limitado. En resumen, creo que
              Hostinger es ideal para pequeños negocio o bien para crear
              proyectos de que no requieran una alta demanda de tráfico, en caso
              de necesitar un hosting con más potencia, yo optaría por
              BanaHosting o Raiola Networks.
            </p>
            <br />
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <div
                      className="alert alert-success d-flex align-items-center"
                      role="alert"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-check-circle-fill flex-shrink-0 me-2"
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="Warning:"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                      <div>Lo que MÁS me gusta de Hostinger</div>
                    </div>
                    <AccordionItemPanel>
                      <p>
                        <li className="list-group-item">
                          😃 Precio insuperable. No cabe duda de que los precios
                          de Hostinger son insuperables, de hecho no he
                          encontrado otro servicio de hosting web que, por tan
                          solo $2.99/mes, ofrezca la misma calidad de Hostinger.
                        </li>
                        <li className="list-group-item">
                          😃 Administrador cPanel. A diferencia de otros
                          servicios de hosting barato, Hostinger si incluye el
                          administrador de cPanel, esto facilita mucho el uso
                          del hosting para personas sin conocimientos técnicos.
                        </li>
                        <li className="list-group-item">
                          😃 Buen servicio al cliente. Conozco a Hostinger
                          debido a 000WebHost del cual ellos son dueños, siempre
                          me dieron un buen servicio al cliente, quizás por el
                          gran volumen de cliente que tienen, el servicio tiende
                          a ser un poco lento, principalmente si no sabes
                          inglés, ya que la mayoría de personal de soporte habla
                          inglés.
                        </li>
                        <li className="list-group-item">
                          😃 SSL incluido. Me gusta que incluyan un certificado
                          SSL en todos sus planes, esto permite tener un sitio
                          web más seguro, con una conexión encriptada, utilizan
                          Let's Scrypt por lo que desde el cPanel con un par de
                          clic lo puedes instalar.
                        </li>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-exclamation-diamond-fill flex-shrink-0 me-2"
                      viewBox="0 0 16 16"
                      role="img"
                      aria-label="Warning:"
                    >
                      <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div>Lo que NO me gusta de Hostinger</div>
                  </div>
                  <Accordion allowZeroExpanded preExpanded={["d"]}>
                    <AccordionItem uuid="d">
                      <AccordionItemPanel>
                        <p>
                          <li className="list-group-item">
                            😡 Barato pero limitado. Una de las quejas
                            recurrentes de los clientes de Hostinger es la
                            limitación en sus servidores, es decir; para un
                            sitio web pequeño funcionan bien, pero si usted va a
                            crear un blog con WordPress en el cual va a subir
                            contenido a diario, tendrá problemas de espacio en
                            menos de 3 meses y deberá optar por mejorar su plan
                            de hosting.
                          </li>
                          <li className="list-group-item">
                            😡 Servicio al cliente es español. Hostinger atiende
                            más rápido si contactas al servicio al cliente en
                            inglés, para LATAM por lo general el servicio al
                            cliente no es tan eficiente como me gustaría, creo
                            que deben mejorar ese aspecto.
                          </li>
                          <li className="list-group-item">
                            😡 Hosting a veces muy lento. Lo leí y lo
                            experimenté por mi mismo, yo sé que en ocasiones el
                            servicio de hosting de CUALQUIER EMPRESA puede estar
                            lento, pero con Hostinger me sucedió alrededor de 3
                            veces en un mes, la web se ponía lenta y era por el
                            hosting, este problema está ligado con punto
                            anterior, el hecho de que el hosting sea muy
                            limitado hace que, tener una web mediana con un plan
                            básico sea imposible y por ende debas hacer un
                            Upgrade.
                          </li>
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-image">
                <a
                  href="/out/hostinger/"
                  rel="nofollow sponsored"
                  target="_blank"
                >
                  <img
                    alt="Opiniones Hostinger"
                    src="/images/hostinger-review.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="text-center">Hostinger Opiniones Recientes</h3>
        <br />
        <HostingerWidget />
      </section>
    );
  }
}

export default MejorHostingHostinger;
