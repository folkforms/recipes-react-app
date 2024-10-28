import React from 'react';
import ListRow from './ListRow';

const ListRows = props => {
  const { recipes, onClickRecipe } = props;
  return (
    <div className="list-rows">
      {recipes.map(recipe => 
        <ListRow recipe={recipe} key={recipe.filename} onClickRecipe={onClickRecipe} />
      )}
    </div>
  );
}

export default ListRows;
