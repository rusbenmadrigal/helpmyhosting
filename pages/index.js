import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import FeaturesContent from "../components/HomeOne/FeaturesContent";
import AboutContent from "../components/HomeOne/AboutContent";
import ServicesContent from "../components/Common/ServicesContent";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import TabsContent from "../components/HomeOne/TabsContent";
import PartnerLogos from "../components/HomeOne/PartnerLogos";
import SubscribeStyleOne from "../components/Common/SubscribeStyleOne";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import Mentions from "../components/Common/Mentions";

class Index extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            Comparador Hosting Web por Expertos 2024 | Cuál es el mejor?
          </title>
          <meta
            name="description"
            content="Comparador Hosting Web creado por Expertos. Somos tu primera opción para decidir cuál hosting comprar para tu proyecto. Reseñas y guías gratis."
          />
          <link rel="canonical" href="https://helpmyhosting.com/" />
        </Head>

        <Navbar />

        <MainBanner />

        <Mentions />

        <FeaturesContent />

        <div className="pb-100">
          <TabsContent />
        </div>

        <ServicesContent />

        <WhyChooseUs />

        {/*<TeamCard />*/}

        {/*<TestimonialSection />*/}

        {/* <AnalysisFormContent />*/}

        {/* <BlogCardSection />*/}

        <div className="pb-100">
          <PartnerLogos />
        </div>
        <div className="pb-100">
          <AboutContent />
        </div>

        <SubscribeStyleOne />

        <Footer />
      </>
    );
  }
}

export default Index;
