import React from "react";
import Primera_imagen from "../Parque/Primera_imagen";
import Segunda_imagen from "../Parque/Segunda_imagen";
import Tercera_imagen from "../Parque/Tercera_imagen";
import Cuarta_imagen from "../Parque/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Park() {
  return (
    <>
      <div className="Fincas">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/fincas">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
        Es un parque publico en la parte central del corregimiento, este cuenta con juegos infantiles,cancha,biblioteca, restaurantes, mercados y casa de la cultura.{" "}
        </h2>
       <Segunda_imagen/>
        <Tercera_imagen />
        <Cuarta_imagen />

       
      </div>
    </>
  );
}
export default Park;
