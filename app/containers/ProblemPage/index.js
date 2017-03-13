/*
 *
 * ProblemPage
 *
 */

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

import ProblemView from './../../../app/components/ProblemView';
import ProblemExampleData from './../../../app/components/ProblemExampleData';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styleSheet = createStyleSheet('ProblemPage', (theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.appBar,
  },
}));

export class ProblemPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeIndex = (index) => {
    this.setState({ index });
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Paper>
        <div className={classes.appBar}>
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            textColor="accent"
            fullWidth
          >
            <Tab label="Treść" />
            <Tab label="Przykłady" />
            <Tab label="Zgłoszenia" />
            <Tab label="Pytania" />
          </Tabs>
        </div>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <ProblemView />
          <ProblemExampleData />
          <div>asd</div>
        </SwipeableViews>
      </Paper>
    );
  }
}

ProblemPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProblemPage);
