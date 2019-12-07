import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import IcoMoon from "react-icomoon";
class FooterCopyright extends React.Component {
 render()
 {
    return (
    <div >
     <footer id="ultimocontenido">
         <Container>
 <Row>
    <Col md={12}>
     <div  className="text-center">
        <IcoMoon id="RedSocial" icon="facebook2" />
              <IcoMoon id="RedSocial" icon="linkedin" />
                <IcoMoon id="RedSocial" icon="instagram" />
                <IcoMoon id="RedSocial" icon="google" />
                <IcoMoon id="RedSocial" icon="twitter" />
        <p>Copyright © 2019 FRT All Right Reserved</p>
     </div>
     </Col>
  </Row>
</Container>
 </footer>
    </div>
  );
}
}
export default FooterCopyright;