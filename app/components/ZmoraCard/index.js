/**
*
* ZmoraCard - Our version of material card
* to keep all card properties in one place
*
*/

import React from 'react';
import {
  Card,
  CardContent,
} from 'material-ui/Card';

function ZmoraCard(props) {
  return (
    <Card
      style={{
        boxShadow: '6px 10px 10px rgba(0,0,0,0.19), 3px 6px 6px rgba(0,0,0,0.23)',
        backgroundColor: props.color,
        height: props.height,
      }}
    >
      <CardContent style={{ backgroundColor: props.color, padding: props.padding }}>
        {props.children}
      </CardContent>
    </Card>
  );
}

ZmoraCard.propTypes = {
  children: React.PropTypes.any,
  color: React.PropTypes.string,
  height: React.PropTypes.number,
  padding: React.PropTypes.number,
};

export default ZmoraCard;
