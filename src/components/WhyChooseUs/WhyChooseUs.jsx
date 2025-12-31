import { services } from "../../data/service.js";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import "./WhyChooseUs.css";
import useReveal from "../../hooks/useReveal";

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section id="WhyChooseUs" className="WhyChooseUs fade-in" ref={ref}>
      <div className="container">
        <h2 className="title">Why Choose UK Travels</h2>
        <p className="section-subtitle">
          We focus on comfort, safety, and unforgettable travel experiences.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
