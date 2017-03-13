/**
*
* ContestsTable
*
*/
// TODO: move hide/expand logic to container
import React from 'react';
// import styled from 'styled-components';
import { Table, TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const mockedData = [{
  expanded: true,
  name: 'EAIiIB',
  description: '',
  children: [
    {
      expanded: true,
      name: 'Informatyka',
      description: '',
      children: [
        {
          expanded: true,
          name: 'PWiR',
          description: 'To jest zadanie z PWiR',
          children: [],
        },
        {
          expanded: true,
          name: 'Języki i metody programowania 2',
          description: 'To jest zadanie z C++',
          children: [],
        },
      ],
    },
  ],
}];

// function checkName(row, name) {
//   return row.name === name;
// }
//
// function findByPath(data, splittedPath) {
//   const foundRow = data.find((row) => checkName(row, splittedPath[0]));
//   return splittedPath.length === 1 ? foundRow : findByPath(foundRow.children, splittedPath.slice(1));
// }

function buildRows(indent, path, data) {
  return [].concat(...data.map((row) => createTableRow(indent, path, row)));
}

// function expandRow(path) {
//   findByPath(mockedData, path.split('->')).expanded = true;
// }
//
// function hideRow(path) {
//   findByPath(mockedData, path.split('->')).expanded = false;
// }

function createTableRow(indent, path, row) {
  const rowPath = path === '' ? row.name : path.concat(`->${row.name}`);
  const expandedIcon = null;
    // row.children.length > 0 && row.expanded ? <KeyboardArrowDown onClick={() => hideRow(rowPath)} /> : null;
  const hiddenIcon = null;
    // row.children.length > 0 && !row.expanded ? <KeyboardArrowUp onClick={() => expandRow(rowPath)} /> : null;
  const childrenRows = row.expanded ? buildRows(indent + 1, rowPath, row.children) : [];
  const render = (
    <TableRow key={rowPath}>
      <TableCell style={{ textIndent: 20 * indent }}>
        {expandedIcon}{hiddenIcon} {row.name}
      </TableCell>
      <TableCell>
        {row.description}
      </TableCell>
    </TableRow>
  );
  childrenRows.unshift(render);
  return childrenRows;
}
function ContestsTable() {
  const rows = buildRows(0, '', mockedData);
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><FormattedMessage {...messages.name} /></TableCell>
            <TableCell><FormattedMessage {...messages.description} /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
}

ContestsTable.propTypes = {
};

export default ContestsTable;
