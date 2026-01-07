import "./PopularDestination.css";
import useReveal from "../../hooks/useReveal"; // ✅ ADD THIS

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

export default function PopularDestinations() {
  const ref = useReveal(); // ✅ now defined

  return (
    <section id="destinations" className="destinations fade-in" ref={ref}>
      <h2>Popular Destinations</h2>
      <p className="subtitle">
        Explore Uttarakhand’s most loved travel destinations
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
    </section>
  );
}
