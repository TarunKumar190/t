import destinations from "../data/destinations";
import { Link } from "react-router-dom";
import "../styles/Destinations.css";

const Destinations = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="destinations-hero"
        style={{ backgroundImage: `url('/images/destination.jpg')` }}
      >
        <div className="destinations-hero-overlay">
          <h1>Destination</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <span>Destination</span>
          </nav>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <section className="destinations-page">
        <h1 className="title">Explore Uttarakhand</h1>
        <p className="subtitle">Handpicked destinations for unforgettable journeys</p>

        <div className="destinations-grid">
  {destinations.map((place) => (
    <Link
      to={`/destinations/${place.slug}`}
      key={place.id}
      className="destination-tile"
    >
      <div
        className="destination-tile-image"
        style={{ backgroundImage: `url(${place.image})` }}
      >
        <span className="destination-badge">{place.category}</span>

        <div className="destination-tile-overlay">
          <h3>{place.name}</h3>
        </div>
      </div>
    </Link>
  ))}
</div>

      </section>
    </>
  );
};

export default Destinations;
