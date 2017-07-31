/**
*
* StatusInfoList
*
*/

import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

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

class StatusInfoList extends React.Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  classes = this.context.styleManager.render(styleSheet);

  renderRows() {
    const rows = [];
    this.props.statuses.forEach((status, i) => {
      rows.push(
        <TableRow className={this.classes.row} key={i}>
          <TableCell>
            <Typography className={this.classes.textTitle}>{status.title}</Typography>
          </TableCell>
          <TableCell>
            <Typography className={this.classes.textInfo}>{status.info}</Typography>
          </TableCell>
        </TableRow>
      );
    });

    return rows;
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
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

StatusInfoList.propTypes = {
  statuses: React.PropTypes.array.isRequired,
};

export default StatusInfoList;
