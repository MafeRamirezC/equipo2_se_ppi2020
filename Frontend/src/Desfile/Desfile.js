import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Desfile(){
return(
<>

<div className="Parque">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/par">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Es un parque publico en la parte central del corregimiento, este cuenta con juegos infantiles,cancha,biblioteca, restaurantes, mercados y casa de la cultura. </h2>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Parque;
