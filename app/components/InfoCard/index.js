/**
*
* InfoCard
*
*/

import React from 'react';
import {
  Card,
  CardContent,
} from 'material-ui/Card';

function InfoCard(props) {
  return (
    <Card
      style={{
        boxShadow: '6px 10px 10px rgba(0,0,0,0.19), 3px 6px 6px rgba(0,0,0,0.23)',
        backgroundColor: props.color,
        height: props.height }}
    >
      <CardContent style={{ backgroundColor: props.color }}>
        {props.children}
      </CardContent>
    </Card>
  );
}

InfoCard.propTypes = {
  children: React.PropTypes.any,
  color: React.PropTypes.any,
  height: React.PropTypes.any,
};


export default InfoCard;
