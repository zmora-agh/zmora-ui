import _sortBy from 'lodash/sortBy';

export function sortBy(array, property, desc = false) {
  const sorted = _sortBy(array, property);
  if (desc) sorted.reverse();
  return sorted;
}

export function getByPath(obj, path) {
  return path.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, obj || self);
}

