import React from 'react';

const ListRow = props => {
  return (
    <div className="list-row">
      <div className="list-row-name" onClick={() => props.onClickRecipe(props.recipe)}>
        {props.recipe.name}
      </div>
      <div className="list-row-tags">
        {props.recipe.metaData.tags.join(", ")}
      </div>
    </div>
  );
}

export default ListRow;
