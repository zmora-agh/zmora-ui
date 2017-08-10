import _sortBy from 'lodash/sortBy';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import React from 'react';

export function sortBy(array, property, desc = false) {
  const sorted = _sortBy(array, property);
  if (desc) sorted.reverse();
  return sorted;
}

export function getByPath(obj, path) {
  return path.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, obj || self);
}

export const Loadable = (Elem, size, loaded = (p) => !p.data.loading) => (props) =>
  (loaded(props) ? <Elem {...props} /> : <CircularProgress color="accent" size={size} />);
