import React, { useState } from 'react';
import "./List.css";
import ListFilter from './ListFilter';
import ListRows from './ListRows';

const List = props => {
  const [filter, setFilter] = useState();
  const allRecipes = props.recipes;
  const recipes = applyFilter(allRecipes, filter);
  return (
    <>
      <div className="list">
        <div>Recipes ({recipes.length})</div>
        <ListFilter recipes={recipes} filter={filter} setFilter={setFilter} />
        {/* <ListHeaderRow recipes={recipes} /> */}
        <ListRows recipes={recipes} filter={filter} />
      </div>
    </>
  );
}

/**
 * Filter only the items whose `metadata.tags` include the given string
 *
 * @param {object} recipes 
 * @param {string} filter 
 */
const applyFilter = (recipes, filter) => {
  if(!filter) { return recipes; }
  recipes = recipes.filter(
    recipe => recipe.metaData.tags.filter(
      tag => tag.indexOf(filter) !== -1
    ).length > 0
  );
  return recipes;
}

export default List;
