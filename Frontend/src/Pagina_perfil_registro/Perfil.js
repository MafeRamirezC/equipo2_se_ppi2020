import React from "react";
import Primera_imagen from "../Pagina_perfil_registro/Primera_imagen"
import Segunda_imagen from "../Pagina_perfil_registro/Segunda_imagen"
import Tercera_imagen from "../Pagina_perfil_registro/Tercera_imagen"
import Cuarta_imagen from "../Pagina_perfil_registro/Cuarta_imagen"
import "../../src/styles.css";
import {Link} from 'react-router-dom';


function Perfil (){
return(
<>

<div className="Perfil">
<button type="button" class="btn btn-outline-secondary btn-Cult"><Link to="/per">Editar</Link></button>
<Primera_imagen/>
<h2 class="h3 mb-Cult font-weight-normal">Es un hotel,con capacidad de alojar hasta 60 personas ,ofrecemos serivicios  alojamiento,restaurante,caminatas,
spa,planes ambientales para diferentes grupos ,reuniones empresariales y enentos.  Con habitaciones acogedoras y privadas con chimenea, baño privado con agua caliente, cama tipo somier, y televisor. El spa cuenta con una serie de hidroterapias, para eliminar tensiones físicas y psicológicas. baño de lodo , exfoliación, hidratantes, masajes de relajación ,sauna ,jacuzzi, el  resultado final : piel limpia suave más firme una gran sensación de bienestar y relajación  </h2>
<Segunda_imagen/>
<Tercera_imagen/>
<Cuarta_imagen/>
<div className="franja">
<button type="button" class="btn btn-secondary btn-reg">Tel: +574 3227367</button>
<button type="button" class="btn btn-secondary btn-reg">Web:https://www.lamontañamagica.co/home/</button>
</div>


<div className="franja">
<button type="button" class="btn btn-outline-secondary btn-reg"><Link to="/inf">Guardar</Link></button>
</div>
</div>
</>
);

}
export default Perfil;

