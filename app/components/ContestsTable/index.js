/**
*
* ContestsTable
*
*/
import React from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { List, ListItem } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { Text } from 'material-ui/Text';
import { Layout } from 'material-ui/Layout';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import { Card, CardContent } from 'material-ui/Card';
import KeyboardArrowUp from '../../svg-icons/keyboard-arrow-up';
import KeyboardArrowDown from '../../svg-icons/keyboard-arrow-down';
import ContestStatus from '../ContestStatus';
import TitledTextLayout from '../TitledTextLayout';
import ContestButton from '../ContestButton';
import messages from './messages';


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
  cardHidden: {
    backgroundColor: 'inherit',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '98%',
    boxShadow: 'none',
    transition: '0.5s',
  },
  cardExpanded: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    boxShadow: '1px 3px 10px 0px rgba(0, 0, 0, 0.4)',
    transition: '0.5s',
  },
  listItemHidden: {
    paddingTop: 0,
    paddingBottom: 0,
    transition: '0.5s',
  },
  listItemExpanded: {
    paddingTop: 20,
    paddingBottom: 20,
    transition: '0.5s',
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

  isExpanded(key) {
    if (this.state[key] === undefined) return false;

    return this.state[key];
  }

  toggleExpanded(key) {
    this.setState({ [key]: !this.isExpanded(key) });
  }

  createTableRow(row, classes) {
    const isExpanded = this.isExpanded(row.id);
    const onClick = () => this.toggleExpanded(row.id);
    const expandedIcon = isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />;
    const cardClass = !isExpanded ? classes.cardHidden : classes.cardExpanded;
    const listItemClass = !isExpanded ? classes.listItemHidden : classes.listItemExpanded;
    const ownersNames = row.owners.map((owner) => owner.name).join(', ');
    const serverTime = moment().add(this.props.offset, 'seconds');
    return (
      <ListItem key={row.id} className={listItemClass}>
        <Card className={cardClass}>
          <CardContent className={classes.cardContentRow} onClick={onClick}>
            <Text className={classes.columnText}>{expandedIcon} {row.name}</Text>
            <Text className={classes.columnText}>{row.description}</Text>
            <Text className={classes.columnText}>{ownersNames}</Text>
            <Text className={classes.columnText}><ContestStatus contest={row} time={serverTime} /></Text>
          </CardContent>
          <Collapse in={isExpanded} transitionDuration={500}>
            <CardContent>
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
            </CardContent>
          </Collapse>
        </Card>
      </ListItem>
    );
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const rows = Object.keys(this.props.contests).map((key) => this.createTableRow(this.props.contests[key], classes));
    return (
      <List style={{ width: '100%', backgroundColor: '#fafafa' }}>
        {rows}
      </List>
    );
  }
}

export default ContestsTable;
