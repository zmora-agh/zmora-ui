import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import ContestRanking, { ContestRankingPropTypes } from '../../components/ContestRanking';

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
export default class ContestResultsPage extends React.PureComponent {
  render() {
    if (this.props.data.loading) return null;

    return (
      <ContestRanking data={this.props.data.contest.ranking} />
    );
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
