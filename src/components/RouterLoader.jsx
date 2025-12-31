import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import About from "./pages/About";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Services from "./pages/Services";
import PackageDetails from "./pages/PackageDetail";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetail";
import Contact from "./pages/Contact";


function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
useEffect(() => {
  window.addEventListener("load", () => {
      setTimeout(() => setLoading(false), 600); // smooth exit
    });
  const minLoadTime = setTimeout(() => {
    setLoading(false);
  }, 1800); // 1.8s ideal for client demo

  const images = document.images;
  let loaded = 0;

  if (images.length === 0) {
    setLoading(false);
    return () => clearTimeout(minLoadTime);
  }

  Array.from(images).forEach((img) => {
    if (img.complete) {
      loaded++;
    } else {
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === images.length) setLoading(false);
      };
    }
  });

  const fallbackTimeout = setTimeout(() => setLoading(false), 2500);

  return () => {
    clearTimeout(minLoadTime);
    clearTimeout(fallbackTimeout);
  };
}, []);
  return (
    <>
      {loading && <Loader />}
       <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}></div>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<DestinationDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>

      <Footer />
    </>
  );
}

export default App;


