import React, { Component } from "react";
import SitegroundWidget from "../../components/Widgets/SitegroundWidget";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

class MejorHostingSiteground extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>3: SiteGround</span>
            <h2>Opiniones SiteGround 2023</h2>
            <p>
              SiteGround es uno de los Hostings más reconocidos a nivel mundial,
              en lo personal no me gusta tanto, esto principalmente se debe a
              que sus precios son muy elevados vs. la competencia, por otra
              parte, no tienen cPanel para administrar el hosting, en lugar de
              eso utilizan un sistema de administración propia, la cual no me ha
              gustado en lo absoluto. Por otra parte, SiteGround es un hosting
              que ofrece mucha estabilidad y excelente servicio al cliente, creo
              que es un hosting ideal para quien no tiene muchos conocimientos
              en administración de hosting o servidores.
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
                      <div>Lo que MÁS me gusta de SiteGround</div>
                    </div>
                    <AccordionItemPanel>
                      <p>
                        <li className="list-group-item">
                          😃 Buen servicio al cliente. Me encanta la velocidad y
                          eficiencia con la que me han respondido los tickets
                          cada que les contacto.
                        </li>
                        <li className="list-group-item">
                          😃 Mucha estabilidad. En más de 3 años que les he
                          utilizado para proyectos de clientes, nunca he tenido
                          un problema por caída de servidor, realmente estables.
                        </li>
                        <li className="list-group-item">
                          😃 Certificado SSL. Incluyen un certificado SSL para
                          todos tú sitios, esto dependiendo del plan que
                          adquieras, por lo general el plan GoGeek es muy bueno
                          para iniciar.
                        </li>
                        <li className="list-group-item">
                          😃 El servicio de respaldo es muy eficiente,
                          SiteGround realiza un respaldo diario, lo cual es
                          altamente importante para cualquier proyecto en caso
                          de un hackeo o falla.
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
                    <div>Lo que NO me gusta de SiteGround</div>
                  </div>
                  <Accordion allowZeroExpanded preExpanded={["d"]}>
                    <AccordionItem uuid="d">
                      <AccordionItemPanel>
                        <p>
                          <li className="list-group-item">
                            😡 No utilizan cPanel. Si adquieres un servicio de
                            hosting olvídate de utilizar el cPanel, esto no me
                            gusta en lo absoluto, ya que toda mi vida para
                            hosting he utilizado el cPanel, creo que el CMS que
                            utilizan es más para no pagar licencias de cPanel
                            que por conveniencia del cliente.
                          </li>
                          <li className="list-group-item">
                            😡 Precios un poco elevados. Aquí hay "truco", ya
                            ofrecen un descuento del 80%, pero solo si contratas
                            1 año o más, es decir; si contratas el servicio de
                            hosting por solo 12 meses, la renovación te saldrá
                            mucho más elevada. Por ejemplo, el plan básico te
                            costará $2.99/mes, pero la renovación te saldrá en
                            $14.99.
                          </li>
                          <li className="list-group-item">
                            😡 IVA no incluido. Los precios no incluyen el IVA,
                            por lo que pagarás un precio más alto al hacer el
                            pago final.
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
                <a href="/out/siteground/" rel="nofollow sponsored" target="_blank">
                  <img
                    alt="Opiniones SiteGround"
                    src="/images/siteground-review.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className="text-center">SiteGround Opiniones Recientes</h3>
        <br />
        <SitegroundWidget />
      </section>
    );
  }
}

export default MejorHostingSiteground;
