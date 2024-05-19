import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleClick = (value) => {
    setExpressao(expressao + value);
  };

  const calcularResultado = () => {
    try {
      const resultadoCalculado = eval(expressao);
      setResultado(resultadoCalculado);
    } catch (error) {
      setResultado('Erro');
    }
  };

  const limparTudo = () => {
    setExpressao('');
    setResultado('');
  };

  return (
    <div className="calculator">
      <h2>Calculadora Simples</h2>
      <input
        type="text"
        value={expressao}
        readOnly
        className="calculator-display"
      />
      <div className="calculator-buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/', '='].map((value) =>
          value === '=' ? (
            <button key={value} onClick={calcularResultado} className="button-equal">{value}</button>
          ) : (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          )
        )}
        <button onClick={limparTudo} className="button-clear">C</button>
      </div>
      <div className="calculator-result">
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
}

export default Calculadora;