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
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { problemPage, contestResults } from '../../local-urls';
import { makeSelectUser } from '../App/selectors';

import ProblemCategory from '../../components/ProblemCategory';
import ExpandableTable from '../../components/ExpandableTable';

import messages from './messages';
import { loadable } from '../../utils/render';

const getContestId = (props) => parseInt(props.params.contest_id, 10);

const ProblemsListForLayout = gql`
  query ProblemsListForLayout($contestId: Int!) { 
    contest(id: $contestId) {
      id
      owners {
        id
      }
      problems {
        name
        description
        required
        basePoints
        id
        softDeadline
        hardDeadline
        shortcode
        category
      }
    }
  }
`;

@connect(createStructuredSelector({ user: makeSelectUser() }), (dispatch) => ({ dispatch }))
@graphql(ProblemsListForLayout, { options: (props) => ({ variables: { contestId: getContestId(props) } }) })
@loadable({ display: 'block', found: (p) => p.data.contest !== null })
export default class ProblemsPage extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
    data: PropTypes.object,
    children: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    if (this.props.children) return this.props.children;
    const contestId = getContestId(this.props);
    const { loading, contest } = this.props.data;
    const problems = loading ? undefined : contest.problems;


    if (problems && problems.length === 0) {
      return <Typography><FormattedMessage {...messages.empty} /></Typography>;
    }

    const categories = groupBy(problems, 'category');

    const isAdmin = contest && contest.owners.map((o) => o.id).includes(this.props.user.id);

    return (<div>
      {isAdmin && <Paper style={{ margin: 16, padding: '6px 10px 6px 0' }}>
        <Grid container align="center" spacing={0} justify="space-between">
          <Link to={contestResults(contestId)}><Button><FormattedMessage {...messages.results} /></Button></Link>
          <Typography type="body1"><FormattedMessage {...messages.submited} values={{ number: 100 }} /></Typography>
          <Typography type="body1"><FormattedMessage {...messages.valid} values={{ number: 50 }} /></Typography>
          <Typography type="body1"><FormattedMessage {...messages.timeout} values={{ number: 10 }} /></Typography>
        </Grid>
      </Paper>}
      <ExpandableTable>
        {Object.keys(categories).map((category) => <ProblemCategory
          key={category}
          name={category}
          contestId={contestId}
          problems={categories[category]}
          onProblemClick={(problemId) => this.props.dispatch(push(problemPage(contestId, problemId)))}
          onPdfClick={(problemId) => console.log(problemId)} // eslint-disable-line no-console
        />)}
      </ExpandableTable>
    </div>);
  }
}
