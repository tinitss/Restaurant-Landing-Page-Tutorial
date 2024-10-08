import "./App.css";
import Inventario from "./Components/Inventario";
import Ingresos from "./Components/Ingresos";
import Reservas from "./Components/Reservas";
import Servicios from "./Components/Servicios";
import Desarrolladores from "./Components/Desarrolladores";
import Contacto from "./Components/Contacto";
import AtencionCliente from "./Components/AtencionCliente";

function App() {
  return (
    <div className="App">
      <Inventario />
      <Ingresos />
      <Reservas />
      <Servicios />
      <Desarrolladores />
      <Contacto />
      <AtencionCliente />
    </div>
  );
}

export default App;
