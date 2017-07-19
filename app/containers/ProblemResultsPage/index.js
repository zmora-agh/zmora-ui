import React, { PropTypes } from 'react';
import Typography from 'material-ui/Typography';
import { graphql, gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FetchView from '../../components/FetchView';
import ProblemResults, { ResultFragment } from '../../components/ProblemResults';

import UserSubmits from './UserSubmits';

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
export default class ProblemResultsPage extends React.Component {
  haveNoResults() {
    return this.props.data
      && this.props.data.problem
      && this.props.data.problem.results
      && this.props.data.problem.results.length === 0;
  }

  render() {
    if (this.haveNoResults()) {
      return <Typography><FormattedMessage {...messages.empty} /></Typography>;
    }

    if (this.props.userId) {
      return <UserSubmits userId={this.props.userId} problemId={this.props.problemId} />;
    }

    return (
      <FetchView>
        {!this.props.data || this.props.data.loading ? undefined
          : <ProblemResults
            results={this.props.data.problem.results}
            generateHash={this.props.generateHash}
          />}
      </FetchView>
    );
  }
}

ProblemResultsPage.propTypes = {
  data: PropTypes.object,
  userId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  generateHash: PropTypes.func.isRequired,
};
