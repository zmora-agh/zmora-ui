/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.HomePage.title',
    defaultMessage: 'Home',
  },
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'This is HomePage component!',
  },
  zmoraDescription: {
    id: 'app.components.HomePage.zmoraDesrciption',
    defaultMessage: 'Zmora is an automated educational platform addressed to students of Computer Science from' +
                    ' AGH University of Science and Technology. It checks correctness, time and memory complexity' +
                    ' of solutions to problems created by academic teachers.',
  },
  nameOrigin: {
    id: 'app.components.HomePage.nameOrigin',
    defaultMessage: 'Choice of name was not accidential - in slavic mythology zmora (ang. mare) is an evil' +
                    ' spirit that rides on peoples\'s chests while they sleep bringing on bad dreams.' +
                    ' We think that kind of situation can happen during solving problems.',
  },
});
