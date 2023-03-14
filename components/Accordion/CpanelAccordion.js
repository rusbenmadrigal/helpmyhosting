import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class CpanelAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>cPanel</span>
            <h3>¿Cuál es el mejor cPanel Hosting?</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Licencia cPanel Incluida de por vida
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Un buen servicio de alojamiento web con cPanel Hosting
                        debe incluir la licencia de uso de por vida, hay
                        servicios de hosting que incluyen el cPanel solo por
                        unos meses, luego el usuario debe pagar la licencia,
                        este tipo de hosting no es recomendable, ya que la
                        licencia del cPanel debe estar incluida en el pago
                        mensual de hosting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Hostgator cPanel
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        El servicio de Hosting de HostGator ofrece cPanel
                        gratuito con el pago mensual de su alojamiento web, si
                        bien muchas de las funcionalidades de HostGator se
                        pueden realizar desde su plataforma externa al cPanel,
                        han decidido dejarlo en caso de que el usuario prefiera
                        utilizar el cPanel para administrar su hosting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Hostinger cPanel
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Hostinger ofrece la opción de cPanel Login es decir;
                        usted puede iniciar sesión desde una URL específica o
                        bien desde el login oficial de Hostinger. El cPanel de
                        este alojamiento web es muy similar a los demás, una de
                        las diferencias es que, por lo general, usted no puede
                        cambiar el diseño del cPanel, lo cual si puede hacer con
                        otros servicios de Hosting tales como BanaHosting y
                        Raila Networks.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        SiteGround cPanel
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SiteGround no ofrece cPanel, al menos no el tradicional
                        que tedoso conocemos. Ellos ofrecen un tipo de "cPanel
                        creado por ellos mismos" (el cual en lo personal no me
                        gusta) desde la herramienta de administración de
                        SiteGround se puede hacer casi todo lo mismo que con un
                        cPanel tradicional, aunque no es tan eficiente y por
                        ende vas a tardar un rato en adaptarte.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Raiola Networks cPanel
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        El proveedor de Hosting Raiola Networks, provee el
                        cPanel clásico, con el que usted puede administrar su
                        servicio de hosting de manera sencilla, Raiola es uno de
                        esos hosting de calidad que se preocupan por ofrecer la
                        última versión de cPanel así como su licencia incluida
                        en el pago mensual de tu hosting.
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

export default CpanelAccordion;
