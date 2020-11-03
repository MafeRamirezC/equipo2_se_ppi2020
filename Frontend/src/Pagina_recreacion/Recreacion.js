import React from "react";
import Primera_imagen from "../Pagina_recreacion/Primera_imagen"
import Segunda_imagen from "../Pagina_recreacion/Segunda_imagen"
import Tercera_imagen from "../Pagina_recreacion/Tercera_imagen"
import {Link} from 'react-router-dom';

function Recreacion (){
return(
<>

<div className="Recreacion">

<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/reg">Volver</Link></button>
<h1 class="h3 mb-Cultura font-weight-center">Recreacion </h1>
<h2 class="h3 mb-Cult font-weight-normal"> En el corregimiento podemos encontrar muchos espacios recreativos para que compartas con tus amigos o familiares,lo bueno de esto es que puedes escoger que quieres explorar y conocer de acuerdo con tus deseos, en Santa Elena podemos encontrar desde espacios deportivos,zonas de adrenalina y zonas tranquilas para compartir un espacio muy agradable.</h2>

<button type="button" class="btn btn btn-outline-success btn-1"><Link to="/adrenalina">Adrenalina</Link></button>
<Primera_imagen/>
<button type="button" class="btn btn btn-outline-success btn-1"><Link to="/deportes">deportes</Link></button>
<Segunda_imagen/>
<button type="button" class="btn btn btn-outline-success btn-1"><Link to="/compartir">Compartir</Link></button>
<Tercera_imagen/>

<h2 class="h3 mb-Cultura font-weight-center">....</h2>
</div>
</>
);

}
export default Recreacion 
