import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alummnos sobre freeCodeCamp:</h1>
            <Testimonio 
              nombre='Sho Wang'
              pais='Singapur'
              imagen='sho'
              cargo='Ingeniero de Software'
              empresa='Amazon'
              testimonio='Puedes agregar atributos a tus elementos en JSX para especificar ciertas caracteristicas, pero algunos atributos se escriben de forma distintas si los comparamos con HTML, class <--- es reservado para JS se debe de escribir (className) para que no presente un error.' 
              />
              <Testimonio 
              nombre='Sara Chima'
              pais='Nigeria'
              imagen='sara'
              cargo='Ingeniera de Software'
              empresa='ChatDesk'
              testimonio='Que es DOM: Modelos de Objeto en Documento (Document Object Model)
              es basicamente una representacion en el navegador de todos los elementos que conforman una pagina o aplicacion web.' 
              />
            <Testimonio 
              nombre='Emma Bostian'
              pais='Suecia'
              imagen='ema'
              cargo='Ingeniero de Software'
              empresa='Spotify'
              testimonio='primero se usa la plabra clave (class) luego el nombre del componente (Saludo) y luego hay que extender algo especifico (extends React.Component) para tener todas las propiedades de un componente de React y todas las funcionalidades de ello.' 
              />
        </div>
      </div>
    );
  }
}

export default App;