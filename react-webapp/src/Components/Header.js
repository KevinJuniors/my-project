import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    // const github = this.props.data.github;
    // const name = this.props.data.name;
    const description = this.props.data.description;

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

          <ul id="nav" className="nav">
            <li className="toplogo">
              <p className="text">coffee Maps</p>
            </li>

            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#about">
                info
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                maps
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                skills
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#contact">
                note
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="textlogo">Coffee Maps</h1>
            {/* <h3>{description}.</h3> */}
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
