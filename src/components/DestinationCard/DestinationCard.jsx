import "./DestinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div className="destination-image">
  <span className="destination-badge">{destination.category}</span>
  <img src={destination.image} alt={destination.name} loading="lazy" decoding="async" />
    <picture>
      <source srcSet={destination.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
      <img src={destination.image} alt={destination.name} loading="lazy" decoding="async" />
    </picture>
  <h3>{destination.name}</h3>
</div>


      <div className="destination-content">
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>

        <Link to={`/destinations/${destination.slug}`}>
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
