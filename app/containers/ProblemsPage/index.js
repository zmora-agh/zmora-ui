/*
 *
 * ProblemsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import { gql, graphql } from 'react-apollo';
import { groupBy } from 'lodash';

import Typography from 'material-ui/Typography';

import { problemPage } from '../../local-urls';

import FetchView from '../../components/FetchView';
import ProblemCategory from '../../components/ProblemCategory';
import ExpandableTable from '../../components/ExpandableTable';

import messages from './messages';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

const ProblemsListForLayout = gql`
  query ProblemsListForLayout($contestId: Int!) { 
    contest(id: $contestId) {
      id
      problems{
        name
        description
        required
        basePoints
        id
        softDeadline
        hardDeadline
        shortcode
      }
    }
  }
`;

@connect(null, (dispatch) => ({ dispatch }))
@graphql(ProblemsListForLayout, { options: (props) => ({ variables: { contestId: getContestId(props) } }) })
export default class ProblemsPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    children: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    if (this.props.children) return this.props.children;
    const contestId = getContestId(this.props);
    const problems = this.props.data.loading ? undefined : this.props.data.contest.problems;


    if (problems && problems.length === 0) {
      return <Typography><FormattedMessage {...messages.empty} /></Typography>;
    }

    const categories = groupBy(problems, 'category');

    return (<FetchView>
      {this.props.data.loading ? undefined :
      <ExpandableTable>
        {Object.keys(categories).map((category) => <ProblemCategory
          key={category}
          name={category}
          contestId={contestId}
          problems={categories[category]}
          onProblemClick={(problemId) => this.props.dispatch(push(problemPage(contestId, problemId)))}
          onPdfClick={(problemId) => console.log(problemId)}
        />)}
      </ExpandableTable>}
    </FetchView>);
  }
}
