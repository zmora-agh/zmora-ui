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
import ProblemSubmits, { SubmitMetaFragment } from '../../components/ProblemSubmits';
import messages from './messages';

export const ProblemSubmitsForLayout = gql`
  query ProblemSubmitsForLayout($problemId: Int!) { 
    problem(id: $problemId) {
      id
      submits {
        ...SubmitMeta
      }
    }
  }
  ${SubmitMetaFragment}
`;

@graphql(ProblemSubmitsForLayout, {
  options: ({ problemId }) => ({ variables: { problemId } }),
  skip: ({ defer }) => defer,
})
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
    <ProblemSubmits
      submits={this.props.data.problem.submits}
      submitId={this.props.submitId}
      onSubmitSelect={this.props.onSubmitSelect}
      onSubmitDeselect={this.props.onSubmitDeselect}
    />}</FetchView>);
  }
}

ProblemSubmitsPage.propTypes = {
  data: PropTypes.object,
};

