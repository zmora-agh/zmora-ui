/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PasswordChangeForm from '../../components/PasswordChangeForm';
import { changePassword } from './actions';

function ProfilePage(props) {
  return (
    <div>
      <PasswordChangeForm
        onSubmit={(oldPassword, password) => props.dispatch(changePassword(oldPassword, password))}
      />
    </div>
  );
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
