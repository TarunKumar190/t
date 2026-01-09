import { useState } from "react";
import "./ContactForm.css";


export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  let message = `Name: ${form.name}`;
  if (form.package) message += `\nEnquiry For:\n${form.package}`;
  if (form.message) message += `\nMessage:\n${form.message}`;

  // Remove trailing blank lines
  message = message.replace(/\n{2,}/g, '\n').trim();

  const whatsappURL = `https://wa.me/+919761114080?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};


  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h2>Enquire Now</h2>
        <p>
          Plan your perfect Uttarakhand trip with our experts.  
          Share your requirements and we’ll contact you shortly.
        </p>

        <ul>
          <li>✔ Trusted local travel experts</li>
          <li>✔ Custom packages & cab services</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </div>

      <div className="contact-right">
        {success ? (
          <div className="success-box">
            <h3>🎉 Enquiry Sent!</h3>
            <p>Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
            />

            <select
              name="package"
              value={form.package}
              onChange={handleChange}
            >
              <option value="">Select Package</option>
              <option>Mussoorie Weekend</option>
              <option>Nainital Tour</option>
              <option>Char Dham Yatra</option>
              <option>Custom Trip</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}