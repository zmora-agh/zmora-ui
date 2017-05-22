import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import FetchView from '../../components/FetchView';
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
// eslint-disable-next-line react/prefer-stateless-function
export default class ProblemContentPage extends React.PureComponent {
  render() {
    return (
      <FetchView>{!this.props.data || this.props.data.loading ?
        undefined :
        <ProblemView {...this.props.data.problem} />}
      </FetchView>
    );
  }
}

ProblemContentPage.propTypes = {
  data: PropTypes.object,
};
