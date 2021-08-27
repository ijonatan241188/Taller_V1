

import './assets/css/App.css';
import './assets/css/login.css';





function App() {

  return (
    
    <div className="App">
  <h1 className="titlepage">Bienvenido a Tu Taller</h1>  
    
  
  <form name="form" class="form-box animated fadeInUp" action="inicio.html">
    <h1 class="form-title">Iniciar Sesión</h1>
    <input type="text" name="Username" placeholder="Email"/>
    <input type="password" name="password" placeholder="password"/>
    <input type= "button" value="Login"></input>
    
    <a href="Recuperar.js">Recuperar Contraseña</a> <br/>
      <a href="Recuperar.js">Recuperar Usuario</a>
          
  </form>


  
  



    </div>



  );
}




export default App;