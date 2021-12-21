import React from 'react';

const Filter = props => {
  const {
    label,
    type,
    value,
    onChange,
    className,
  } = props;

  const specificOnChange = getOnChange(type, onChange);

  return (
    <span className={`${type} ${className}`}>
      {type === "text"
        ? <>
            <span className="name">{label}</span>
            <input className="input" type={type} value={value} onChange={specificOnChange} />
          </>
        : <>
            <input className="input" type={type} checked={value} onChange={specificOnChange} />
            <span className="name">{label}</span>
          </>
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
