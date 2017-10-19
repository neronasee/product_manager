import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import './index.css';

function ColoredCheckbox({ color, handleChange, checked }) {
  return (
    <div>
      <Checkbox checked={checked} onClick={handleChange} />
      <div style={{ background: color }} className="color-circle" />
    </div>
  );
}

export default ColoredCheckbox;
