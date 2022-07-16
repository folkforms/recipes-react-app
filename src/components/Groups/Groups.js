import React, { useState } from 'react';
import './Groups.css';
import reorderTags from './reorderTags';
import GroupsFilter from './GroupsFilter';
import GroupItem from './GroupItem';

const Groups = props => {
  const [showUntaggedFilter, setShowUntaggedFilter] = useState(true);
  const clearFilters = () => {
    setShowUntaggedFilter(true);
  }
  const filters = {
    showUntaggedFilter,
    setShowUntaggedFilter,
  };
  const allRecipes = props.recipes.sort((a,b) => (a.name > b.name) ? 1 : -1);
  const recipes = applyFilter(allRecipes, filters);
  const tags = orderByTags(recipes);
  return (
    <>
      <div className="groups">
        <div className="title-section">
          <span className="title">Groups</span>
          <div className="buttons">
            {props.ToggleButton}
          </div>
        </div>
        <GroupsFilter filters={filters} onClear={clearFilters} />
        <div className="data-section">
          {Object.keys(tags).map(key => (
            <div className="group" key={key}>
              <div className="name">{key}</div>
              {tags[key].map(recipe => (
                <GroupItem recipe={recipe} key={key + "-" + recipe.name} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const orderByTags = recipes => {
  let tags = {};
  recipes.forEach(recipe => {
    recipe.metaData.tags.forEach(tag => {
      if(!tags[tag]) {
        tags[tag] = [];
      }
      tags[tag].push(recipe);
    });
  });
  tags = reorderTags(tags);
  return splitUntaggedRecipes(tags);
}

/**
 * Split untagged recipes into groups of 10.
 * @param {*} tags recipes ordered by tag
 */
const splitUntaggedRecipes = tags => {
  if(!tags["Untagged"]) {
    return tags;
  }
  const numUntaggedGroups = Math.ceil(tags["Untagged"].length / 10);
  for(let i = 0; i < numUntaggedGroups; i++) {
    tags[`Untagged-${i}`] = [];
  }
  let count = 0;
  let index = 0;
  tags["Untagged"].forEach(recipe => {
    tags[`Untagged-${index}`].push(recipe);
    count++;
    if(count === 10) {
      count = 0;
      index++;
    }
  })
  delete tags["Untagged"];
  return tags;
}

/**
 * Filter items based on selected filters.
 *
 * @param {object} recipes list of recipes
 * @param {object} filters filters to use
 */
const applyFilter = (recipes, filters) => {
  if(!filters.showUntaggedFilter) {
    recipes = recipes.filter(
      recipe => recipe.metaData.tags.length > 0 && recipe.metaData.tags[0] !== "Untagged"
    );
  }

  return recipes;
}
export default Groups;
