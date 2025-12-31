import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="logo">
          UK<span>Travels</span>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          
          <NavLink to="/packages" onClick={closeMenu}>Packages</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/destinations" onClick={closeMenu}>Destinations</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          

        </nav>

        {/* CTA */}
        <div className="nav-cta">
          <NavLink to="/contact" className="cta-btn" onClick={closeMenu}>
            Enquire Now
          </NavLink>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>

      </div>
    </header>
  );
}

export default Navbar;
