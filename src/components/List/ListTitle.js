import React from 'react';

const ListTitle = props => {
  return (
    <div className="list-title">Recipes ({props.numRecipes})</div>
  );
}

export default ListTitle;
