import React, { PropTypes } from 'react';
import Typography from 'material-ui/Typography';
import { gql, graphql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FetchView from '../../components/FetchView';
import ProblemResults from '../../components/ProblemResults';

const ProblemResultsLayout = gql`
  query ProblemResultsLayout($problemId: Int!) {
    problem(id: $problemId){
      id
      results {
        id
        author {
          id
          name
        }
        date
        status
      }
    }
  }
`;

@graphql(ProblemResultsLayout, {
  options: ({ problemId }) => ({ variables: { problemId } }),
  skip: ({ defer }) => defer,
})
// eslint-disable-next-line react/prefer-stateless-function
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
    return (
      <FetchView>
        {!this.props.data || this.props.data.loading ? undefined
          : <ProblemResults results={this.props.data.problem.results} />}
      </FetchView>
    );
  }
}

ProblemResultsPage.propTypes = {
  data: PropTypes.object,
};
