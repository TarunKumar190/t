import "./TopBar.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <span>
            <FaPhoneAlt /> <a href="tel:+918287084080">+91 82870 84080</a>
          </span>
          <span>
            <FaPhoneAlt /> <a href="tel:+919084654080">+91 90846 54080</a>
          </span>
          <span>
            <FaEnvelope /> <a href="mailto:jayshreeramoffice2024@gmail.com">jayshreeramoffice2024@gmail.com</a>
          </span>
        </div>

        <div className="topbar-right">
          <a href="www.facebook.com"><FaFacebookF /></a>
          <a href="www.instagram.com"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}
