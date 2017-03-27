/**
*
* TitledTextLayout
*
*/

import React from 'react';
import { Layout } from 'material-ui/Layout';
import { Text } from 'material-ui/Text';
// import styled from 'styled-components';


function TitledTextLayout(props) {
  return (
    <Layout item xs={props.xs}>
      <Text type="title" component="h2" gutterBottom>
        {props.desc}
      </Text>
      <Text style={{ padding: '8x 16px' }}>
        {props.children}</Text>
    </Layout>
  );
}

TitledTextLayout.propTypes = {
  xs: React.PropTypes.number.isRequired,
  desc: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default TitledTextLayout;
