import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class ChileAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faqs</span>
            <h3>El mejor hosting Chile</h3>
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
                        Este es uno de los factores que con mayor regularidad
                        menciono, el servicio de hosting que recomendamos deben
                        tener al menos 7 años trabajando en el mercado, esto nos
                        permite tener un mejor panorama de cuál ha sido su
                        desempeño y calidad de servicio al cliente durante todo
                        ese tiempo. Al igual que para los demás países, un
                        servicio de Hosting en Chile debe tener al menos 7 años
                        activo ya sea hosting local o internacional.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Hosting local vs. Hosting Internacional
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Definitivamente recomendamos un hosting internacional.
                        La razón es simple, el hosting internacional le brinda
                        un mejor servicio, muchos hostings internacionales
                        ofrecen ancho de banda ilimitado, lo mismo con bases de
                        datos, correos electrónicos y dominios adicionales.
                        Todas las empresas de hosting web que ofrecemos en
                        nuestra página son internacionales, con una amplia
                        trayectoria en el mercado y con excelentes beneficios
                        para sus clientes.
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
                        Es muy importante que antes de contratar un el servicio
                        de hosting en Chile usted se asegure que dicho hosting
                        ofrezca servicio al cliente en todo momento, a toda
                        hora. Por nuestra propia experiencia, el servicio de
                        hosting internacional que ofrece{" "}
                        <strong>BanaHosting</strong> o{" "}
                        <strong>SiteGround</strong> le permite al usuario tener
                        acceso a soporte vía ticket o LiveChat en todo momento,
                        esto permite que usted pueda estar tranquilo de que
                        siempre estará alguien allí para ayudarle a solucionar
                        su problema.
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
                        Es muy importante que el servicio de hosting a contratar
                        ofrezca la garantía de satisfacción de 30 días, de esta
                        manera usted puede probar el servicio y en caso de que
                        usted no este satisfecho, tiene el derecho de solicitar
                        la cancelación del servicio y la devolución inmediata de
                        su dinero. Si una empresa de hosting no ofrece garantía
                        de satisfacción, lo mejor es no adquirir servicios con
                        esa empresa.
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

export default ChileAccordion;
