/**
*
* ContestsTable
*
*/
import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';
import { FormattedMessage } from 'react-intl';
import KeyboardArrowUp from '../../svg-icons/keyboard-arrow-up';
import KeyboardArrowDown from '../../svg-icons/keyboard-arrow-down';
import messages from './messages';
import { CONTEST_TYPE } from '../../containers/ContestsPage/constants';
export class ContestsTable extends React.PureComponent {

  static propTypes = {
    contests: React.PropTypes.arrayOf(CONTEST_TYPE),
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  isExpanded(key) {
    if (this.state[key] === undefined) return false;

    return this.state[key];
  }

  toggleExpanded(key) {
    this.setState({ [key]: !this.isExpanded(key) });
  }

  createTableRow(row) {
    const isExpanded = this.isExpanded(row.id);
    const onClick = () => this.toggleExpanded(row.id);
    const expandedIcon = isExpanded ? <KeyboardArrowDown /> : <KeyboardArrowUp />;
    const details = isExpanded ? (
      <TableRow>
        <TableCell style={{ wordWrap: 'break-word', whiteSpace: 'normal' }} colSpan="5">
          {row.description}
        </TableCell>
      </TableRow>
    ) : null;

    return ([
      <TableRow key={row.id} onClick={onClick}>
        <TableCell>{expandedIcon} {row.name}</TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell>{row.owner}</TableCell>
        <TableCell>Zapisy do</TableCell>
        <TableCell>{row.date}</TableCell>
      </TableRow>,
      details,
    ]);
  }

  render() {
    const rows = this.props.contests.map((child) => this.createTableRow(child));
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><FormattedMessage {...messages.name} /></TableCell>
              <TableCell><FormattedMessage {...messages.description} /></TableCell>
              <TableCell><FormattedMessage {...messages.owner} /></TableCell>
              <TableCell><FormattedMessage {...messages.status} /></TableCell>
              <TableCell><FormattedMessage {...messages.date} /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ContestsTable;
