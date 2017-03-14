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
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  isExpanded(key) {
    if (this.state[key] === undefined) return true;

    return this.state[key];
  }

  toggleExpanded(key) {
    this.setState({ [key]: !this.isExpanded(key) });
  }

  createTableRow(row, level) {
    const haveChild = row.childContests.length > 0;
    const isExpanded = this.isExpanded(row.id);
    const onClick = () => this.toggleExpanded(row.id);

    const expandedIcon = haveChild && isExpanded ? <KeyboardArrowDown onClick={onClick} /> : null;
    const hiddenIcon = haveChild && !isExpanded ? <KeyboardArrowUp onClick={onClick} /> : null;
    const childrenRows = isExpanded ? row.childContests.map((child) => this.createTableRow(child, level + 1)) : [];

    return (
      [
        <TableRow key={row.id}>
          <TableCell style={{ textIndent: 20 * level }}>{expandedIcon}{hiddenIcon} {row.name}</TableCell>
          <TableCell>{row.description}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>{row.owner}</TableCell>
        </TableRow>,
        ...childrenRows,
      ]);
  }

  render() {
    const rows = this.props.contests.map((child) => this.createTableRow(child, 0));
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '30%' }}><FormattedMessage {...messages.name} /></TableCell>
              <TableCell><FormattedMessage {...messages.description} /></TableCell>
              <TableCell><FormattedMessage {...messages.dateOfOpenning} /></TableCell>
              <TableCell><FormattedMessage {...messages.owner} /></TableCell>
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
