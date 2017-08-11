/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { gql, graphql } from 'react-apollo';
import SwipeableViews from 'react-swipeable-views';

import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { createStructuredSelector } from 'reselect';

import { submitSetContext } from '../Submit/actions';

import ProblemResultsPage from '../ProblemResultsPage';
import ProblemContentPage from '../ProblemContentPage';
import ProblemExamplesPage from '../ProblemExamplesPage';
import ProblemSubmitsPage from '../ProblemSubmitsPage';
// import QuestionsPage from '../QuestionsPage';

import messages from './messages';
import {
  SUBMITS_HASH_PREFIX,
  CONTENT_HASH_PREFIX,
  EXAMPLES_HASH_PREFIX,
  // QUESTIONS_HASH_PREFIX,
  RESULTS_HASH_PREFIX,
} from './constants';

import { makeSelectUser } from '../App/selectors';

const styleSheet = createStyleSheet('ProblemPage', (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.appBar,
  },
}));

const getIds = (props) => ({
  contestId: parseInt(props.params.contest_id, 10),
  problemId: parseInt(props.params.problem_id, 10),
});

const parseHash = (hash) => ({
  prefix: hash.split('=')[0].replace('#', ''),
  value: hash.split('=')[1],
});

const ContestOwnersQuery = gql`
  query ContestOwnersQuery($contestId: Int!) {
    contest(id: $contestId) {
      id
      owners {
        id
      }
    }
  }
`;

@withStyles(styleSheet)
@graphql(ContestOwnersQuery, { options: (props) => ({ variables: { contestId: getIds(props).contestId } }) })
@connect(createStructuredSelector({ user: makeSelectUser() }), (dispatch) => ({ dispatch }))
export default class ProblemPage extends React.Component {
  static propTypes = {
    data: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
    dispatch: PropTypes.func,
    classes: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.parseProps(props);
  }

  componentDidMount() {
    this.props.dispatch(submitSetContext({ problemId: this.ids.problemId }));
  }

  componentWillUpdate(nextProps) {
    this.parseProps(nextProps);
  }

  componentWillUnmount() {
    this.props.dispatch(submitSetContext({ problemId: undefined }));
  }

  getSwipeableViewIndex(hashPrefix) {
    return this.tabs.map((t) => t.hash).includes(hashPrefix) ? this.tabs.map((t) => t.hash).indexOf(hashPrefix) : 0;
  }

  parseProps(props) {
    this.registerTabs(props);
    this.ids = getIds(props);
  }

  registerTabs(props) {
    const { loading, contest } = props.data;
    const hash = parseHash(props.location.hash);
    this.tabs = [];
    // if (loading) return;

    this.registerTab(
      CONTENT_HASH_PREFIX,
      () => <FormattedMessage {...messages.content} />,
      ProblemContentPage
    );
    this.registerTab(
      EXAMPLES_HASH_PREFIX,
      () => <FormattedMessage {...messages.examples} />,
      ProblemExamplesPage
    );
    this.registerTab(
      SUBMITS_HASH_PREFIX,
      () => <FormattedMessage {...messages.submits} />,
      ProblemSubmitsPage,
      { submitId: hash.value ? parseInt(hash.value, 10) : undefined,
        onSubmitSelect: (submitId) => { window.location.hash = `#${SUBMITS_HASH_PREFIX}=${submitId}`; },
        onSubmitDeselect: () => { window.location.hash = `#${SUBMITS_HASH_PREFIX}`; } }
    );
    // We are missing questions feature so far
    // this.registerTab(
    //   QUESTIONS_HASH_PREFIX,
    //   () => <FormattedMessage {...messages.questions} />,
    //   QuestionsPage
    // );

    if (!loading && contest.owners.map((o) => o.id).includes(props.user.id)) {
      this.registerTab(
        RESULTS_HASH_PREFIX,
        () => <FormattedMessage {...messages.results} />,
        ProblemResultsPage,
        { userId: parseInt(parseHash(props.location.hash).value, 10),
          generateHash: (userId) => `#${RESULTS_HASH_PREFIX}=${userId}` }
      );
    }
  }

  registerTab(hash, header, body, props) {
    this.tabs.push({ hash, header, body, props });
  }


  handleChangeIndex = (index) => {
    window.location.hash = this.tabs[index].hash;
  };

  handleChange = (event, index) => {
    window.location.hash = this.tabs[index].hash;
  };

  ids = {};

  render() {
    if (this.props.children) return this.props.children;
    const hash = parseHash(this.props.location.hash);
    const index = this.getSwipeableViewIndex(hash.prefix);

    const classes = this.props.classes;

    return (
      <Paper>
        <div className={classes.appBar}>
          <Tabs
            index={index}
            onChange={this.handleChange}
            textColor="accent"
            centered
          >
            {this.tabs.map((tab) => <Tab key={tab.hash} label={tab.header()} />) }
          </Tabs>
        </div>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {this.tabs.map((TabEl, i) => <TabEl.body
            key={TabEl.hash}
            {...this.ids}
            defer={index !== i}
            {...TabEl.props}
          />) }
        </SwipeableViews>
      </Paper>
    );
  }
}
