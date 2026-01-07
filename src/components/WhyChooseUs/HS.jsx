import { useNavigate } from "react-router-dom";
import "./PopularDestination.css";
import useReveal from "../../hooks/useReveal";

const destinations = [
  {
    name: "Mussoorie",
    image: "/images/mussoorie.webp",
  },
  {
    name: "Nainital",
    image: "/images/nainital.webp",
  },
  {
    name: "Rishikesh",
    image: "/images/rishikesh.webp",
  },
  {
    name: "Kedarnath",
    image: "/images/kedarnath.webp",
  },
];

export default function Destinations() {
  const ref = useReveal();
  const navigate = useNavigate();

  return (
    <section id="destinations" className="destinations fade-in" ref={ref}>
      <h2>Our Destinations</h2>
      <p className="subtitle">
        Discover beautiful places across Uttarakhand
      </p>

      <div className="destination-grid">
          {destinations.map((place, index) => {
            const cardRef = useReveal();
            return (
              <div className="destination-card" key={place.name} ref={cardRef}>
                <picture>
                  <source srcSet={place.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
                  <img src={place.image} alt={place.name} loading="lazy" decoding="async" />
                </picture>
                <div className="overlay">
                  <h3>{place.name}</h3>
                </div>
              </div>
            );
          })}
      </div>

      {/* EXPLORE SERVICES BUTTON */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          className="btn-primary"
          onClick={() => navigate("/services")}
        >
          Explore Services
        </button>
      </div>
    </section>
  );
}
