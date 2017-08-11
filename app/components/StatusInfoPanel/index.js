/**
 *
 * StatusInfoPanel
 *
 */

import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import Person from '../../svg-icons/person';
import Laptop from '../../svg-icons/laptop';
import Solved from '../../svg-icons/action-done';
import SolvedAll from '../../svg-icons/action-done-all';

import messages from './messages';

const styleSheet = createStyleSheet('zmoraAppStatusInfoPanelStyleSheet', () => ({
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

function StatusInfoPanel(props) {
  const classes = props.classes;

  return (
    <Card
      style={{
        boxShadow: '6px 10px 10px rgba(0,0,0,0.19), 3px 6px 6px rgba(0,0,0,0.23)',
        backgroundColor: '#FF6833',
        height: props.height }}
    >
      <CardContent>
        <Typography type="headline" component="h2" className={classes.header}>
          <FormattedMessage {...messages.header} />
        </Typography>

        <Typography component="div" className={classes.textStyle}>
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
        </Typography>
        <Button compact color="primary" className={classes.showMoreButtonStyle}>
          <FormattedMessage {...messages.showMoreButton} />
        </Button>
      </CardContent>
    </Card>
  );
}

StatusInfoPanel.propTypes = {
  height: React.PropTypes.number.isRequired,
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(StatusInfoPanel);
