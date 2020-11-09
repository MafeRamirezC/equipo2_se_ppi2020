import React from "react";
import imagenes from "../Imagenes/imagen5.jpg";
import "../../src/styles.css";


export default function Terceraimagen() {
  return (
    <div className="imagen5">
     
     <img src={imagenes} alt="" width="300" height="200" />
    
    </div>
  );
}