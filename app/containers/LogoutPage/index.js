import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../App/actions';

@connect(null, (dispatch) => ({ dispatch }))
export default class LogoutPage extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(logout());
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func,
};
