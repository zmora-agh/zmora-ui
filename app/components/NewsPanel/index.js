/**
*
* NewsPanel
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Text from 'material-ui/Text';

import News from '../News';

import messages from './messages';

function NewsPanel() {
  return (
    <div>
      <Text type="headline" component="h2">
        <FormattedMessage {...messages.header} />
      </Text>
      <br />
      <News date="20.03.2017" title="Informacje Bieżące">
        <Text component="p">
          Od 20.03.2017r. do nieokreślonego dnia w przyszłości system będzie niedostępny. Projekt jest wciąż w fazie
          pre-alfa prototypu i może nie być gotowy do użytku. Prosimy o zrozumienie.
        </Text>
      </News>
      <br />
      <News date="20.03.2017" title="Changelog #2">
        <Text component="p">
          + Dodany news panel na stronie głównej <br />
          + Dodany prototyp searchera do app baru <br />
          + Dodany prototyp zegaru systemowego <br />
          + Bug Fix
        </Text>
      </News>
      <br />
      <News date="15.03.2017" title="Changelog #1">
        <Text component="p">
          + Dodany prototyp strony głównej <br />
          + Dodana animacja prawego panelu <br />
          + Dodany prototyp drzewka kontestów <br />
          + Dodany prototyp prototypu strony <br />
        </Text>
      </News>
    </div>
  );
}

export default NewsPanel;
