import React, { useEffect } from 'react';
import './Recipe.css';
import RecipeHeader from './RecipeHeader';
import RecipeBody from './RecipeBody';

const Recipe = props => {
  useEffect(() => {
    const close = e => {
      if(e.key === "Escape") {
        props.onClose("");
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [props]);

  const { recipe } = props;
  return (
    <>
      <div className="modal" key={"modal-" + recipe.filename}>
        <div className="modal-content">
          <RecipeHeader name={recipe.name} onClose={() => props.onClose("")} />
          <RecipeBody recipe={recipe} />
        </div>
      </div>
    </>
  );
}

export default Recipe;
