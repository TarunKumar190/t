import "./PopularDestination.css";
import useReveal from "../../hooks/useReveal"; // ✅ ADD THIS

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

export default function PopularDestinations() {
  const ref = useReveal(); // ✅ now defined

  return (
    <section id="destinations" className="destinations fade-in" ref={ref}>
      <h2>Popular Destinations</h2>
      <p className="subtitle">
        Explore Uttarakhand’s most loved travel destinations
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
    </section>
  );
}
