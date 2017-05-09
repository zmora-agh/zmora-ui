/**
 * Created by oszust on 08.05.17.
 */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Table, TableRow, TableCell, TableBody } from 'material-ui/Table';
import { IconButton } from 'material-ui/IconButton';
import { Text } from 'material-ui/Text';
import { SUBMIT_FILE_PROP_TYPE } from '../../../containers/SubmitDetails/constants';
import EnhancedTableHead from '../../EnhancedTableHead';
import messages from './messages';
import FileFileDownload from '../../../svg-icons/file-download';
import EditorModeEdit from '../../../svg-icons/mode-edit';

const columnData = [
  { id: 'id', label: <FormattedMessage {...messages.id} /> },
  { id: 'filename', label: <FormattedMessage {...messages.filename} /> },
  { id: 'checksum', label: <FormattedMessage {...messages.checksum} /> },
];


class FilesTable extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    files: PropTypes.arrayOf(SUBMIT_FILE_PROP_TYPE),
  };

  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'filename',
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

    const files = Object.values(this.props.files)
      .sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));
    return (
      <div style={{ padding: 10 }}>
        <Text type="title"><FormattedMessage {...messages.files} /></Text>
        <Table>
          <EnhancedTableHead
            columns={columnData}
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {files.map((file) =>
              <TableRow key={file.id}>
                <TableCell>{file.id}</TableCell>
                <TableCell>{file.filename}</TableCell>
                <TableCell>{file.checksum}</TableCell>
                <TableCell>
                  <IconButton><EditorModeEdit /></IconButton>
                  <IconButton><FileFileDownload /></IconButton>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default FilesTable;