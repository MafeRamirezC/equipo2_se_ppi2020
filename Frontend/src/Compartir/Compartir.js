import React from "react";
import Primera_imagen from "../Compartir/Primera_imajen";
import Segunda_imagen from "../Compartir/Segunda_imagen";
import Tercera_imagen from "../Compartir/Tercera_imagen";
import Cuarta_imagen from "../Compartir/Cuarta_Imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Compartir(){
return(
<>

<div className="Compartir">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/comp">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">es un ecoparque con hotel ubicado en la vereda piedras blancas en este lugar podemos hacer múltiples actividades para compartir en familia cómo jugar comer y almorzar y saliente en el bote. </h2>
<Segunda_imagen/>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Compartir;