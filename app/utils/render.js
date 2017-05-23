import _sortBy from 'lodash/sortBy';

export function sortBy(array, property, desc = false) {
  const sorted = _sortBy(array, property);
  if (desc) sorted.reverse();
  return sorted;
}
