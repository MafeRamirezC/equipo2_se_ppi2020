import React from "react";
import imagenes from "../Imagenes/imagen1.jpg";
import "../../src/styles.css";


export default function Imagen() {
  return (
    <div className="imagen1">
     
     <img src={imagenes} alt="" width="72" height="72" />
    
    </div>
  );
}
