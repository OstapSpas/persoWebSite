import React from "react";
import "./styles/index.css";
import "./styles/reset.css";

import group4 from "./images/card/Group4.svg";
import portImage from "./images/portfolio-card/Hero1.png"
import socFacebook from "./images/social/facebook.svg"
import socInstagram from "./images/social/instagram.svg"

import ContactForm from "./scripts/ContactForm"; 
const App = () => {
  return (
    <div>
      {/* Header block */}
      <div className="header-content">
        <div className="circles-container">
          <div className="circle large"></div>
          <div className="circle small"></div>
        </div>

        <div className="container">
          <div className="header-row">
            <nav className="nav-bar">
              <ul className="nav-link">
                <li className="nav-item">How?</li>
                <li className="nav-item">About Us</li>
                <li className="nav-item">Portfolio</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Contacts</li>
              </ul>
              <div className="nav-btn">
                <a href="#" className="link">EN</a>
              </div>
            </nav>
          </div>

          <div className="header-down">
            <div className="header-text">
              <h1>Perso</h1>
              <p>Lorem Ipsum is simply dummy text of</p>
              <a href="#" className="link">HOW IT WORK</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="container">
          <div className="card-row">
            {[...Array(3)].map((_, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={group4} alt="card-img" />

                </div>
                <div className="card-text">
                  <h3>Speed of execution</h3>
                  <p>Lorem Ipsum is simply dummy text</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* About Content */}
      <div className="about-content">
        <div className="circle-left"></div> {/* Ліве коло */}
        <div className="circle-right"></div> {/* Праве коло */}
        <div className="container">
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
        </div>
      </div>

      {/* Development Content */}

      <div className="development-content">
        <div className="container">
          <div className="dev-item">
            <h2>Development</h2>
            <div className="dev-items">
              <div className="dev-card">
                <p className="dev-number">1</p>
                <h3>Communication</h3>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>

              <div className="dev-card">
                <p className="dev-number">1</p>
                <h3>Communication</h3>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>

              <div className="dev-card">
                <p className="dev-number">1</p>
                <h3>Communication</h3>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>

              <div className="dev-card">
                <p className="dev-number">1</p>
                <h3>Communication</h3>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>

              <div className="dev-card">
                <p className="dev-number">1</p>
                <h3>Communication</h3>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>

              <div className="dev-card">
                <p className="dev-number">1</p>
                <h3>Communication</h3>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>


            </div>
          </div>
        </div>
      </div>


      {/* Portfolio Content */}

      <div className="portfolio-content">
        <div className="container">
          <div className="portfolio-items">
            <h2>Portfolio</h2>
            <div className="portfolio-row">
              <div className="portfolio-card">
                <img src={portImage} alt="port-img" />
                <div class="portfolio-text">
                  <h2>DOG SHELTER</h2>
                  {/* <p>Lorem Ipsum </p> */}
                </div>
              </div>

              <div className="portfolio-card">
                <img src={portImage} alt="port-img" />
                <div class="portfolio-text">
                  <h2>DOG SHELTER</h2>
                  {/* <p>Lorem Ipsum</p> */}
                </div>
              </div>

              <div className="portfolio-card">
                <img src={portImage} alt="port-img" />
                <div class="portfolio-text">
                  <h2>DOG SHELTER</h2>
                  {/* <p>Lorem Ipsum</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      {/* Contacts Content */}

      <div className="contacts-content">
        <div className="container">
          <div className="contacts-item">
            <h2>Contacts</h2>
            <p className="contacts-subtitle">Leave a request and we will contact you</p>


            <div className="contact-row">
                <div className="contact-form">
                  <ContactForm />
                </div>

              <div className="contact-text">
                <h3>Build a website for you</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer.
                </p>

                <ul>
                  <li>Landing</li>
                  <li>Business</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contacts-footer">
            <div className="footer-text">
            <h2>Perso</h2>
            <p>We will be happy to help you</p>
            </div>
            <div className="footer-social">
              <p>Our Media</p>
              <a href="#">
                <img src={socFacebook} alt="facebook-icon" />
                <img src={socInstagram} alt="instagram-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default App;
