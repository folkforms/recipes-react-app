import React, { useState } from 'react';
import './List.css';
import ListTitle from './ListTitle';
import ListHeaderRow from './ListHeaderRow';
import ListFilters from './ListFilters';
import ListRows from './ListRows';

const List = props => {
  // Filters
  const [nameFilter, setNameFilter] = useState("");
  const [ingredientsFilter, setIngredientsFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [showUntaggedFilter, setShowUntaggedFilter] = useState(false);
  const clearFilters = () => {
    setNameFilter("");
    setIngredientsFilter("");
    setTimeFilter("");
    setTagFilter("");
    setShowUntaggedFilter(false);
  }
  const filters = {
    nameFilter,
    setNameFilter,
    ingredientsFilter,
    setIngredientsFilter,
    timeFilter,
    setTimeFilter,
    tagFilter,
    setTagFilter,
    showUntaggedFilter,
    setShowUntaggedFilter,
  };
  const allRecipes = props.recipes.sort((a,b) => (a.name > b.name) ? 1 : -1);
  const recipes = applyFilter(allRecipes, filters);

  return (
    <>
      <div className="list">
        <div className="title-section">
          <ListTitle numRecipes={recipes.length} />
          {props.ToggleButton}
        </div>
        <ListFilters filters={filters} onClear={clearFilters}/>
        <div className="list-data">
          <ListHeaderRow />
          <ListRows recipes={recipes} />
        </div>
      </div>
    </>
  );
}

/**
 * Filter items based on selected filters.
 *
 * @param {object} recipes list of recipes
 * @param {object} filters filters to use
 */
const applyFilter = (recipes, filters) => {
  // Filter by name
  if(filters.nameFilter) {
    recipes = recipes.filter(
      recipe => recipe.name.toLowerCase().indexOf(filters.nameFilter.toLowerCase()) !== -1
    );
  }

  // Filter by ingredients
  if(filters.ingredientsFilter) {
    recipes = recipes.filter(
      recipe => recipe.ingredients.filter(
        item => item.toLowerCase().indexOf(filters.ingredientsFilter.toLowerCase()) !== -1
      ).length > 0
    );
  }

  // Filter by time
  if(filters.timeFilter) {
    console.log("FIXME time filter not implemented yet");
  }

  // Filter by tag
  if(filters.tagFilter) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags.filter(
        tag => tag.toLowerCase().indexOf(filters.tagFilter.toLowerCase()) !== -1
      ).length > 0
    );
  }

  // Filter by show untagged
  if(filters.showUntaggedFilter === false) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags.length > 0 && recipe.metaData.tags[0] !== "Untagged"
    );
  }

  return recipes;
}

export default List;
