/**
*
* ProblemSubmits
*
*/

import React, { Component, PropTypes } from 'react';
import { gql } from 'react-apollo';

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
import SubmitDetails from '../../containers/SubmitDetails/index';

export const SubmitMetaFragment = gql`
  fragment SubmitMeta on Submit {
    id
    date
    status
  }
`;

const columnData = [
  { id: 'id', label: <FormattedMessage {...messages.id} /> },
  { id: 'date', label: <FormattedMessage {...messages.time} /> },
  { id: 'status', label: <FormattedMessage {...messages.status} /> },
  { id: 'actions' },
];

export default class ProblemSubmits extends Component {
  static propTypes = {
    submits: submitsPropType,
    submitId: PropTypes.number,
    onSubmitSelect: PropTypes.func.isRequired,
    onSubmitDeselect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      desc: true,
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
      <div>
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
                  <Button primary onClick={() => this.props.onSubmitSelect(submit.id)}>
                    <FormattedMessage {...messages.seeDetails} />
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <SubmitDetails
          open={this.props.submitId}
          submitId={this.props.submitId}
          onClose={this.props.onSubmitDeselect}
        />
      </div>
    );
  }
}
