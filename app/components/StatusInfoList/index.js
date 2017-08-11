/**
*
* StatusInfoList
*
*/

import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import messages from './messages';

const styleSheet = createStyleSheet('zmoraAppStatusInfoList', () => ({
  header: {
    backgroundColor: '#3F51B5',
  },
  headerText: {
    fontSize: 26,
  },
  row: {
    backgroundColor: '#6E7CC7',
    '&:nth-child(even)': {
      backgroundColor: '#9CA6D7',
    },
  },
  textTitle: {
    fontSize: 22,
  },
  textInfo: {
    fontSize: 22,
  },
}));

@withStyles(styleSheet)
class StatusInfoList extends React.Component {
  static propTypes = {
    statuses: React.PropTypes.array.isRequired,
    classes: React.PropTypes.object.isRequired,
  };

  renderRows() {
    const rows = [];
    this.props.statuses.forEach((status, i) => {
      rows.push(
        <TableRow className={this.props.classes.row} key={i}>
          <TableCell>
            <Typography className={this.props.classes.textTitle}>{status.title}</Typography>
          </TableCell>
          <TableCell>
            <Typography className={this.props.classes.textInfo}>{status.info}</Typography>
          </TableCell>
        </TableRow>
      );
    });

    return rows;
  }

  render() {
    const classes = this.props.classes;
    const rows = this.renderRows();

    return (
      <Table>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>
              <Typography className={classes.headerText}><FormattedMessage {...messages.header} /></Typography>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
          <TableRow className={classes.header}>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default StatusInfoList;
