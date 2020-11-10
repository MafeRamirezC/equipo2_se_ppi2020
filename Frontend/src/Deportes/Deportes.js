import React from "react";
import Primera_imagen from "../Deportes/Primera_imagen";
import Segunda_imagen from "../Deportes/Segunda_imagen";
import Tercera_imagen from "../Deportes/Tercera_imagen";
import Cuarta_imagen from "../Deportes/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Deportes(){
return(
<>

<div className="Deportes">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/dep">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Esta cancha sintética está ubicada en el parque central al lado del Coliseo y se presenta para jugar rugby y fútbol, es un espacio muy agradable para jugar con amigos y familiares </h2>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Deportes;