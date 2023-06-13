import React from "react";

export const Footer = () => {
  return (
    <div className="Footer">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Register<span>Total</span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="ri-map-pin-line"></i>
            <p>
              <span>36 Dich Vong Hau</span> Hanoi
            </p>
          </div>
          <div>
            <i className="ri-phone-line"></i>
            <p>0999.999.999</p>
          </div>
          <div>
            <i className="ri-mail-line"></i>
            <p>
              <a href="mailto:support@company.com">registrytotal@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            RegistryTotal is a web application developed to support the
            Registration Deparment and registration centers nationwide in
            managing vehicle inspections for automobiles.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#">
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
