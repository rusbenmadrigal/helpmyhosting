import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import RaiolaCta from "../../components/Cta/RaiolaCta";
import RaiolaReview from "../../components/ReviewContent/RaiolaReview";
import RaiolaTabs from "../../components/ReviewTabs/RaiolaTabs";
import Raiolafooter from "../../components/Footer/RaiolaFooter";
import RaiolaWidget from "../../components/Widgets/RaiolaWidget";
import RaiolaAccordion from "../../components/Accordion/RaiolaAccordion";
import RaiolaHostingProsCons from "../../components/ReviewProCons/RaiolahostingProsCons";

class SingleProject extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Opiniones de Expertos y Usuarios sobre Raiola Networks 2023 | HelpMyHosting"
          description="Opiniones de Expertos y Usuarios sobre Raiola Networks 2023. Descubre en que casos y para que tipos de sitios web es recomendable utilizar SiteGround."
          canonical="https://helpmyhosting.com/mejor-hosting/raiola/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="Opiniones de Expertos y Usuarios sobre Raiola Networks 2023"
          breadcrumbTextTwo="Actualizado: octubre de 2023"
          breadcrumbUrl="/"
        />
        <section className="projPect-details-area ptb-100">
          {/* Review CTA Component */}

          <RaiolaCta />

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-3">
                <div className="project-details-image"></div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="projects-details-desc">
                  <div className="container">
                    {/* Review 3rd party comments */}
                    <RaiolaWidget />
                  </div>
                  <br />
                  {/* Review Content Component */}
                  <RaiolaReview />
                  {/* Review Price Table Component */}
                  <RaiolaTabs />
                  {/* Review Accordion */}

                  {/* Review pro/cons */}
                  <RaiolaHostingProsCons />

                  <br />
                  <br />
                  <RaiolaAccordion />

                  {/* Review Footer Component */}
                  <br />
                  <br />
                  <Raiolafooter />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default SingleProject;
