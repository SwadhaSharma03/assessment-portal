import React from 'react';
import Navbar from './landing/Navbar';
import Features from './landing/Features';
import Testimonials from './landing/Testimonials';
import PricingPlans from './landing/PricingPlans';
import CommonFaqs from './landing/CommonFaqs';
import ContactUs from './landing/ContactUs';
import Footer from './landing/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="welcome-section">
          <h1>Welcome to Assessment Portal</h1>
          <button className="signup-btn">Sign Up</button>
        </div>
        <Features />
        <Testimonials />
        <PricingPlans />
        <CommonFaqs />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
