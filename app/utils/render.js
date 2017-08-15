import _sortBy from 'lodash/sortBy';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import React from 'react';
import { browserHistory } from 'react-router';
import { notFoundPage } from '../local-urls';


export function sortBy(array, property, desc = false) {
  const sorted = _sortBy(array, property);
  if (desc) sorted.reverse();
  return sorted;
}

export function getByPath(obj, path) {
  return path.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, obj || self);
}

export const loadable = (params) => (Elem) => {
  const defaultLoading = () => (<div style={{ textAlign: 'center', margin: '50px auto' }}>
    <CircularProgress color="accent" size={50} />
  </div>);

  const { Loading, loaded, found } =
    Object.assign({
      Loading: defaultLoading,
      loaded: (p) => p.data && !p.data.loading,
      found: () => true,
    }, params);

  return class extends React.PureComponent {
    componentDidMount() {
      this.perform();
    }

    componentDidUpdate() {
      this.perform();
    }

    render() {
      if (!loaded(this.props)) {
        return <Loading />;
      }

      if (!found(this.props)) {
        return <div />;
      }

      return <Elem {...this.props} />;
    }

    perform() {
      if (loaded(this.props) && !found(this.props)) {
        browserHistory.replace(notFoundPage());
      }
    }
  };
};

