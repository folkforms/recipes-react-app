import React from 'react';
import './RecipeHeader.css';

const RecipeHeader = props => {
  const { name, onClose } = props;
  return (
    <>
      <div className="recipe-header">
        <div className="title">{name}</div>
        <div className="modal-close-button">
          <button onClick={onClose}>&times;</button>
        </div>
      </div>
    </>
  );
}

export default RecipeHeader;
