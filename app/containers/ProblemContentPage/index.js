import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import { loadable } from '../../utils/render';

import ProblemView from '../../components/ProblemView';

const ProblemForLayout = gql`
  query ProblemForLayout($problemId: Int!) {
    problem(id: $problemId) {
      id
      name
      description
    }
  }
`;

@graphql(ProblemForLayout, {
  options: (props) => ({ variables: { problemId: props.problemId } }),
  skip: ({ defer }) => defer,
})
@loadable({ found: (props) => props.data.problem !== null })
// eslint-disable-next-line react/prefer-stateless-function
export default class ProblemContentPage extends React.PureComponent {
  render() {
    return <ProblemView {...this.props.data.problem} />;
  }
}

ProblemContentPage.propTypes = {
  data: PropTypes.object,
};
