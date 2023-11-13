import React, { Component } from "react";
import Link from "next/link";

class WhyChooseUs extends Component {
  render() {
    return (
      <section className="choose-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-area">
                <span>Nuestra Misión</span>
                <h3>Elegir el Mejor Hosting 2024</h3>
                <p>
                  Nuestra misión es lograr que usted pueda comprar el mejor
                  hosting, nosotros hacemos el trabajo complicado de
                  investigación para que usted pueda tener los datos de manera
                  imparcial y precisa. Además, nuestros expertos están
                  constantemente publicando guías paso a paso sobre como
                  resolver problemas con tu sitio web.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Agregamos guías paso a paso</h4>
                  <p>
                    Durante el 2024 estaremos agregando guías paso a paso para
                    que puedas sacarle el máximo provecho a tu hosting así como
                    aprender a mejorar el SEO de tu proyecto.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Soporte a nuestros lectores</h4>
                  <p>
                    Hemos habilitado una sección en donde todos nuestros
                    lectores pueden acceder a soporte cuando tengan consultas
                    sobre que tipo de hosting comprar, nuestro soporte es
                    totalmente gratuito.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Clases gratuitas en YouTube</h4>
                  <p>
                    Hemos abierto un canal de YouTube en donde constantemente
                    estamos subiendo guías y entrevistas relacionadas con
                    hosting, emprendimiento y como poder sacar el máximo
                    provecho al hosting que adquieras.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="https://www.youtube.com/channel/UC0Dvho5hJKEniUoXcrz98ZA">
                    <a className="default-btn-one">Nuestro Canal en YouTube</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <img src="/images/choose-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
