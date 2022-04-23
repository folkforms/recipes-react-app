import React, { useState } from 'react';
import './List.css';
import ListTitle from './ListTitle';
import ListHeaderRow from './ListHeaderRow';
import ListFilters from './ListFilters';
import ListRows from './ListRows';
import parseTimeStrings from 'parse-time-strings';

const List = props => {
  // Filters
  const [nameFilter, setNameFilter] = useState("");
  const [ingredientsFilter, setIngredientsFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [showUntaggedFilter, setShowUntaggedFilter] = useState(true);
  const [missingShoppingListFilter, setMissingShoppingListFilter] = useState(false);
  const clearFilters = () => {
    setNameFilter("");
    setIngredientsFilter("");
    setTimeFilter("");
    setTagFilter("");
    setShowUntaggedFilter(true);
    setMissingShoppingListFilter(false);
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
    missingShoppingListFilter,
    setMissingShoppingListFilter,
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
  if(filters.nameFilter) {
    const tokens = filters.nameFilter.split(/\s+/).map(t => t.toLowerCase());
    tokens.forEach(token => {
      if(token.startsWith("-")) {
        recipes = recipes.filter(
          recipe => recipe.name.toLowerCase().indexOf(token.substring(1)) === -1
        );
      } else {
        recipes = recipes.filter(
          recipe => recipe.name.toLowerCase().indexOf(token) !== -1
        );
      }
    });
  }

  if(filters.ingredientsFilter) {
    const tokens = filters.ingredientsFilter.split(/\s+/).map(t => t.toLowerCase());
    tokens.forEach(token => {
      if(token.startsWith("-")) {
        recipes = recipes.filter(
          recipe => recipe.ingredients.filter(
            line => line.toLowerCase().indexOf(token.substring(1)) !== -1
          ).length === 0
        );
      } else {
        recipes = recipes.filter(
          recipe => recipe.ingredients.filter(
            line => line.toLowerCase().indexOf(token) !== -1
          ).length > 0
        );
      }
    });
  }

  if(filters.timeFilter) {
    if(filters.timeFilter === "none" || filters.timeFilter === "x" || filters.timeFilter === "-1") {
      recipes = recipes.filter(
        recipe => !recipe.metaData.convertedTimeMinutes
      );
    } else {
      const maxTime = parseTimeStrings(filters.timeFilter);
      if(maxTime !== -1) {
        recipes = recipes.filter(
          recipe => recipe.metaData.convertedTimeMinutes > 0 && recipe.metaData.convertedTimeMinutes <= maxTime
        );
      }
    }
  }

  if(filters.tagFilter) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags.filter(
        tag => tag.toLowerCase().indexOf(filters.tagFilter.toLowerCase()) !== -1
      ).length > 0
    );
  }

  if(filters.showUntaggedFilter === false) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags.length > 0 && recipe.metaData.tags[0] !== "Untagged"
    );
  }

  if(filters.missingShoppingListFilter) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags &&
                recipe.metaData.tags.length > 0 &&
                recipe.metaData.shoppingList &&
                recipe.metaData.shoppingList.length === 1 &&
                recipe.metaData.shoppingList[0] === "???"
    );
  }

  return recipes;
}

export default List;
