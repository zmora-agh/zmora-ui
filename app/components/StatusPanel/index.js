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

import messages from './messages';

const styleSheet = createStyleSheet('StatusStyleSheet', () => ({
  textStyle: { 'margin-top': '5px', 'font-size': '16px' },
  iconStyle: { 'margin-bottom': '6px', 'margin-right': '12px' },
  showMoreButtonStyle: { float: 'right' },
  dataElement: { 'margin-bottom': '6px' },
}));

function StatusPanel(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div>
      <Text type="headline" component="h2"><FormattedMessage {...messages.header} /></Text>

      <Text component="div" className={classes.textStyle}>
        <div className={classes.dataElement}>
          <Laptop className={classes.iconStyle} />
          <FormattedMessage {...messages.active} /> 3
          </div>
        <div className={classes.dataElement}>
          <Person className={classes.iconStyle} />
          <FormattedMessage {...messages.logged} /> 54
          </div>
        <div className={classes.dataElement}>
          <div className={classes.textStyle}><FormattedMessage {...messages.lastLogged} /> <b>nologin</b>.</div>
        </div>
      </Text>

      <Button compact primary className={classes.showMoreButtonStyle}><FormattedMessage {...messages.showMoreButton} /></Button>
    </div>
  );
}

StatusPanel.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default StatusPanel;
