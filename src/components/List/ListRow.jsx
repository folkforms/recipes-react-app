import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';

const ListRow = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="grid">
        <div className="list-row" onClick={setShowModal}>
          {props.recipe.name}
        </div>
        <div className="list-row">
          {props.recipe.metaData.tags.join(", ")}
        </div>
      </div>
      {showModal ? <Recipe recipe={props.recipe} onClose={setShowModal} /> : null}
    </>
  );
}

export default ListRow;
