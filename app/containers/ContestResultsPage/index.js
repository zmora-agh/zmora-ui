import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(null, (dispatch) => ({ dispatch }))
// eslint-disable-next-line react/prefer-stateless-function
export default class ContestResultsPage extends React.PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

ContestResultsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
