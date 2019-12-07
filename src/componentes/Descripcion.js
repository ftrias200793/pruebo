import React from 'react';
import { Container,Row,Col,Button,ButtonToolbar} from 'react-bootstrap';
import gates from '../imagenes/gates.jpg';
import IcoMoon from "react-icomoon";
class Descripcion extends React.Component {
 render()
 {
    return (
<div>
  <section className="section-padding">
<Container>
<Row>
<Col md="6">
<div className="Datos">
<img id="fotobill" class="img-fluid"  src= {gates}  alt=""/>
   </div>
   </Col>
  <Col md="6">
        <div className="Datos">
  <h3>Hola Chicos!!</h3>
  <p id="Info1">William Henry Gates III nació el 28 de octubre del año 1955 en Seattle, ciudad perteneciente al estado de Washington.El 4 de abril de 1975, siendo aún estudiante en la Universidad de Harvard crea la empresa de software Microsoft.</p>
  <div className="about-profile">
      <ul className="admin">
      <li  ><span className="TextoFuenteColor" > Nombre</span> <span id="Info1">Bill Gates</span></li>
   <br></br>
      <li class="Datos1" ><span className="TextoFuenteColor"  > Edad  </span> <span id="Info1" className="pro-detail">63</span></li>
      <br></br>
      <li ><span className="TextoFuenteColor"  > Experiencia </span> <span id="Info1" className="pro-detail">43 años</span></li>
      <br></br>
      <li i><span className="TextoFuenteColor"  > Pais </span> <span id="Info1" className="pro-detail">USA</span></li>
      <br></br>
      <li ><span className="TextoFuenteColor"  > Location </span> <span id="Info1" className="pro-detail">San Francisco, CA</span></li>
      <br></br>
      <li ><span className="TextoFuenteColor"  > e-mail </span> <span id="Info1" className="pro-detail">bg@microsoft.com</span></li>
      <br></br>
      <li ><span className="TextoFuenteColor"  > Telefono </span> <span id="Info1" className="pro-detail">+(77)43987445</span></li>
      <br></br>
      <li ><span className="TextoFuenteColor"  > Freelance </span> <span id="Info1" className="pro-detail">Disponible</span></li>
      </ul>
      <br></br>
      </div>
      <br></br>
    <div className="boton">
    <ButtonToolbar>
  <Button id="separoBoton" variant="primary"> <IcoMoon id="RedSocial" icon="attachment" />Descargar </Button>
  <Button id="separoBoton" variant="danger"> <IcoMoon id="RedSocial" icon="envelop" />Contacto</Button>
  </ButtonToolbar>
</div>
   </div>
  </Col>
  </Row>
</Container> 
  </section>
</div>
  );
}
}
export default Descripcion;
