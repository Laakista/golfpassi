import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./SivuaEiLoydy.css";

const SivuaEiLoydy = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Virhe: Käyttäjä yritti avata reittiä, jota ei ole olemassa:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="sivua-ei-loydy-page">
      <div className="sivua-ei-loydy-container">
        <h1 className="sivua-ei-loydy-title">404</h1>
        <p className="sivua-ei-loydy-message">Hups! Sivua ei löydy.</p>
        <a href="/" className="sivua-ei-loydy-link">
          Palaa etusivulle
        </a>
      </div>
    </div>
  );
};

export default SivuaEiLoydy;
