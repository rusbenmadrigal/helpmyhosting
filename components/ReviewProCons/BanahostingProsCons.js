import React, { Component } from "react";
import BanahostingWidget from "../../components/Widgets/BanahostingWidget";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

class BanaHostingProsCons extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>BanaHosting</span>
            <h2>BanaHosting Pros & Cons 2024</h2>
            <p>
              De acuerdo con mi experiencia, BanaHosting es uno de los mejores
              hostings de 2024, ofrece una gran variedad de servicios dentro de
              sus diferentes planes, los cuales inician en $4.95. Cabe destacar
              que BanaHosting ofrece certificado SSL en todos sus planes, además
              todos sus planes de hosting tienen la ventaja de que son
              ilimitados, por lo que no tienes que sufrir con el espacio en el
              servidor, aún mejor si escoges el plan Bana Professional el cual
              por $6.95 le permite agregar sitios web ilimitados.
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
                      <div>Lo que MÁS me gusta de BanaHosting</div>
                    </div>
                    <AccordionItemPanel>
                      <p>
                        <li className="list-group-item">
                          😃 Todos los planes incluyen gestión con cPanel, lo
                          cual permite de una manera sencilla gestionar tu
                          hosting.
                        </li>
                        <li className="list-group-item">
                          😃 Incluye certificado SSL en todos los planes, lo
                          cual permite mantener sitios online web de manera
                          segura.
                        </li>
                        <li className="list-group-item">
                          😃 El servicio de almacenamiento y de ancho de banda
                          es ilimitado, algo que muy pocos proveedores de
                          hosting ofrecen.
                        </li>
                        <li className="list-group-item">
                          😃 El servicio de hosting de "Bana" es de los más
                          estables con lo que he trabajado en los últimos 10
                          años.
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
                    <div>Lo que NO me gusta de BanaHosting</div>
                  </div>
                  <Accordion allowZeroExpanded preExpanded={["d"]}>
                    <AccordionItem uuid="d">
                      <AccordionItemPanel>
                        <p>
                          <li className="list-group-item">
                            😡 El servicio al cliente, no es tan eficiente como
                            me gustaría, han mejorado mucho debido a múltiples
                            quejas, pero aún deben mejorar mucho más.
                          </li>
                          <li className="list-group-item">
                            😡 Una vez me cancelaron un hosting debido a una
                            supuesta denuncia de Copyright, la cual al final era
                            falsa, parte de una estrategia de competencia
                            desleal de otro sitio que era competencia de mi web
                            en las SERPS. Al final me restauraron la cuenta,
                            pero mi web estuvo caída por 6 horas y no hubo
                            ningún tipo de compensación.
                          </li>
                          <li className="list-group-item">
                            😡 No tienen servicio de LiveChat, lo cual es muy
                            importante y que, casi todos los mejores hosting lo
                            ofrecen.
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
                  href="/out/banahosting/"
                  rel="nofollow sponsored"
                  target="_blank"
                >
                  <img
                    alt="Opiniones BanaHosting"
                    src="/images/banahosting-review.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="text-center">BanaHosting Opiniones Recientes</h3>
        <br />
        <BanahostingWidget />
      </section>
    );
  }
}

export default BanaHostingProsCons;