/**
 *
 * ProblemsTable
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
import Button from 'material-ui/Button';

import { problemRowPropType } from './constants';
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
          <TableCell><FormattedMessage{...messages.points} /></TableCell>
          <TableCell><FormattedMessage{...messages.deadline} /></TableCell>
          <TableCell />
        </TableRow>
      </TableHead>

      <TableBody>
        {Object.keys(props.problems).map((problemId) =>
          <TableRow
            key={props.problems[problemId].shortcode}
            onClick={() => props.onRowClick(problemId)}
            style={{ cursor: 'pointer' }}
          >
            <TableCell>{props.problems[problemId].shortcode}</TableCell>
            <TableCell>{props.problems[problemId].name}</TableCell>
            <TableCell>{props.problems[problemId].points}</TableCell>
            <TableCell>{props.problems[problemId].deadline}</TableCell>
            <TableCell>
              <Button onClick={(e) => { e.stopPropagation(); props.onSubmitClick(problemId); }}><FileUpload /></Button>
              <Button onClick={(e) => { e.stopPropagation(); props.onPdfClick(problemId); }}><Pdf /></Button>
            </TableCell>
          </TableRow>)
        }
      </TableBody>
    </Table>
  );
}

ProblemsTable.propTypes = {
  problems: React.PropTypes.objectOf(React.PropTypes.shape(problemRowPropType)).isRequired,
};

export default ProblemsTable;
