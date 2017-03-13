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
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import RightMenu from '../RightMenu';
import { toggleMenu } from '../RightMenu/actions';
import Navigation from './../../../app/components/Navigation';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    dispatch: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <AppBar
          title="Zmora"
          showMenuIconButton={false}
          iconElementRight={<IconButton><Menu /></IconButton>}
          onRightIconButtonTouchTap={() => this.props.dispatch(toggleMenu())}
        />
        <div>
          <Navigation style={{ width: 200, float: 'left', margin: 20 }} />
          <div style={{ float: 'left' }}>{React.Children.toArray(this.props.children)}</div>
        </div>
        <RightMenu />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
