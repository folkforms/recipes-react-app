import React from 'react';
import "./RecipeView.css";

const RecipeView = props => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div>
            FIXME Display recipe '{props.recipe.name}' here
          </div>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default RecipeView;
