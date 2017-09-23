/*
 *
 * ProblemSubmitsPage
 *
 */

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { gql, graphql } from 'react-apollo';

import ProblemSubmits, { SubmitMetaFragment } from '../../components/ProblemSubmits';
import messages from './messages';
import { loadable } from '../../utils/render';
import EmptyMessage from '../../components/EmptyMessage';

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
  options: ({ problemId }) => ({ variables: { problemId }, pollInterval: 2000 }),
  skip: ({ defer }) => defer,
})
@loadable({ found: (props) => props.data.problem !== null })
export default class ProblemSubmitsPage extends React.PureComponent {
  haveNoSubmits() {
    return this.props.data && this.props.data.problem && this.props.data.problem.submits
      && this.props.data.problem.submits.length === 0;
  }

  render() {
    if (this.haveNoSubmits()) {
      return <EmptyMessage><FormattedMessage {...messages.empty} /></EmptyMessage>;
    }

    return (
      <ProblemSubmits
        submits={this.props.data.problem.submits}
        submitId={this.props.submitId}
        onSubmitSelect={this.props.onSubmitSelect}
        onSubmitDeselect={this.props.onSubmitDeselect}
      />);
  }
}

ProblemSubmitsPage.propTypes = {
  data: PropTypes.object,
  submitId: PropTypes.number,
  onSubmitSelect: PropTypes.func.isRequired,
  onSubmitDeselect: PropTypes.func.isRequired,
};

