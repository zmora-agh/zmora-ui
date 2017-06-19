/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PasswordChangeForm from '../../components/PasswordChangeForm';
import { changePassword } from './actions';


export class ProfilePage extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function


/*
  onSubmit(oldPassword, password) {
    console.log(oldPassword);
    console.log(password);
  }
*/

  render() {
    return (
      <div>
        <PasswordChangeForm
          onSubmit={(oldPassword, password) => this.props.dispatch(changePassword(oldPassword, password))}
        />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProfilePage);
