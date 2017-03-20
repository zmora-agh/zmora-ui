/**
*
* ContestsTable
*
*/
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { Paper } from 'material-ui/Paper';
import { Text } from 'material-ui/Text';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';
import { Card, CardContent } from 'material-ui/Card';
import KeyboardArrowUp from '../../svg-icons/keyboard-arrow-up';
import KeyboardArrowDown from '../../svg-icons/keyboard-arrow-down';
import { CONTEST_TYPE } from '../../containers/ContestsPage/constants';

const styleSheet = createStyleSheet('zmoraContestsTable', () => ({
  cardContentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnText: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.2,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardHidden: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '98%',
    boxShadow: 'none',
    transition: '0.5s',
  },
  cardExpanded: {
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
    contests: React.PropTypes.arrayOf(CONTEST_TYPE),
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
    const expandedIcon = isExpanded ? <KeyboardArrowDown /> : <KeyboardArrowUp onClick={onClick} />;
    const cardClass = !isExpanded ? classes.cardHidden : classes.cardExpanded;
    const listItemClass = !isExpanded ? classes.listItemHidden : classes.listItemExpanded;
    return (
      <ListItem key={row.id} className={listItemClass}>
        <Card className={cardClass}>
          <CardContent className={classes.cardContentRow} onClick={onClick} >
            <Text className={classes.columnText}>{expandedIcon} {row.name}</Text>
            <Text className={classes.columnText}>{row.description}</Text>
            <Text className={classes.columnText}>{row.owner}</Text>
            <Text className={classes.columnText}>Zapisy do</Text>
            <Text className={classes.columnText}>{row.date}</Text>
          </CardContent>
          <Collapse in={isExpanded} transitionDuration={500}>
            <CardContent>
              <Text>
                Drogi Marszałku, Wysoka Izbo. PKB rośnie. Różnorakie i znaczenia tych problemów nie zapewni iż zakup nowego sprzętu pomaga w większym stopniu tworzenie kierunków rozwoju. Praca wre. Obywatelu, dokończenie aktualnych projektów pomaga w większym stopniu tworzenie modelu rozwoju. Każdy już mówiłem jasne jest ważne zadanie w tym zakresie spełnia ważne zadanie.
              </Text>
            </CardContent>
          </Collapse>
        </Card>
      </ListItem>
    );
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const rows = this.props.contests.map((child) => this.createTableRow(child, classes));
    return (
      <Paper>
        <List style={{ width: '100%' }}>
          {rows}
        </List>
      </Paper>
    );
  }
}

export default ContestsTable;
