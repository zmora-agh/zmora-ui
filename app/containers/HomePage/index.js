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

const styleSheet = createStyleSheet('zmoraAppHomePageLayout', () => ({
  paper: {
    padding: '0em 1em',
    textAlign: 'justify',
    backgroundColor: '#DDDDDD',
  },
  lightTextStyle: {
    color: '#FFFFFF',
    lineHeight: '34px',
    fontSize: 30,
  },
  darkTextStyle: {
    color: '#000000',
    lineHeight: '34px',
    fontSize: 30,
  },
  logoStyle: {
    height: 325,
    width: 230,
    margin: '0 auto',
  },
}));

const logo = require('../../resources/logo.jpg');
const cardHeight = 340;
const cardPadding = 17;
const verticalGutter = 16;
const horizontalGutter = 16;
const descriptionColor = '#2196F3';
const statusPaneColor = '#FE5722';
const logoPaneColor = '#4CB050';
const namePaneColor = '#FEC106';

function HomePage(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <Layout container className={classes.root} gutter={verticalGutter}>
      <Layout container item xs={12} gutter={horizontalGutter}>
        <Layout item xs={7}>
          <Card color={descriptionColor} height={cardHeight} padding={cardPadding}>
            <Text className={classes.lightTextStyle}>
              <strong>Zmora</strong> to zautomatyzowana platforma edukacyjna, kierowana do studentów
              kierunków informatycznych <strong>AGH</strong>. W przystępny sposób sprawdza poprawność i
              wydajność rozwiązań na specjalnie przystosowanych do tego zadaniach. System ocenia sprawiedliwie
              wkład pracy oraz postępy każdego z uczestników.</Text>
          </Card>
        </Layout>
        <Layout item xs={5}>
          <StatusCard color={statusPaneColor} height={cardHeight} />
        </Layout>
      </Layout>
      <Layout container item xs={12} gutter={horizontalGutter}>
        <Layout item xs={4} style={{ textAlign: 'center' }}>
          <Card color={logoPaneColor} height={cardHeight + 35} padding={cardPadding}>
            <img src={logo} className={classes.logoStyle} alt="logo" />
          </Card>
        </Layout>
        <Layout item xs={8}>
          <Card color={namePaneColor} height={cardHeight + 35} padding={cardPadding}>
            <Text className={classes.darkTextStyle}>
              Nazwa została wybrana nieprzypadkowo - w mitologii słowiańskiej zmora to istota pół demoniczna,
              która nocą męczy śpiących i wysysa z nich krew. Taki scenariusz również jest możliwy - wystarczy
              nie rozwiązywać zadań w terminie lub próbować zaliczać je podstępem.<br /><br />
              Tak czy inaczej - <strong>powodzenia!</strong>
            </Text>
          </Card>
        </Layout>
      </Layout>
      <Layout container item xs={12} gutter={horizontalGutter}>
        <Layout item xs={12}>
          <StatusInfoList
            statuses={[{ title: 'Zaliczone', info: 'Uniknięto zemsty Zmory, zadanie zaliczone' },
            { title: 'Po terminie', info: 'Do roboty' },
            { title: 'Niezaliczone', info: 'Zemsta zmory jest bliska, życie Ci nie miłe, wędrowcze?' },
            { title: 'Ulane', info: 'Absolutne dno bez cienia nadziei na zaliczenie' },
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
