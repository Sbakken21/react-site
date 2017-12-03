import React from 'react';

import '../About.css';

import business from '../media/business.jpg';


const About = () => {
  return (
    <div className="about-page">
      <header id="page-header"> 
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center ">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, molestiae.</p>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h1>What We Do</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti quo veritatis nostrum provident vero iste. Iste praesentium, quibusdam deleniti maxime, est nesciunt voluptatum eius voluptate tenetur perferendis, nobis commodi?</p>              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti quo veritatis nostrum provident vero iste. Iste praesentium, quibusdam deleniti maxime, est nesciunt voluptatum eius voluptate tenetur perferendis, nobis commodi?</p>
            </div>
            <div className="col-md-6">
              <img src={business} alt="business" className="d-none d-md-block about-img img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </section>

      <section id="icon-boxes" className="p-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-building"></i>
                  <h3>Lorem, ipsum.</h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-bullhorn"></i>
                  <h3>Lorem, ipsum.</h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-comments"></i>
                  <h3>Lorem, ipsum.</h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error.
                </div>
              </div>
            </div> 
          </div>

          <div className="row second-row-icons">
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-clock-o"></i>
                  <h3>Lorem, ipsum.</h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-cc"></i>
                  <h3>Lorem, ipsum.</h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-coffee"></i>
                  <h3>Lorem, ipsum.</h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error.
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About;