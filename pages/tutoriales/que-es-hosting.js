import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";

class SingleBlog extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="¿Qué es y para qué sirve un hosting web? | HelpMyHosting"
          description="¿Qué es y para qué sirve un hosting web? nuestros expertos le explican paso a paso de manera que usted pueda comprender mejor."
          canonical="https://helpmyhosting.com/tutoriales/que-es-hosting/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="¿Qué es y para qué sirve un hosting web?"
          breadcrumbTextOne="Inicio"
          breadcrumbTextTwo="¿Qué es hosting?"
          breadcrumbUrl="/"
        />

        <div className="ptb-100">
          <div className="container">
            <p>
              En palabras simples el hosting o alojamiento web es un lugar en
              internet donde usted puede subir los archivos que conforman tu
              sitio web para que este pueda ser accedido por los motores de
              búsqueda como Google y usuarios en general, hoy en día hay muchas
              opciones de hosting los hay desde hostings baratos los cuales se
              puede utilizar para web pequeñas o bien hosting dedicado los
              cuales puede manejar una mayor cantidad de tráfico y por ende
              tienen un mayor precio.
            </p>

            <h4>¿Puedo crear una web sin hosting?</h4>
            <p>
              <strong>
                La respuesta simple es si, usted puede crear una web sin comprar
                hosting
              </strong>
              . Ahora bien, en este caso usted debería contratar los servicios
              de un CMS como lo son, WebFlow o WIX. El problema con este tipo de
              servicios es que, usted no tiene control total sobre su sitio web,
              además de que siempre va a depender de los recursos del proveedor
              para mejorar su web, este tipo de servicios incluyen el hosting
              web en el paquete de venta, por lo que aunque usted no está
              configurando su propio hosting, si está usando el hosting de
              alguno de estos proveedores el cual es administrado por el
              vendedor.
            </p>
            <p>
              Una de las grandes ventajas de contratar un servicio de hosting es
              la escalabilidad a la que su proyecto está expuesto, mientras que
              con un servicio de alojamiento web administrado tal como el que
              ofrece Wix son limitadas las posibilidades de administrar y
              escalar tu sitio web de manera extraordinaria, los administradores
              de contenido como lo son Wix o Webflow si bien son una solución
              para iniciar una web de manera rápida, no son recomendables para
              un proyecto escalable y a la medida.
            </p>
            <p>
              <iframe
                className="YTvideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jgAgs59CVKc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              Hay diferentes tipos de hosting web, el nombre va a depender de la
              empresa y del nombre que elijan para su marca, pero en general el
              servicio de hosting se divide en nivel básico, intermedio y
              avanzado, siendo este último el de mayor capacidad con capacidad
              para albergar más de 100 sitios web, algunos de los planes hosting
              más comunes en el mercado son.
              <p>
                <ol>
                  <li>Hosting Compartido</li>
                  <li>Hosting VPS (Servidor virtual privado)</li>
                  <li>Alojamiento en la nube (Cloud Hosting)</li>
                  <li>Hosting WordPress</li>
                  <li>Hosting con servidor dedicado</li>
                </ol>
              </p>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SingleBlog;
