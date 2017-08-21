/**
 * Created by oszust on 08.05.17.
 */
import React, { PropTypes } from 'react';
import { gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import Table, { TableRow, TableCell, TableBody } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FileFileDownload from 'material-ui-icons/FileDownload';
import EnhancedTableHead from '../../EnhancedTableHead';
import { sortBy } from '../../../utils/render';
import messages from './messages';
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
      desc: true,
      orderBy: 'filename',
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

    const files = sortBy(this.props.files, (file) => file[orderBy], desc);
    return (
      <div style={{ padding: 10 }}>
        <Typography type="title"><FormattedMessage {...messages.files} /></Typography>
        <Table>
          <EnhancedTableHead
            columns={columnData}
            order={desc ? 'desc' : 'asc'}
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
