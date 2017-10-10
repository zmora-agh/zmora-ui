/*
 * AboutPage Messages
 *
 * This contains all the text for the AboutPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.AboutPage.title',
    defaultMessage: 'About Zmora',
  },
  aboutText: {
    id: 'app.components.AboutPage.aboutText',
    defaultMessage: 'Zmora is a project created on the initiative of Computer Science students from AGH University of' +
                    ' Science and Technology. Project supervisor is Dr. Piotr Matyasik',
  },
  emailMessage: {
    id: 'app.components.AboutPage.emailMessage',
    defaultMessage: 'If you have any problems or advices, please email us ',
  },
  frontendDeveloper: {
    id: 'app.components.AboutPage.frontendDeveloper',
    defaultMessage: 'Frontend Developer',
  },
  backendDeveloper: {
    id: 'app.components.AboutPage.backendDeveloper',
    defaultMessage: 'Backend Developer',
  },
  fullstackDeveloper: {
    id: 'app.components.AboutPage.fullstackDeveloper',
    defaultMessage: 'Fullstack Developer',
  },
  graphicDesigner: {
    id: 'app.components.AboutPage.graphicDesigner',
    defaultMessage: 'Graphic Designer',
  },
});
