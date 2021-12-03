import React, { useState, useEffect } from "react";
import "./List-grid.css";
import ListTitle from "./ListTitle";
import ListHeaderRow from "./ListHeaderRow";
import ListFilter from "./ListFilter";
import ListRows from "./ListRows";
import Recipe from "./Recipe/Recipe";

const List = props => {
  // Filters
  const [nameFilter, setNameFilter] = useState("");
  const [ingredientsFilter, setIngredientsFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const clearFilters = () => {
    setNameFilter("");
    setIngredientsFilter("");
    setTagFilter("");
  }
  const filters = {
    nameFilter,
    setNameFilter,
    ingredientsFilter,
    setIngredientsFilter,
    tagFilter,
    setTagFilter,
  };
  const allRecipes = props.recipes;
  const recipes = applyFilter(allRecipes, filters);

  // Recipe details
  const [showRecipeModal, setShowRecipeModal] = useState("");
  useEffect(() => {
    const close = e => {
      if(e.key === "Escape") {
        setShowRecipeModal("");
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <>
      {showRecipeModal ? <Recipe recipe={showRecipeModal} onClose={() => setShowRecipeModal("")} /> : null}
      <div className="list">
        <ListTitle numRecipes={recipes.length} />
        <ListFilter recipes={recipes} filters={filters} onClear={clearFilters}/>
        <ListHeaderRow />
        <ListRows recipes={recipes} onClickRecipe={setShowRecipeModal} />
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

  // Filter by tag
  if(filters.tagFilter) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags.filter(
        tag => tag.indexOf(filters.tagFilter) !== -1
      ).length > 0
    );
  }

  return recipes;
}

export default List;
