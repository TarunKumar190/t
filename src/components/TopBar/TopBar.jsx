import "./TopBar.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <span>
            <FaPhoneAlt /> +91 82870 84080
          </span>
          <span>
            <FaEnvelope /> jayshreeramoffice2024@gmail.com
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
