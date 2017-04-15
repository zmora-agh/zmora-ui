import React from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Text } from 'material-ui/Text';
import { Layout } from 'material-ui/Layout';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import ContestStatus from '../Status';
import TitledTextLayout from '../../TitledTextLayout';
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

  const header = [<Text key={1} className={classes.columnText}> {contest.name}</Text>,
    <Text key={2} className={classes.columnText}>{contest.description}</Text>,
    <Text key={3} className={classes.columnText}>{ownersNames}</Text>,
    <Text key={4} className={classes.columnText}><ContestStatus contest={contest} time={props.serverTime} /></Text>];

  return (
    <ExpandableTableRow header={header}>
      <Layout container style={{ padding: 10 }}>
        <TitledTextLayout xs={12} desc={<FormattedMessage {...messages.name} />} >
          {contest.name}
        </TitledTextLayout>
        <TitledTextLayout xs={12} desc={<FormattedMessage {...messages.description} />}>
          {contest.description}
        </TitledTextLayout>
        <TitledTextLayout xs={6} desc={<FormattedMessage {...messages.owners} />}>
          {ownersNames}
        </TitledTextLayout>
        <TitledTextLayout xs={3} desc={<FormattedMessage {...messages.startDate} />}>
          {moment(contest.start).add(contest.signupDuration, 'seconds').format('YYYY-MM-DD HH:mm')}
        </TitledTextLayout>
        <TitledTextLayout xs={3} desc={<FormattedMessage {...messages.endDate} />}>
          {moment(contest.start).add(contest.signupDuration + contest.duration, 'seconds').format('YYYY-MM-DD HH:mm')}
        </TitledTextLayout>
        <Layout item xs={1}>
          <ContestButton contest={contest} time={props.serverTime} onClick={() => props.onJoinClick(contest)} />
        </Layout>
      </Layout>
    </ExpandableTableRow>
  );
};

ContestRow.propTypes = {
  serverTime: React.PropTypes.object.isRequired,
  contest: React.PropTypes.object.isRequired,
  onJoinClick: React.PropTypes.func,
};

ContestRow.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default ContestRow;
