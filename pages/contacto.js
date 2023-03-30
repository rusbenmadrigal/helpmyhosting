import React, { Component } from 'react';
import { NextSeo } from "next-seo";
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleOne';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
            <NextSeo
          title="Contactar con expertos Hosting | HelpMyHosting"
          description="Puedes contactar con nuestros expertos en servicio hosting y creación de webs. Nuestro soporte es totalmente gratuito, respondemos en 24 horas o menos."
          canonical="https://helpmyhosting.com/contacto/"
        />
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Contáctenos" 
                    breadcrumbTextOne="Inicio" 
                    breadcrumbTextTwo="Contacto" 
                    breadcrumbUrl="/" 
                />

                <ContactForm />

                <SubscribeStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Contact;