
import React, {Component} from 'react';
//Importo componente de seleccion de fecha, con registerlocale le doy el formato de fecha en español
import DatePicker,{registerLocale} from "react-datepicker";
//Le doy la ruta de donde tiene el estilo css
import "react-datepicker/dist/react-datepicker.css";
//Importo la libreria de datepicker en español
import es from 'date-fns/locale/es';
//asigno alias a registerlocale
registerLocale("es",es);



class  ComponenteFecha extends React.Component {
    state= {
      fecha: new Date("2021","08","25")
    }
    onchange = fecha=>{
      this.setState({fecha:fecha});
    }
  
    mostrarFecha = fecha=>{
      const options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
      alert(fecha.toLocaleDateString('es-ES', options));
  
  }
    render() {
      return (
        <>
        <div className= "contenedor">
        <div className= "center">
        <header>
          
         <p>
        Seleccione una fecha
        </p>
        <DatePicker selected={this.state.fecha} onChange = {this.onchange} locale= "es" className = "formato" dateFormat= "dd-MM-yyyy" />
        <br />
        <input type= 'button' value= 'Confirmar' className = 'btn btn-primary' onClick={()=>this.mostrarFecha(this.state.fecha)}/>
        </header>
        </div>
        </div>
        </>
  
      );
    }
  }
  
  

  export default ComponenteFecha;