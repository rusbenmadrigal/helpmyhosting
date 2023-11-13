import React, { Component } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

class MejorHostingHostgator extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>6: HostGator</span>
            <h2>Opiniones HostGator 2024</h2>
            <p>
              HostGator fue uno de mis Hostings web favoritos por muchos años,
              de hecho fue uno de los primeros que utilice cuando inicié
              proyectos más grandes. Me encanta HostGator, ya que ofrecen todas
              las ventajas de un buen servicio de alojamiento web, cPanel, SSL,
              Backup, Dominios adicionales, One Click Install y más. En 2013
              HostGator fue adquirido por Endurance International quien a su vez
              es la sombrilla de iPage, Constant Contact, y otras marcas del
              sector TI, en aquel momento con el cambio realizado los usuarios
              percibieron una disminución en la calidad de servicio al cliente;
              sin embargo, desde entonces HostGator ha mejorado bastante dicho
              problema.
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
                      <div>Lo que MÁS me gusta de HostGator</div>
                    </div>
                    <AccordionItemPanel>
                      <p>
                        <li className="list-group-item">
                          😃 Buenos precios. Con tan solo $3.50 tienes acceso a
                          un servicio de hosting en el cual puedes de manera
                          ilimitada agregar sitios web y correos electrónicos,
                          además cuentan con cPanel, FTP, Bases de datos y
                          aplicaciones de instalaciones de CMS.
                        </li>
                        <li className="list-group-item">
                          😃 Dominio gratuito. Por la compra de un plan de 12
                          meses te regalan el dominio .COM esto es genial para
                          empresas o emprendedores, te permite un ahorro de
                          alrededor de $13 por el registro de dominio el primer
                          año.
                        </li>
                        <li className="list-group-item">
                          😃 Estabilidad. En los casi 5 años con HostGator nunca
                          tuve problemas con el servicio de hosting, siempre fue
                          muy estable y eso es algo que se agradece mucho porque
                          además de hacer más sencillo el trabajo evita que
                          nuestro sitio web le dé una mala experiencia a los
                          usuarios.
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
                    <div>Lo que NO me gusta de HostGator</div>
                  </div>
                  <Accordion allowZeroExpanded preExpanded={["d"]}>
                    <AccordionItem uuid="d">
                      <AccordionItemPanel>
                        <p>
                          <li className="list-group-item">
                            😡 Son pocas las cosas que no me gustan de
                            HostGator, pero las hay. Creo que el servicio al
                            cliente nunca volvió a ser el mismo desde la venta
                            de la empresa en 2013, han mejorado, pero en idioma
                            español está un poco descuidado el servicio de
                            soporte.
                          </li>
                          <li className="list-group-item">
                            😡 LiveChat Lento. El servicio de chat en línea es
                            bastante lento (al menos en español) a veces la
                            ventana emergente se queda congelada, esto es algo
                            que no me gusta y me molesta que una empresa como
                            HostGator no preste atencion a esos detalles.
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
                  href="/out/hostgator/"
                  rel="nofollow sponsored"
                  target="_blank"
                >
                  <img
                    alt="Opiniones GoDaddy"
                    src="/images/hostgator-review.png"
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

export default MejorHostingHostgator;
