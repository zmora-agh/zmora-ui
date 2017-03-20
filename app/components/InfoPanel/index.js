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
        System porządkuje zadania z wielu przedmiotów, przez to korzystacie ze znajomego i sprawdzonego systemu na wielu
        zajęciach. Daje to wam również szybki przegląd zdobytego doświadczenia w poszczególnych przedmiotach.
        Strona oferuje podgląd szczegółowych rankingów. Dla jednych będzie to możliwość pochwalenia się swoim skillem,
        a innych zmotywuje do bardziej systematycznej pracy.
      </Text>
      <Text gutterBottom>
        Mamy nadzieję, że projekt przypadnie wam do gustu, a wszelkie uwagi przyjmujemy otwarcie,
        aby mógł być stosowany jak najdłużej.
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
