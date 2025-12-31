// src/components/Loader/Loader.jsx
import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader({ isLoading }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
    }
  }, [isLoading]);

  return (
    <div className={`loader-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="mountain-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loader-text">Preparing your Uttarakhand journey...</p>
    </div>
  );
}
