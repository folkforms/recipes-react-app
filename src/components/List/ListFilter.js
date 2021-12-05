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
    <div className="list-filters">
      <span className="description"><strong>FILTER BY</strong></span>
      <span>
        <span className="name">Name:</span>
        <input className="input" type="text" value={nameFilter} onChange={event => setNameFilter(event.target.value)} />
      </span>
      <span>
        <span className="name">Ingredients:</span>
        <input className="input ingredients" type="text" value={ingredientsFilter} onChange={event => setIngredientsFilter(event.target.value)} />
      </span>
      <span>
        <span className="name">Time:</span>
        <input className="input" type="text" value={timeFilter} onChange={event => setTimeFilter(event.target.value)} />
      </span>
      <span>
        <span className="name">Tag:</span>
        <input className="input" type="text" value={tagFilter} onChange={event => setTagFilter(event.target.value)} />
      </span>
      <button className="button" type="button" onClick={props.onClear}>Clear filters</button>
    </div>
  );
}

export default ListFilter;
