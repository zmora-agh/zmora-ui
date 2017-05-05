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
import ZmoraCard from '../../components/ZmoraCard';
import StatusInfoList from '../../components/StatusInfoList';

const styleSheet = createStyleSheet('zmoraAppHomePageLayout', () => ({
  paper: {
    padding: '0em 1em',
    textAlign: 'justify',
    backgroundColor: '#DDDDDD',
  },
  lightTextStyle: {
    color: '#FFFFFF',
    lineHeight: '35px',
    fontSize: 30,
  },
  darkTextStyle: {
    color: '#000000',
    lineHeight: '35px',
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
const cardPadding = 30;
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
        <Layout item xs={8}>
          <ZmoraCard color={descriptionColor} height={cardHeight} padding={cardPadding}>
            <Text className={classes.lightTextStyle}>
              <strong>Zmora</strong> to zautomatyzowana platforma edukacyjna, kierowana do studentów
              kierunków informatycznych <strong>AGH</strong>. W przystępny sposób sprawdza poprawność i
              wydajność rozwiązań na specjalnie przystosowanych do tego zadaniach. System ocenia sprawiedliwie
              wkład pracy oraz postępy każdego z uczestników.</Text>
          </ZmoraCard>
        </Layout>
        <Layout item xs={4}>
          <StatusCard color={statusPaneColor} height={cardHeight} />
        </Layout>
      </Layout>
      <Layout container item xs={12} gutter={horizontalGutter}>
        <Layout item xs={4} style={{ textAlign: 'center' }}>
          <ZmoraCard color={logoPaneColor} height={cardHeight + 35} padding={cardPadding}>
            <img src={logo} className={classes.logoStyle} alt="logo" />
          </ZmoraCard>
        </Layout>
        <Layout item xs={8}>
          <ZmoraCard color={namePaneColor} height={cardHeight + 35} padding={cardPadding}>
            <Text className={classes.darkTextStyle}>
              Nazwa została wybrana nieprzypadkowo - w mitologii słowiańskiej zmora to istota pół demoniczna,
              która nocą męczy śpiących i wysysa z nich krew. Taki scenariusz również jest możliwy - wystarczy
              nie rozwiązywać zadań w terminie lub próbować zaliczać je podstępem.<br /><br />
              Tak czy inaczej - <strong>powodzenia!</strong>
            </Text>
          </ZmoraCard>
        </Layout>
      </Layout>
      <Layout container item xs={12} gutter={horizontalGutter}>
        <Layout item xs={12}>
          <ZmoraCard padding={0}>
            <StatusInfoList
              statuses={[{ title: 'Zaliczone', info: 'Zadanie zaliczone bez uwag.' },
              { title: 'Zaliczone*', info: 'Zadanie zaliczone. Sprawdź uwagi prowadzącego.' },
              { title: 'Po Terminie', info: 'Nadal możesz wykonać zadanie z karnymi punktami.' },
              { title: 'Niezaliczone', info: 'Źle wykonane zadanie, lub zbyt długa zwłoka.' },
              { title: 'Ulane', info: 'Absolutne dno bez cienia nadziei na zaliczenie.' },
              ]}
            />
          </ZmoraCard>
        </Layout>
      </Layout>
    </Layout>
  );
}

HomePage.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default HomePage;
