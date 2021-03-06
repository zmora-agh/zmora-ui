import React from 'react';
import Typography from 'material-ui/Typography';


export default function EmptyMessage(props) {
  return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <Typography type="headline" style={{ opacity: 0.6 }}>{props.children}</Typography>
    </div>
  );
}

EmptyMessage.propTypes = {
  children: React.PropTypes.node.isRequired,
};
