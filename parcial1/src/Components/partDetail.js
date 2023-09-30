import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

function DetailPart() {
  const { t } = useTranslation();
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
        <h2>{t('partDetail')}</h2>
        <p>{t('loading')}</p>
      </div>
    );
  }

  return (
    <div className="partDetail">
      <h2>{t('partDetail')}</h2>
      <img src={part.image} alt={part.partName} />
      <p>{t('partName')}: {part.partName}</p>
      <p>{t('carMaker')}: {part.carMaker}</p>
      <p>{t('carModel')}: {part.carModel}</p>
      <p>{t('carYear')}: {part.carYear}</p>
      <p>{t('description')}: {part.description}</p>
      <p>{t('price')}: {part.price}</p>
    </div>
  );
}

export default DetailPart;
