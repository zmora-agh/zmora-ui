/**
 *
 * ProblemsTable
 *
 */

import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
// import styled from 'styled-components';

import Button from 'material-ui/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FileUpload from '../../svg-icons/file-upload';
import Pdf from '../../svg-icons/picture-as-pdf';

function ProblemsTable(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><FormattedMessage {...messages.shortcode} /></TableCell>
          <TableCell><FormattedMessage {...messages.title} /></TableCell>
          <TableCell><FormattedMessage {...messages.gradingType} /></TableCell>
          <TableCell><FormattedMessage{...messages.points} /></TableCell>
          <TableCell><FormattedMessage{...messages.deadline} /></TableCell>
          <TableCell />
        </TableRow>
      </TableHead>

      <TableBody>
        {props.problems.map((problem) =>
          <TableRow key={problem.shortcode} onClick={() => props.onRowClick(problem.id)}>
            <TableCell>{problem.shortcode}</TableCell>
            <TableCell>{problem.name}</TableCell>
            <TableCell>{problem.gradingType}</TableCell>
            <TableCell>{problem.points}</TableCell>
            <TableCell>{problem.deadline}</TableCell>
            <TableCell>
              <Button onClick={(e) => { e.stopPropagation(); props.onSubmitClick(problem.id); }}><FileUpload /></Button>
              <Button onClick={(e) => { e.stopPropagation(); props.onPdfClick(problem.id); }}><Pdf /></Button>
            </TableCell>
          </TableRow>)
        }
      </TableBody>

    </Table>

  );
}

ProblemsTable.propTypes = {};

export default ProblemsTable;
