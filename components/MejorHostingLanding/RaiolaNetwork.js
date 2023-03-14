import React, { Component } from "react";
import Banahostingidget from "../../components/Widgets/RaiolaWidget";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

class MejorHostingRaiola extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>2: Raiola Networks</span>
            <h2>Opiniones Raiola Networks 2023</h2>
            <p>
              Raiola Networks es un servicio de hosting web muy popular,
              principalmente en el mercado español, esto debido a que uno de sus
              fundadores (Álvaro Fontela) es un gran experto en la optimización
              de WordPress y constantemente está compartiendo información de
              como tener una web WordPress optimizada. Raiola Networks tiene
              mucha fama debido a su gran servicio al cliente y calidad de{" "}
              <a href="/mejor-hosting/wordpress/">Hosting WordPress</a>, es uno
              de los mejores en habla hispana, si usted vive en LATAM debe tener
              en cuenta que Raiola por lo general atiende con mayor velocidad en
              horario europeo, ya que sus oficinas están en Lugo, España.
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
                      <div>Lo que MÁS me gusta de Raiola Networks</div>
                    </div>
                    <AccordionItemPanel>
                      <p>
                        <li className="list-group-item">
                          😃 Mucha estabilidad. El servicio de hosting de Raiola
                          es uno de los más estables con lo que he trabajado en
                          los últimos 3 años.
                        </li>
                        <li className="list-group-item">
                          😃 El servicio al cliente es muy bueno. Más que
                          responder rápido, responden con una solución real,
                          esto es algo que muchos otros hostings deben aprender.
                        </li>
                        <li className="list-group-item">
                          😃 Raiola Networks es uno de los mejores servicios de
                          hosting para instalar WordPress, gracias a su amplio
                          conocimiento de dicho CMS es uno de los mejores
                          Hostings WordPress en español.
                        </li>
                        <li className="list-group-item">
                          😃 Ofrecen cPanel para administrar tu servicio de
                          hosting, además certificado SSL en todos sus planes.
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
                    <div>Lo que NO me gusta de Raiola Networks</div>
                  </div>
                  <Accordion allowZeroExpanded preExpanded={["d"]}>
                    <AccordionItem uuid="d">
                      <AccordionItemPanel>
                        <p>
                          <li className="list-group-item">
                            😡 Sus servidores están en Europa, por lo que si tu
                            mercado meta está en América no sería el hosting más
                            recomendable, deberían contratar Data Centers en
                            este otro lado del charco.
                          </li>
                          <li className="list-group-item">
                            😡 Sin precios en dólares. Raiola al día de hoy
                            únicamente ofrece sus servicios en Euros, lo cual
                            hace que para los clientes en LATAM sea un coste
                            mucho más elevado.
                          </li>
                          <li className="list-group-item">
                            😡 El precio básico "Inicio" está un poco elevado
                            vs. sus competidores, el plan más básico de Raiola
                            Networks inicia en 8.95 € lo cual viene siendo casi
                            $10, por ese precio me compro 2 hostings en
                            Banahosting.
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
                <a href="/out/raiola/" rel="nofollow sponsored" target="_blank">
                  <img
                    alt="Opiniones Raiola Networks"
                    src="/images/raiola-review.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="text-center">Raiola Networks Opiniones Recientes</h3>
        <br />
        <Banahostingidget />
      </section>
    );
  }
}

export default MejorHostingRaiola;
