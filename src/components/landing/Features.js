import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Features.css';

function Features() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <section id="features">
      <h2>Features</h2>
      <div className="features-slider">
        <Slider {...settings}>
          <div>
            <img src="image1.jpg" alt="Feature 1" />
            <h3>Online Assessments</h3>
            <p>Take assessments online from anywhere, anytime.</p>
          </div>
          <div>
            <img src="image2.jpg" alt="Feature 2" />
            <h3>Interactive Interface</h3>
            <p>User-friendly interface for seamless navigation and interaction.</p>
          </div>
          <div>
            <img src="image3.jpg" alt="Feature 3" />
            <h3>Detailed Reports</h3>
            <p>Access detailed reports and analytics for performance evaluation.</p>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
}

export default Features;
