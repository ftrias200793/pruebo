import React from 'react';
import { Container,Row,Col,Button,ButtonToolbar} from 'react-bootstrap';
//import imagen1 from '../imagenes/imagen1.jpg';
//import gates from '../imagenes/gates.jpg';
import IcoMoon from "react-icomoon";
class Profesion extends React.Component {
 render()
 {
return (
<div>
<section id="servicios"  >
<h2 className="titulo">Lo que hace  </h2>
<Container>
<Row>
<div id="cuadrodeloquehace" class="col-md-6 col-lg-3 col-xs-12 text-center " id="c1">
<div id="contenido">
<IcoMoon className="iconos" icon="laptop" />
<div className="front">
<h3>
<a id="titcubo" href="">Development</a>
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
</div>
</div>
</div>
<div id="cuadrodeloquehace" className="col-md-6 col-lg-3 col-xs-12 text-center " id="c1">
<div id="contenido">
<IcoMoon className="iconos" icon="stack" />
<div className="front">
<h3>
<a id="titcubo" href="">Graphic Design</a>
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
</div>
</div>
</div>
<div id="cuadrodeloquehace" className="col-md-6 col-lg-3 col-xs-12 text-center " id="c1">
<div id="contenido">
<IcoMoon className="iconos" icon="briefcase" />
<div className="front">
<h3>
<a id="titcubo" href="">Business Branding</a>
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
</div>
</div>
</div>
<div id="cuadrodeloquehace" className="col-md-6 col-lg-3 col-xs-12 text-center " id="c1">
<div id="contenido">
<IcoMoon className="iconos" icon="briefcase" />
<div className="front">
<h3>
<a id="titcubo" href="">Consultancy</a>
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
</div>
</div>
</div>
</Row>
</Container>
</section>
</div>
  );
}
}
export default Profesion;