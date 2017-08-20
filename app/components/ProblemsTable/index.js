/**
 *
 * ProblemsTable
 *
 */

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import moment from 'moment';

import Done from 'material-ui-icons/Done';
import Clear from 'material-ui-icons/Clear';
// import IconButton from 'material-ui/IconButton';
// import PictureAsPdf from 'material-ui-icons/PictureAsPdf';

import SubmitButton from '../../containers/Submit/Button';

import { problemRowPropType } from './constants';
import messages from './messages';

import {
  ResponsiveTable,
  ResponsiveTableBody,
  ResponsiveTableCell,
  ResponsiveTableHead,
  ResponsiveTableRow,
} from '../ResponsiveTable/index';


function ProblemsTable(props) {
  return (
    <ResponsiveTable>
      <ResponsiveTableHead>
        <ResponsiveTableRow>
          <ResponsiveTableCell><FormattedMessage {...messages.shortcode} /></ResponsiveTableCell>
          <ResponsiveTableCell><FormattedMessage {...messages.title} /></ResponsiveTableCell>
          <ResponsiveTableCell><FormattedMessage{...messages.softDeadline} /></ResponsiveTableCell>
          <ResponsiveTableCell><FormattedMessage{...messages.hardDeadline} /></ResponsiveTableCell>
          <ResponsiveTableCell><FormattedMessage{...messages.optional} /></ResponsiveTableCell>
          <ResponsiveTableCell />
        </ResponsiveTableRow>
      </ResponsiveTableHead>

      <ResponsiveTableBody>
        {props.problems.map((problem) => (<ResponsiveTableRow
          key={problem.shortcode}
          onClick={() => props.onRowClick(problem.id)}
          style={{ cursor: 'pointer' }}
        >
          <ResponsiveTableCell data-title={props.intl.formatMessage(messages.shortcode)}>
            {problem.shortcode}
          </ResponsiveTableCell>
          <ResponsiveTableCell data-title={props.intl.formatMessage(messages.title)}>
            {problem.name}
          </ResponsiveTableCell>
          {/* Soft deadline has no implementation so far */}
          {/* <ResponsiveTableCell data-title={props.intl.formatMessage(messages.softDeadline)}> */}
          {/* {moment(problem.softDeadline).format('llll')} */}
          {/* </ResponsiveTableCell> */}
          <ResponsiveTableCell data-title={props.intl.formatMessage(messages.hardDeadline)}>
            {moment(problem.hardDeadline).format('llll')}
          </ResponsiveTableCell>
          <ResponsiveTableCell data-title={props.intl.formatMessage(messages.optional)}>
            {!problem.required ? <Done /> : <Clear />}
          </ResponsiveTableCell>
          <ResponsiveTableCell hiding>
            <SubmitButton contestId={props.contestId} problemId={problem.id} />
            {/* Missing download as PDF feature so far */}
            {/* <IconButton onClick={(e) => { e.stopPropagation(); props.onPdfClick(problem.id); }}> */}
            {/* <PictureAsPdf /> */}
            {/* </IconButton> */}
          </ResponsiveTableCell>
        </ResponsiveTableRow>))}
      </ResponsiveTableBody>
    </ResponsiveTable>
  );
}

ProblemsTable.propTypes = {
  contestId: React.PropTypes.number.isRequired,
  problems: React.PropTypes.arrayOf(React.PropTypes.shape(problemRowPropType)).isRequired,
};

export default injectIntl(ProblemsTable);
