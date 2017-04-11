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
      onRowClick={props.onProblemClick}
      onPdfClick={props.onPdfClick}
      onSubmitClick={props.onSubmitClick}
      problems={props.problems}
    />
  </ExpandableTableRow>
  );
}

ProblemCategory.propTypes = {
  name: React.PropTypes.string.isRequired,
  onProblemClick: React.PropTypes.func.isRequired,
  onPdfClick: React.PropTypes.func.isRequired,
  onSubmitClick: React.PropTypes.func.isRequired,
  problems: React.PropTypes.objectOf(React.PropTypes.shape(problemContentPropTypes)),
};

export default ProblemCategory;
