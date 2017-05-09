/**
 * Created by oszust on 08.05.17.
 */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Table, TableRow, TableCell, TableBody } from 'material-ui/Table';
import { Text } from 'material-ui/Text';
import { SUBMIT_TEST_PROP_TYPE } from '../../../containers/SubmitDetails/constants';
import EnhancedTableHead from '../../EnhancedTableHead';
import messages from './messages';

const columnData = [
  { id: 'test', label: <FormattedMessage {...messages.test} /> },
  { id: 'status', label: <FormattedMessage {...messages.status} /> },
  { id: 'executionTime', label: <FormattedMessage {...messages.executionTime} /> },
  { id: 'ramUsage', label: <FormattedMessage {...messages.ramUsage} /> },
];

class TestsTable extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    tests: PropTypes.arrayOf(SUBMIT_TEST_PROP_TYPE),
  };

  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'test',
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

    const tests = Object.values(this.props.tests)
      .sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));
    return (
      <div style={{ padding: 10 }}>
        <Text type="title"><FormattedMessage {...messages.tests} /></Text>
        <Table>
          <EnhancedTableHead
            columns={columnData}
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {tests.map((test) =>
              <TableRow key={test.id}>
                <TableCell>{test.test}</TableCell>
                <TableCell>{test.status}</TableCell>
                <TableCell>{test.executionTime}</TableCell>
                <TableCell>{test.ramUsage}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TestsTable;