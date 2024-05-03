import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";
import image from "../images/skate.webp";
import Nav from "../Components/Nav";
import running from "../images/running.jpeg";

function Home() {
  return (
    <div>
      <Nav />
      <div className="Main">
        <div className="search">
          <input type="search" id="search-input" placeholder="search" />
        </div>
        <div className="batch-button">
          <Link to="/Batch"><button className="batch">Check Batches</button></Link>
        </div>
        <div className="background">
          <img height={500} src={image} alt="background" />
        </div>
        <div className="text1">
          <h2>"Fuel your passion for sports and ignite your journey to greatness with ALLMITSPORT - where every athlete finds their winning edge!"</h2>
        </div>
        {/* <div className="button">
            <Link to="/Register"><button className="explore-button">Register</button></Link>
        </div> */}
      </div>
      <div className="Home-container">
        <div className="Specialization">
          <h2 className="special-h2">Specialization</h2>
          <h1 className="special-h1">Your Partner in Sports Excellence</h1>
          <img className="running-img" src={running} alt="ruuning everyday is good for health" />
          <h1 className="special">Our Value : </h1>
          <h2 className="special-h2">Passion for Athletics</h2>
          <h3 className="special-h3">We are passionate about sports and<br></br> committed to helping athletes achieve<br></br> success in all areas of their lives.</h3>
          <h2 className="specialization-h2">Excellence in Coaching and Training</h2>
          <h3 className="specialization-h3">We strive for excellence in coaching<br></br> and training, providing the highest quality guidance<br></br> and support to help athletes reach their full potential.</h3>
          <h2 className="Community">Community Engagement</h2>
          <h3 className="Community-h3">It could foster a sense of community <br></br>among students, faculty, alumni, and sports <br></br>enthusiasts by providing a platform to share news, updates,<br></br> and discussions about college sports events and achievements.</h3>
        </div>
      </div>
      <div className="Our-service">
        <div className="our-service-text">
          <h2 className="service">Our Services</h2>
          <h1 className="Service-text">Empowering You to Achieve Sports Excellence</h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <h2 className="service-box-heading">Sports Information: </h2>
            <h2 className="service-box-text">Get comprehensive information about various sports and their rules. Stay up-to-date with the latest news, schedules, and scores.</h2>
            <button className="sevice-btn">Get Started</button>
          </div>
          <div className="service-box">
            <h2 className="service-box-heading">Sports Community : </h2>
            <h2 className="service-box-text">Join our sports community to connect with other enthusiasts, find events, and share your passion.</h2>
            <button className="sevice-btn">Get Started</button>
          </div>
          <div className="service-box">
            <h2 className="service-box-heading">Sports News & Analysis: </h2>
            <h2 className="service-box-text">Stay up-to-date with the latest sports news, analysis, and commentary from our experts.</h2>
            <button className="sevice-btn">Get Started</button>
          </div>
          <div className="service-box">
            <h2 className="service-box-heading">Sports Registration: </h2>
            <h2 className="service-box-text">Register for sports events and programs with ease, including custom forms and payment processing.</h2>
            <button className="sevice-btn">Get Started</button>
          </div>
          <div className="service-box">
            <h2 className="service-box-heading">Secure Login: </h2>
            <h2 className="service-box-text">Access exclusive sports content and features with a secure login.</h2>
            <button className="sevice-btn">Get Started</button>
          </div>
          <div className="service-box">
            <h2 className="service-box-heading">Sports Community Platform: </h2>
            <h2 className="service-box-text">Engage with your fellow sports enthusiasts through our sports community platform</h2>
            <button className="sevice-btn">Get Started</button>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
              </div>
              
                <p className="para0">ALLMITSPORT is your ultimate destination for all things sports! Stay updated with the latest news, scores, and highlights from the world of Sports Category. Connect with us on social media for more exciting content.<br></br>Feel free to adjust the content and design according to your website's specific needs and branding!<br></br>"At ALLMITSPORT, we are passionate about promoting sports excellence and fostering a community of athletes, enthusiasts, and fans. Our mission is to provide comprehensive coverage of various sports, from football to tennis, and to keep our audience informed about the latest news, events, and developments in the world of sports. Whether you're an aspiring athlete looking for training tips or a dedicated fan seeking updates on your favorite teams, ALLMITSPORT is your ultimate destination. Join us in celebrating the spirit of sportsmanship and camaraderie, as we strive to inspire and empower individuals to achieve their athletic goals."</p>
              
              <div className="col-md-6">
                <ul className="footer-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;