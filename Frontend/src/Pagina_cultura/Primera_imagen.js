import React from "react";
import imagenes from "../Imagenes/imagen7.jpg";
import "../../src/styles.css";

export default function Primera_imagen() {
  return (
    <div className="imagen7">
      <img src={imagenes} alt="" width="150" height="150" />
    </div>
  );
}
