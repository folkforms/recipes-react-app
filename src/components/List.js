import React from 'react';
import Recipe from './Recipe';

const List = props => {
  return (
    <>
      <div>Recipes ({props.recipes.length})</div>
      <div className="recipe-list">
        {props.recipes.map(recipe => 
          <Recipe recipe={recipe} key={recipe.filename} />
        )}
      </div>
    </>
  );
}

export default List;
