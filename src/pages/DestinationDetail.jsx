import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import "../styles/DestinationDetail.css";

const DestinationDetails = () => {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) return <h2>Destination not found</h2>;

  const similarPlaces = destinations.filter((d) =>
    destination.similar?.includes(d.slug)
  );

  return (
    <div className="destination-page">
      {/* HERO */}
      <section
        className="destination-hero"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="hero-overlay">
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="destination-content">
        <h2>Highlights</h2>
        <ul className="highlight-list">
          {destination.highlights.map((h, i) => (
            <li key={i}>✔ {h}</li>
          ))}
        </ul>

        {/* GALLERY */}
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {destination.gallery.map((img, i) => (
            <img key={i} src={img} alt={destination.name} />
          ))}
        </div>

        {/* CTA */}
        <div className="destination-cta">
          <button className="primary-btn">Enquire Now</button>
          <button className="outline-btn">View Packages</button>
        </div>

        {/* SIMILAR */}
        <h2>Similar Destinations</h2>
        <div className="similar-grid">
          {similarPlaces.map((place) => (
            <Link
              to={`/destinations/${place.slug}`}
              className="similar-card"
              key={place.slug}
            >
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationDetails;
