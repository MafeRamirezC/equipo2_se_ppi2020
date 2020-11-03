import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Fincas() {
  return (
    <>
      <div className="Fincas">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/fincas">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
          Está ubicada en el Rosario y es administrada por el silletero José
          Ángel Zapata Amariles, cuenta con restaurante donde ofrece gastronomia
          tipica colombiana en un ambiente hermoso lleno de flores.{" "}
        </h2>
        <Tercera_imagen />
        <Cuarta_imagen />

        <button type="button" class="btn btn-secondary btn-Numero">
          Tel: 58097665
        </button>
        <button type="button" class="btn btn-secondary btn-link">
          web: http://silleteros.com/fincas-silleteras/el-pensamiento/
        </button>
      </div>
    </>
  );
}
export default Fincas;
