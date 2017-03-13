/**
*
* ContestsTable
*
*/
// TODO: move hide/expand logic to container
import React, { PropTypes } from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';
import { FormattedMessage } from 'react-intl';
import KeyboardArrowUp from '../../svg-icons/keyboard-arrow-up';
import KeyboardArrowDown from '../../svg-icons/keyboard-arrow-down';
import messages from './messages';
import { CONTEST_TYPE } from '../../containers/ContestsPage/constants';


function buildRows(indent, data, props) {
  return [].concat(...data.map((row) => createTableRow(indent, row, props)));
}

function createTableRow(indent, row, props) {
  const expandedIcon = row.childContests.length > 0 && row.expanded ? <KeyboardArrowDown onClick={() => props.hideRow(row.id)} /> : null;
  const hiddenIcon = row.childContests.length > 0 && !row.expanded ? <KeyboardArrowUp onClick={() => props.expandRow(row.id)} /> : null;
  const childrenRows = row.expanded ? buildRows(indent + 1, row.childContests, props) : [];
  const render = (
    <TableRow key={row.id}>
      <TableCell style={{ textIndent: 20 * indent }}>{expandedIcon}{hiddenIcon} {row.name}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.owner}</TableCell>
    </TableRow>
  );
  childrenRows.unshift(render);
  return childrenRows;
}

function ContestsTable(props) {
  const rows = buildRows(0, props.contests, props);
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

// reguły niżej są wyłączone bo eslint nie widzi gdy props jest przekazany i propsy są używane dopiero w funkcji
ContestsTable.propTypes = {
  contests: PropTypes.arrayOf(CONTEST_TYPE),
  hideRow: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  expandRow: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default ContestsTable;
