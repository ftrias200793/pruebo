import React from 'react';
import Menu from './Menu';
import Presentacion from './Presentacion';
import Descripcion from './Descripcion';
import Profesion from './Profesion'
import EducacionyTrabajo from './EducacionyTrabajo'
import GrandesExitos from './GrandesExitos'
import Premios from './Premios'
import InformacionContactoMapa from './InformacionContactoMapa'
import FooterCopyright from './FooterCopyright'
class App extends React.Component  {
  render()
{  return (
<div>
<Menu />
<Presentacion />  
<Descripcion/>
<Profesion />
<EducacionyTrabajo />
<GrandesExitos/>
<Premios />
<InformacionContactoMapa/>
<FooterCopyright/>
</div>
);
}
}
export default App;
