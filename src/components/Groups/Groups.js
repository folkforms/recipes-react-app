import React from 'react';
import './Groups.css';
import GroupsFilter from './GroupsFilter';
import GroupItem from './GroupItem';

const Groups = props => {
  const { recipes } = props;
  const tags = orderByTags(recipes);
  return (
    <>
      <div className="groups">
        <div className="title-section">
          <span className="title">Groups</span>
          {props.ToggleButton}
        </div>
        <GroupsFilter />
        <div className="data-section">
          {Object.keys(tags).map(key => (
            <>
              <div className="group">
                <div className="name">{key}</div>
                {tags[key].map(recipe => (
                  <GroupItem recipe={recipe}/>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

const orderByTags = recipes => {
  const tags = {};
  recipes.forEach(recipe => {
    recipe.metaData.tags.forEach(tag => {
      if(!tags[tag]) {
        tags[tag] = [];
      }
      tags[tag].push(recipe);
    });
  });
  return splitUntaggedRecipes(tags);
}

/**
 * Split untagged recipes into groups of 10.
 * @param {*} tags recipes ordered by tag
 */
const splitUntaggedRecipes = tags => {
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

export default Groups;
