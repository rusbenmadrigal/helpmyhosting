import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class SslAccordion extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>SSL</span>
            <h3>¿Cuál es el mejor SSL Hosting?</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        SSL para todos los dominios
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Un buen servicio de Hosting SSL debe incluir la
                        instalación para todos los sitios que usted incluya en
                        su servidor. Debe tener la posibilidad de realizar la
                        instalación mediante el sistema cPanel, el cual es el
                        más eficiente para instalar el SSL para una persona que
                        no tenga conocimientos técnicos.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>BanaHosting SSL</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Banahosting se ha categorizado como uno de los mejores
                        servicios de hosting profesional con SSL incluido, la
                        manera en la que se instala el SSL mediante el cPanel
                        Hosting de Banahosting es muy sencillo. La instalación
                        se realiza mediante el servicio de Let's Encrypt, la
                        cual es iniciativa para lograr que todas las webs
                        obtengan un certificado de seguridad.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Raiola Networks SSL
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        El proveedor de hosting Raiola ofrece servicio de
                        encriptación de datos mediante SSL de manera gratuita
                        para todos sus productos, al igual que BanaHosting,
                        Raiola Networks ofrece SSL mediante Let's Encrypt, el
                        cual se instala en pocos clics desde el cPanel.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>SiteGround SSL</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SiteGround ofrece servicio SSL gratuito para todos sus
                        productos, esto es algo reciente, ya que antes del julio
                        2023 el servicio de SSL no estaba incluido en todos los
                        servicios de hosting ofrecidos por este proveedor. El
                        hecho que ahora incluyan el servicio de SSL es una gran
                        ventaja para quienes adquieren servicios con SiteGround,
                        la instalación se realiza desde el cPanel nativo de
                        SiteGround, cabe destacar que no es tan sencillo de
                        instalar como lo es con cPanel.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>Hostinger SSL</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Hostinger ofrece servicio de SSL para todos sus
                        servicios, la instalación es super sencilla ya que se
                        realiza mediante el cPanel, si el servicio de hosting de
                        Hostinger tuviese más capacidad lo colocaríamos en el
                        primer lugar como mejor hosting SSL.
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

export default SslAccordion;
