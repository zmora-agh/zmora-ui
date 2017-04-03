/*
 *
 * ProblemsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectProblems } from '../App/selectors';
import { problemContentPropTypes } from '../../components/ProblemView/constants';
import FetchProgress from '../../components/FetchProgress';

import { getProblems } from './actions';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

export class ProblemsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getProblems(getContestId(this.props)));
  }

  render() {
    if (this.props.children) return this.props.children;

    return this.props.problems ?
      <ul>{Object.keys(this.props.problems).map((index) =>
        <li key={index}>{this.props.problems[index].name}</li>)}
      </ul> :
      <FetchProgress />;
  }
}

ProblemsPage.propTypes = {
  problems: PropTypes.objectOf(PropTypes.shape(problemContentPropTypes)),
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = (state, props) => createStructuredSelector({
  problems: makeSelectProblems(getContestId(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsPage);
