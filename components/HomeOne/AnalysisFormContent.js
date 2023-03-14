import React, { Component } from 'react';

class AnalysisFormContent extends Component {
    render() {
        return (
            <section className="analysis-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-image">
                                <img src="/images/analysis-image.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-area-content">
                                <span>Preguntas</span>
                                <h3>¿Tienes una consulta?</h3>
                                <p>Si tienes una consulta sobre que hosting comprar puedes contactarnos mediante el siguiente formulario, responderemos en 24 horas o menos.</p>
                            </div>

                            <form className="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Nombre*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="text" id="text" className="form-control" placeholder="Email *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="phone" className="form-control" placeholder="WhatsApp (opcional)" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="website" className="form-control" placeholder="Tu sitio web (opcional)" />
                                        </div>
                                    </div>
                                </div>

                                <div className="send-btn">
                                    <button type="submit" className="default-btn-one">Enviar Consulta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AnalysisFormContent;