import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';

const GroupItem = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="item" onClick={setShowModal} key={props.recipe.name}>
        {props.recipe.name}
      </div>
      {showModal ? <Recipe recipe={props.recipe} onClose={setShowModal} /> : null}
    </>
  );
}

export default GroupItem;
