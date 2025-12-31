import { Link, useNavigate } from "react-router-dom";
import "../FeaturedPackage/FeaturedPackage.css";
import "./FeaturedServices.css";

export default function FeaturedServices() {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "Haldwani to Delhi", image: "/images/services/services_1.jpg" },
    { id: 2, title: "Rudrapur to Delhi", image: "/images/services/services_2.jpg" },
    { id: 3, title: "Ramnagar to Delhi", image: "/images/services/services_3.jpg" },
    { id: 4, title: "Khatima to Delhi", image: "/images/services/services_4.jpg" },
    { id: 5, title: "Vanvasa to Delhi", image: "/images/services/services_5.jpg" },
    { id: 6, title: "Delhi Airport to All Over Uttarakhand", image: "/images/services/services_6.jpg" },
    { id: 7, title: "Rampur to Delhi", image: "/images/services/services_7.jpg" },
    { id: 8, title: "Ghaziabad to Haldwani", image: "/images/services/services_8.jpg" },
    { id: 9, title: "Noida to Haldwani", image: "/images/services/services_9.jpg" },
    { id: 10, title: "Pantnagar Airport to Delhi NCR", image: "/images/services/services_10.jpg" },
    { id: 11, title: "Cab Service", image: "/images/services/services_11.jpg" },
    { id: 12, title: "Local Car Rental", image: "/images/services/services_12.jpg" },
    { id: 13, title: "Airport Taxi", image: "/images/services/services_13.jpg" },
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

        <div className="explore-more">
          <Link to="/services" className="btn-outline">
            Explore Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
