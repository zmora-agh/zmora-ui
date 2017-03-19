/**
 *
 * InfoPanel
 *
 */

import React from 'react';
import Text from 'material-ui/Text';

function InfoPanel() {
  return (
    <div>
      <Text type="headline" component="h2">O Projekcie</Text>
      <Text gutterBottom>
        Zmora, to kompletny system szlifowania Twoich umiejętności programistycznych, stworzony na wzór najlepszych
        stron z tej dziedziny. Powstał z inicjatywy grupy studentów, którzy sami żałowali, że podobny projekt
        nie istniał już wcześniej.
      </Text>
      <Text gutterBottom>
        A może i nie żałowali, ale dla nich szczęśliwie najgorsze lata studiów już minęły, a że dostali sposobność
        stworzyć coś przez co na zawsze pozostaną w waszych pełnych nienawiści sercach, postanowili z tego skorzystać.
      </Text>
      <Text>
        Powodzenia z zadankami,
        <br />
        Autorzy.
      </Text>
    </div>
  );
}

export default InfoPanel;
