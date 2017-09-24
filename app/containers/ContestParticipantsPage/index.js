import React, { PropTypes } from 'react';
import { graphql, gql } from 'react-apollo';

import { FormattedMessage } from 'react-intl';

import Paper from 'material-ui/Paper';

import messages from './messages';

import { getContestId } from '../ContestPage';

import { loadable } from '../../utils/render';
import ContestParticipations, { ContestParticipationsFragment, participationsPropTypes }
  from '../../components/ContestParticipants';
import EmptyMessage from '../../components/EmptyMessage';

const ContestParticipationsQuery = gql`
  query ContestParticipations($contestId: Int!) {
    contest(id: $contestId) {
      id
      participations {
        ...ContestParticipations
      }
    }
  }
  ${ContestParticipationsFragment}
`;

function ContestParticipantsPage(props) {
  if (props.data.contest.participations.length === 0) {
    return <EmptyMessage><FormattedMessage {...messages.empty} /></EmptyMessage>;
  }

  return <Paper><ContestParticipations participations={props.data.contest.participations} /></Paper>;
}
ContestParticipantsPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    contest: PropTypes.shape({
      participations: participationsPropTypes,
    }),
  }),
};

export default graphql(
  ContestParticipationsQuery,
  { options: (props) => ({ variables: { contestId: getContestId(props) } }) },
)(loadable()(ContestParticipantsPage));
