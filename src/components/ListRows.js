import React from 'react';
import ListRow from './ListRow';

const ListRows = props => {
  const { recipes } = props;
  return (
    <div className="list-rows">
      {recipes.map(recipe => 
        <ListRow recipe={recipe} key={recipe.filename} />
      )}
    </div>
  );
}

export default ListRows;
