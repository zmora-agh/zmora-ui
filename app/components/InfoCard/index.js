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
    <Card style={{ backgroundColor: props.color, height: props.height }}>
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
