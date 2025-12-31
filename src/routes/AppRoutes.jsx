import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Packages from "../pages/Packages";
import Destinations from "../pages/Destinations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DestinationDetail from "../pages/DestinationDetail";
import PackageDetail from "../pages/PackageDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:slug" element={<DestinationDetail />} />
      <Route path="/packages/:slug" element={<PackageDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
