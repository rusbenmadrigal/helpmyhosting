import React, { Component } from "react";
import { NextSeo } from "next-seo";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import BlogCardContent from "../../components/Blog/BlogCardContent";
import Footer from "../../components/Layouts/Footer";

class Blog extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Tutoriales web hosting paso a paso 2023 | HelpMyHosting"
          description="Aprende como sacar el máximo provecho a tu hosting con nuestros tutoriales creados por expertos. Muchos proyectos de ejemplo aquí."
          canonical="https://helpmyhosting.com/tutoriales/"
        />

        <NavbarTwo />

        <PageBanner
          pageTitle="Nuestros Tutoriales"
          breadcrumbTextOne="Inicio"
          breadcrumbTextTwo="Tutoriales"
          breadcrumbUrl="/"
        />

        <BlogCardContent />

        <Footer />
      </>
    );
  }
}

export default Blog;
