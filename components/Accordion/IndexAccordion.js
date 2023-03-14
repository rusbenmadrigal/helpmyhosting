import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class IndexAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faqs Hosting 2023</span>
            <h3>¿Cómo saber cuál es el mejor hosting?</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Años brindando servicio de hosting
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Si bien, el tiempo que tenga una empresa en línea, no es
                        sinónimo de la mejor calidad, sí que nos puede dar una
                        mejor idea de cuan serio es el negocio y que tanta
                        aceptación ha tenido por sus clientes. De acuerdo con mi
                        experiencia, una empresa de hosting puede empezar a ser
                        confiable luego de 3 años de estar en el mercado, ya que
                        podemos encontrar reseñas como las que están leyendo
                        ahora mismo o bien en webs como Trustpilot.com
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Hosting barato vs. hosting premium
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Esta es una pregunta recurrente entre los lectores de
                        este blog, por lo general se piensa que, adquirir un
                        hosting por $1/mes es una buena idea en lo que "crece el
                        negocio" y que; "ya luego lo migramos". Desde mi propia
                        experiencia esta es una muy mala idea, al menos si están
                        pensando en crear un negocio en serio, conforme vaya
                        creciendo tu proyecto, una migración supone un reto más
                        grande e inclusive peligroso, ya que durante la
                        migración puedes tener problemas con la web y por ende
                        con el posicionamiento que esta hubiese ganado.
                      </p>
                      <p>
                        Yo recomendaría, en vez de comprar hosting barato, optes
                        por comprar un servicio de hosting "middle class" tal
                        como el que ofrece{" "}
                        <a href="/mejor-hosting/banahosting/">BanaHosting</a>.
                        Con su plan de $6.95, con esto vas a evitarte muchos
                        dolores de cabeza, debido a que, un hosting barato es
                        muy limitado, el soporte es casi nulo y la velocidad es
                        pésima.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Servicio al cliente efectivo
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        La razón principal por la que en 2020 abandone HostGator
                        fue el servicio al cliente, en especial el del Live
                        Chat, siempre que me conectaba para solicitar soporte,
                        me hacían esperar más de 15 minutos y cuando era mi
                        turno la pantalla del Chat simplemente se congelaba, en
                        otras ocasiones el agente se conectaba, me preguntaba mi
                        problema y no volvía a responder más, como dicen
                        coloquialmente "Me dejaban plantado".
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Garantía de satisfacción en 30 días
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        La gran mayoría de servicios de alojamiento web serios,
                        tienen la política de devolverte el 100% de tu dinero
                        si, en un plazo menos a los primeros 30, tú solicitas la
                        devolución de tu dinero por insatisfacción del producto
                        o servicio. Si el hosting donde planeas hacer la compra
                        no ofrece dicha garantía, no hagas negocios con ellos.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Cuidado con los "Influencers"
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Para nadie es un secreto que, muchos "Influencers"
                        promocionan casi de todo tipo de productos o servicios,
                        basta con que les paguen. Si bien, no hay nada de malo
                        en ganar dinero por promocionar un producto, lo malo es
                        promocionar un producto que ni tu mismo utilizas.
                        Recomiendo investigar, leer comentarios y luego tomar
                        una decisión de compra (si es esta la primera vez que
                        compras hosting) de esta manera usted puede (con mayor
                        probabilidad) adquirir un servicio de hosting web en el
                        que el servicio sea altamente eficiente.
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

export default IndexAccordion;
