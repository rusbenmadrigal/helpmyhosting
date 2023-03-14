import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class WordpressAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>WordPress</span>
            <h3>¿Cuál es el mejor hosting WordPress?</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        No es un Hosting limitado
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Cuando digo que un hosting está verdaderamente
                        optimizado para WordPress, me refiero a un servicio con
                        todas las facilidades para que tu CMS pueda correr más
                        rápido, esto lo podemos detectar fácilmente en la
                        descripción del plan de hosting. Para empezar, un
                        servicio de hosting que sea limitado, no es el más apto
                        para instalar WordPress, mucho menos un hosting con
                        MySQL limitado, esas son algunas de las señales que
                        puedes tener en cuenta al comprar hosting WordPress.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Debe ofrecer servidores en tu región
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Entre más lejos este el servidor de tu región, más lento
                        podría cargar tu sitio web, un verdadero hosting
                        WordPress debe ofrecer la posibilidad de adquirir
                        hosting con servidores en América o Europa, de manera
                        que la IP quede al menos en el continente donde vives,
                        esto es importante para temas de velocidad e inclusive
                        de SEO.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Hosting con autoridad en el sector
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si esta es la primera vez que contratar un hosting
                        WordPress, quizás te sea difícil saber quienes tienen
                        autoridad en el sector, por ejemplo Raiola Networks es
                        un servicio de hosting WordPress con mucha presencia en
                        el sector, ya que Álvaro Fontela (el CEO) es un master
                        en temas de optimización para WordPress, por lo que los
                        planes de Hosting de Raiola son bastante buenos, aunque
                        en lo personal creo que hay detalles que deben mejorar
                        para ser el mejor hosting WordPress en español.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Soporte vía Chat, Ticket o llamada
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Es muy importante que, el hosting WordPress que vayas a
                        contactar ofrezca al menos servicio vía ticket, el
                        servicio de chat realmente no es lo más importante en
                        temas de soporte, en realidad la vía de soporte depende
                        mucho de la calidad de la misma. Por ejemplo,
                        BanaHosting ofrece servicio al cliente mediante ticket,
                        el cual es muy efectivo, mientras que HostGator ofrece
                        Chat en vivo, el cual es terriblemente malo e
                        ineficiente, siempre te dejan colgado.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Cuidado con los "Influencers" WordPress
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A menudo podemos ver en YouTube personas que se hacen
                        llamar "expertos WordPress" y recomiendan servicios de
                        alojamiento web para WordPress, pero en realidad ni
                        ellos mismos han probado el servicio de hosting de la
                        empresa que recomiendan, únicamente recomiendan las
                        empresas que más comisión les pagan, sin importarles si
                        el servicio de hosting es bueno o malo. No te
                        arriesgues, mejor utiliza una web referente tal como
                        HelpMyHosting.com.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img
                  src="/images/think.png"
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

export default WordpressAccordion;
