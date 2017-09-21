/**
*
* ProblemCategory
*
*/

import React from 'react';

import { problemContentPropTypes } from '../ProblemView/constants';

import ExpandableTableRow from '../ExpandableTable/Row';
import ProblemsTable from '../ProblemsTable';

function ProblemCategory(props) {
  return (<ExpandableTableRow header={<span style={{ flex: 1 }}>{props.name}</span>} startExpanded>
    <ProblemsTable
      contestId={props.contestId}
      problems={props.problems}
      onRowClick={props.onProblemClick}
      onPdfClick={props.onPdfClick}
    />
  </ExpandableTableRow>
  );
}

ProblemCategory.propTypes = {
  name: React.PropTypes.string.isRequired,
  contestId: React.PropTypes.number.isRequired,
  onProblemClick: React.PropTypes.func.isRequired,
  onPdfClick: React.PropTypes.func.isRequired,
  problems: React.PropTypes.arrayOf(React.PropTypes.shape(problemContentPropTypes)),
};

export default ProblemCategory;
