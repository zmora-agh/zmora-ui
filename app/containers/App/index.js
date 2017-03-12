/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import Navigation from './../../../app/components/Navigation';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <AppBar
          title="Zmora"
          showMenuIconButton={false}
        />
        <div>
          <Navigation style={{ width: 200, float: 'left', marginRight: 20 }} />
          <div style={{ float: 'left' }}>{React.Children.toArray(this.props.children)}</div>
        </div>
        <Drawer open openSecondary>
          <AppBar showMenuIconButton={false} />
        </Drawer>
      </div>
    );
  }
}
