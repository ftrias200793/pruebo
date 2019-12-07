import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import m1 from '../imagenes/m1.jpg';
import m2 from '../imagenes/m2.jpg';
import m3 from '../imagenes/m3.jpg';
import m4 from '../imagenes/m4.jpg';
import m5 from '../imagenes/m5.jpg';
import m6 from '../imagenes/m6.jpg';
class  GrandesExitos extends React.Component {
 render()
 {
    return (
    <div >
  <section  id="GrandesObras"> 
  <h2 > Sus Exitos </h2>
 <Container>
<Row>
    <Col md={12}>
<div className="BotonFotos">
    <button  id ="BotonFotos1"className="btn btn" type="submit">All</button>
    <input  id ="BotonFotos1"  className="btn btn" type="button" value="Desing"/>
    <input  id ="BotonFotos1" className="btn btn" type="button" value="Development"/>
    <input  id ="BotonFotos1" className="btn btn" type="button" value="Print"/>
</div>
</Col>
</Row>
<Row>
<div  className ="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" data-bound="" >
<div className="contenedorimg">
<img src={m1} alt="" className="estoyimg"/> 
</div>
</div>
<div  className ="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" data-bound="" >
    <div className="contenedorimg ">
   <img src={m2} alt="" className="estoyimg"/>
  </div>
</div>
<div  className ="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" data-bound="" >
 
    <div className="contenedorimg ">
   <img src={m3} alt="" className="estoyimg"/>
  </div>
</div>
<div  className ="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" data-bound="" >
    <div className="contenedorimg ">
   <img src={m4} alt="" className="estoyimg"/>
  </div>
</div>
<div  className ="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" data-bound="" >
    <div className="contenedorimg ">
   <img src={m5} alt="" className="estoyimg"/>
  </div>
</div>
<div  className ="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" data-bound="" >
    <div className="contenedorimg ">
   <img src={m6} alt="" className="estoyimg"/>
  </div>
</div>
 </Row>
    </Container>
     </section>
    </div>
  );
}
}
export default GrandesExitos;
