/**
 *
 * StatusPanel
 *
 */

import React from 'react';
import Text from 'material-ui/Text';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Button from 'material-ui/Button';
import Person from '../../svg-icons/person';
import Laptop from '../../svg-icons/laptop';
import Solved from '../../svg-icons/action-done';
import SolvedAll from '../../svg-icons/action-done-all';

import messages from './messages';

const styleSheet = createStyleSheet('StatusStyleSheet', () => ({
  textStyle: { 'margin-top': '5px', 'font-size': '16px' },
  iconStyle: { 'margin-bottom': '6px', 'margin-right': '12px' },
  showMoreButtonStyle: { float: 'right' },
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

function StatusPanel(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div>
      <Text type="headline" component="h2">
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
    </div>
  );
}

StatusPanel.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default StatusPanel;
