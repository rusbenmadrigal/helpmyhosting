import React, { Component } from "react";

class RaiolaReview extends Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="projects-details-desc">
          <h2>Opinión Experta Raiola Networks</h2>

          <p>
            Fundado en 2014 Raiola Networks es un servicio de hosting en español
            que goza de muy buena reputación, principalmente en el mercado de
            España. He tenido la oportunidad de utilizar el servicio de Raiola
            Networks en proyectos de E-commerce pequeños y ha funcionado de
            maravilla, sus servidores están fuertemente optimizados para el CMS
            WordPress por lo que si usted va a crear un sitio web tipo blog,
            E-commerce o comunidad basada en WP, Raiola es una buena opción, sin
            embargo, el precio es un tanto más elevado que{" "}
            <a href="https://helpmyhosting.com/mejor-hosting/banahosting/">
              Banahosting
            </a>
          </p>
          <p>
            Actualmente, Raiola Networks ofrece el servicio de Hosting
            Compartido, Hosting Dedicado, Servidores y Hosting WordPress, todos
            con muy buena calidad técnica y de servicio al cliente, sin embargo,
            todos los precios son en euros esto, ya que su público principal es
            el cliente español. Aunque si usted se encuentra en USA o LATAM
            también puede ser una excelente opción de hosting, el único
            “obstáculo” será la conversión de euros a dólares o a su moneda
            local, lo cual siempre va a representar un mayor gasto en la
            facturación mensual de su hosting web.
          </p>

          <div className="features-text">
            <h4>
              <i className="flaticon-check-mark"></i> Lo que me encanta de
              Raiola Networks
            </h4>
            <p>
              Son muchos los aspectos que me gustan de Raiola, en lo personal
              creo que son unas de las pocas empresas de hosting en español que
              mantienen un estilo “Boutique” es decir; todos es muy “artesanal”
              te atienden de buena manera, muy dedicada. Lo cual no se ve en
              grandes vendedores de Hosting tales como Hostinger u Hostgator,
              los cuales al tener un gran volumen de clientes, pierde ese valor
              de atención cl cliente.
            </p>
            <p>
              Además, ofrecen un excelente servicio de hosting WordPress,
              constantemente están participando en eventos de optimización de
              carga de sitios web donde Álvaro Fontela (fundador) comparte
              información muy valiosa en temas de WordPress. Si tu web está
              enfocada en el mercado español, Raiola es uno de los servicios de
              hosting más indicados para tu negocio.
            </p>
          </div>
          <div className="features-text">
            <h4>
              <i className="fa fa-exclamation-circle"></i> Lo que no me gusta de
              Raiola Networks
            </h4>
            <p>
              Son pocas las cosas que no me gustan de Raiola Networks, pero las
              hay. Quizás lo que menos me gusta es la manera de cobro, es decir;
              que no haya la opción de pasar los precios a dólares, para
              clientes de LATAM tener que hacer el cambio de moneda local a
              euros hace que el hosting sea más caro cada año, tener el precio
              en euros exclusivamente quizás se deba a que el mercado principal
              de Raiola no está en LATAM sino en España.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RaiolaReview;
