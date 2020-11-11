import React from "react";
import imagenes from "../Imagenes/imagen3.jpg";
import "../../src/styles.css";


export default function Primera_imagen() {
  return (
    <div className="imagen3">
     
     <img src={imagenes} alt="" width="400" height="200" />
    
    </div>
  );
}
