import React from 'react';

const ListRow = props => {
  return (
    <div className="list-row">
      <div className="list-row-name">
        {props.recipe.name}
      </div>
      <div className="list-row-tags">
        {props.recipe.metaData.tags}
      </div>
    </div>
  );
}

export default ListRow;
