/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { connect } from 'react-redux';

import ProblemViewPage from '../ProblemViewPage';
import ProblemExamplesPage from '../ProblemExamplesPage';
import ProblemSubmitsPage from '../ProblemSubmitsPage';

import messages from './messages';

const styleSheet = createStyleSheet('ProblemPage', (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.appBar,
  },
}));

const iterableProps = (elems, props, indexedProp) =>
  elems.map((elem, index) => React.createElement(elem, Object.assign({}, props, indexedProp(index)), {}));

export class ProblemPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      index: this.getIndex(props),
    };
  }

  getIndex(props) {
    switch (props.tab) {
      case 'submits':
        return 2;
      default:
        return 0;
    }
  }

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = (index) => {
    this.setState({ index });
  };

  ids = {
    contestId: parseInt(this.props.params.contest_id, 10),
    problemId: parseInt(this.props.params.problem_id, 10),
  };

  tabs = [
    ProblemViewPage,
    ProblemExamplesPage,
    ProblemSubmitsPage,
  ];

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
          {iterableProps(this.tabs, this.ids, (index) => ({ defer: this.state.index !== index }))}
          <div>empty questions page</div>
        </SwipeableViews>
      </Paper>
    );
  }
}

ProblemPage.propTypes = {
  params: React.PropTypes.object,
  children: PropTypes.node,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(ProblemPage);
