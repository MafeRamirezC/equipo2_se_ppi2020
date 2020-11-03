import React from "react";
import imagenes from "../Imagenes/imagen12.jpg";
import "../../src/styles.css";


export default function Tercera_imagen() {
  return (
    <div className="imagen12">
     
     <img src={imagenes} alt="" width="150" height="150" />
    
    </div>
  );
}