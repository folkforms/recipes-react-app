import React from 'react';

const RecipeBody = props => {
  const { recipe } = props;
  let count = 0;
  return (
    <>
      <div className="recipe-body">
        <div className="section">Shopping list</div>
        <div className="item">
          {recipe.metaData.shoppingList.join(" / ")}
        </div>
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
