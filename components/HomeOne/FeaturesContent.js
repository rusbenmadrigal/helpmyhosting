import React, { Component } from 'react';
import Link from 'next/link';

class FeaturesContent extends Component {
    render() {
        return (
            <section className="features-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-content-area">
                                <h3>Expertos Hosting</h3>
                                <span>Alojamiento Web</span>
                                <p>Un buen servicio de hosting es esencial para que un sitio web pueda funcionar de manera óptima,  en muchas ocasiones se deja de último este aspecto y se piensa que "con que la web se vea bonita" es suficiente, lo cual es un fallo que puede repercutir seriamente en el éxito de un sitio web.</p>
                                <br/>
                                <p>Nuestros expertos hacen constantes análisis de los mejores hosting web ya sea para WordPress o bien para cualquier otro CMS,  de manera que usted pueda comprar un hosting que realmente se adapte a sus necesidades y que además de un buen precio, cumpla con altos estándares de rendimiento.</p>
                                <br/>
                                <p>En la sección de abajo, hemos listado algunos de los mejores hosting web para el 2024, algunos de los principales aspectos que debe tener un buen hosting son: 99.99 Uptime,  velocidad y un excelente servicio al cliente, tenga en cuenta que, es mejor tomarse unos minutos para analizar las opciones de nuestros expertos en hosting que, comprar un hosting sin previa recomendación, puede traerle dolores de cabeza y gastos innecesarios.</p>

                                <div className="features-btn">
                                    <Link href="/mejor-hosting/">
                                        <a className="features-btn-one">Mejor Hosting 2024</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f1eff8">
                                        <div className="icon">
                                            <i className="flaticon-seo"></i>
                                        </div>
                                        <h3>Primer paso</h3>
                                        <p>Lo primero es dar un vistazo a las recomendaciones que te harán nuestros expertos en hosting web, hemos creado una lista de los mejores hosting para cualquier tipo de proyecto.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-fbe6d4">
                                        <div className="icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <h3>Segundo paso</h3>
                                        <p>Lee las reseñas que han creado nuestros expertos, te ayudaran a entender mejor las ventajas ce cada Hosting. Nuestro contenido es originado con base a experiencias 100% reales.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f0fffc">
                                        <div className="icon">
                                            <i className="flaticon-laptop"></i>
                                        </div>
                                        <h3>Tercer paso</h3>
                                        <p>Una vez haya decidido cuál hosting es el mejor para su proyecto, puede proceder a comprarlo con seguridad. Recuerda que, siempre que compres mediante nosotros te llevarás un descuento.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f8e1eb">
                                        <div className="icon">
                                            <i className="flaticon-analysis-1"></i>
                                        </div>
                                        <h3>Contactar expertos</h3>
                                        <p>Si usted tiene una duda sobre que tipo de hosting comprar, puede contactarnos de manera gratuita, respondemos en menos de 24 horas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="features-animation">
                    <div className="shape-img1">
                        <img src="/images/shape/8.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/5.png" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;