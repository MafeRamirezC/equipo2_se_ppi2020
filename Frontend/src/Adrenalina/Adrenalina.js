import React from "react";
import Primera_imagen from "../Adrenalina/Primera_imagen";
import Segunda_imagen from "../Adrenalina/Segunda_imagen";
import Tercera_imagen from "../Adrenalina/Tercera_imagen";
import Cuarta_imagen from "../Adrenalina/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Adrenalina() {
  return (
    <>
      <div className="Hoteles">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/adre">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
        Comfama nos brinda espacios para compartir en familia y con amigos en sus lugares naturales y múltiples atracciones como las que son los circuitos de canopy, que cuentan con distintos niveles, para los más pequeños y expertos.{" "}
        </h2>
        <Segunda_imagen />
        <Tercera_imagen />
        <Cuarta_imagen />

      </div>
    </>
  );
}
export default Adrenalina;