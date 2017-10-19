import React from 'react';
import ColoredCheckbox from './ColoredCheckbox';

function ColorPicker({ colors, handleColorChange }) {
  return <div>{renderCheckboxes(colors, handleColorChange)}</div>;
}

function renderCheckboxes(colors, handleColorChange) {
  return Object.keys(colors).map(color => {
    const checked = colors[color];

    return (
      <ColoredCheckbox
        color={color}
        key={color}
        checked={checked}
        handleChange={() => handleColorChange(color)}
      />
    );
  });
}

export default ColorPicker;
