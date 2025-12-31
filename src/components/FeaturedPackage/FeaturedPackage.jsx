import { Link } from "react-router-dom";
import packages from "../../data/packages";
import PackageCard from "../PackageCard/PackageCard";
import "./FeaturedPackage.css";

export default function FeaturedPackages() {
  const featured = packages.slice(0, 3);

  return (
    <section className="featured-packages">
      <div className="container">
        <h2 className="title">Popular Tour Packages</h2>
        <p className="subtitle">
          Handpicked tours designed for comfort and unforgettable experiences
        </p>

        <div className="packages-grid">
          {featured.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="explore-more">
          <Link to="/packages" className="btn-outline">
            Explore All Packages →
          </Link>
        </div>
      </div>
    </section>
  );
}


