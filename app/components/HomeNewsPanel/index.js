/**
*
* HomeNewsPanel
*
*/

// @flow weak

import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {
  Card,
  CardContent,
} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Text';
import { red } from 'material-ui/styles/colors';
import HardwareKeyboardArrowDown from '../../svg-icons/arrow-down';

const styleSheet = createStyleSheet('RecipeReviewCard', (theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: { backgroundColor: red[500] },
  title: { fontSize: 20, marginBottom: 0 },
  flexGrow: { flex: '1 1 auto' },
}));


export default class HomeNewsPanel extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  state = { expanded: false };

  handleExpandClick = () => this.setState({ expanded: !this.state.expanded });

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div>
        <Card className={classes.card}>
          <CardContent actionSpacing={false} style={{ margin: '0px', 'padding-bottom': '10px' }}>
            <div style={{ display: 'flex', 'flex-direction': 'row' }}>
              <Text><div>{this.props.date}</div><div style={{ 'font-size': '16px' }}>{this.props.title}</div></Text>
              <div className={classes.flexGrow} />
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
              ><HardwareKeyboardArrowDown />
              </IconButton>
            </div>
          </CardContent>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent style={{ margin: '0px', 'padding-top': '0px' }}>
              {this.props.content}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

HomeNewsPanel.propTypes = {
  date: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.any,
};
