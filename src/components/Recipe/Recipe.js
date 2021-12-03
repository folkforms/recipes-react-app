import React from 'react';
import './Recipe.css';
import RecipeHeader from './RecipeHeader';
import RecipeBody from './RecipeBody';

const Recipe = props => {
  const { recipe } = props;
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <RecipeHeader name={recipe.name} onClose={props.onClose} />
          <RecipeBody recipe={recipe} />
        </div>
      </div>
    </>
  );
}

export default Recipe;
