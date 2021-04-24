import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <div className="topmenu">
            <div className="menu"></div>
            <h1 className="textlogo">coffee Maps</h1>

            <ul id="nav" className="nav">
              <li className="current" id="first">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              
              <li id="second">
                <a className="smoothscroll" href="#about">
                  info
                </a>
              </li>

              <li id="third">
                <a className="smoothscroll" href="#resume">
                  maps
                </a>
              </li>

              <li id="fourth">
                <a className="smoothscroll" href="#portfolio">
                  skills
                </a>
              </li>
              
              <li id="fifth">
                <a className="smoothscroll" href="#contact">
                  note
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h2 className="textlogo">Coffee Maps Webapp 방문을 환영합니다.</h2>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
