import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class HostingerAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faqs</span>
            <h3>Preguntas Frecuentes Sobre Hostinger</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué tan bueno es hostinger?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Hostinger es uno de los servicios de alojamiento web, lo
                        utilicé por primera vez allá por el 2011, luego de haber
                        creado una cuenta gratuita en 000webhost el cual es un
                        servicio de hosting gratuito. En lo personal creo que no
                        hay hosting más barato que Hostinger y con una calidad
                        muy aceptable; sin embargo, tengo que ser honesto, para
                        la mayoría de mis proyectos yo empleo{" "}
                        <a href="/mejor-hosting/banahosting/">BanaHosting</a>,
                        ya que aunque es un poco más elevado el precio, no tiene
                        tantas limitaciones como Hostinger.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué servicios ofrece hostinger?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Hostinger ofrece más que alojamiento web para un blog,
                        al día de hoy también han agregado más servicios tales
                        como: Cloud Hosting, VPS, Servidores para Minecraft,
                        E-mails y dominios.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Incluye Hostinger el SSL?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Sí. Hostinger ofrece el servicio de SSL gratuito con
                        todos sus planes; sin embargo, ha que tener en cuenta
                        que, podrían cobrar la renovación, esto depende de
                        Hostinger.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        ¿Qué garantías ofrece Hostinger?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Al igual que todos nuestros mejores hosting, la
                        plataforma de Hostinger ofrece una garantía de
                        devolución total del dinero en un lapso de 30 días. Es
                        decir; si usted no está conforme con el servicio
                        adquirido, simplemente puede solicitar que cierren su
                        cuenta y le devuelvan su dinero.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Russ. ¿Tú recomendarías Hostinger?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Depende. Si tienes un único proyecto pequeño, yo
                        recomiendo usar Hostinger, ya que sus costos son los más
                        económicos del mercado (al menos coste vs. calidad). Si,
                        por otra parte, necesita un hosting más potente, con
                        menos limitaciones, yo recomiendo{" "}
                        <a href="/mejor-hosting/raiola/">Raiola Networks</a> o
                        <a href="/mejor-hosting/banahosting/"> BanaHosting</a>,.
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

export default HostingerAccordion;
