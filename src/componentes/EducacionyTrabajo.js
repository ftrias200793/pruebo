import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import IcoMoon from "react-icomoon";

class EducacionyTrabajo extends React.Component {
 render()
 {
    return (
    <div >
     <div className="EduTra">
     <Container>
    < Row>
     <Col md="6"> 
  <div>
  <ul className="list-group">
    <li> 
      <div id="iconoprue">
    <IcoMoon id="IconoTitu" icon="office" /> 
    </div>
   <i id="IconoTitu" className=" icon-graduation-cap"> </i>
       <h3 id="TituloIco">Educacion</h3> 
      </li>
    <li id="list" className="list-group-item">
    <div id="contenidoET">
     <h3 id="TitulosET">Universidad de Harvard </h3>
    <span id="TitulosETfecha"  >
      1973-1975
    </span>
   <p id="EducacionTrabajoP"> Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
  </div>
</li>
 <li id="list" className="list-group-item"> 
      <div id="contenidoET">
      <h3 id="TitulosET" >Lakeside School day  </h3>
      <span id="TitulosETfecha" >
        1967-73
      </span >
     <p id="EducacionTrabajoP"> Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
   </div>
  </li>
      <li id="list" className="list-group-item">
        <div id="contenidoET">
            <h3 id="TitulosET" >Lakeside School   </h3>
          <span id="TitulosETfecha"  >
          1967-70
        </span>
       <p id="EducacionTrabajoP"> Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
      </div>
      </li>
  </ul>
</div>
</Col>
<Col md="6" id="ET">
  <ul className="list-group">
    <li> 
   <i  id="IconoTitu" className=" icon-briefcase"> </i>
   <IcoMoon id="IconoTitu" icon="briefcase" /> 
       <h3 id="TituloIco">Trabajo</h3> 
      </li>
    <li id="list" className="list-group-item">
    <div id="contenidoET">
     <h3 id="TitulosET">Fundación Bill y Melinda Gates </h3>
    <span id="TitulosETfecha"  >
      2000-Actual
    </span>
   <p id="EducacionTrabajoP"> Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
  </div>
</li>
 <li id="list" className="list-group-item"> 
      <div id="contenidoET">
      <h3 id="TitulosET" >Director Microsoft  </h3>
      <span id="TitulosETfecha" >
        1975-2000
      </span >
     <p id="EducacionTrabajoP"> Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
   </div>
  </li>
      <li id="list" className="list-group-item">
        <div id="contenidoET">
            <h3 id="TitulosET" >Desarrolador -Altair BASIC   </h3>
          <span id="TitulosETfecha"  >
            1975
        </span>
       <p id="EducacionTrabajoP"> Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
      </div>
      </li>
  </ul>
</Col>
</Row>
</Container>
</div>
    </div>
  );
}
}
export default  EducacionyTrabajo;
