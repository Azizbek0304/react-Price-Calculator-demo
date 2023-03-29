import React from 'react';
import './pricecalc.css';

function InpRadio({ defaultName, name, text, idlab, checked }) {
  const handleClick = (e) => {
    checked = document.getElementById(e.target.value).checked;
    console.log(checked);
  };
  return (
    <label htmlFor={defaultName} className="typeLabel" id={idlab}>
      {text}
      <input
        onChange={(e) => handleClick(e)}
        type="radio"
        name={name}
        id={defaultName}
        value={defaultName}
        className="form-check-input"
      />
    </label>
  );
}

export default InpRadio;
