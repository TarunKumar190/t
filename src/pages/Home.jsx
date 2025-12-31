import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero";
import FeaturedPackages from "../components/FeaturedPackage/FeaturedPackage";
import PopularDestinations from "../components/PopularDestination/PopularDestination";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="packages">
        <FeaturedPackages />
      </section>

       <section id="services">
        <FeaturedServices />
      </section>

      <section id="destinations">
        <PopularDestinations />
      </section>

      <section id="about">
        <WhyChooseUs />
      </section>
      <Helmet>
  <title>UK Travels | Uttarakhand Tour Packages</title>
  <meta name="description"
    content="Explore Mussoorie, Nainital, Rishikesh & Char Dham with UK Travels." />
</Helmet>
    </>
  );
}



