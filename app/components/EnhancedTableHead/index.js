/**
 * Created by oszust on 08.05.17.
 */
import React, { Component, PropTypes } from 'react';
import {
  TableHead,
  TableSortLabel,
  TableRow,
  TableCell } from 'material-ui/Table';
import { COLUMN_PROP_TYPE } from './constants';

export default class EnhancedTableHead extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(COLUMN_PROP_TYPE),
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
          {this.props.columns.map(
            (column) =>
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
        </TableRow>
      </TableHead>
    );
  }
}
