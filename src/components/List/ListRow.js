import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';

const ListRow = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="list-row">
        <div className="list-row-name" onClick={setShowModal}>
          {props.recipe.name}
        </div>
        <div className="list-row-tags">
          {props.recipe.metaData.tags.join(", ")}
        </div>
      </div>
      {showModal ? <Recipe recipe={props.recipe} onClose={setShowModal} /> : null}
    </>
  );
}

export default ListRow;
