import React from 'react';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import IcoMoon from "react-icomoon";
import mapa from '../imagenes/mapa.jpg';
class InformacionContactoMapa extends React.Component {
 render()
 {
    return (
    <div>
     <section id="seccion-formulario-contacto">
     <div id="contacto-formulario">
      <Container>
     <Row>
     <div id="muevoformu" >  
     <h2 id="Titulocontacto">Contacto</h2>
<Col md={12}>    
       <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" placeholder="Nombre" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="password" placeholder="Email" />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGridAddress1">
    <Form.Control placeholder="Subject" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="6" placeholder="Message"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
</div> 
    <Col md={6}>
       <h2>Direccion de Contacto</h2>
        <div id="contengo"> 
        <div className="single-contact">
   <div ClassName="contact-icon">
       <IcoMoon id="icocontacto" icon="phone" />
       <p>+(77)98563571</p>
          <p>+(77)43987445</p>
          </div> 
           </div>
           <div className="single-contact">
   <div ClassName="contact-icon">
    <IcoMoon id="icocontacto"  icon="mail4" />
    <p>bg@microsoft.com</p>
        <p>rrhh@microsoft.com</p>
        </div>
        </div>
        <div className="single-contact">
   <div ClassName="contact-icon">
        <IcoMoon id="icocontacto" icon="location" />   
        <p>San Francisco, CA</p>
        </div>
        </div>
          </div>
     </Col>
     <div id="conmapa" className="col-md-12"> 
<img src={mapa} alt="" id="mapa"/>
</div>
</Row>
 </Container>
 </div>
</section>
    </div>
  );
}
}
export default InformacionContactoMapa;
