import React from 'react';

const ListFilter = props => {
  const { filter, setFilter } = props;
  return (
    <div className="list-filter">
      <div>Filters:</div>
      <div>
        <span>Tag:</span>
        <input text={filter} onChange={event => setFilter(event.target.value)} />
      </div>
    </div>
  );
}

export default ListFilter;
