/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { submitSetContext } from '../Submit/actions';

import ProblemContentPage from '../ProblemContentPage';
import ProblemExamplesPage from '../ProblemExamplesPage';
import ProblemSubmitsPage from '../ProblemSubmitsPage';
import QuestionsPage from '../QuestionsPage';

import messages from './messages';
import { SUBMITS_HASH_PREFIX, CONTENT_HASH_PREFIX, EXAMPLES_HASH_PREFIX, QUESTIONS_HASH_PREFIX } from './constants';
import SubmitDetails from '../SubmitDetails/index';

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

@connect(null, (dispatch) => ({ dispatch }))
export default class ProblemPage extends React.Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
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
    this.registerTabs();
    this.ids = getIds(props);
  }

  registerTabs() {
    this.tabs = [];

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
      ProblemSubmitsPage
    );
    this.registerTab(
      QUESTIONS_HASH_PREFIX,
      () => <FormattedMessage {...messages.questions} />,
      QuestionsPage
    );
  }

  registerTab(hash, header, body) {
    this.tabs.push({ hash, header, body });
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

    const classes = this.context.styleManager.render(styleSheet);

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
          {this.tabs.map((TabEl, i) => <TabEl.body key={TabEl.hash} {...this.ids} defer={index !== i} />) }
        </SwipeableViews>
        <SubmitDetails
          {...this.ids}
          submitId={hash.prefix === SUBMITS_HASH_PREFIX && !isNaN(hash.value) ?
            parseInt(hash.value, 10) : undefined}
        />
      </Paper>
    );
  }
}

ProblemPage.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
  dispatch: PropTypes.func,
};
