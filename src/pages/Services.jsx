import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

const services = [
  { id: 1, title: "Haldwani to Delhi", image: "/images/services/services_1.webp" },
  { id: 2, title: "Rudrapur to Delhi", image: "/images/services/services_2.webp" },
  { id: 3, title: "Ramnagar to Delhi", image: "/images/services/services_3.webp" },
  { id: 4, title: "Khatima to Delhi", image: "/images/services/services_4.webp" },
  { id: 5, title: "Vanvasa to Delhi", image: "/images/services/services_5.webp" },
  { id: 6, title: "Delhi Airport to All Over Uttarakhand", image: "/images/services/services_6.webp" },
  { id: 7, title: "Rampur to Delhi", image: "/images/services/services_7.webp" },
  { id: 8, title: "Ghaziabad to Haldwani", image: "/images/services/services_8.webp" },
  { id: 9, title: "Noida to Haldwani", image: "/images/services/services_9.webp" },
  { id: 10, title: "Pantnagar Airport to Delhi NCR", image: "/images/services/services_10.webp" },
  { id: 11, title: "Cab Service", image: "/images/services/services_11.webp" },
  { id: 12, title: "Local Car Rental", image: "/images/services/services_12.webp" },
  { id: 13, title: "Airport Taxi", image: "/images/services/services_13.webp" },

  // 🆕 Added Destinations
  { id: 14, title: "Ayodhya Temple Tour", image: "/images/services/services_14.webp" },
  { id: 15, title: "Prayagraj Yatra Tour", image: "/images/services/services_15.webp" },
  { id: 16, title: "Kashi – Ayodhya – Prayagraj Tour", image: "/images/services/services_16.webp" },
  { id: 17, title: "Mathura – Vrindavan – Agra Tour", image: "/images/services/services_17.webp" },
  { id: 18, title: "Bareilly Airport Cab Service", image: "/images/services/services_18.webp" },
  { id: 19, title: "Pantnagar Airport Cab Service", image: "/images/services/services_19.webp" },
  { id: 20, title: "Pantnagar University to Delhi Cab", image: "/images/services/services_20.webp" },
  { id: 21, title: "Jim Corbett Tour", image: "/images/services/services_21.webp" },
  { id: 22, title: "Jageshwar Temple Tour", image: "/images/services/services_22.webp" },
  { id: 23, title: "Agra Tour", image: "/images/services/services_23.webp" },
  { id: 24, title: "Ranikhet Tour", image: "/images/services/services_24.webp" },
  { id: 25, title: "Kainchi Dham Temple Tour", image: "/images/services/services_25.webp" },
  { id: 26, title: "All over Uttarakhand", image: "/images/services/services_26.webp" },
  { id: 27, title: "Custom Services:", image: "/images/services/services_27.webp" }
];


export default function Services() {
  const navigate = useNavigate();

  const handleEnquire = (service) => {
    navigate("/contact", {
      state: {
        type: "service",
        title: service.title
      }
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="services-hero">
        <img
          src="/images/servicess.webp"
          alt="Cab & Taxi Services"
          className="services-hero-img"
        />
        <div className="services-hero-overlay">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Reliable cab & taxi services for every journey</p>
            <div className="breadcrumb">
              <a href="/">Home</a> / Services
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="services-page">
        <div className="container">
          <h2>Cab & Taxi Services</h2>
          <p className="subtitle">
            Safe, comfortable, and affordable travel solutions
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <button
                  className="enquire-btn"
                  onClick={() => handleEnquire(service)}
                >
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
