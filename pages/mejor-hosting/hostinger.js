import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import HostingerCta from "../../components/Cta/HostingerCta";
import HostingerReview from "../../components/ReviewContent/HostingerReview";
import HostingerTabs from "../../components/ReviewTabs/Hostinger-Tabs";
import HostingerFoooter from "../../components/Footer/HostingerFooter";
import HostingerWidget from "../../components/Widgets/HostingerWidget";
import HostingerAccordion from "../../components/Accordion/HostingerAccordion";
import HostingerProsCons from "../../components/ReviewProCons/HostingerProsCons";

class SingleProject extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Opiniones de Expertos y Usuarios sobre HostingGer 2023 | HelpMyHosting"
          description="Opiniones de Expertos y Usuarios sobre HostingGer 2023. Descubre en que casos y para que tipos de sitios web es recomendable utilizar HostingGer."
          canonical="https://helpmyhosting.com/mejor-hosting/hostinger/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="Opiniones de Expertos y Usuarios sobre HostingGer 2023"
          breadcrumbTextTwo="Actualizado: octubre de 2023"
          breadcrumbUrl="/"
        />
        <section className="projPect-details-area ptb-100">
          {/* Review CTA Component */}
          <HostingerCta />

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-3">
                <div className="project-details-image"></div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="projects-details-desc">
                  <div className="container">
                    {/* Review 3rd party comments */}
                    <HostingerWidget />
                  </div>
                  <br />
                  {/* Review Content Component */}
                  <HostingerReview />

                  {/* Review Price Table Component */}
                  <HostingerTabs />

                   {/* Review pro/cons */}
                   <HostingerProsCons />

                  <HostingerAccordion />

                  {/* Review Footer Component */}
                  <HostingerFoooter />
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
