import React, { Component } from "react";
import Link from "next/link";

class Error extends Component {
  render() {
    return (
      <section className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="/images/404.png" alt="error" />

                <h3>Ups.... aquí no hay nada.</h3>
                <p>
                  Esta página no existe o fue eliminada, si crees que hay un
                  error puedes contactar nuestro equipo help@helpmyhosting.com
                </p>

                <Link href="/mejor-hosting/">
                  <a className="default-btn-one">Mejores Hosting</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Error;
