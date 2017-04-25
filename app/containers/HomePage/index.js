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
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import StatusCard from '../../components/StatusPanel';
import Card from '../../components/ZmoraCard';
import StatusInfoList from '../../components/StatusInfoList/index';

const styleSheet = createStyleSheet('HomePageLayout', () => ({
  paper: {
    padding: '0em 1em',
    textAlign: 'justify',
    backgroundColor: '#DDDDDD',
  },
  lightTextStyle: {
    color: '#FFFFFF',
    lineHeight: '32px',
    fontSize: 28,
  },
  darkTextStyle: {
    color: '#000000',
    lineHeight: '32px',
    fontSize: 28,
  },
  logoStyle: {
    height: 340,
    width: 230,
    margin: '0 auto',
  },
}));

const logo = require('../../resources/logo.jpg');
const cardHeight = 340;

function HomePage(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <Layout container className={classes.root}>
      <Layout container item xs={12}>
        <Layout item xs={7}>
          <Card color="#03A9F4" height={cardHeight}>
            <Text className={classes.lightTextStyle}>
              <strong>Zmora</strong> to zautomatyzowana platforma edukacyjna, kierowana do studentów
              kierunków informatycznych <strong>AGH</strong>. W przystępny sposób sprawdza poprawność i
              wydajność rozwiązań na specjalnie przystosowanych do tego zadaniach. System ocenia sprawiedliwie
              wkład pracy oraz postępy każdego z uczestników.</Text>
          </Card>
        </Layout>
        <Layout item xs={5}>
          <StatusCard color="#FE5722" height={cardHeight} />
        </Layout>
      </Layout>
      <Layout container item xs={12}>
        <Layout item xs={4} style={{ textAlign: 'center' }}>
          <Card color="#4CB050" height={cardHeight + 50}>
            <img src={logo} className={classes.logoStyle} alt="logo" />
          </Card>
        </Layout>
        <Layout item xs={8}>
          <Card color="#FEC106" height={cardHeight + 50}>
            <Text className={classes.darkTextStyle}>
              Nazwa została wybrana nieprzypadkowo - w mitologii słowiańskiej zmora to istota pół demoniczna,
              która nocą męczy śpiących i wysysa z nich krew. Taki scenariusz również jest możliwy - wystarczy
              nie rozwiązywać zadań w terminie lub próbować zaliczać je podstępem.<br /><br />
              Tak czy inaczej - <strong>powodzenia!</strong>
            </Text>
          </Card>
        </Layout>
      </Layout>
      <Layout container item xs={12}>
        <Layout item xs={12}>
          <StatusInfoList
            statuses={[{ title: 'Zaliczone', info: 'Uniknięto zemsty Zmory, zadanie zaliczone' },
            { title: 'Po terminie', info: 'Do roboty' },
            { title: 'Niezaliczone', info: 'Zemsta zmory jest bliska, życie Ci nie miłe, wędrowcze?' },
            { title: 'Tekst', info: 'Co tu własciwie ma być w tej tabelce? :D' },
            ]}
          />
        </Layout>
      </Layout>
    </Layout>
  );
}

HomePage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default HomePage;
