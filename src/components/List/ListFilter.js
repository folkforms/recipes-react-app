import React from 'react';

const ListFilter = props => {
  const {
    nameFilter,
    setNameFilter,
    ingredientsFilter,
    setIngredientsFilter,
    timeFilter,
    setTimeFilter,
    tagFilter,
    setTagFilter,
  } = props.filters;
  return (
    <div className="list-filter">
      <span><strong>Filter by:</strong></span>
      <span>
        <span>Name:</span>
        <input type="text" value={nameFilter} onChange={event => setNameFilter(event.target.value)} />
      </span>
      <span>
        <span>Ingredients:</span>
        <input type="text" value={ingredientsFilter} onChange={event => setIngredientsFilter(event.target.value)} />
      </span>
      <span>
        <span>Time:</span>
        <input type="text" value={timeFilter} onChange={event => setTimeFilter(event.target.value)} />
      </span>
      <span>
        <span>Tag:</span>
        <input type="text" value={tagFilter} onChange={event => setTagFilter(event.target.value)} />
      </span>
      <button type="button" onClick={props.onClear}>Clear filters</button>
    </div>
  );
}

export default ListFilter;
