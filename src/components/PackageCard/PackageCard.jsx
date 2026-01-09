import { Link, useNavigate } from "react-router-dom";
import "./PackageCard.css";

export default function PackageCard({ pkg }) {
  const navigate = useNavigate();

  if (!pkg) return null; // safety guard

  return (
    <div className="package-card">
      {/* IMAGE */}
      <div className="package-image">
        {pkg.gallery && Array.isArray(pkg.gallery) && pkg.gallery.length > 0 ? (
          <img src={pkg.gallery[0].replace(/\.(jpg|jpeg|png)$/i, '.webp')} alt={pkg.title} loading="lazy" decoding="async" />
        ) : (
          <img src={pkg.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} alt={pkg.title} loading="lazy" decoding="async" />
        )}
      </div>

      {/* CONTENT */}
      <div className="package-content">
        <h3>{pkg.title}</h3>
        <p className="duration">{pkg.duration}</p>
        <p className="description">{pkg.short}</p>

        <div className="package-footer">
          <span className="price">{pkg.price}</span>

          <div className="actions">
            <Link to={pkg.link} className="btn-view">
              View Details
            </Link>

            <button
              className="btn-enquire"
              onClick={() =>
                navigate("/contact", {
                  state: {
                    packageName: pkg.title,
                    price: pkg.price,
                    duration: pkg.duration,
                  },
                })
              }
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
