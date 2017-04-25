/**
*
* StatusInfoList
*
*/

import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import { FormattedMessage } from 'react-intl';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
import Text from 'material-ui/Text';
import messages from './messages';

const styleSheet = createStyleSheet('StatusInfoList', () => ({
  header: {
    backgroundColor: '#3F51B5',
  },
  headerText: {
    fontSize: 26,
  },
  odd: {
    backgroundColor: '#6E7CC7',
  },
  even: {
    backgroundColor: '#9CA6D7',
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
    let i = 1;
    let rowClass = null;
    this.props.statuses.forEach((status) => {
      if (i % 2 === 1) {
        rowClass = this.classes.odd;
      } else {
        rowClass = this.classes.even;
      }

      i += 1;
      rows.push(
        <TableRow className={rowClass}>
          <TableCell>
            <Text className={this.classes.textTitle}>{status.title}</Text>
          </TableCell>
          <TableCell>
            <Text className={this.classes.textInfo}>{status.info}</Text>
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
      <Table style={{ boxShadow: '6px 10px 10px rgba(0,0,0,0.19), 4px 7px 7px rgba(0,0,0,0.26)' }}>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell>
              <Text className={classes.headerText}><FormattedMessage {...messages.header} /></Text>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
        <TableRow className={classes.header}>
          <TableCell />
          <TableCell />
        </TableRow>
      </Table>
    );
  }
}

StatusInfoList.propTypes = {
  statuses: React.PropTypes.array.isRequired,
};

export default StatusInfoList;
