import React from "react";
import { Link } from "react-scroll";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="contact" spy={true} smooth={true}>
      <button className="c-button">LEARN MORE</button>
      </Link>
      
    </div>
  );
};

export default Card;
