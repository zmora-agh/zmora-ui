import React from 'react';
import { gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import Table,
{ TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';

import messages from './messages';
import { problemResultsPropType } from './constants';
import { getByPath, sortBy } from '../../utils/render';

import EnhancedTableHead from '../EnhancedTableHead';

const columnData = [
  { id: 'author.name', label: <FormattedMessage {...messages.authorName} /> },
  { id: 'date', label: <FormattedMessage {...messages.date} /> },
  { id: 'status', label: <FormattedMessage {...messages.status} /> },
];

export const ResultFragment = gql`
  fragment Result on Submit {
    id
    author {
      id
      name
    }
    date
    status
  }
`;

export default class ProblemResults extends React.Component {
  static propTypes = {
    results: problemResultsPropType,
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
    const sortedResults = sortBy(this.props.results, (result) => getByPath(result, orderBy), desc);

    return (
      <Table>
        <EnhancedTableHead
          columns={columnData}
          order={desc ? 'desc' : 'asc'}
          orderBy={orderBy}
          onRequestSort={this.handleRequestSort}
        />
        <TableBody>
          {sortedResults.map((result) =>
            <TableRow key={result.id}>
              <TableCell>
                <a href={this.props.generateHash(result.author.id)}>{result.author.name}</a>
              </TableCell>
              <TableCell>{moment(result.date).format('DD-MM-YYYY HH:mm:ss')}</TableCell>
              <TableCell>{result.status}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}
