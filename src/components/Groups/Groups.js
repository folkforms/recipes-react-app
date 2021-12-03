import React from 'react';
import './Groups.css';

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
                <div className="item">{recipe.name}</div>
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
  // console.log(`#### tags = ${JSON.stringify(tags)}`);
  return tags;
}

export default Groups;
