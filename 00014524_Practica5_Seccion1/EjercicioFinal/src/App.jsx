import { personajes } from './datos';
import Personaje from './Personaje';
import './App.css';


function App() {
  return (
    <div>
      <h1>Ejercicio Final – Guía 5</h1>
      <h3>Personajes Notables</h3>
      {personajes.map((p, i) => (
        <Personaje
          key={i}
          nombre={p.nombre}
          profesion={p.profesion}
          premios={p.premios}
          descubrimiento={p.descubrimiento}
          imagen={p.imagen} 
        />
      ))}
    </div>
  );
}

export default App;