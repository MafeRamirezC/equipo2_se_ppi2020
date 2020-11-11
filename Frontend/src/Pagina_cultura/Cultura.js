import React from "react";
import Primera_imagen from "../Pagina_cultura/Primera_imagen";
import Segunda_imagen from "../Pagina_cultura/Segunda_imagen";
import Tercera_imagen from "../Pagina_cultura/Tercera_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Cultura() {
  return (
    <>
      <div className="cultura">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/cul">Volver</Link>
        </button>
        <h2 class="h3 mb-Cult font-weight-normal">
          En el corregimiento contamos con una cultura muy llamativa como lo es
          la feria de las flores y, algunos lugares que podras visitar son.{" "}
        </h2>

<div className="franja">
        <button type="button" class="btn btn btn-outline-success btn-1"><Link to="/cultu">Fincas silleteras</Link></button>
        <Primera_imagen />
        <button type="button" class="btn btn btn-outline-success btn-1"><Link to="/parque">Parque</Link></button>
        <Segunda_imagen />
        <button type="button" class="btn btn btn-outline-success btn-1"><Link to="/desfile">Desfile de silleteros</Link></button>
</div>

        <Tercera_imagen />
        <h2 class="h3 mb-Cultura font-weight-center">....</h2>
      </div>
    </>
  );
}
export default Cultura;
//<button class="btn btn-secondary btn-block" type="submit">Fincas silleteras</button>
