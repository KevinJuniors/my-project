import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation"></a>
          <a className="mobile-btn" href="#home" title="Hide navigation"></a>

          <div className="topmenu">
            <div className="logowrap">
              <h1 className="textlogo">coffee Maps</h1>
            </div>

            <ul id="nav" className="nav">
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
          </div>
        </nav>

        <img src="images/coffee-banner3.png" alt="커피 배너이미지" />

        <div className="row banner">
          <div className="banner-text">
            <h2 className="textitem">
              지친 몸 가까운 카페를 찾아 커피 한잔으로 활력을 
            <br /> 
             재충전 해보세요 !!
            </h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;