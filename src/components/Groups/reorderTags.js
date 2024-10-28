const tagOrder = [
  "Meal Plan 1",
  "Meal Plan 2",
  "Meal Plan 3",
  "Meal Plan 4",
  "Meal Plan 5",
  "Meal Plan 6",
  "Meal Plan 7",
  "Meal Plan 8",
  "Meal Plan X",
  "Try",
  "Sweet",
  "Lunch",
  "Weekend",
  "Weekday",
  "Light",
  "Needs Sides",
  "Marinade",
  "Work",
  "Side",
  "Dessert",
  "Make Ahead",
];

const reorderTags = tags => {
  const reorderedTags = {};
  tagOrder.forEach(key => {
    if(tags[key]) {
      reorderedTags[key] = tags[key];
      delete tags[key];
    }
  })

  Object.keys(tags).forEach(key => {
    reorderedTags[key] = tags[key];
  })

  return reorderedTags;
}

export default reorderTags;
