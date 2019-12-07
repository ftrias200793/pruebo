import React from 'react';
import { Container} from 'react-bootstrap';
import IcoMoon from "react-icomoon";
class Menu extends React.Component {
 render()
 {
    return (
    <div >
<nav id="menucentra" className="navbar navbar-expand-lg navbar-light bg-light " >
 <Container>
       <a id="logo" className="text-center  icon-user" href="#"><IcoMoon id="icovisitas" icon="user" />MeetMe</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" >
        <div  className="nav ml-auto ">
            <a className="nav-item nav-link active" href="#">HOME <span class="sr-only">(current)</span></a>
            <a id="colorico" className="nav-item nav-link" href="#">ABOUT</a>
            <a id="colorico"  className="nav-item nav-link" href="#">SERVICES</a>
            <a id="colorico" className="nav-item nav-link" href="#">RESUME</a>
            <a id="colorico"  className="nav-item nav-link" href="#">WORK</a>
            <a id="colorico"  className="nav-item nav-link" href="#">CONTACT</a>
          </div>
         </div>
        </Container>
      </nav>
    </div>
  );
}
}
export default Menu;
