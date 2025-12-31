import packages from "../data/packages";
import PackageCard from "../components/PackageCard/PackageCard";
import "../styles/Packages.css";

export default function Packages() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="packages-hero">
        <img
          src="../../public/images/packages.jpg"
          alt="Uttarakhand Tour Packages"
          className="packages-hero-img"
        />

        <div className="packages-hero-overlay">
          <div className="packages-hero-content">
            <h1>Tour Packages</h1>
            <p>Carefully crafted experiences for unforgettable journeys</p>

            <div className="breadcrumb">
              <a href="/">Home</a> / Packages
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES LIST */}
      <section className="packages-page">
        <div className="container">
          <h2 className="title">Our Tour Packages</h2>
          <p className="subtitle">
            Handpicked packages for memorable trips
          </p>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
