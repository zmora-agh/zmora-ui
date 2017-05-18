/*
 *
 * ContestSummaryPage
 *
 */

import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { submitSetContext } from '../Submit/actions';

import FetchView from '../../components/FetchView';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

const ContestListForLayout = gql`
  query ContestListForLayout($contestId: Int!) { 
    contest(id: $contestId) {
      id
      start
      name
      description
      signupDuration
      duration
    }
  }
`;

@connect(null, (dispatch) => ({ dispatch }))
@graphql(ContestListForLayout, { options: (props) => ({ variables: { contestId: getContestId(props) } }) })
export default class ContestPage extends React.PureComponent {
  componentDidMount() {
    const contestId = parseInt(this.props.params.contest_id, 10);
    this.props.dispatch(submitSetContext({ contestId }));
    if (!this.props.children) {
      this.props.dispatch(push(`/contests/${contestId}/problems`));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(submitSetContext({ contestId: undefined }));
  }


  render() {
    if (this.props.children) return this.props.children;

    return (<FetchView />);
  }
}

ContestPage.propTypes = {
  children: PropTypes.object,
  params: PropTypes.shape({ contest_id: PropTypes.string }),
  dispatch: PropTypes.func,
};
