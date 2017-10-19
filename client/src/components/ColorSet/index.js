import React from 'react';
import './index.css';

function ColorCircle({ colors }) {
  return <ul className="color-list">{renderColorSet(colors)}</ul>;
}

export default ColorCircle;

function renderColorSet(colors) {
  return colors.map(color => (
    <li style={{ background: color }} key={color} className="color-circle" />
  ));
}
