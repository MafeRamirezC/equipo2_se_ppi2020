import React from "react";
import Primera_imagen from "../Restaurante/Primera_imagen";
import Segunda_imagen from "../Restaurante/Segunda_imagen";
import Tercera_imagen from "../Restaurante/Tercera_imagen";
import Cuarta_imagen from "../Restaurante/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Restaurante() {
  return (
    <>
      <div className="Hoteles">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/restauran">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
        es un lugar muy agradable el cual nos presenta maravillosos platos típicos colombianos hecho leña. Un espacio del para compartir con los más pequeños de la casa{" "}
        </h2>
        <Segunda_imagen />
        <Tercera_imagen />
        <Cuarta_imagen />

      </div>
    </>
  );
}
export default Restaurante;