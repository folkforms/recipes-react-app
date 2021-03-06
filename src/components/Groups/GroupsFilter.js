import React from 'react';
import Filter from '../Filter/Filter';

const GroupsFilter = props => {
  const {
    showUntaggedFilter,
    setShowUntaggedFilter,
  } = props.filters;
  return (
    <div className="filters">
      <span className="description">FILTER BY</span>
      {/* <span>
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
      </span> */}
      <Filter label="Include untagged" type="checkbox" value={showUntaggedFilter} onChange={setShowUntaggedFilter} className="checkbox" />
      {/* <span>
        <span className="name">Show untagged:</span>
        <input className="input checkbox" type="checkbox" checked={showUntaggedFilter} onChange={event => setShowUntaggedFilter(event.target.checked)} />
      </span> */}
      <button className="button" type="button" onClick={props.onClear}>Clear filters</button>
    </div>
  );
}

export default GroupsFilter;
