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
import IconButton from 'material-ui/IconButton';

import SubmitButton from '../../containers/Submit/Button';

import { problemRowPropType } from './constants';
import messages from './messages';

import Done from '../../svg-icons/action-done';
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
              <SubmitButton contestId={props.contestId} problemId={numProblemId} />
              <IconButton onClick={(e) => { e.stopPropagation(); props.onPdfClick(numProblemId); }}>
                <Pdf />
              </IconButton>
            </TableCell>
          </TableRow>);
        })}
      </TableBody>
    </Table>
  );
}

ProblemsTable.propTypes = {
  contestId: React.PropTypes.number.isRequired,
  problems: React.PropTypes.objectOf(React.PropTypes.shape(problemRowPropType)).isRequired,
};

export default ProblemsTable;
