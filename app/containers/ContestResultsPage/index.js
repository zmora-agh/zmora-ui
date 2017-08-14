import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';

import ContestRanking, { ContestRankingPropTypes } from '../../components/ContestRanking';
import { loadable } from '../../utils/render';

import messages from './messages';

const q = gql`
  query q($contestId: Int!) {
    contest(id: $contestId) {
      id
      ranking {
        user {
          id
          name
        }
        solutions {
          attempts
          problem {
            id
            shortcode
            required
          }
        }
      }
    }
  }
`;

const getContestId = (props) => parseInt(props.params.contest_id, 10);

@graphql(q, { options: (props) => ({ variables: { contestId: getContestId(props) } }) })
@loadable({ display: 'block', found: (p) => p.data.contest !== null })
// eslint-disable-next-line react/prefer-stateless-function
export default class ContestResultsPage extends React.PureComponent {
  render() {
    const ranking = this.props.data.contest.ranking;

    if (ranking.length === 0) {
      return (
        <div style={{ padding: 32, textAlign: 'center' }}>
          <Typography type="headline" style={{ opacity: 0.6 }}><FormattedMessage {...messages.empty} /></Typography>
        </div>);
    }

    return <ContestRanking data={ranking} />;
  }
}

ContestResultsPage.propTypes = {
  data: PropTypes.shape({
    contest: PropTypes.shape({
      ranking: ContestRankingPropTypes,
    }),
    loading: PropTypes.bool.isRequired,
  }),
};
