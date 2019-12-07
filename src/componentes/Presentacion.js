import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import IcoMoon from "react-icomoon";
class Presentacion extends React.Component {
 render()
 {
    return (
<div>
<div id="hero-area" className="position-center">
 <div id="ContedorPresentacionIconos" >
<Container>
<Row>
<Col md="12">
<div className="ContenidoIconos">
<div className="Presentacion">
<h3 id="presenta" className="card-title ">Hola les presento a </h3>
<h1 id="presentanombre" className="card-title">Bill Gates</h1>
<p id="presentaesc" className="card-text">Programador y emprendedor</p> 
<div class="RedSocial" className>
<IcoMoon id="RedSocial" icon="facebook2"/>
<IcoMoon id="RedSocial" icon="linkedin"/>
<IcoMoon id="RedSocial" icon="instagram"/>
<IcoMoon id="RedSocial" icon="google"/>
<IcoMoon id="RedSocial" icon="twitter" />
</div>
<a id="botonGO" href="#" className="btn btn-primary btn-lg">Go somewhere</a>
</div>
</div>
</Col>
</Row>
</Container>
</div>
</div>
</div>
  );
}
}
export default Presentacion;
