import React from 'react';

const Recipe = props => {
  return (
    <div className="recipe">
      {props.recipe.name}
    </div>
  );
}

export default Recipe;
