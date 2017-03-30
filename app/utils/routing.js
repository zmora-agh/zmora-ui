/**
 * Created by maxmati on 3/30/17.
 */
import React from 'react';

export function exactOnly(Component) {
  const parent = (props) => {
    if (props.children) return props.children;

    return (<Component {...props} />);
  };

  parent.propTypes = {
    children: React.PropTypes.node,
  };

  return parent;
}
