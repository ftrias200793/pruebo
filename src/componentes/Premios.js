import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import IcoMoon from "react-icomoon";
class Premios extends React.Component {
 render()
 {
    return (
<div>
<section id="premios">
<Container>
<Row>
<Col md ={3}>
<div ClassName="col-md-3 col-sm-6 work-counter-widget text-center">
<div ClassName="contenido">
<div id="icon">
<IcoMoon id="icovisitas" icon="briefcase" />
</div>
<div id="cantsegun"> 250</div>
<p id="cantsegun">Project Working</p>
</div>
</div>
</Col>
<Col md ={3}>
<div ClassName="col-md-3 col-sm-6 work-counter-widget text-center">
<div ClassName="contenido">
<div id="icon">
<IcoMoon id="icovisitas" icon="checkmark" />
</div>
<div id="cantsegun"> 950</div>
<p id="cantsegun">Project Done</p>
</div>
</div>
</Col>
<Col md ={3}>
<div ClassName="col-md-3 col-sm-6 work-counter-widget text-center">
<div ClassName="contenido">
<div id="icon">
<IcoMoon id="icovisitas" icon="star-full" />
 </div>
 <div id="cantsegun"> 150</div>
<p id="cantsegun">Awards Received</p>
</div>
</div>
 </Col>
 <Col md ={3}>
<div ClassName="col-md-3 col-sm-6 work-counter-widget text-center">
<div ClassName="contenido">
<div id="icon">
<IcoMoon id="icovisitas" icon="heart" />
</div>
<div id="cantsegun"> 250</div>
<p id="cantsegun">Project Working</p>
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
export default Premios;