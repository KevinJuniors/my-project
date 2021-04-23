import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        {/* <div className="row">
          <div className="three columns">
            <h2>Title 1</h2>
            <img src="images/coffee-shop.png" alt="카페 일러스트이미지" />

            <div className="columns contact-details">
                <h2>Title 2</h2>
                <p>Contents</p>
              </div>
              
              <div className="columns download">
                <h2>Title 3</h2>
                <p>Contents</p>
              </div>
          </div>

          <div className="nine columns main-col">
            <div className="row">
              <div className="columns contact-details">
                <h2>Title 2</h2>
                <p>Contents</p>
              </div>
              
              <div className="columns download">
                <h2>Title 3</h2>
                <p>Contents</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row row-cols-md-4">
          <div className="col">
            <div className="card text-dark bg-light md-4">
              <div className="card-header">
                <h2>Title 1</h2>
              </div>

              <div className="card-body">
                <p>Contents 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
