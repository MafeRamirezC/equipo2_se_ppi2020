import React from "react";
import imagenes from "../Imagenes/imagen19.jpg";
import "../../src/styles.css";


export default function Primera_imagen() {
  return (
    <div className="imagen">
     
     <img src={imagenes} alt="" width="450" height="250" />
    
    </div>
  );
}