import React, { Component } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

class MejorHostingGodaddy extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>5: GoDaddy</span>
            <h2>Opiniones GoDaddy 2023</h2>
            <p>
              GoDaddy es uno de los mejores proveedores de dominios alrededor
              del mundo, les he comprado dominios por más de una década, los
              precios son de los mejores del mercado. Sin embargo, tengo que ser
              muy honesto y decir que el servicio de hosting está lejos de ser
              el mejor, de hecho, podría hablar maravillas de GoDaddy para así
              ganar una comisión, pero este sitio perdería su esencia de
              neutralidad. El hosting de GoDaddy es (al menos para mí) uno de
              los peores que existen, muchas limitaciones y poca estabilidad,
              además no tienen cPanel, el servicio al cliente es muy lento. Como
              ya te dije; GoDaddy es genial para la compra de dominios, pero
              solo eso.
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
                      <div>Lo que MÁS me gusta de GoDaddy</div>
                    </div>
                    <AccordionItemPanel>
                      <p>
                        <li className="list-group-item">
                          😃 Excelentes precios. De hecho, si vas a comprar un
                          dominio GoDaddy es uno de los mejores proveedores, los
                          precios son muy accesibles.
                        </li>
                        <li className="list-group-item">
                          😃 Configuraciones sencillas. GoDaddy, al ser un
                          proveedor de dominios de primera clase, tiene el
                          beneficio de compatibilidad de configuración sencilla
                          con los principales proveedores de tecnología, como lo
                          son Google, HubSpot, Jira, etc.
                        </li>
                        <li className="list-group-item">
                          😃 Seguridad. GoDaddy es uno de los proveedores de
                          dominios con la mejor seguridad, tienen un fuerte
                          infraestructura, lo cual permite tener tus dominios
                          bien seguros.
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
                    <div>Lo que NO me gusta de GoDaddy</div>
                  </div>
                  <Accordion allowZeroExpanded preExpanded={["d"]}>
                    <AccordionItem uuid="d">
                      <AccordionItemPanel>
                        <p>
                          <li className="list-group-item">
                            😡 Hosting malo. El servicio de Hosting es de los
                            peores que he conocido, no tengo nada contra
                            GoDaddy, pero es la verdad, el hosting es fatal. Muy
                            limitado y lento, cualquier configuración
                            mínimamente mala en tu sitio web, provocará que el
                            hosting tenga un problema.
                          </li>
                          <li className="list-group-item">
                            😡 El correo electrónico tiene muy poco espacio,
                            creo que hay muchas otras mejores opciones, por
                            ejemplo contratando el Hosting en BanaHosting o
                            Raiola Networks.
                          </li>
                          <li className="list-group-item">
                            😡 Pésimo servicio al cliente. Es para mí el peor
                            servicio al cliente con el que he trabajado, tardan
                            mucho en responder y si no sabes inglés, aún tardan
                            más.
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
                  href="/out/godaddy/"
                  rel="nofollow sponsored"
                  target="_blank"
                >
                  <img
                    alt="Opiniones GoDaddy"
                    src="/images/godaddy-review.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MejorHostingGodaddy;
