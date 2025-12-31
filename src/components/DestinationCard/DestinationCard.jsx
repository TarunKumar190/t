import "./DestinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div className="destination-image">
  <span className="destination-badge">{destination.category}</span>
  <img src={destination.image} alt={destination.name} />
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
