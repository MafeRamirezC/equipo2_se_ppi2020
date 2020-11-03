import React from "react";
import imagenes from "../Imagenes/imagen17.jpg";
import "../../src/styles.css";


export default function Segunda_imagen() {
  return (
    <div className="imagen17">
     
     <img src={imagenes} alt="" width="150" height="150" />
    
    </div>
  );
}