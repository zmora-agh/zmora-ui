/**
*
* ProblemExampleData
*
*/

import React from 'react';
// import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import Divider from 'material-ui/Divider';

const DataElement = (props) => (
  <Layout item xs={props.xs}>
    <Text type="title" component="h2" gutterBottom>{props.desc}</Text>
    <Paper style={{ padding: '8px 16px' }}>
      <pre>{ props.children }</pre>
    </Paper>
  </Layout>
);

function ProblemExampleData() {
  return (
    <div>
      <Layout container gutter={24} style={{ padding: 24 }}>
        <DataElement xs={6} desc="Dla danych wejściowych:">
          {'foo\nbar\nbaz'}
        </DataElement>
        <DataElement xs={6} desc="Oczekiwana odpowiedź to:">
          {'1\n2\n666'}
        </DataElement>
        <DataElement xs={12} desc="Uzasadnienie:">
          {'Szatan czyste zło'}
        </DataElement>
      </Layout>
      <Divider />
      <Layout container gutter={24} style={{ padding: 24 }}>
        <DataElement xs={6} desc="Dla danych wejściowych:">
          {'foo\nbar\nbaz'}
        </DataElement>
        <DataElement xs={6} desc="Oczekiwana odpowiedź to:">
          {'1\n2\n666'}
        </DataElement>
        <DataElement xs={12} desc="Uzasadnienie:">
          {'Szatan czyste zło'}
        </DataElement>
      </Layout>
    </div>
  );
}

ProblemExampleData.propTypes = {

};

export default ProblemExampleData;
