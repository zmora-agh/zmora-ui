/**
 *
 * InfoPanel
 *
 */

import React, { Component } from 'react';
import Text from 'material-ui/Text';
import { createStyleSheet } from 'jss-theme-reactor';
import { FormattedMessage } from 'react-intl';
import customPropTypes from 'material-ui/utils/customPropTypes';

const styleSheet = createStyleSheet('StatusStyleSheet', () => ({

}));

export default class InfoPanel extends React.Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div>
        <Text type="headline" component="h2">O Projekcie</Text>
        <Text component="p">
          Zmora, to kompletny system szlifowania Twoich umiejętności programistycznych, stworzony na wzór najlepszych
          stron z tej dziedziny. Powstał z inicjatywy grupy studentów, którzy sami żałowali, że podobny projekt
          nie istniał już wcześniej.
          <br /><br />
          A może i nie żałowali, ale dla nich szczęśliwie najgorsze lata studiów już minęły, a że dostali sposobność
          stworzyć coś przez co na zawsze pozostaną w waszych pełnych nienawiści sercach, postanowili z tego skorzystać.
          <br /><br />
          Powodzenia z zadankami,
          <br />
          Autorzy.
        </Text>
      </div>
    );
  }
}
