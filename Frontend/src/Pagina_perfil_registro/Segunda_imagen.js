import React from "react";
import imagenes from "../Imagenes/imagen4.jpg";
import "../../src/styles.css";


export default function Segunda_imagen() {
  return (
    <div className="imagen4">
     
     <img src={imagenes} alt="" width="300" height="200" />
    
    </div>
  );
}
