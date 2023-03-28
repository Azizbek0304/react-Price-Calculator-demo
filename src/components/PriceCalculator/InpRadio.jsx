import React, { useState } from 'react';
import './pricecalc.css';

function InpRadio({ defaultName, name, text, idlab }) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const handleClick = (e) => {
    setToggleBtn(document.getElementById(e.target.value).checked);
    console.log(toggleBtn);
  };
  return (
    <label
      onClick={handleClick}
      htmlFor={defaultName}
      className="typeLabel"
      id={idlab}
    >
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
