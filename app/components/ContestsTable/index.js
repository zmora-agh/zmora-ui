/**
*
* ContestsTable
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function buildRows(indent, data) {
  return [].concat(...data.map((row) => createTableRow(indent, row)));
}

function createTableRow(indent, row) {
  const addIcon = row.children.length > 0 && row.expanded ? <Add /> : null;
  const removeIcon = row.children.length > 0 && !row.expanded ? <Remove /> : null;
  const childrenRows = row.expanded ? buildRows(indent + 1, row.children) : [];
  const render = (
    <TableRow key={row.name}>
      <TableRowColumn style={{ textIndent: 20 * indent }}>
        {addIcon}{removeIcon} {row.name}
      </TableRowColumn>
      <TableRowColumn>
        {row.description}
      </TableRowColumn>
    </TableRow>
  );
  childrenRows.unshift(render);
  return childrenRows;
}
// TODO:expand/hide mechanism, connect to container
function ContestsTable() {
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
  const rows = buildRows(0, mockedData);
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
