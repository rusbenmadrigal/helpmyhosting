import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class SitegroundgAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faqs</span>
            <h3>Preguntas Frecuentes Sobre SiteGround</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué tan bueno es BanaHosting?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SiteGround es uno de los servicios de hosting web más
                        reconocidos a nivel mundial, tienen muy buen desempeño
                        en velocidad y el servicio al cliente es uno de los más
                        completos con lo que he trabajado. Sin embargo, en temas
                        de calidad vs. precio tengo que decir que, Hay servicios
                        de hosting más viables y con mayor capacidad, por
                        ejemplo BanaHosting el cual por $6.95 te ofrece hosting
                        ilimitado, lo cual no sucede con SiteGround.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué servicios ofrece SiteGround?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SiteGround ofrece muchos tipos de alojamiento web, SSL,
                        Reseller, Cloud Hosting y más. Sin embargo, el fuerte de
                        este proveedor es el hosting WordPress, de acuerdo con
                        nuestras pruebas realizadas es uno de los mejores
                        servicios de hosting para hacer una instalación de WP.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué tan bueno es SiteGround para AdSense?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si eres de los que crea sitios web para monetizar
                        (Nichos) SiteGround puede ser una opción válida, pero no
                        es la mejor. SiteGround es limitado en temas de recursos
                        y si quieres más recursos deberás hacer un "Upgrade" a
                        tu cuenta, lo cual representa un gasto mensual de al
                        menos $7.99 en el que te dejan agregar sitios
                        ilimitados, pero aquí hay "truco", ya que te limitan a
                        40 GB de espacio, es decir; si tienes webs que crecen te
                        verás limitado en menos de 1 año. Desde mi experiencia,
                        para la creación de Nichos, el proveedor número uno es
                        BanaHosting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué garantías ofrece SiteGround?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SiteGround al igual que los demás servicios TOP de
                        hosting, ofrece la garantía de devolución del 100% del
                        dinero durante los primeros 30 días. Es decir; si
                        durante el primer mes determinas que SiteGround no es
                        para ti, simplemente solicitas la cancelación de la
                        cuenta y la devolución del dinero.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Russ. ¿Tú recomendarías SiteGround?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si definitivamente. Es un hosting con muchos años de
                        trayectoria; sin embargo, debo advertirte que ellos no
                        trabajan con cPanel, sino con un propio gestión de
                        hosting, el cual en lo personal no me gusta del todo.
                        Por lo demás, SiteGround es un excelente servicio de
                        hosting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img
                  src="/images/faq-image.png"
                  alt="Russ Madrigal | Senior SEO Manager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SitegroundgAccordion;
