import React from 'react';

import Gallery from './Gallery';

import graph from '../media/graph.jpeg';

const Landing = () => {
  return (
    <div id="landing">
      <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
                <h1 className="display-3">Head One</h1>
                <p className="lead">Improve your ability to code and pursue your future</p>
                <a href="/about" className="btn btn-primary">Learn More <span><i className="fa fa-chevron-right"></i></span></a>
              </div>
            </div>

          </div>
          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <h1 className="display-3">Head Two</h1>
                <p className="lead">Work with some of the most advanced technology.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum, eaque est incidunt minima blanditiis soluta nemo consequatur. Illo commodi dicta ab aut nesciunt quidem possimus repellendus sint hic nobis?</p>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <h1 className="display-3">Head Three</h1>
                <p className="lead">Join our community and be surrounded by people passionate about coding.</p>
              </div> 
            </div>
          </div>
          
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </section>

      <section id="home-icons" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <i className="fa fa-cloud mb-2"></i>
              <h3>Sending Data</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores.</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <i className="fa fa-cart-plus mb-2"></i>
              <h3>Making Money</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores.</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <i className="fa fa-cog mb-2"></i>
              <h3>Turning Gears</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="home-heading" className="p-5">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container pt-3">
                <h1>Are You Ready To Reach New Heights?</h1>
                <p className="d-none d-sm-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora placeat dicta, nihil corporis cum aliquam incidunt ducimus necessitatibus error quasi earum labore obcaecati culpa nam, enim aspernatur in modi temporibus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 align-self-center">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error cum impedit at! Tenetur nemo, neque nostrum quo quidem iste consequuntur?</p>
              <a href="" className="btn btn-outline-danger btn-lg mb-2">Learn More</a>
            </div>
            <div className="col-sm-6">
              <img src={graph} className="graph img-fluid" alt="graph"/>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-component">
        <Gallery />
      </section>

      <section id="newsletter" className="text-center p-4 bg-dark text-white">
        <div className="container">
          <div className="row newsletter-row">
            <div className="col">
              <h1>Signup For Our Newsletter</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia corrupti id maiores temporibus quia.</p>
              <form action="" className="form-inline justify-content-center">
                <label className="sr-only" htmlFor="name">Name</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Name" />
                <label className="sr-only" htmlFor="Email">Email</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email" />
                <button className="btn btn-primary mt-sm-2" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  )
}

export default Landing;