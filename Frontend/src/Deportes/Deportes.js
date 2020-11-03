import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Deportes(){
return(
<>

<div className="Deportes">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/dep">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Esta cancha sintètica està ubicada en el parque central al lado del coliseo y se presta para jugar rugby y futbol, es un espacio muy agradable para jugar con amigos y familia. </h2>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Deportes;