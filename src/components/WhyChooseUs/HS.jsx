import { useNavigate } from "react-router-dom";
import "./PopularDestination.css";
import useReveal from "../../hooks/useReveal";

const destinations = [
  {
    name: "Mussoorie",
    image: "/images/mussoorie.jpg",
  },
  {
    name: "Nainital",
    image: "/images/nainital.jpg",
  },
  {
    name: "Rishikesh",
    image: "/images/rishikesh.jpg",
  },
  {
    name: "Kedarnath",
    image: "/images/kedarnath.jpg",
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
        {destinations.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.image} alt={place.name} />
            <div className="overlay">
              <h3>{place.name}</h3>
            </div>
          </div>
        ))}
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
