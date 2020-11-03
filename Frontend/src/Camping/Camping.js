import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Camping() {
  return (
    <>
      <div className="Camping">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/camp">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
        Es un campamento dividido en cabañas ubicado en piedras blancas.
        Cabañas acogedoras, bien diseñadas, con buena vista y exelente servicio.{" "}
        </h2>
        <Tercera_imagen />
        <Cuarta_imagen />

        <button type="button" class="btn btn-secondary btn-Numero">
          Tel: 580476334
        </button>
        <button type="button" class="btn btn-secondary btn-link">
          web: www.entrearboles.co/
        </button>
      </div>
    </>
  );
}
export default Camping;
