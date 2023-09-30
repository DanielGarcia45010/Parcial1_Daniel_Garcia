import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Home() {
  const { t } = useTranslation();

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
        <h2>{t('home')}</h2>
        <p>{t('noPartsAvailable')}</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h2>{t('home')}</h2>
      <div className="parts-list">
        {parts.map((part) => (
          <Link key={part.partName} to={`/detailPart/${encodeURIComponent(part.partName)}`} className="part-link"> 
            <div className="part-card">
              <img src={part.image} alt={part.partName} />
              <h3>{part.partName}</h3>
              <p>{t('carMaker')}: {part.carMaker}</p>
              <p>{t('price')}: {part.price}</p>
              <p>{t('carYear')}: {part.carYear}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

