import React, { Component } from 'react';
import Link from 'next/link';

class ServicesContent extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Ranking</span>
                        <h3>Así categorizamos un Hosting</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-faddd4">
                                    <i className="flaticon-landing-page"></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Excelente Soporte 24/7</a>
                                    </Link>
                                </h3>
                                <p>Uno de los primeros aspectos que tenemos en cuenta al calificar un hosting es, el servicio al cliente. Es super importante que haya una respuesta pronta y efectiva.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-cafbf1">
                                    <i className="flaticon-goal"></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Hosting de alta velocidad</a>
                                    </Link>
                                </h3>
                                <p>Luego de que Google enfatizara la importancia de la velocidad de un sitio web, ya que es parte el Core Vitals, un hosting con una alta velocidad es obligatorio y nuestros expertos lo toman en cuenta.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ddd5fb">
                                    <i className="flaticon-contract"></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Hosting 99.9% Uptime</a>
                                    </Link>
                                </h3>
                                <p>Además de un hosting rápido, nuestros expertos realizan pruebas constantes a la estabilidad del hosting esto permite que tu sitio web pueda estar accesible a usuarios y Google en todo momento.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-fcdeee">
                                    <i className="flaticon-application"></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Cpanel Hosting</a>
                                    </Link>
                                </h3>
                                <p>Es muy importante que el servicio de hosting contratado ofrezca un Cpanel, de esta manera a usted le será más sencillo realizar configuraciones, como por ejemplo: agregar correo, SSL y bases de datos MYSQL.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c5ebf9">
                                    <i className="flaticon-seo"></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>One Click Install</a>
                                    </Link>
                                </h3>
                                <p>Esta es una herramienta la cual permite que usted como usuario pueda hacer instalaciones rápidas, por ejemplo:  Instalar WordPress, Joomla o cualquier otro CMS con tan solo un par de clics, sin necesidad de crear bases de datos u otras configuraciones.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5">
                                    <i className="flaticon-data-recovery"></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Certificado SSL</a>
                                    </Link>
                                </h3>
                                <p>Es de vital importancia que, el servicio de hosting a contratar ofrezca de manera gratuita un certificado de seguridad SSL (el candado verde) de esta manera tu sitio web estará seguro y transmite mayor seguridad a tus usuarios.</p>
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
            </section>
        );
    }
}

export default ServicesContent;