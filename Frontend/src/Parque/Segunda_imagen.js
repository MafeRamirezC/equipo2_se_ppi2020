import React from "react";
import imagenes from "../Imagenes/imagen24.jpg";
import "../../src/styles.css";


export default function Segunda_imagen() {
  return (
    <div className="imagen16">
     
     <img src={imagenes} alt="" width="450" height="250" />
    
    </div>
  );
}