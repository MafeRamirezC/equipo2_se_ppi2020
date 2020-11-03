import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Alimentacion(){
return(
<>

<div className="Alimentacion">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/alim">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal"> Es un lugar muy agradable , el cual nos presenta maravillosos 
platos tipicos colombianos hechos a la leña. Un espacio ideal para compartir con los mas pequeños de la casa </h2>
<Tercera_imagen/>
<Cuarta_imagen/>

<button type="button" class="btn btn-secondary btn-Numero">Tel:+57 538972133</button>
<button type="button" class="btn btn-secondary btn-link">Web:https://www.lamontañita.co</button>

</div>
</>
);

}
export default Alimentacion;