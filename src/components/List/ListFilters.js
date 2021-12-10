import React from 'react';
import Filter from '../Filter/Filter';

const ListFilters = props => {
  const {
    nameFilter,
    setNameFilter,
    ingredientsFilter,
    setIngredientsFilter,
    timeFilter,
    setTimeFilter,
    tagFilter,
    setTagFilter,
    showUntaggedFilter,
    setShowUntaggedFilter,
  } = props.filters;
  return (
    <div className="filters">
      <span className="description">FILTER BY</span>
      <Filter label="Name:" type="text" value={nameFilter} onChange={setNameFilter} />
      <Filter label="Ingredients:" type="text" value={ingredientsFilter} onChange={setIngredientsFilter} className="ingredients" />
      <Filter label="Time:" type="text" value={timeFilter} onChange={setTimeFilter} />
      <Filter label="Tag:" type="text" value={tagFilter} onChange={setTagFilter} />
      <Filter label="Show untagged:" type="checkbox" value={showUntaggedFilter} onChange={setShowUntaggedFilter} className="checkbox" />
      <button className="button" type="button" onClick={props.onClear}>Clear filters</button>
    </div>
  );
}

export default ListFilters;
