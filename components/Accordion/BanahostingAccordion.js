import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class BanahostingAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faqs</span>
            <h3>Preguntas Frecuentes Sobre BanaHosting</h3>
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
                        De acuerdo con nuestra experiencia y pruebas realizadas,
                        BanaHosting es un servicio de alojamiento web altamente
                        confiable, se destaca por la estabilidad y por utilizar
                        cPanel, desde el cual usted como usuario puede realizar
                        la gran mayoría de funciones, además cuentan con
                        servicio de soporte 27/7 vía ticket el cual ha mejorado
                        mucho, ya que este era una de los principales quejas de
                        los usuarios.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Es BanaHosting confiable?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        De acuerdo con nuestra experiencia y pruebas realizadas,
                        BanaHosting es un servicio de alojamiento web altamente
                        confiable, se destaca por la estabilidad y por utilizar
                        cPanel, desde el cual usted como usuario puede realizar
                        la gran mayoría de funciones, además cuentan con
                        servicio de soporte 27/7 vía ticket el cual ha mejorado
                        mucho, ya que este era una de los principales quejas de
                        los usuarios.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué tan estable es BanaHosting?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        He trabajado con el servicio de BanaHosting desde el
                        2016 y desde entonces no he tenido mayores problemas, en
                        esto 6 años utilizando el servicio de "Bana" únicamente
                        3 veces tuve interrupciones con la estabilidad de los
                        servidores.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué garantías ofrece BanaHosting?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        BanaHosting te ofrece una garantía de 30 días de
                        satisfacción, en lo que usted puede solicitar la
                        cancelación de su cuenta y devolución de dinero. En lo
                        personal siempre me han gustado mucho todos los
                        productos que ofrece este servicio de hosting, así como
                        la estabilidad.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Russ. ¿Tú recomendarías BanaHosting?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si definitivamente. Me parece un hosting muy completo,
                        el cual aún debe mejorar un poco el tema de servicio al
                        cliente, pero fuera de eso BanaHosting es el hosting
                        ideal para quien vaya a iniciar un proyecto, no importa
                        si son nichos, afiliados o web corporativa.
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

export default BanahostingAccordion;
