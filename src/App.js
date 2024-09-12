import "./App.css";
import Inventario from "./Components/Inventario";
import Ingresos from "./Components/Ingresos";
import Reservas from "./Components/Reservas";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import AtencionCliente from "./Components/AtencionCliente";

function App() {
  return (
    <div className="App">
      <Inventario />
      <Ingresos />
      <Reservas />
      <Testimonial />
      <Contact />
      <AtencionCliente />
    </div>
  );
}

export default App;
