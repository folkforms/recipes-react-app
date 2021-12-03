import React from 'react';
import './RecipeBody.css';

const RecipeBody = props => {
  const { recipe } = props;
  console.log(JSON.stringify(recipe));
  let count = 0;
  return (
    <>
      <div className="recipe-body">
        <div className="section">Ingredients</div>
        {recipe.ingredients.map(item => <div className="item" key={"ingredient-" + count++}>{item}</div>)}
        <div className="section">Directions</div>
        {recipe.directions.map(item => <div className="item" key={"ingredient-" + count++}>{item}</div>)}
        <div className="section">Notes</div>
        {recipe.notes.map(item => <div className="item" key={"ingredient-" + count++}>{item}</div>)}
        <div className="section">Misc</div>
        <div className="item" key={"misc-" + count++}>File: {recipe.filename}</div>
      </div>
    </>
  );
}

export default RecipeBody;
