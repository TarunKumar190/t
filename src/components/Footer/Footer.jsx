import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h3><span>UK</span> Travels</h3>
          <p>
            Your trusted travel partner for tours, destinations, and comfortable
            journeys across Uttarakhand.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/packages">Packages</NavLink></li>
            <li><NavLink to="/destinations">Destinations</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>
              <NavLink to="/services">All Services</NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                state={{ type: "service", title: "Cab Services" }}
              >
                Cab Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                state={{ type: "service", title: "Custom Trips" }}
              >
                Custom Trips
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                state={{ type: "service", title: "Group Tours" }}
              >
                Group Tours
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>📞 +91 8287084080</li>
            <li>📧 jayshreeramoffice2024@gmail.com</li>
            <li>📍 Gangapur road Rudrapur Uttarakhand</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} UK Travels. All rights reserved.
        </span>

        <span className="footer-credit">
          Developed with <span className="heart">❤️</span> by
          <strong> Sahil</strong> & <strong> Tarun</strong>
        </span>
      </div>
    </footer>
  );
}
