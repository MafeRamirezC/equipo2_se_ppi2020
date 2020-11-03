import React from "react";
import imagenes from "../Imagenes/imagen18.jpg";
import "../../src/styles.css";


export default function Tercera_imagen() {
  return (
    <div className="imagen18">
     
     <img src={imagenes} alt="" width="250" height="150" />
    
    </div>
  );
}