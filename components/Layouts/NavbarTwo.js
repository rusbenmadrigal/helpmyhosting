import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import SidebarModal from "./SidebarModal";

class NavbarTwo extends Component {
  // Sidebar Modal
  state = {
    sidebarModal: false,
  };
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    });
  };

  // Search Form
  state = {
    searchForm: false,
  };
  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area navbar-two">
          <div className="neemo-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.png" alt="HelpMyHosting" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Inicio</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/mejor-hosting" activeClassName="active">
                        <a className="nav-link">Mejores Hosting</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/mejor-hosting/">
                        {/*
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Services <i className="fa fa-plus"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/services" activeClassName="active">
                            <a className="nav-link">Services</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/single-service" activeClassName="active">
                            <a className="nav-link">Service Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Projects <i className="fa fa-plus"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/projects" activeClassName="active">
                            <a className="nav-link">Projects</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/projects-two" activeClassName="active">
                            <a className="nav-link">Projects Two</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/single-project" activeClassName="active">
                            <a className="nav-link">Project Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/#">
                        */}
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Recursos <i className="fa fa-plus"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/tutoriales/" activeClassName="active">
                            <a className="nav-link">Guías paso a paso</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/contacto/" activeClassName="active">
                        <a className="nav-link">Contacto</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Sidebar Modal */}
        <SidebarModal
          onClick={this.toggleModal}
          active={this.state.sidebarModal ? "active" : ""}
        />
      </>
    );
  }
}

export default NavbarTwo;
