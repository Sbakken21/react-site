import React from 'react';

const Landing = () => {
  return (
    <div>
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
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>

          </div>
          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <h1 className="display-3">Head Two</h1>
                <p className="lead">Work with some of the most advanced technology.</p>
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

      <section id="home-icons" class="py-5">
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
    </div>
  )
}

export default Landing;