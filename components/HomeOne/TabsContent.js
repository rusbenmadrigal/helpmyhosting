import React, { Component } from "react";

class TabsContent extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <section className="tab-section">
        <div className="container">
          <div className="section-title">
            <span>Hosting 2023</span>
            <h3>Mejor Hosting Por Categoría</h3>
          </div>

          <div className="tab boosting-list-tab">
            {/* Tabs Nav */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                <i className="flaticon-analysis-2"></i>
                <span>Top Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab2")}
                className="bg-eff7e9"
              >
                <i className="flaticon-hand"></i>
                <span>Hosting WordPress</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab3")}
                className="bg-fff8f0"
              >
                <i className="flaticon-digital-marketing"></i>
                <span>Hosting Ecommerce</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab4")}
                className="bg-ecfaf7"
              >
                <i className="flaticon-email"></i>
                <span>Hosting Blogging</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab5")}
                className="bg-f2f0fb"
              >
                <i className="flaticon-network"></i>
                <span>Cloud Hosting</span>
              </li>
              <li
                onClick={(e) => this.openTabSection(e, "tab6")}
                className="bg-c5ebf9"
              >
                <i className="flaticon-analysis-1"></i>
                <span>Hosting & Dominio</span>
              </li>
            </ul>

            <div className="tab_content">
              {/* Tabs Item 01 */}
              <div id="tab1" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Los 3 Mejores Hosting 2023</h2>
                      <p>
                        A continuación podrás encontrar los{" "}
                        <strong> en español</strong> categorizados por nuestros
                        expertos, estos servicios de web hosting son ideales
                        para quien está iniciando un proyecto, por ejemplo:{" "}
                        <strong>tiendas</strong>, <strong>blogs</strong>,{" "}
                        <strong>webs de viajes</strong>,{" "}
                        <strong>Startups</strong>, etc. Nuestros expertos han
                        tomado como referencia todas las necesidades que nos han
                        consternado nuestros usuarios, enfocándonos así en dar
                        prioridad a un hosting fácil de utilizar, con buen
                        precio, excelente rendimiento y servicio al cliente en
                        español.
                      </p>

                      <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/banahosting-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>BanaHosting</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>Almacenamineto Ilimitado</span>
                                  <span className="dot" />
                                  <span>
                                    E-mail Ilimitado
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>SSL Gratuito</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    BH1B
                                  </div>{" "}
                                  1 mes por $0.99.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $4.95/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/banahosting/"
                                    target="_blank"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/banahosting/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/raiola-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Raiola Network</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>5GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>10 Cuenta de correo</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>100GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>1 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    CAZAHOSTING
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $6.10/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/raiola/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/raiola/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/siteground-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>SieteGround</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>10GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 Cuenta de correo
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-danger text-white">
                                    pendiente
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $3.99/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/siteground/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/siteground/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/hostinger-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Hostinger</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>50GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 cuenta de E-mail
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>2 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    PREMIUM8
                                  </div>{" "}
                                  82% de descuento.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $1.39/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/hostinger/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/hostinger/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tab-shape">
                  <img src="/images/tab/one.svg" alt="image" />
                </div>
              </div>

              {/* Tabs Item 02 */}
              <div id="tab2" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Mejores Hosting WordPress 2023</h2>
                      <p>
                        WordPress es el gestor de contenidos (CMS) de código
                        abierto más famoso del mundo, alrededor de un 25% de las
                        web en el mundo están creadas con WordPress. Debido a su
                        facilidad de uso y opciones de diseño cada vez son más
                        las personas que optan por esta tecnología como una
                        solución para la creación de sitios web poco
                        medianamente complejos. Si bien WP no requiere más que
                        un hosting PHP y una base de datos MySQL, es importante
                        elegir un Hosting WordPress que mantenga actualizado el
                        sistema con la última versión de PHP además de una
                        excelente capacidad para gestionar las visitas de tu
                        web, de manera que, no se vaya a caer si tu web recibe
                        1000 visitas por día. Es por ello que nuestros expertos
                        han generado una lista con los mejores{" "}
                        <strong>hostings WordPress</strong>, la cual puedes
                        encontrar a continuación.
                      </p>

                      <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/banahosting-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>BanaHosting</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>Almacenamineto Ilimitado</span>
                                  <span className="dot" />
                                  <span>
                                    E-mail Ilimitado
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>SSL Gratuito</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    BH1B
                                  </div>{" "}
                                  1 mes por $0.99.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $4.95/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/banahosting/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/banahosting/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/raiola-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Raiola Network</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>5GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>10 Cuenta de correo</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>100GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>1 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    CAZAHOSTING
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $6.10/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/raiola/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/raiola/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/siteground-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>SieteGround</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>10GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 Cuenta de correo
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-danger text-white">
                                    pendiente
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $3.99/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/siteground/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/hostinger-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Hostinger</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>50GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 cuenta de E-mail
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>2 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    PREMIUM8
                                  </div>{" "}
                                  82% de descuento.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $1.39/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/hostinger/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tab-shape">
                  <img src="/images/tab/wordpress.png" alt="image" />
                </div>
              </div>

              {/* Tabs Item 03 */}
              <div id="tab3" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Mejores Hosting E-commerce 2023</h2>
                      <p>
                        Si usted busca un hosting eCommerce debe tener en cuenta
                        que dicho servicio de alojamiento web debe ser
                        compatible el CMS que usted vaya a utilizar, por lo
                        general los CMS más utilizados son: PrestaShop y
                        WordPress con el plug-in de WooCommerce. Tal como
                        recomendamos en todas nuestras reseñas, el servicio al
                        cliente y la efectividad que este provea es uno de los
                        factores más importante al momento de elegir un servicio
                        de hosting para tienda online, por esa razón nuestros
                        expertos hacer diferentes pruebas para comprobar la
                        velocidad y efectividad del equipo de soporte técnico.
                      </p>
                      <br></br>
                      <p>
                        Al crear una tienda en línea, es valioso saber que usted
                        va a comprar un hosting el cual pueda soportar al menos
                        1000 visitas simultáneas, ya que en un principio tu
                        sitio web quizás no tenga muchas visitas, pero si
                        aplicas una buena estrategia de marketing las visitas
                        irán llegando poco a poco, esto es genial, pero a la vez
                        representa un desafío para el hosting, el cual deberá
                        garantizar la estabilidad de la web. Es por ello que a
                        continuación le mostramos una lista de los mejores
                        hostings para eCommerce elegida por nuestros expertos en
                        hosting.{" "}
                      </p>

                      <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/banahosting-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>BanaHosting</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>Almacenamineto Ilimitado</span>
                                  <span className="dot" />
                                  <span>
                                    E-mail Ilimitado
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>SSL Gratuito</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    BH1B
                                  </div>{" "}
                                  1 mes por $0.99.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $4.95/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/banahosting/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/banahosting/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/raiola-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Raiola Network</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>5GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>10 Cuenta de correo</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>100GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>1 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    CAZAHOSTING
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $6.10/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/raiola/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/raiola/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/siteground-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>SieteGround</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>10GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 Cuenta de correo
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-danger text-white">
                                    pendiente
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $3.99/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/siteground/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/hostinger-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Hostinger</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>50GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 cuenta de E-mail
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>2 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    PREMIUM8
                                  </div>{" "}
                                  82% de descuento.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $1.39/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/hostinger/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tab-shape">
                  <img src="/images/tab/magento.svg" alt="image" />
                </div>
              </div>

              {/* Tabs Item 04 */}
              <div id="tab4" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Mejores Hosting Blogging 2023</h2>
                      <p>
                        La creación de contenidos mediante un blog es una de las
                        mejores maneras de dar a conocer tu negocio, hoy en día
                        hay cientos de Startups que han nacido como un blog, por
                        ejemplo: La web de recetasgratis.net la cual tiene un
                        tráfico orgánico mensual estimado de 6 Millones de
                        visitas. Un buen hosting es imprescindible para el éxito
                        de una web que, con el paso del tiempo incrementa el
                        volumen de su tráfico. Nuestros expertos han
                        categorizado y listado los mejores{" "}
                        <strong>Hostings para Blogging</strong> en la siguiente
                        lista.
                      </p>

                      <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/banahosting-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>BanaHosting</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>Almacenamineto Ilimitado</span>
                                  <span className="dot" />
                                  <span>
                                    E-mail Ilimitado
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>SSL Gratuito</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    BH1B
                                  </div>{" "}
                                  1 mes por $0.99.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $4.95/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/banahosting/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/banahosting/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/raiola-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Raiola Network</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>5GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>10 Cuenta de correo</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>100GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>1 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    CAZAHOSTING
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $6.10/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/raiola/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/raiola/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/siteground-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>SieteGround</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>10GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 Cuenta de correo
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-danger text-white">
                                    pendiente
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $3.99/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/siteground/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/hostinger-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Hostinger</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>50GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 cuenta de E-mail
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>2 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    PREMIUM8
                                  </div>{" "}
                                  82% de descuento.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $1.39/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/hostinger/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tab-shape">
                  <img src="/images/tab/blogging.svg" alt="image" />
                </div>
              </div>

              {/* Tabs Item 05 */}
              <div id="tab5" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Mejores Cloud Hostings 2023</h2>
                      <p>
                        Se conoce como <strong>Cloud Hosting</strong> o{" "}
                        <strong>Servidor en la nube</strong>, al alojamiento web
                        que utiliza múltiples servidores para lograr equilibrar
                        la carga y de esta manera maximizar el tiempo de
                        disponibilidad. De esta manera y en palabras fáciles, el
                        lugar de emplear un único servidor, se emplean varios
                        para que, en caso de que uno de los servidores fallen
                        este se pueda delegar a otro para que tu sitio web no
                        sufra una caída. Otra de las ventajas del Cloud Hosting
                        es que, tu sitio web obtiene una IP dedicada, esto es
                        recomendado en temas de SEO para evitar que tu web
                        comparta dirección IP con otras webs que podrían estar
                        siendo empleadas para SPAM.
                      </p>

                      <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/banahosting-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>BanaHosting</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>Almacenamineto Ilimitado</span>
                                  <span className="dot" />
                                  <span>
                                    E-mail Ilimitado
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>SSL Gratuito</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    BH1B
                                  </div>{" "}
                                  1 mes por $0.99.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $4.95/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/banahosting/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/banahosting/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/raiola-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Raiola Network</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>5GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>10 Cuenta de correo</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>100GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>1 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    CAZAHOSTING
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $6.10/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/raiola/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/raiola/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/siteground-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>SieteGround</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>10GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 Cuenta de correo
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-danger text-white">
                                    pendiente
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $3.99/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/siteground/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/hostinger-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Hostinger</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>50GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 cuenta de E-mail
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>2 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    PREMIUM8
                                  </div>{" "}
                                  82% de descuento.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $1.39/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/hostinger/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tab-shape">
                  <img src="/images/tab/cloud.svg" alt="image" />
                </div>
              </div>

              {/* Tabs Item 06 */}
              <div id="tab6" className="tabs_item">
                <div className="row align-items-center">
                  <div className="container"></div>
                  <div className="container">
                    <div className="content">
                      <h2>Mejores Hosting con Dominio 2023</h2>
                      <p>
                        Por lo general las personas compran el dominio con un
                        proveedor y el hosting con otro, esto podría ser bueno
                        si tenemos experiencia configurando DNS, sin embargo,
                        para alguien quien esté iniciando lo más recomendable es
                        que compre el dominio en donde está comprando el
                        hosting, de esta manera todo estará configurado de
                        manera automática. Por otra parte, es de vital
                        importancia que el servicio de hosting te permita hacer
                        una migración de dominio fácil y rápida en caso de que
                        decidas moverte a otro proveedor de hosting, es por ello
                        que nuestros expertos han creado la siguiente lista con
                        las mejores opciones de hosting con dominio.
                      </p>

                      <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                          <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/banahosting-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>BanaHosting</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>Almacenamineto Ilimitado</span>
                                  <span className="dot" />
                                  <span>
                                    E-mail Ilimitado
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>SSL Gratuito</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    BH1B
                                  </div>{" "}
                                  1 mes por $0.99.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $4.95/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/banahosting/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/banahosting/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded single-features-item-featured">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/raiola-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Raiola Network</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>5GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>10 Cuenta de correo</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>100GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>1 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    CAZAHOSTING
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $6.10/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/raiola/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/raiola/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/siteground-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>SieteGround</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>10GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 Cuenta de correo
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>MySQL Ilimitada</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-danger text-white">
                                    pendiente
                                  </div>{" "}
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $3.99/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/siteground/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2 single-features-item bg-f1eff8">
                              <div className="col-md-3 mt-1">
                                <img
                                  className="img-fluid img-responsive rounded product-image"
                                  src="/images/hostinger-lg.svg"
                                />
                              </div>
                              <div className="col-md-6 mt-1">
                                <h5>Hostinger</h5>
                                <div className="d-flex flex-row">
                                  <div className="ratings mr-2">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>1 Sitio web</span>
                                  <span className="dot" />
                                  <span>50GB Almacenamineto</span>
                                  <span className="dot" />
                                  <span>
                                    1 cuenta de E-mail
                                    <br />
                                  </span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                  <span>50GB Ancho de banda</span>
                                  <span className="dot" />
                                  <span>2 MYSQL</span>
                                  <span className="dot" />
                                  <span>
                                    Soporte en español
                                    <br />
                                  </span>
                                </div>
                                <br />
                                <p className="text-justify text-truncate para mb-0">
                                  CUPON:{" "}
                                  <div className="d-inline p-2 bg-success text-white">
                                    PREMIUM8
                                  </div>{" "}
                                  82% de descuento.
                                  <br />
                                </p>
                              </div>
                              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                  <h4 className="mr-1">Desde $1.39/mes</h4>
                                  {/*<span className="strike-text">$20.99</span>*/}
                                </div>
                                <h6 className="text-success">
                                  Servicio Básico
                                </h6>
                                <div className="d-flex flex-column mt-4">
                                  <a
                                    href="/out/hostinger/"
                                    className="btn btn-warning btn-sm"
                                    role="button"
                                  >
                                    Comprar Hosting
                                  </a>
                                  <a
                                    href="/mejor-hosting/hostinger/"
                                    className="btn btn-outline-white btn-sm mt-2"
                                    role="button"
                                  >
                                    Leer Reseña
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="tab-shape">
                  <img src="/images/tab/domain.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TabsContent;
