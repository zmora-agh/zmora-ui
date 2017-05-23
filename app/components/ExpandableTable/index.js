/**
*
* ExpandableTable
*
*/

import React from 'react';
import List from 'material-ui/List';


function ExpandableTable(props) {
  return (
    <List style={{ width: '100%' }}>
      {props.children}
    </List>
  );
}

ExpandableTable.propTypes = {
  children: React.PropTypes.node,
};

export default ExpandableTable;
