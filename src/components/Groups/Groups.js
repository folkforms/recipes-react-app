import React from 'react';
import './Groups.css';
import GroupItem from './GroupItem';

const Groups = props => {
  const { recipes } = props;
  const tags = orderByTags(recipes);
  return (
    <>
      <div className="groups">
        {Object.keys(tags).map(key => (
          <>
            <div className="group">
              <div className="group-name">{key}</div>
              {tags[key].map(recipe => (
                <GroupItem recipe={recipe}/>
              ))}
            </div>
          </>
        ))}
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
  })
  return tags;
}

export default Groups;
