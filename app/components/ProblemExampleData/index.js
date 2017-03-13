/**
*
* ProblemExampleData
*
*/

import React from 'react';
// import styled from 'styled-components';

import {Card, CardContent} from 'material-ui/Card';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ProblemExampleData() {
  return (
    <Layout container gutter={24}>
      <Layout item xs={6}>przykład wejście</Layout>
      <Layout item xs={6}>przykład wyjście</Layout>
    </Layout>
  );
}

ProblemExampleData.propTypes = {

};

export default ProblemExampleData;
