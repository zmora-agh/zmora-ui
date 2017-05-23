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
import { sortBy } from '../../utils/render';
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
      desc: false,
      orderBy: 'date',
    };
  }

  handleRequestSort = (event, orderBy) => {
    this.setState({
      desc: this.state.orderBy === orderBy ? !this.state.desc : false,
      orderBy,
    });
  };

  render() {
    const { desc, orderBy } = this.state;
    const sortedSubmits = sortBy(this.props.submits, (submit) => submit[orderBy], desc);

    return (
      <Table>
        <EnhancedTableHead
          columns={columnData}
          order={desc ? 'desc' : 'asc'}
          orderBy={orderBy}
          onRequestSort={this.handleRequestSort}
        />
        <TableBody>
          {sortedSubmits.map((submit) =>
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
