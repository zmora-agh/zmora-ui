/**
*
* ProblemSubmits
*
*/

import React, { Component } from 'react';

import Table,
{ TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';

import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import moment from 'moment';
import { submitsPropType } from './constants';
import messages from './messages';
import EnhancedTableHead from '../EnhancedTableHead';
import { SUBMITS_HASH_PREFIX } from '../../containers/ProblemPage/constants';

const columnData = [
  { id: 'id', label: <FormattedMessage {...messages.id} /> },
  { id: 'date', label: <FormattedMessage {...messages.time} /> },
  { id: 'status', label: <FormattedMessage {...messages.status} /> },
];


export default class ProblemSubmits extends Component { // eslint-disable-line react/no-multi-comp
  static propTypes = {
    submits: submitsPropType,
  };

  constructor(props) {
    super(props);
    this.state = {
      order: 'desc',
      orderBy: 'date',
    };
  }

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

    const data = this.props.submits
      .sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));

    return (
      <Table>
        <EnhancedTableHead
          columns={columnData}
          order={order}
          orderBy={orderBy}
          onRequestSort={this.handleRequestSort}
        />
        <TableBody>
          {data.map((submit) =>
            <TableRow key={submit.id}>
              <TableCell>{submit.id}</TableCell>
              <TableCell>{moment(submit.date).format('DD-MM-YYYY HH:mm:ss')}</TableCell>
              <TableCell>{submit.status}</TableCell>
              <TableCell>
                <a href={`#${SUBMITS_HASH_PREFIX}=${submit.id}`}>
                  <Button raised primary><FormattedMessage {...messages.seeDetails} /></Button>
                </a>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}
