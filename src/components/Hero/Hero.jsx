import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: "../images/Hero/hero1.webp",
    title: "Explore Uttarakhand",
    highlight: "With Local Experts",
    subtitle:
      "Discover breathtaking destinations, curated experiences, and unforgettable journeys."
  },
  {
    image: "../images/Hero/hero2.webp",
    title: "Best Pocket Friendly",
    highlight: "Tour Packages",
    subtitle:
      "Affordable, well-planned tours designed for everyone."
  },
  {
    image: "../images/Hero/hero3.webp",
    title: "Unforgettable",
    highlight: "Trekking Experiences",
    subtitle:
      "Adventure, nature, and memories that stay forever."
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [zoomKey, setZoomKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setZoomKey((k) => k + 1); // 🔥 FORCE ZOOM RESET
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        key={zoomKey} // 🔥 THIS IS THE KEY
        className="hero-bg"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            {slides[index].title}
            <br />
            <span>{slides[index].highlight}</span>
          </h1>
          <p>{slides[index].subtitle}</p>

          <div className="hero-actions">
            <a href="/packages" className="btn-primary">View Packages</a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
