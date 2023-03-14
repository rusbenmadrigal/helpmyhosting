import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>Tendencia</span>
                <h3>Tu hosting. Tu negocio.</h3>
                <strong>
                  El número de usuarios que utilizan internet es cada día mayor.
                  Con ello surge la necesidad de ofrecer de manera ágil y rápida
                  productos tangibles y digitales, por lo que cada año hay más
                  negocios en internet en los que el servicio de alojamiento web
                  o web hosting es una de los primeros pasos que deben dar los
                  dueños de negocio al crear su proyecto, al menos en el sector
                  de la tecnología.
                </strong>
                <p>
                  Con base en estadísticas del 2021. En todo el mundo hay unos
                  472 millones de emprendedores. Estadísticamente, se generan
                  unos 305 millones de startups al año. De ellas, 1,35 millones
                  de empresas están relacionadas con la tecnología. Es por ello
                  que, la misión de HelpMyHosting.com se enfoca en su primera
                  etapa en, ayudar a todos los emprendedores de habla hispana a
                  elegir un hosting de calidad y con un precio accesible para
                  que así puedan iniciar su proyecto web, además brindarle guías
                  gratuitas sobre cómo sacar el máximo proyecto a sus sitios web
                  al momento de la creación y durante el proceso de "inicio de
                  visibilidad" en internet.
                </p>
                <p>
                  Sabemos que muchos de los emprendedores en el área tecnología
                  (al menos en LATAM) inician creando por ellos mismos(as) un
                  sitio web, por lo que en la mayoría de los casos no se cuenta
                  con la experiencia suficiente para desarrollar el proceso de
                  elección de un hosting que vaya a cumplir sus expectativas, ya
                  que no es lo mismo elegir un buen hosting para una tienda
                  online que para una web de noticias.
                </p>
                <p>
                  HelpMyHosting.com cuenta con la experiencia de especialistas
                  en el sector de TI y Marketing los cuales le brindarán
                  recomendaciones profesionales en cada uno de los servicios
                  hostings que promocionamos. Nuestros expertos también le
                  brindan asesoría gratuita sobre temas de SEO, diseño y
                  marketing digital, contenido que se comparte en nuestro canal
                  oficial de YouTube.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
