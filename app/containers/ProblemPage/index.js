/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SwipeableViews from 'react-swipeable-views';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { makeSelectProblem } from '../App/selectors';
import { problemContentPropTypes } from '../../components/ProblemView/constants';
import { submitSetContext } from '../Submit/actions';

import FetchView from '../../components/FetchView';
import ProblemView from '../../components/ProblemView';
import ProblemExamplesPage from '../ProblemExamplesPage';
import ProblemSubmitsPage from '../ProblemSubmitsPage';
import QuestionsPage from '../QuestionsPage';

import { getProblem } from './actions';
import messages from './messages';

const styleSheet = createStyleSheet('ProblemPage', (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.appBar,
  },
}));

const getIds = (props) => ({
  contestId: parseInt(props.params.contest_id, 10),
  problemId: parseInt(props.params.problem_id, 10),
});

export class ProblemPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(getProblem(this.ids.contestId, this.ids.problemId));
    this.props.dispatch(submitSetContext({ problemId: this.ids.problemId }));
  }

  componentWillUnmount() {
    this.props.dispatch(submitSetContext({ problemId: undefined }));
  }

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = (index) => {
    this.setState({ index });
  };

  ids = getIds(this.props);

  render() {
    if (this.props.children) return this.props.children;

    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Paper>
        <div className={classes.appBar}>
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            textColor="accent"
            centered
          >
            <Tab label={<FormattedMessage {...messages.content} />} />
            <Tab label={<FormattedMessage {...messages.examples} />} />
            <Tab label={<FormattedMessage {...messages.submits} />} />
            <Tab label={<FormattedMessage {...messages.questions} />} />
          </Tabs>
        </div>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <FetchView>{this.props.problem && <ProblemView {...this.props.problem} />}</FetchView>
          <ProblemExamplesPage {...this.ids} defer={this.state.index !== 1} />
          <ProblemSubmitsPage {...this.ids} defer={this.state.index !== 2} />
          <QuestionsPage {...this.ids} />
        </SwipeableViews>
      </Paper>
    );
  }
}

ProblemPage.propTypes = {
  problem: PropTypes.shape(problemContentPropTypes),
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const ids = getIds(props);
  return createStructuredSelector({
    problem: makeSelectProblem(ids.contestId, ids.problemId),
  });
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemPage);
