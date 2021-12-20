import React from "react";
import "../Footer/Footer.scss";
import MapContainer from "./GoogleMaps/Map";
import instagram from "../../images/instagram.png";
const Footer = () => {
  return (
    <section id="footerWrapper">
      <footer className="footerContainer">
        <section className="redesContainer">
          <span className="redesTitle">Nuestras Redes Sociales</span>
          <div className="redesInner">
            <a href="https://www.instagram.com/el.templo.bebidas/?hl=es-la">
              <img
                id="redesInstagram"
                src={instagram}
                alt="Logo de instagram"
              />
            </a>
            <span></span>
          </div>
        </section>
        <section className="contactContainer">
          <span className="contactTitle">Contactanos</span>
          <div className="contactInner"></div>
        </section>
      </footer>
      <MapContainer />
    </section>
  );
};
export default Footer;
