import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2>About <span>UK Travels</span></h2>

          <p className="about-highlight">
            Your trusted local travel partner for exploring the real beauty of Uttarakhand.
          </p>

          <p>
            At <strong>UK Travels</strong>, we believe that traveling is not just about visiting
            places — it’s about creating memories, discovering culture, and experiencing nature
            the way locals do.
          </p>

          <p>
            With years of experience in Uttarakhand tourism, we specialize in
            <strong> customized tour packages</strong>, comfortable cab services,
            family trips, adventure getaways, and spiritual journeys like the
            <strong> Char Dham Yatra</strong>.
          </p>

          <p>
            What sets us apart is our deep local knowledge, transparent pricing,
            and commitment to providing safe, comfortable, and unforgettable journeys.
            From solo travelers to families and large groups — we plan every trip
            with care and passion.
          </p>

          <div className="about-stats">
            <div>
              <h3>500+</h3>
              <span>Happy Travelers</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Tour Packages</span>
            </div>
            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE / DESIGN */}
        <div className="about-image">
          <div className="image-card">
            <span>🌄</span>
            <p>Explore Uttarakhand<br />With Local Experts</p>
          </div>
        </div>

      </div>
    </section>
  );
}

