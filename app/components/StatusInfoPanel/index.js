/**
 *
 * StatusInfoPanel
 *
 */

import React from 'react';
import Text from 'material-ui/Text';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Button from 'material-ui/Button';
import {
  Card,
  CardContent,
} from 'material-ui/Card';
import Person from '../../svg-icons/person';
import Laptop from '../../svg-icons/laptop';
import Solved from '../../svg-icons/action-done';
import SolvedAll from '../../svg-icons/action-done-all';

import messages from './messages';

const styleSheet = createStyleSheet('StatusStyleSheet', () => ({
  header: { color: '#000000' },
  textStyle: { 'margin-top': '5px', 'font-size': '20px', color: '#000000' },
  iconStyle: { 'margin-bottom': '6px', 'margin-right': '12px', color: '#000000' },
  showMoreButtonStyle: { float: 'right', 'font-size': '18px', color: '#000000' },
  dataElement: { 'margin-bottom': '6px' },
}));

function StatusElement(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div className={classes.dataElement}>
      {props.icon}
      {props.title}
      {props.data}
    </div>
  );
}

StatusElement.propTypes = {
  icon: React.PropTypes.object,
  title: React.PropTypes.object.isRequired,
  data: React.PropTypes.any,
};

StatusElement.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

function StatusInfoPanel(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <Card
      style={{
        boxShadow: '6px 10px 10px rgba(0,0,0,0.19), 3px 6px 6px rgba(0,0,0,0.23)',
        backgroundColor: '#FF6833',
        height: props.height }}
    >
      <CardContent>
        <Text type="headline" component="h2" className={classes.header}>
          <FormattedMessage {...messages.header} />
        </Text>

        <Text component="div" className={classes.textStyle}>
          <StatusElement
            icon={<Laptop className={classes.iconStyle} />}
            title={<FormattedMessage {...messages.active} />} data="3"
          />
          <StatusElement
            icon={<Person className={classes.iconStyle} />}
            title={<FormattedMessage {...messages.logged} />} data="54"
          />
          <StatusElement
            icon={<Solved className={classes.iconStyle} />}
            title={<FormattedMessage {...messages.solved} />}
            data="17"
          />
          <StatusElement
            icon={<SolvedAll className={classes.iconStyle} />}
            title={<FormattedMessage {...messages.solvedAll} />}
            data="255"
          />
          <StatusElement title={<FormattedMessage {...messages.lastLogged} />} data={<b>nologin</b>} />
        </Text>
        <Button compact primary className={classes.showMoreButtonStyle}>
          <FormattedMessage {...messages.showMoreButton} />
        </Button>
      </CardContent>
    </Card>
  );
}

StatusInfoPanel.propTypes = {
  height: React.PropTypes.number.isRequired,
};

StatusInfoPanel.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default StatusInfoPanel;
