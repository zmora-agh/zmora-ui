/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';


import PasswordChangeForm from '../../components/PasswordChangeForm';
import { changePassword } from './actions';
import { passwordChangePropType } from '../../components/PasswordChangeForm/constants';


function ProfilePage(props) {
  return (
    <div>
      <PasswordChangeForm
        onSubmit={(oldPassword, password) => props.dispatch(changePassword(oldPassword, password))}
        {...props.profile}
      />
    </div>
  );
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.shape(passwordChangePropType),
};

const mapStateToProps = createStructuredSelector({
  profile: (state) => state.get('profilePage', Map()).toJS(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
