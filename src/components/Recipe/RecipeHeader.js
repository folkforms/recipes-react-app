import React from 'react';
import './RecipeHeader.css';

const RecipeHeader = props => {
  const { name, onClose } = props;
  return (
    <>
      <div className="recipe-header">
        <div className="title">{name}</div>
        <div className="close-button">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default RecipeHeader;
