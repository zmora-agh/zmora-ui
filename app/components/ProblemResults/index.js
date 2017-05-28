import React from 'react';

import { FormattedMessage } from 'react-intl';
import Table,
{ TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
import moment from 'moment';
import messages from './messages';
import { problemResultsPropType } from './constants';
import EnhancedTableHead from '../../components/EnhancedTableHead';
import { getByPath, sortBy } from '../../utils/render';

const columnData = [
  { id: 'author.name', label: <FormattedMessage {...messages.authorName} /> },
  { id: 'date', label: <FormattedMessage {...messages.date} /> },
  { id: 'status', label: <FormattedMessage {...messages.status} /> },
];

// eslint-disable-next-line react/prefer-stateless-function
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
              <TableCell>{result.author.name}</TableCell>
              <TableCell>{moment(result.date).format('DD-MM-YYYY HH:mm:ss')}</TableCell>
              <TableCell>{result.status}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}
