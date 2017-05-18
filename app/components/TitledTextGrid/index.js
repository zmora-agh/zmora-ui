/**
*
* TitledTextGrid
*
*/

import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import styled from 'styled-components';


function TitledTextGrid(props) {
  return (
    <Grid item xs={props.xs}>
      <Typography type="title" component="h2" gutterBottom>
        {props.desc}
      </Typography>
      <Typography style={{ padding: '8x 16px' }}>
        {props.children}</Typography>
    </Grid>
  );
}

TitledTextGrid.propTypes = {
  xs: React.PropTypes.number.isRequired,
  desc: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default TitledTextGrid;
