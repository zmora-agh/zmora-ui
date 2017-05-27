import React from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import ContestStatus from '../Status';
import TitledTextGrid from '../../TitledTextGrid';
import ContestButton from '../Button';
import messages from './messages';

import ExpandableTableRow from '../../ExpandableTable/Row';


const styleSheet = createStyleSheet('zmoraContestsTableRow', () => ({
  cardContentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  columnText: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.25,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const ContestRow = (props, context) => {
  const classes = context.styleManager.render(styleSheet);

  const contest = props.contest;

  const ownersNames = contest.owners.map((owner) => owner.name).join(', ');

  const header = [
    <Typography key={1} className={classes.columnText}> {contest.name}</Typography>,
    <Typography key={2} className={classes.columnText}>{contest.description}</Typography>,
    <Typography key={3} className={classes.columnText}>{ownersNames}</Typography>,
    <ContestStatus key={4} styling={classes.columnText} contest={contest} time={props.serverTime} />,
  ];

  return (
    <ExpandableTableRow header={header}>
      <Grid container style={{ padding: 10 }}>
        <TitledTextGrid xs={12} desc={<FormattedMessage {...messages.name} />} >
          {contest.name}
        </TitledTextGrid>
        <TitledTextGrid xs={12} desc={<FormattedMessage {...messages.description} />}>
          {contest.description}
        </TitledTextGrid>
        <TitledTextGrid xs={6} desc={<FormattedMessage {...messages.owners} />}>
          {ownersNames}
        </TitledTextGrid>
        <TitledTextGrid xs={3} desc={<FormattedMessage {...messages.startDate} />}>
          {moment(contest.start).add(contest.signupDuration, 'seconds').format('YYYY-MM-DD HH:mm')}
        </TitledTextGrid>
        <TitledTextGrid xs={3} desc={<FormattedMessage {...messages.endDate} />}>
          {moment(contest.start).add(contest.signupDuration + contest.duration, 'seconds').format('YYYY-MM-DD HH:mm')}
        </TitledTextGrid>
        <Grid item xs={1}>
          <ContestButton
            contest={contest}
            time={props.serverTime}
            onClick={() => props.onJoinClick(contest.id)}
            isOwner={props.isOwner}
          />
        </Grid>
      </Grid>
    </ExpandableTableRow>
  );
};

ContestRow.propTypes = {
  serverTime: React.PropTypes.object.isRequired,
  contest: React.PropTypes.object.isRequired,
  isOwner: React.PropTypes.bool.isRequired,
  onJoinClick: React.PropTypes.func,
};

ContestRow.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default ContestRow;
