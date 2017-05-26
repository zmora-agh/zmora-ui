/*
 *
 * ProblemSubmitsPage
 *
 */

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';
import { gql, graphql } from 'react-apollo';

import FetchView from '../../components/FetchView';
import ProblemSubmits from '../../components/ProblemSubmits';
import messages from './messages';

export const ProblemSubmitsForLayout = gql`
  query ProblemSubmitsForLayout($problemId: Int!) { 
    problem(id: $problemId) {
      id
      submits {
        id
        date
        status
        author {
          id
          name
        }
      }
    }
  }
`;

@graphql(ProblemSubmitsForLayout, {
  options: ({ problemId }) => ({ variables: { problemId } }),
  skip: ({ defer }) => defer,
})
// eslint-disable-next-line react/prefer-stateless-function
export default class ProblemSubmitsPage extends React.PureComponent {
  haveNoSubmits() {
    return this.props.data && this.props.data.problem && this.props.data.problem.submits
      && this.props.data.problem.submits.length === 0;
  }

  render() {
    if (this.haveNoSubmits()) {
      return <Typography><FormattedMessage {...messages.empty} /></Typography>;
    }

    return (<FetchView>{!this.props.data || this.props.data.loading ? undefined :
    <ProblemSubmits submits={this.props.data.problem.submits} />}</FetchView>);
  }
}

ProblemSubmitsPage.propTypes = {
  data: PropTypes.object,
};

