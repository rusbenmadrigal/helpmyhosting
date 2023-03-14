import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SitegroundCta from "../../components/Cta/SitegroundCta";
import SitegroundReview from "../../components/ReviewContent/Sitegroundreview";
import SitegroundTabs from "../../components/ReviewTabs/Siteground-Tabs";
import SitegroundFoooter from "../../components/Footer/SitegroundFooter";
import SitegroundAccordion from "../../components/Accordion/SitegroundAccordion";
import SitegroundWidget from "../../components/Widgets/SitegroundWidget";
import SitegroundHostingSiteground from "../../components/ReviewProCons/SitegrounghostingProsCons";

class SingleProject extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="SiteGround Opinión De Expertos y Usuarios 2023 | HelpMyHosting"
          description="Opiniones de Expertos y Usuarios sobre SiteGround 2023. Descubre en que casos y para que tipos de sitios web es recomendable utilizar SiteGround."
          canonical="https://helpmyhosting.com/mejor-hosting/siteground/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="Opiniones de Expertos y Usuarios sobre SiteGround 2023"
          breadcrumbTextTwo="Actualizado el: 28 de junio de 2023"
          breadcrumbUrl="/"
        />
        <section className="projPect-details-area ptb-100">
          {/* Review CTA Component */}
          <SitegroundCta />

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-3">
                <div className="project-details-image"></div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="projects-details-desc">
                  <div className="container">
                    {/* Review 3rd party comments */}
                    <SitegroundWidget />
                  </div>
                  <br />
                  {/* Review Content Component */}
                  <SitegroundReview />

                  {/* Review Price Table Component */}
                  <SitegroundTabs />

                  {/* Review pro/cons */}
                  <SitegroundHostingSiteground />
                  <br />
                  <br />
                  {/* Accordion Component */}
                  <SitegroundAccordion />
                  <br />
                  <br />
                  {/* Review Footer Component */}
                  <SitegroundFoooter />
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
