import React from "react";
import imagenes from "../Imagenes/imagen1.jpg";
import "../../src/styles.css";


export default function Fondo() {
  return (
    <div className="imagen1">
     
     <img src={imagenes} alt="" width="400" height="400" />
    
    </div>
  );
}

