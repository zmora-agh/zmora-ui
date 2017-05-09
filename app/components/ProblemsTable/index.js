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
        {props.problems.map((problem) => (<TableRow
          key={problem.shortcode}
          onClick={() => props.onRowClick(problem.id)}
          style={{ cursor: 'pointer' }}
        >
          <TableCell>{problem.shortcode}</TableCell>
          <TableCell>{problem.name}</TableCell>
          <TableCell>{problem.basePoints}</TableCell>
          <TableCell>{moment(problem.softDeadline).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
          <TableCell>{moment(problem.hardDeadline).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
          <TableCell>{!problem.optional && <Done />}</TableCell>
          <TableCell>
            <SubmitButton contestId={props.contestId} problemId={problem.id} />
            <IconButton onClick={(e) => { e.stopPropagation(); props.onPdfClick(problem.id); }}>
              <Pdf />
            </IconButton>
          </TableCell>
        </TableRow>))}
      </TableBody>
    </Table>
  );
}

ProblemsTable.propTypes = {
  contestId: React.PropTypes.number.isRequired,
  problems: React.PropTypes.arrayOf(React.PropTypes.shape(problemRowPropType)).isRequired,
};

export default ProblemsTable;
