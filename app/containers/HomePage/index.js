/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import StatusPanel from '../../components/StatusPanel';
import Info from '../../components/InfoCard';

const styleSheet = createStyleSheet('GuttersLayout', () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 12,
  },
}));

function HomePage(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <Paper style={{ padding: '0em 1em', textAlign: 'justify', backgroundColor: '#DDDDDD' }}>
      <Layout container className={classes.root}>
        <Layout container item xs={12}>
          <Layout item xs={7}>
            <Info color="#03A9F4" height={300}>
              <Text style={{ color: '#FFFFFF', lineHeight: '28px', fontSize: '22' }}>
                <strong>Zmora</strong> to zautomatyzowana platforma edukacyjna, kierowana do studentów
                kierunków informatycznych <strong>AGH</strong>. W przystępny sposób sprawdza poprawność i
                wydajność rozwiązań na specjalnie przystosowanych do tego zadaniach. System ocenia sprawiedliwie
                wkład pracy oraz postępy każdego z uczestników.</Text>
            </Info>
          </Layout>
          <Layout item xs={5}>
            <StatusPanel />
          </Layout>
        </Layout>
        <Layout container item xs={12}>
          <Layout item xs={4}>
            <Info color="#4CB050" height={350}>
              <img src="../../logo.jpg" style={{ height: 320, width: 220, marginLeft: 95 }} alt="logo" />
            </Info>
          </Layout>
          <Layout item xs={8}>
            <Info color="#FEC106" height={350}>
              <Text style={{ lineHeight: '28px', fontSize: '22' }}>
                Nazwa została wybrana nieprzypadkowo - w mitologii słowiańskiej zmora to istota pół demoniczna,
                która nocą męczy śpiących i wysysa z nich krew. Taki scenariusz również jest możliwy - wystarczy
                nie rozwiązywać zadań w terminie lub próbować zaliczać je podstępem.<br /><br />
                Tak czy inaczej - <strong>powodzenia!</strong>
              </Text>
            </Info>
          </Layout>
        </Layout>
      </Layout>
    </Paper>
  );
}

HomePage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default HomePage;
