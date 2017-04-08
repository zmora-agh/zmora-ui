/**
*
* ContestsTable
*
*/
import React from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Text } from 'material-ui/Text';
import { Layout } from 'material-ui/Layout';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import ContestStatus from '../ContestStatus';
import TitledTextLayout from '../TitledTextLayout';
import ContestButton from '../ContestButton';
import messages from './messages';

import ExpandableTable from '../ExpandableTable';
import ExpandableTableRow from '../ExpandableTable/Row';


const styleSheet = createStyleSheet('zmoraContestsTable', () => ({
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

export class ContestsTable extends React.PureComponent {

  static propTypes = {
    offset: React.PropTypes.number.isRequired,
    contests: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  createTableRow(row, classes) {
    const ownersNames = row.owners.map((owner) => owner.name).join(', ');
    const serverTime = moment().add(this.props.offset, 'seconds');

    const header = [<Text key={1} className={classes.columnText}> {row.name}</Text>,
      <Text key={2} className={classes.columnText}>{row.description}</Text>,
      <Text key={3} className={classes.columnText}>{ownersNames}</Text>,
      <Text key={4} className={classes.columnText}><ContestStatus contest={row} time={serverTime} /></Text>];

    return (
      <ExpandableTableRow key={row.id} header={header}>
        <Layout container style={{ padding: 10 }}>
          <TitledTextLayout xs={12} desc={<FormattedMessage {...messages.name} />} >
            {row.name}
          </TitledTextLayout>
          <TitledTextLayout xs={12} desc={<FormattedMessage {...messages.description} />}>
            {row.description}
          </TitledTextLayout>
          <TitledTextLayout xs={6} desc={<FormattedMessage {...messages.owners} />}>
            {ownersNames}
          </TitledTextLayout>
          <TitledTextLayout xs={3} desc={<FormattedMessage {...messages.startDate} />}>
            {moment(row.start).add(row.signupDuration, 'seconds').format('YYYY-MM-DD HH:mm')}
          </TitledTextLayout>
          <TitledTextLayout xs={3} desc={<FormattedMessage {...messages.endDate} />}>
            {moment(row.start).add(row.signupDuration + row.duration, 'seconds').format('YYYY-MM-DD HH:mm')}
          </TitledTextLayout>
          <Layout item xs={1}>
            <ContestButton contest={row} time={serverTime} />
          </Layout>
        </Layout>
      </ExpandableTableRow>
    );
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const rows = Object.keys(this.props.contests).map((key) => this.createTableRow(this.props.contests[key], classes));
    return (
      <ExpandableTable>
        {rows}
      </ExpandableTable>
    );
  }
}

export default ContestsTable;
