import { useParams } from "react-router-dom";
import packages from "../data/packages";
import { useState } from "react";
import "../styles/PackageDetail.css";
import { useNavigate } from "react-router-dom";

const PackageDetail = () => {
    const navigate = useNavigate();

  const { slug } = useParams();
  const pkg = packages.find(p => p.slug === slug);

  const [tab, setTab] = useState("itinerary");

  if (!pkg) return <h2>Package not found</h2>;

  return (
    <section className="package-detail">
      {/* Hero */}
      <div
        className="package-hero"
        style={{ backgroundImage: `url(${pkg.image})` }}
      >
        <div className="overlay">
          <h1>{pkg.title}</h1>
          <p>{pkg.duration}</p>
        </div>
      </div>

      {/* Content */}
      <div className="package-container">
        <div className="package-header">
          <h2>{pkg.title}</h2>
          <span className="price">{pkg.price}</span>
        </div>

        <p className="package-desc">{pkg.description}</p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={tab === "itinerary" ? "active" : ""}
            onClick={() => setTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={tab === "inclusions" ? "active" : ""}
            onClick={() => setTab("inclusions")}
          >
            Inclusions
          </button>
          <button
            className={tab === "exclusions" ? "active" : ""}
            onClick={() => setTab("exclusions")}
          >
            Exclusions
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {tab === "itinerary" && (
            <ul>
              {pkg.itinerary.map((day, i) => (
                <li key={i}>{day}</li>
              ))}
            </ul>
          )}

          {tab === "inclusions" && (
            <ul>
              {pkg.inclusions.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          )}

          {tab === "exclusions" && (
            <ul>
              {pkg.exclusions.map((item, i) => (
                <li key={i}>✖ {item}</li>
              ))}
            </ul>
          )}
        </div>
        <button
        className="enquire-btn"
            onClick={() =>
            navigate("/contact", {
        state: {
            packageName: pkg.title,
            price: pkg.price,
            duration: pkg.duration
        }
        })
         }
>
        Enquire Now
        </button>

      </div>
    </section>
  );
};

export default PackageDetail;
