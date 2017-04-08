/**
*
* ProblemCategory
*
*/

import React from 'react';
// import styled from 'styled-components';
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

};

export default ProblemCategory;
