import React from "react";
import imagenes from "../Imagenes/imagen22.jpg";
import "../../src/styles.css";


export default function Primera_imagen() {
  return (
    <div className="imagen16">
     
     <img src={imagenes} alt="" width="300" height="200" />
    
    </div>
  );
}