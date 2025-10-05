function Personaje({ nombre, profesion, premios, descubrimiento, imagen }) {
    return (
      <div className="personaje-card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <img 
          src={imagen} 
          alt={nombre} 
          style={{ width: "120px", height: "auto", borderRadius: "8px" }} 
        />
        <div>
          <h2>{nombre}</h2>
          <p><strong>Profesión:</strong> {profesion}</p>
          <p><strong>Premios:</strong> {premios.length}</p>
          <ul>
            {premios.map((premio, i) => (
              <li key={i}>{premio}</li>
            ))}
          </ul>
          <p><strong>Descubrimiento:</strong> {descubrimiento}</p>
        </div>
      </div>
    );
  }
  
  export default Personaje;
  