import React from "react";
import Primera_imagen from "../Camping/Primera_imagen";
import Segunda_imagen from "../Camping/Segunda_imagen";
import Tercera_imagen from "../Camping/Tercera_imagen";
import Cuarta_imagen from "../Camping/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Camping() {
  return (
    <>
      <div className="Hoteles">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/hoteles">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
        Es un campamento dividido en cabañas ubicado en piedras blancas .Son cabañas acogedoras, bien diseñadas, con buena Vista y excelente servicio.{" "}
        </h2>
        <Segunda_imagen />
        <Tercera_imagen />
        <Cuarta_imagen />

      </div>
    </>
  );
}
export default Camping;
