/**
 * Created by oszust on 08.05.17.
 */
import React, { PropTypes } from 'react';
import { gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import Table, { TableRow, TableCell, TableBody } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import EnhancedTableHead from '../../EnhancedTableHead';
import messages from './messages';
import FileFileDownload from '../../../svg-icons/file-download';
import { API_URL } from '../../../constants';

export const FilesFragment = gql`
  fragment Files on Submit {
    submitFiles {
      id
      url
      checksum
      filename
    }
  }
`;

const columnData = [
  { id: 'id', label: <FormattedMessage {...messages.id} /> },
  { id: 'filename', label: <FormattedMessage {...messages.filename} /> },
  { id: 'checksum', label: <FormattedMessage {...messages.checksum} /> },
  { id: 'actions' },
];

class FilesTable extends React.Component {
  static propTypes = {
    files: PropTypes.arrayOf(
      React.PropTypes.shape({
        filename: React.PropTypes.node.isRequired,
        checksum: React.PropTypes.node.isRequired,
        id: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
      })
    ).isRequired,
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
        <Typography type="title"><FormattedMessage {...messages.files} /></Typography>
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
                  <a href={API_URL + file.url} target="_blank" rel="noopener">
                    <IconButton><FileFileDownload /></IconButton>
                  </a>
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
