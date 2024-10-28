import React from 'react';

const ListTitle = props => {
  return (
    <div className="title">Recipes ({props.numRecipes})</div>
  );
}

export default ListTitle;
