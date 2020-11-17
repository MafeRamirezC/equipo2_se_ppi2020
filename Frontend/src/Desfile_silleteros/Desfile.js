import React from "react";
import Primera_imagen from "../Desfile_silleteros/Primera_imagen";
import Segunda_imagen from "../Desfile_silleteros/Segunda_imagen";
import Tercera_imagen from "../Desfile_silleteros/Tercera_imagen";
import Cuarta_imagen from "../Desfile_silleteros/Cuarta_imagen";
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Desfile(){
return(
<>

<div className="Parque">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/par">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal"> Este desfile se realiza en la primera semana de agosto, en la cual nuestros queridos silleteros salen a las calles a hacer recorridos cargando sus silletas llenas de flores y de historia. </h2>
<Segunda_imagen/>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Desfile;
