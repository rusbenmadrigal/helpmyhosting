import React, { Component } from "react";
import Link from "next/link";

class BlogCardSection extends Component {
  render() {
    return (
      <section className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Tutoriales</span>
            <h3>Nuestras guías paso a paso</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <Link href="/tutoriales/que-es-hosting/">
                    <a>
                      <img src="/images/blog/1.png" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="single-blog-item">
                  <ul className="date">
                    <li>10</li>
                    <li>Enero</li>
                  </ul>

                  <ul className="blog-list">
                    <li>
                      <Link href="/tutoriales/que-es-hosting/">
                        <a>
                          <i className="fa fa-user-alt"></i> Por Russ
                        </a>
                      </Link>
                    </li>
                    <li></li>
                  </ul>

                  <div className="blog-content">
                    <Link href="/tutoriales/que-es-hosting/">
                      <a>
                        <h3>¿Qué es y para qué sirve un hosting web?</h3>
                      </a>
                    </Link>
                    <p>
                      En palabras simples el hosting o alojamiento web es un
                      lugar en internet donde usted puede subir los archivos que
                      conforman tu sitio web para que este pueda ser accedido
                      por los motores de búsqueda como Google.
                    </p>
                  </div>

                  <div className="blog-btn">
                    <Link href="/tutoriales/que-es-hosting/">
                      <a className="blog-btn-one">Leer Artículo</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/*
                            <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="/single-blog">
                                        <a>
                                            <img src="/images/blog/2.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>03</li>
                                        <li>January</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="/blog">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="/single-blog">
                                            <a>
                                                <h3>How To Boost Your Digital Marketing Agency</h3>
                                            </a>
                                        </Link>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="/single-blog">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="/single-blog">
                                        <a>
                                            <img src="/images/blog/3.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>03</li>
                                        <li>January</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="/blog">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="/single-blog">
                                            <a>
                                                <h3>Creative solutions to improve your business!</h3>
                                            </a>
                                        </Link>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="/single-blog">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>
                  
                        */}
          </div>
        </div>
      </section>
    );
  }
}

export default BlogCardSection;
