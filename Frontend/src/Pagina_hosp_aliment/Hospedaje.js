import React from "react";
import Primera_imagen from "../Pagina_hosp_aliment/Primera_imagen"
import Segunda_imagen from "../Pagina_hosp_aliment/Segunda_imagen"
import Tercera_imagen from "../Pagina_hosp_aliment/Tercera_imagen"
import {Link} from 'react-router-dom';

function Hospedaje (){
return(
<>

<div className="Hospedaje">

<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/hosp">Volver</Link></button>
<h1  class="h3 mb-Cultura font-weight-center">Hospedaje y Alimentacion </h1>
<h2 class="h3 mb-Cult  font-weight-normal">En el corregimiento contamos con una gran variedad de restaurantes y hoteles que puedes visitar en cualquier temporada,también contamos con espacios que pueden ser perfectos para ir de camping con tu familia y amigos estos maravillosos lugares los podemos encontrar por todo Santa Elena y en cualquier temporada del año. </h2>
<button type="button" class="btn btn btn-outline-success btn-1"><Link to="/alimentacion">Alimentacion</Link></button>
<Primera_imagen/>
<button type="button" class="btn btn-secondary btn-restaurante">Restaurante</button>
<Segunda_imagen/>
<button type="button" class="btn btn btn-outline-success btn-1"><Link to="/camping">Camping</Link></button>
<Tercera_imagen/>
<h2 class="h3 mb-Cultura font-weight-center">....</h2>
</div>
</>
);

}
export default Hospedaje 

