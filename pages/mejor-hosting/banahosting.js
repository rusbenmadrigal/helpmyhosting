import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BanahostingCta from "../../components/Cta/BanahostingCta";
import BanahostingFoooter from "../../components/Footer/BanahostingFooter";
import BanahostingReview from "../../components/ReviewContent/BanahostingReview";
import BanahostingTabs from "../../components/ReviewTabs/Banahosting-Tabs";
import BanahostingAccordion from "../../components/Accordion/BanahostingAccordion";
import BanahostingWidget from "../../components/Widgets/BanahostingWidget";
import BanaHostingProsCons from "../../components/ReviewProCons/BanahostingProsCons";

class SingleProject extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="BanaHosting Opiniones de Expertos y Usuarios 2023 | HelpMyHosting"
          description="Opiniones de Expertos y Usuarios sobre BanaHosting 2023. Descubre en que casos y para que tipos de sitios web es recomendable utilizar BanaHosting."
          canonical="https://helpmyhosting.com/mejor-hosting/banahosting/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="Opiniones de Expertos y Usuarios sobre BanaHosting 2023"
          breadcrumbTextTwo="Actualizado el: 28 de junio de 2023"
          breadcrumbUrl="/"
        />
        <section className="projPect-details-area ptb-100">
          {/* Review CTA Component */}
          <BanahostingCta />

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-3">
                <div className="project-details-image"></div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="projects-details-desc">
                  <div className="container">
                    {/* Review 3rd party comments */}
                    <BanahostingWidget />
                  </div>
                  <br />
                  {/* Review Content Component */}
                  <BanahostingReview />
                  <br />

                  {/* Review Price Table Component */}
                  <BanahostingTabs />

                  {/* Review pro/cons */}
                  <BanaHostingProsCons />

                  {/* Review Accordion */}
                  <br />
                  <br />
                  <BanahostingAccordion />
                  {/* Review Footer Component */}
                  <br />
                  <br />
                  <BanahostingFoooter />
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
