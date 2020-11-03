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

<div className="Desfile">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/des">Volver</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Este desfile se realiza en la primera semana de agosto, en la cual nuestros queridos silleteros salen a las calles a hacer recorridos cargando sus silletas llenas de flores, las cuales realizan ellos mismos para llevarle alegria a la comunidad y participar en concursos. </h2>
<Tercera_imagen/>
<Cuarta_imagen/>


</div>
</>
);

}
export default Desfile;
