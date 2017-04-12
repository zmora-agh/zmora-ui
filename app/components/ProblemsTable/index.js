/**
 *
 * ProblemsTable
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

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

import Done from '../../svg-icons/action-done';
import FileUpload from '../../svg-icons/file-upload';
import Pdf from '../../svg-icons/picture-as-pdf';

function ProblemsTable(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><FormattedMessage {...messages.shortcode} /></TableCell>
          <TableCell><FormattedMessage {...messages.title} /></TableCell>
          <TableCell><FormattedMessage{...messages.basePoints} /></TableCell>
          <TableCell><FormattedMessage{...messages.softDeadline} /></TableCell>
          <TableCell><FormattedMessage{...messages.hardDeadline} /></TableCell>
          <TableCell><FormattedMessage{...messages.optional} /></TableCell>
          <TableCell />
        </TableRow>
      </TableHead>

      <TableBody>
        {Object.keys(props.problems).map((problemId) => {
          const problem = props.problems[problemId];
          const numProblemId = parseInt(problemId, 10);
          return (<TableRow
            key={props.problems[problemId].shortcode}
            onClick={() => props.onRowClick(problemId)}
            style={{ cursor: 'pointer' }}
          >
            <TableCell>{problem.shortcode}</TableCell>
            <TableCell>{problem.name}</TableCell>
            <TableCell>{problem.basePoints}</TableCell>
            <TableCell>{moment(problem.softDeadline).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
            <TableCell>{moment(problem.hardDeadline).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
            <TableCell>{!problem.optional && <Done />}</TableCell>
            <TableCell>
              <Button onClick={(e) => { e.stopPropagation(); props.onSubmitClick(numProblemId); }}>
                <FileUpload />
              </Button>
              <Button onClick={(e) => { e.stopPropagation(); props.onPdfClick(numProblemId); }}>
                <Pdf />
              </Button>
            </TableCell>
          </TableRow>);
        })}
      </TableBody>
    </Table>
  );
}

ProblemsTable.propTypes = {
  problems: React.PropTypes.objectOf(React.PropTypes.shape(problemRowPropType)).isRequired,
};

export default ProblemsTable;
