import React, { useState } from 'react';
import './style.css';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://via.placeholder.com/150']);
  };

  return (
    <div className="gallery-container">
      <h2>Galeria de Imagens</h2>
      <div className="gallery">
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} className="gallery-image" />
        ))}
      </div>
      <button onClick={adicionarImagem} className="add-button">Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens;
