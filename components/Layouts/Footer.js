import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-section pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-area">
                  <div className="footer-heading">
                    <h3>Nosotros</h3>
                  </div>

                  <p>
                    En HMH la misión principal el proveer la referencia del
                    mejor servicio de hosting acorde al proyecto que usted vaya
                    a iniciar. Además, aportar información educativa sobre
                    creación de proyectos online.
                  </p>

                  <ul className="footer-social">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/helpmyhostingcom/"
                        target="_blank"
                        className="bg-3955bc"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UC0Dvho5hJKEniUoXcrz98ZA"
                        target="_blank"
                        className="bg-1da1f2"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/helpmyhosting"
                        target="_blank"
                        className="bg-004dff"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/helpmyhosting/"
                        target="_blank"
                        className="bg-0273af"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item-area">
                  <div className="footer-heading">
                    <h3>La Startup</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/acerca/">
                        <a>Acerca</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies/">
                        <a>Cookies</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/politicas/">
                        <a>Políticas</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/verde/">
                        <a>Huella verde</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacto/">
                        <a>Contáctenos</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item-area">
                  <div className="footer-heading">
                    <h3>Servicios</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/mejor-hosting/">
                        <a>Mejores Hosting</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mejor-hosting/wordpress/">
                        <a>Hosting WordPress</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mejor-hosting/cpanel/">
                        <a>Cpanel Hosting</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mejor-hosting/ssl/">
                        <a>Hosting con SSL</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mejor-hosting/veloz/">
                        <a>Hosting Veloz</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mejor-hosting/costa-rica/">
                        <a>Hosting CR 🇨🇷</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mejor-hosting/chile/">
                        <a>Hosting CL 🇨🇱</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="mb-30">
                  <div className="footer-heading">
                    <h3>Contacto</h3>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-call-answer"></i>
                    <h3>WatsApp</h3>
                    <span>(+506) 8845 8989</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>info@helpmyhosting.com</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-placeholder-filled-point"></i>
                    <h3>Dirección</h3>
                    <span>San Jose, 20201, Costa Rica.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="default-animation">
            <div className="shape-img1">
              <img src="/images/shape/12.svg" alt="image" />
            </div>
            <div className="shape-img2">
              <img src="/images/shape/13.svg" alt="image" />
            </div>
            <div className="shape-img3">
              <img src="/images/shape/14.png" alt="image" />
            </div>
            <div className="shape-img4">
              <img src="/images/shape/15.png" alt="image" />
            </div>
            <div className="shape-img5">
              <img src="/images/shape/2.png" alt="image" />
            </div>
          </div>
        </footer>

        {/* Copyright footer */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p>
                  © {currentYear} RankingIn SRL. Todos los derechos reservados{" "}
                  <a href="#" target="_blank"></a>
                </p>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <Link href="/politicas/">
                      <a>Términos y condiciones</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies/">
                      <a>Cookies</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
