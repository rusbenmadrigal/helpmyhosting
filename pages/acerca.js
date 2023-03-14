import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
class Acerca extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="¿Quiénes Somos? | HelpMyHosting"
          description="¿Encontrar hosting barato? ¡Eso es fácil! Encontrar el ideal es algo muy diferente. Te ayudamos a encontrar el mejor hosting basado en calidad y precio."
          canonical="https://helpmyhosting.com/acerca/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="¿Quiénes Somos?"
          breadcrumbTextOne="Inicio"
          breadcrumbTextTwo="Acerca"
          breadcrumbUrl="/"
        />

        <div className="ptb-100">
          <div className="container">
            <p>
              HelpMyHosting.com cuenta con la experiencia de especialistas en el
              sector de TI y Marketing los cuales le brindarán recomendaciones
              profesionales en cada uno de los servicios hostings que
              promocionamos. Nuestros expertos también le brindan asesoría
              gratuita sobre temas de SEO, diseño y marketing digital, contenido
              que se comparte en nuestro canal oficial de YouTube. Fundado el 24
              de diciembre del 2021, HelpMyHosting.com (HMH) nació como un
              proyecto de práctica; sin embargo, con el paso de los días se fue
              convirtiendo en un proyecto con más utilidad que solo practicar
              SEO en Nextjs, descubrimos que podíamos ayudar a muchas personas a
              elegir un hosting de calidad y con un precio basado en las
              necesidades de su negocio.
            </p>
            <h4>¿En qué nos diferenciamos a los demás?</h4>
            <p>
              HelpMyHosting.com cuenta con la experiencia de especialistas en el
              sector de TI y Marketing los cuales le brindarán recomendaciones
              profesionales en cada uno de los servicios hostings que
              promocionamos. Nuestros expertos también le brindan asesoría
              gratuita sobre temas de SEO, diseño y marketing digital, contenido
              que se comparte en nuestro canal oficial de YouTube. Fundado el 24
              de diciembre del 2021, HelpMyHosting.com (HMH) nació como un
              proyecto de práctica; sin embargo, con el paso de los días se fue
              convirtiendo en un proyecto con más utilidad que solo practicar
              SEO en Nextjs, descubrimos que podíamos ayudar a muchas personas a
              elegir un hosting de calidad y con un precio basado en las
              necesidades de su negocio.
            </p>
            <p>
              Toma tiempo llegar a ser una marca reconocida en un mercado con
              tanta competencia, pero somos pacientes y trabajamos para hacer
              las cosas bien, como Startup pensamos a largo plazo, hacernos
              conocer por el valor que aportemos a la comunidad y no únicamente
              por el monto de dinero que podamos gastar en publicidad.
              <p />
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Acerca;
