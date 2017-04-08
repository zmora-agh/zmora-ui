import React from 'react';
import ContestRow from './Row';

import ExpandableTable from '../ExpandableTable';

const ContestsTable = (props) => {
  const rows = Object.keys(props.contests).map(
    (key) => (<ContestRow key={key} contest={props.contests[key]} offset={props.offset} />));
  return (
    <ExpandableTable>
      {rows}
    </ExpandableTable>
  );
};

ContestsTable.propTypes = {
  offset: React.PropTypes.number.isRequired,
  contests: React.PropTypes.object.isRequired,
};

export default ContestsTable;
