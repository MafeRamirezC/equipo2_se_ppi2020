import React from "react";
import Primera_imagen from "../Hotel/Primera_imagen";
import Segunda_imagen from "../Hotel/Segunda_imagen";
import Tercera_imagen from "../Hotel/Tercera_imagen";
import Cuarta_imagen from "../Hotel/Cuarta_imagen";
import "../../src/styles.css";
import { Link } from "react-router-dom";

function Hotel() {
  return (
    <>
      <div className="Hoteles">
        <button type="button" class="btn btn-outline-secondary btn-Cult">
          <Link to="/hoteles">Volver</Link>
        </button>
        <Primera_imagen />
        <h2 class="h3 mb-Cult font-weight-normal">
        Es un  hotel, con capacidad de alojar hasta 60 personas, ofrecemos servicio de alojamiento, restaurante,
         caminatas, spa, planes ambientales para diferentes grupos, reuniones empresariales y eventos.
Con habitaciones acogedoras y privadas con chimenea, baño privado con agua caliente, cama tipo somier, y 
televisor. El spa cuenta con  una serie de hidroterapias, para eliminar tensiones físicas y psicológicas. 
Bañó de lodo, exfoliantes, hidratante, masaje de relajación, sauna, jacuzzi. El resultado final: piel limpia, 
suave, más firme, y una gran sensación de bienestar y relajación..{" "}
        </h2>
        <Segunda_imagen />
        <Tercera_imagen />
        <Cuarta_imagen />
<div className="franja">
        <button type="button" class="btn btn-secondary btn-Numero">
          Tel: 58097665
        </button>
        <button type="button" class="btn btn-secondary btn-link">
          web: www.montañamagica.co
        </button>
        </div>
      </div>
    </>
  );
}
export default Hotel;