/*
 *
 * ProblemExamplesPage
 *
 */

import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import ProblemExamples from '../../components/ProblemExamples';
import { loadable } from '../../utils/render';

const ProblemExamplesForLayout = gql`
  query ProblemExamplesForLayout($problemId: Int!) { 
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
@loadable({ found: (props) => props.data.problem !== null, display: 'block' })
// eslint-disable-next-line react/prefer-stateless-function
export default class ProblemExamplesPage extends React.PureComponent {
  render() {
    return <ProblemExamples examples={this.props.data.problem.examples} />;
  }
}

ProblemExamplesPage.propTypes = {
  data: PropTypes.object,
};
