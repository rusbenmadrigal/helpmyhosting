import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class RaiolaAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faqs</span>
            <h3>Preguntas Frecuentes Sobre Raiola Networks</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué tan bueno es Raiola Networks?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Raiola Networks es un servicio de Web Hosting altamente
                        confiable, te seré honesto, yo prefiero el de
                        BanaHosting, pero si tuviese que recomendar el hosting
                        de Raiola, le daría un 9.9 de calificación, la atención
                        al cliente es mucho mejor que BanaHosting; sin embargo,
                        en temas de potencia y opciones de administración de
                        hosting, BanaHosting es mucho mejor. En resumen, Riola
                        es un hosting confiable y de buena calidad, lo
                        recomiendo principalmente si tu público objetivo está en
                        Europa, ya que sus IP son españolas.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué servicios ofrece Raiola Networks?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Además de servicio de hosting web, Raiola Networks
                        ofrece servicio de VPS, dominios, SSL, servidores
                        dedicados, servicios para WordPress. De hecho, Raiola es
                        altamente eficiente como hosting para WordPress, ya que
                        su fundador Alvaro Fontela es un referente en este CMS.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué tan bueno es Raiola Networks para AdSense?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si te gusta crear Nichos para monetizar con AdSense y/o
                        cualquier otro medio de monetización, Raiola Hosting es
                        una buena opción. Aunque, nuevamente, debo mencionar, su
                        servicio de hosting es un poco más limitado que otras
                        empresas, por ejemplo BanaHosting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué garantías ofrece Raiola Networks?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        La empresa hosting web Raiola Networks, ofrece una
                        garantía de devolución de dinero de 30 días, por lo que
                        si antes del primer mes de relación con ellos, usted no
                        está conforme con el servicio de hosting, puede
                        solicitar la cancelación de su cuenta y la devolución de
                        todo el dinero.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Russ. ¿Tú recomendarías Raiola Network?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si definitivamente. Después de BanaHosting, el servicio
                        de hosting web de Raiola es (para mí) uno de los mejores
                        en español, el servicio al cliente es mucho mejor que
                        "Bana" sin embargo, la razón por la que prefiero a{" "}
                        <a href="/mejor-hosting/banahosting/"> BanaHosting</a>,
                        es por el simple hecho que tengo hosting ilimitado en
                        todos los planes.
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

export default RaiolaAccordion;
