import React from "react";
import Primera_imagen from "../Cultura/Primera_imagen";
import Segunda_imagen from "../Cultura/Segunda_imagen";
import Tercera_imagen from "../Cultura/Tercera_imagen";
import Cuarta_imagen from "../Cultura/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Compartir(){
return(
<>

<div className="Compartir">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/comp">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Es un ecoparque con hotel ubicado en la vereda Piedras Blancas, en este lugar podemos hacer multiplec actividades para compartor en familia, como jugar, comer , ir al museo y salir en bote. </h2>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Compartir;