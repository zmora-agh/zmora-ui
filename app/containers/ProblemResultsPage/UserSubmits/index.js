import React from 'react';
import { graphql, gql } from 'react-apollo';

import FetchView from '../../../components/FetchView';
import ProblemSubmits, { SubmitMetaFragment } from '../../../components/ProblemSubmits';

export const UserSubmitsQuery = gql`
  query UserSubmits($problemId: Int!, $userId: Int!) {
    problem(id: $problemId) {
      id
      submits(user_id: $userId) {
        ...SubmitMeta
      }
    }
  }
  ${SubmitMetaFragment}
`;

@graphql(UserSubmitsQuery, { options: (props) => ({
  variables: {
    problemId: props.problemId,
    userId: props.userId,
  },
}) })
class UserSubmits extends React.PureComponent {
  render() {
    return (
      <FetchView>
        {this.props.data.loading ? undefined : <ProblemSubmits
          {...this.props.data.problem}
          onSubmitSelect={(submitId) => this.setState({ submitId })}
          onSubmitDeselect={() => this.setState({ submitId: undefined })}
          submitId={this.state && this.state.submitId}
        />}
      </FetchView>
    );
  }
}
export default (UserSubmits);
