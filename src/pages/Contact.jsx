import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Contact.css";
import packages from "../data/packages";

const Contact = () => {
  const location = useLocation();
  const enquiry = location.state;

  // Contact method capsule
  const [contactMethod, setContactMethod] = useState("whatsapp");

  const [formData, setFormData] = useState({
    name: "",
    package: "",
    price: "",
    message: ""
  });

  // Autofill for Package / Service / Footer
  useEffect(() => {
    if (!enquiry) return;

    if (enquiry.type === "service") {
      setFormData((prev) => ({
        ...prev,
        package: enquiry.title || "",
        message: `Enquiry for Service:
${enquiry.title}`
      }));
    } else if (enquiry.packageName) {
      setFormData((prev) => ({
        ...prev,
        package: enquiry.packageName || "",
        price: enquiry.price || "",
        message: `Enquiry for:
${enquiry.packageName}
Price: ${enquiry.price}
Duration: ${enquiry.duration}`
      }));
    }
  }, [enquiry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePackageChange = (e) => {
    const selectedPackage = e.target.value;
    const selected = packages.find((pkg) => pkg.title === selectedPackage);

    setFormData((prev) => ({
      ...prev,
      package: selectedPackage,
      price: selected ? selected.price : "",
      message: selected
        ? `Enquiry for:
${selected.title}
Price: ${selected.price}
Duration: ${selected.duration}`
        : prev.message
    }));
  };

  // SINGLE PROFESSIONAL SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // Name mandatory
    if (!formData.name.trim()) {
      alert("Please enter your name to continue.");
      return;
    }

const baseMessage = `
Name: ${formData.name}

Enquiry For:
${formData.package || "General Enquiry"}

${formData.message ? `Message:\n${formData.message}` : ""}
`;


    // WhatsApp
    if (contactMethod === "whatsapp") {
      const whatsappNumber = "919761114080";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello UK Travels 👋\n\n" + baseMessage
)}`;

      window.open(whatsappURL, "_blank");
    }

    // Email
    if (contactMethod === "email") {
      const mailtoLink = `mailto:jayshreeramoffice2024@gmail.com?subject=${encodeURIComponent(
        `Enquiry - ${formData.package || "UK Travels"}`
      )}&body=${encodeURIComponent(baseMessage)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/images/contact.webp')" }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>We’re here to help you plan your perfect Uttarakhand journey</p>

            <div className="breadcrumb">
              <a href="/">Home</a> <span>/</span> <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Enquire Now</h2>

            {/* CAPSULE SELECTOR */}
            <div>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="whatsapp"
                  checked={contactMethod === "whatsapp"}
                  onChange={() => setContactMethod("whatsapp")}
                />
                WhatsApp
              </label>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                />
                Email
              </label>
            </div>

            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />

              {/* EMAIL */}
             

              {/* PACKAGE SELECT (KEPT) */}
              <select
                name="package"
                value={formData.package}
                onChange={handlePackageChange}
              >
                <option value="">Select Package</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.title}>
                    {pkg.title}
                  </option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="btn-primary">
                Submit Enquiry
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Get in touch</h3>
            <p><strong>📞</strong> <a href="tel:+918287084080">+91 8287084080</a></p>
            <p><strong>📞</strong> <a href="tel:+919084654080">+91 9084654080</a></p>
            <p><strong>📧</strong> <a href="mailto:jayshreeramoffice2024@gmail.com">jayshreeramoffice2024@gmail.com</a></p>
            <p><strong>📍</strong> Gangapur road Rudrapur Uttarakhand</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
