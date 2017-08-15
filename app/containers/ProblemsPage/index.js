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
import { Map } from 'immutable';

import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { problemPage, contestResults } from '../../local-urls';
import { makeSelectUser } from '../App/selectors';

import ProblemCategory from '../../components/ProblemCategory';
import ExpandableTable from '../../components/ExpandableTable';

import { STATUS_ERR, STATUS_OK } from './constants';
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
      submitMetrics {
        status
        submits
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
@loadable({ found: (p) => p.data.contest !== null })
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
      return (<div style={{ padding: 32, textAlign: 'center' }}>
        <Typography type="headline" style={{ opacity: 0.6 }}><FormattedMessage {...messages.empty} /></Typography>
      </div>);
    }

    const categories = groupBy(problems, 'category');

    const isAdmin = contest && contest.owners.map((o) => o.id).includes(this.props.user.id);

    const submitMetrics = contest.submitMetrics ?
      Map(contest.submitMetrics.map((metric) => [metric.status, metric.submits])) : Map();

    const allSubmitsCount = submitMetrics.reduce((s, v) => s + v);

    return (<div>
      {isAdmin && <Paper style={{ margin: 16, padding: '6px 10px 6px 0' }}>
        <Grid container align="center" spacing={0} justify="space-between">
          <Link to={contestResults(contestId)}><Button><FormattedMessage {...messages.results} /></Button></Link>
          <Typography type="body1">
            <FormattedMessage {...messages.submited} values={{ count: allSubmitsCount }} />
          </Typography>
          <Typography type="body1">
            <FormattedMessage {...messages.valid} values={{ count: submitMetrics.get(STATUS_OK, 0) }} />
          </Typography>
          <Typography type="body1">
            <FormattedMessage {...messages.invalid} values={{ count: submitMetrics.get(STATUS_ERR, 0) }} />
          </Typography>
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
