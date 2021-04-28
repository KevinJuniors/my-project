import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">

        <div className="infoWrap">
          <div className="row row-cols-lg-3" id="firstwrap">
            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>사용자 친화적인 UI</h2>
                </div>

                <div className="card-body">
                  <p>
                    React를 활용하여 사용자 친화적인 <br /> 
                    UI 구현
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>CSS를 활용한 웹 디자인 구성</h2>
                </div>

                <div className="card-body">
                  <p>
                    CSS를 활용하여 보다 다채롭고<br />
                    보기 좋은 웹 페이지를 구현
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Bootscrap를 활용하여 심플한 <br /> 레이아웃 구성</h2>
                </div>

                <div className="card-body">
                  <p>
                    Bootscrap를 활용하여 보다 심플하고 <br />
                    감각적인 레이아웃 구성
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-lg-3" id="secondwrap">
            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>타 웹 사이트들에 비해 빠른 속도</h2>
                </div>

                <div className="card-body">
                  <p>
                    React로 개발되어 타 웹 사이트에 비해 <br />
                    더욱 빠르게 반응합니다
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Title 5</h2>
                </div>

                <div className="card-body">
                  <p>Contents 5</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Ttitle 6</h2>
                </div>

                <div className="card-body">
                  <p>Contents 6</p>
                </div>
              </div>
            </div>
          </div>

          <div className="photowrap">
            <img src="images/testimonials-bg.jpg" alt="cafe-images" />
          </div>

          {/* <div className="row row-cols-lg-3" id="thirdwrap">
            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Title 7</h2>
                </div>

                <div className="card-body">
                  <p>Contents 7</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Title 8</h2>
                </div>

                <div className="card-body">
                  <p>Contents 8</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Ttitle 9</h2>
                </div>

                <div className="card-body">
                  <p>Contents 9</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}

export default About;
