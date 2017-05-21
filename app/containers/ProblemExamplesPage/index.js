/*
 *
 * ProblemExamplesPage
 *
 */

import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import FetchView from '../../components/FetchView';
import ProblemExamples from '../../components/ProblemExamples';

const ProblemExamplesForLayout = gql`
  query ProblemExamplesForLayout($problemId: ID!) {
    problem(id: $problemId) {
      id
      examples {
        id
        number
        input
        result
        explanation
      }
    }
  }
`;

@graphql(ProblemExamplesForLayout, {
  options: ({ problemId }) => ({ variables: { problemId } }),
  skip: ({ defer }) => defer,
})
// eslint-disable-next-line react/prefer-stateless-function
export default class ProblemExamplesPage extends React.PureComponent {
  render() {
    return (<FetchView>{!this.props.data || this.props.data.loading ? undefined :
    <ProblemExamples examples={this.props.data.problem.examples} />}
    </FetchView>);
  }
}

ProblemExamplesPage.propTypes = {
  data: PropTypes.object,
};
