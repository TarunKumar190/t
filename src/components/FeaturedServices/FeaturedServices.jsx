import { Link, useNavigate } from "react-router-dom";
import "../FeaturedPackage/FeaturedPackage.css";
import "./FeaturedServices.css";

export default function FeaturedServices() {
  const navigate = useNavigate();

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
  ];

  // reverse order + show only 3
  const featured = services.slice().reverse().slice(0, 3);

  const handleEnquire = (service) => {
    navigate("/contact", {
      state: {
        type: "service",
        title: service.title,
      },
    });
  };

  return (
    <section className="featured-packages">
      <div className="container">
        <h2 className="title">Our Services</h2>
        <p className="subtitle">
          Reliable cab & taxi services for every journey
        </p>

        <div className="packages-grid">
          {featured.map((service) => (
            <div className="package-card" key={service.id}>
              <picture>
                <source srcSet={service.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
                <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
              </picture>
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

        <div className="explore-more">
          <Link to="/services" className="btn-outline">
            Explore Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
