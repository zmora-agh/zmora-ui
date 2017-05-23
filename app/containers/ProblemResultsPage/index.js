import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(null, (dispatch) => ({ dispatch }))
// eslint-disable-next-line react/prefer-stateless-function
export default class ProblemResultsPage extends React.PureComponent {
  render() {
    return (
      <div>
        asdf
      </div>
    );
  }
}

ProblemResultsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
