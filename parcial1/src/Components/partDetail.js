import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailPart() {
  const { partName } = useParams();
  const [part, setPart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/DanielGarcia45010/Parcial1_Daniel_Garcia/main/parcial1/datos.json');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const data = await response.json();

        const selectedPart = data.parts.find((part) => part.partName === partName);

        setPart(selectedPart);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [partName]);

  if (!part) {
    return (
      <div className="partDetail">
        <h2>Detalle de la Parte</h2>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="partDetail">
      <h2>Detalle de la Parte</h2>
      <img src={part.image} alt={part.partName} />
      <p>Part Name: {part.partName}</p>
      <p>Car Maker: {part.carMaker}</p>
      <p>Car Model: {part.carModel}</p>
      <p>Car Year: {part.carYear}</p>
      <p>Description: {part.description}</p>
      <p>Price: {part.price}</p>
    </div>
  );
}

export default DetailPart;
