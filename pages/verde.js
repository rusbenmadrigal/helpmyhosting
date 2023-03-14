import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
class Verde extends Component {
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
            Pronto...
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Verde;
