import React, { PropTypes } from 'react';
import { graphql, gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProblemResults, { ResultFragment } from '../../components/ProblemResults';
import EmptyMessage from '../../components/EmptyMessage';

import UserSubmits from './UserSubmits';
import { loadable } from '../../utils/render';

const ProblemResultsLayout = gql`
  query ProblemResultsLayout($problemId: Int!) {
    problem(id: $problemId){
      id
      results {
        ...Result
      }
    }
  }
  ${ResultFragment}
`;

@graphql(ProblemResultsLayout, {
  options: ({ problemId }) => ({ variables: { problemId } }),
  skip: ({ defer }) => defer,
})
@loadable({ found: (props) => props.data.problem !== null })
export default class ProblemResultsPage extends React.Component {
  haveNoResults() {
    return this.props.data
      && this.props.data.problem
      && this.props.data.problem.results
      && this.props.data.problem.results.length === 0;
  }

  render() {
    if (this.haveNoResults()) {
      return <EmptyMessage><FormattedMessage {...messages.empty} /></EmptyMessage>;
    }

    if (this.props.userId) {
      return <UserSubmits userId={this.props.userId} problemId={this.props.problemId} />;
    }

    return (
      <ProblemResults
        results={this.props.data.problem.results}
        generateHash={this.props.generateHash}
      />);
  }
}

ProblemResultsPage.propTypes = {
  data: PropTypes.object,
  userId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  generateHash: PropTypes.func.isRequired,
};
