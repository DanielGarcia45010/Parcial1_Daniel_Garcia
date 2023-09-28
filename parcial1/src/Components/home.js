import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/DanielGarcia45010/Parcial1_Daniel_Garcia/main/parcial1/datos.json');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const data = await response.json();
        setParts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!parts || parts.length === 0) {
    return (
      <div className="home-container">
        <h2>Home de la Aplicación</h2>
        <p>No hay partes disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h2>Home de la Aplicación</h2>
      <div className="parts-list">
        {parts.map((part, index) => (
          <Link key={index} to={`/detailPart/${index}`} className="part-link">
            <div className="part-card">
              <img src={part.image} alt={part.partName} />
              <h3>{part.partName}</h3>
              <p>Marca: {part.carMaker}</p>
              <p>Precio: {part.price}</p>
              <p>Año del Auto: {part.carYear}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

