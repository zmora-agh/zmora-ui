/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.StatusPanel.header',
    defaultMessage: 'Status',
  },
  active: {
    id: 'app.components.StatusPanel.active',
    defaultMessage: 'Aktywne maszyny: ',
  },
  logged: {
    id: 'app.components.StatusPanel.logged',
    defaultMessage: 'Zalogowani użytkownicy: ',
  },
  solved: {
    id: 'app.components.StatusPanel.solved',
    defaultMessage: 'Wyzwania ukończone dzisiaj: ',
  },
  solvedAll: {
    id: 'app.components.StatusPanel.solvedAll',
    defaultMessage: 'Wyzwania ukończone ogółem: ',
  },
  lastLogged: {
    id: 'app.components.StatusPanel.lastLogged',
    defaultMessage: 'Ostatnio zalogowany ',
  },
  showMoreButton: {
    id: 'app.components.StatusPanel.showMoreButton',
    defaultMessage: 'Więcej Statystyk',
  },
});
