/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.StatusInfoPanel.header',
    defaultMessage: 'Status',
  },
  active: {
    id: 'app.components.StatusInfoPanel.active',
    defaultMessage: 'Aktywne maszyny: ',
  },
  logged: {
    id: 'app.components.StatusInfoPanel.logged',
    defaultMessage: 'Zalogowani użytkownicy: ',
  },
  solved: {
    id: 'app.components.StatusInfoPanel.solved',
    defaultMessage: 'Wyzwania ukończone dzisiaj: ',
  },
  solvedAll: {
    id: 'app.components.StatusInfoPanel.solvedAll',
    defaultMessage: 'Wyzwania ukończone ogółem: ',
  },
  lastLogged: {
    id: 'app.components.StatusInfoPanel.lastLogged',
    defaultMessage: 'Ostatnio zalogowany ',
  },
  showMoreButton: {
    id: 'app.components.StatusInfoPanel.showMoreButton',
    defaultMessage: 'Więcej Statystyk',
  },
});
