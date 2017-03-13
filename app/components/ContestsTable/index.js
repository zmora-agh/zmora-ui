/**
*
* ContestsTable
*
*/
// TODO: move hide/expand logic to container
import React from 'react';
// import styled from 'styled-components';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
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

function checkName(row, name) {
  return row.name === name;
}

function findByPath(data, splittedPath) {
  const foundRow = data.find((row) => checkName(row, splittedPath[0]));
  return splittedPath.length === 1 ? foundRow : findByPath(foundRow.children, splittedPath.slice(1));
}

function buildRows(indent, path, data) {
  return [].concat(...data.map((row) => createTableRow(indent, path, row)));
}

function expandRow(path) {
  findByPath(mockedData, path.split('->')).expanded = true;
}

function hideRow(path) {
  findByPath(mockedData, path.split('->')).expanded = false;
}

function createTableRow(indent, path, row) {
  const rowPath = path === '' ? row.name : path.concat(`->${row.name}`);
  const expandedIcon = row.children.length > 0 && row.expanded ?
    <KeyboardArrowDown onClick={() => hideRow(rowPath)} /> : null;
  const hiddenIcon = row.children.length > 0 && !row.expanded ?
    <KeyboardArrowUp onClick={() => expandRow(rowPath)} /> : null;
  const childrenRows = row.expanded ? buildRows(indent + 1, rowPath, row.children) : [];
  const render = (
    <TableRow key={rowPath}>
      <TableRowColumn style={{ textIndent: 20 * indent }}>
        {expandedIcon}{hiddenIcon} {row.name}
      </TableRowColumn>
      <TableRowColumn>
        {row.description}
      </TableRowColumn>
    </TableRow>
  );
  childrenRows.unshift(render);
  return childrenRows;
}
function ContestsTable() {
  const rows = buildRows(0, '', mockedData);
  return (
    <div>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn><FormattedMessage {...messages.name} /></TableHeaderColumn>
            <TableHeaderColumn><FormattedMessage {...messages.description} /></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
}

ContestsTable.propTypes = {
};

export default ContestsTable;
