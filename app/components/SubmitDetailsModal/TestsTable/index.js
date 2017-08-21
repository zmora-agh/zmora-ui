/**
 * Created by oszust on 08.05.17.
 */
import React, { PropTypes, Component } from 'react';
import { gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';
import Table, { TableRow, TableCell, TableBody } from 'material-ui/Table';
import EnhancedTableHead from '../../EnhancedTableHead';
import { sortBy } from '../../../utils/render';
import messages from './messages';

export const TestResultsFragment = gql`
  fragment TestResults on Submit {
    testResults {
      id
      test
      status
      ramUsage
      executionTime
    }
  }
`;

const columnData = [
  { id: 'test', label: <FormattedMessage {...messages.test} /> },
  { id: 'status', label: <FormattedMessage {...messages.status} /> },
  { id: 'executionTime', label: <FormattedMessage {...messages.executionTime} /> },
  { id: 'ramUsage', label: <FormattedMessage {...messages.ramUsage} /> },
];

class TestsTable extends Component {
  static propTypes = {
    tests: PropTypes.arrayOf(
      React.PropTypes.shape({
        status: React.PropTypes.node.isRequired,
        executionTime: React.PropTypes.number.isRequired,
        ramUsage: React.PropTypes.number.isRequired,
        test: React.PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      desc: true,
      orderBy: 'test',
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

    const tests = sortBy(this.props.tests, (test) => test[orderBy], desc);
    return (
      <div style={{ padding: 10 }}>
        <Typography type="title"><FormattedMessage {...messages.tests} /></Typography>
        <Table>
          <EnhancedTableHead
            columns={columnData}
            order={desc ? 'desc' : 'asc'}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {tests.map((test) =>
              <TableRow key={test.id}>
                <TableCell>{test.test}</TableCell>
                <TableCell>{test.status}</TableCell>
                <TableCell>{test.executionTime} µs</TableCell>
                <TableCell>{test.ramUsage} kB</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TestsTable;
