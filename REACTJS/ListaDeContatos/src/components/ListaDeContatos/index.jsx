// ListaDeContatos.js

import React, { useState } from 'react';
import './ListaDeContatos.css';

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  return (
    <div className="container">
      <h2>Lista de Contatos</h2>
      <div className="input-group">
        <input
          className="input-nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          className="input-telefone"
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <button className="btn-adicionar" onClick={adicionarContato}>
          Adicionar Contato
        </button>
      </div>
      <ul className="contatos-list">
        {contatos.map((contato, index) => (
          <li key={index} className="contato-item">
            <strong>{contato.nome}:</strong> {contato.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos;
