import React from 'react';

const Filter = props => {
  const {
    label,
    type,
    value,
    onChange,
    className,
  } = props;

  return (
    <span className={className}>
      <span className="name">{label}</span>
      {
        type === "text"
          ? <input className="input" type={type} value={value} onChange={getOnChange(type, onChange)} />
          : <input className="input" type={type} checked={value} onChange={getOnChange(type, onChange)} />
      }
    </span>
  );
}

const getOnChange = (type, filter) => {
  if (type === "text") {
    return event => filter(event.target.value);
  } else if (type === "checkbox") {
    return event => filter(event.target.checked)
  } else {
    throw new Error(`Unknown filter type: '${type}'`);
  }
}

export default Filter;
