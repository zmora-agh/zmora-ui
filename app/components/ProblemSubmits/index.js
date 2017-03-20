/**
*
* ProblemSubmits
*
*/

import React, { Component, PropTypes } from 'react';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
} from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import FileFileDownload from '../../svg-icons/file-download';
import EditorModeEdit from '../../svg-icons/mode-edit';
import { submitsPropType } from './constants';

const columnData = [
  { id: 'id', label: 'Identifier' },
  { id: 'created', label: 'Time' },
  { id: 'status', label: 'Status' },
];

class EnhancedTableHead extends Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
  };

  createSortHandler = (property) => (event) => this.props.onRequestSort(event, property);

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columnData.map((column) =>
            <TableCell key={column.id}>
              <TableSortLabel
                active={orderBy === column.id}
                direction={order}
                onClick={this.createSortHandler(column.id)}
              >
                {column.label}
              </TableSortLabel>
            </TableCell>
          , this)}
          <TableCell />
        </TableRow>
      </TableHead>
    );
  }
}

export default class ProblemSubmits extends Component { // eslint-disable-line react/no-multi-comp
  static propTypes = {
    submits: submitsPropType,
  };

  state = {
    order: 'asc',
    orderBy: 'id',
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { order, orderBy } = this.state;

    const data = this.props.submits.sort(
      (a, b) => (
        order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]
      ),
    );

    return (
      <Table>
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={this.handleRequestSort}
        />
        <TableBody>
          {data.map((n) =>
            <TableRow key={n.id}>
              <TableCell>{n.id}</TableCell>
              <TableCell>{n.created}</TableCell>
              <TableCell>{n.status}</TableCell>
              <TableCell>
                <IconButton><EditorModeEdit /></IconButton>
                <IconButton><FileFileDownload /></IconButton>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}
