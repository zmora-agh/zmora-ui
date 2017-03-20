/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { connect } from 'react-redux';

import ProblemView from '../../../app/components/ProblemView';
import { problemContentPropTypes } from '../../components/ProblemView/constants';
import ProblemExampleData from '../../../app/components/ProblemExampleData';
import { examplesPropType } from '../../components/ProblemExampleData/constants';
import ProblemSubmits from '../../../app/components/ProblemSubmits';
import { submitsPropType } from '../../components/ProblemSubmits/constants';

import makeSelectProblemPage from './selectors';

const styleSheet = createStyleSheet('ProblemPage', (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.appBar,
  },
}));

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
            <Tab label="Treść" />
            <Tab label="Przykłady" />
            <Tab label="Zgłoszenia" />
            <Tab label="Pytania" />
          </Tabs>
        </div>
        <SwipeableViews animateHeight index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <ProblemView {...this.props.content} />
          <ProblemExampleData examples={this.props.examples} />
          <ProblemSubmits submits={this.props.submits} />
          <div>bsd</div>
        </SwipeableViews>
      </Paper>
    );
  }
}

ProblemPage.propTypes = {
  children: PropTypes.node,
  content: React.PropTypes.shape(problemContentPropTypes),
  examples: examplesPropType,
  submits: submitsPropType,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(makeSelectProblemPage, mapDispatchToProps)(ProblemPage);
