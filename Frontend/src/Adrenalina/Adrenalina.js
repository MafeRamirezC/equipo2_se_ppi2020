import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Adrenalina(){
return(
<>

<div className="Adrenalina">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/adr">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Comfama nos brinda espacios para compartir en familia y con amigos en sus amplios lugares naturales y sus multiples atracciones como lo son los circuitos de canopy, que cuentan con distintos niveles ,para los mas pequeños y los expertos. </h2>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Adrenalina;