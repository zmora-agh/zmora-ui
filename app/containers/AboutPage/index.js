/* eslint-disable global-require */
/*
 *
 * AboutPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import MemberAvatar from '../../components/MemberAvatar';

import GitHubLogo from '../../img/GitHub-Mark-64px.png';
import MMAvatar from '../../img/avatars/mm.jpg';
import MFAvatar from '../../img/avatars/mf.jpg';
import KChAvatar from '../../img/avatars/kch.jpg';
import KLAvatar from '../../img/avatars/kl.jpg';
import KOAvatar from '../../img/avatars/ko.jpg';
import MNAvatar from '../../img/avatars/mn.jpg';
import MSAvatar from '../../img/avatars/ms.jpg';
import IGAvatar from '../../img/avatars/ig.jpg';
import FirstBackground from '../../img/backgrounds/bg1.png';
import SecondBackground from '../../img/backgrounds/bg2.png';
import ThirdBackground from '../../img/backgrounds/bg3.png';
import FourthBackground from '../../img/backgrounds/bg4.png';
import FifthBackground from '../../img/backgrounds/bg5.png';
import SixthBackground from '../../img/backgrounds/bg6.png';
import SeventhBackground from '../../img/backgrounds/bg7.png';
import EighthBackground from '../../img/backgrounds/bg8.png';


import messages from './messages';
import homepageMessages from '../HomePage/messages';

const styleSheet = createStyleSheet('zmoraAboutPage', (theme) => ({
  card: { maxWidth: 345 },
  root: {
    flexGrow: 1,
    marginTop: 30,
    margin: '0 auto',
  },
  headerMessage: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  paper: {
    padding: 16,
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: '0 auto',
    width: 150,
    height: 150,
  },
  mailLink: {
    color: 'blue',
    textDecoration: 'underline',
  },
}));

class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.headerMessage}><FormattedMessage {...messages.title} /></div>
          </Grid>
          <Grid item xs={2}>
            <a href="https://github.com/zmora-agh">
              <Chip
                avatar={<Avatar src={GitHubLogo} />}
                label="zmora-agh"
                onClick={() => {}}
                className={classes.chip}
              />
            </a>
          </Grid>
          <Grid item xs={12}>
            <p>
              <FormattedMessage {...messages.aboutText} />
            </p>
            <p>
              <FormattedMessage {...homepageMessages.zmoraDescription} />
            </p>
            <p>
              <FormattedMessage {...homepageMessages.nameOrigin} />
            </p>
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Kasia Chrzanowska"
              description={<FormattedMessage {...messages.frontendDeveloper} />}
              avatar={KChAvatar}
              background={FirstBackground}
              bgColor="#2196f3"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Marcin Flis"
              description={<FormattedMessage {...messages.backendDeveloper} />}
              avatar={MFAvatar}
              background={SecondBackground}
              bgColor="#4caf50"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Inga Ginalska"
              description={<FormattedMessage {...messages.graphicDesigner} />}
              avatar={IGAvatar}
              background={ThirdBackground}
              bgColor="#4caf50"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Konrad Lewandowski"
              description={<FormattedMessage {...messages.backendDeveloper} />}
              avatar={KLAvatar}
              background={FourthBackground}
              bgColor="#ff5722"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Marcin Moskal"
              description={<FormattedMessage {...messages.fullstackDeveloper} />}
              avatar={MMAvatar}
              background={FifthBackground}
              bgColor="#fb8c00"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Mateusz Nowotyński"
              description={<FormattedMessage {...messages.fullstackDeveloper} />}
              avatar={MNAvatar}
              background={SixthBackground}
              bgColor="#673ab7"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Kamil Osuch"
              description={<FormattedMessage {...messages.frontendDeveloper} />}
              avatar={KOAvatar}
              background={SeventhBackground}
              bgColor="#607d8b"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={12} md={6} lg={4}>
            <MemberAvatar
              name="Marcin Skowron"
              description={<FormattedMessage {...messages.frontendDeveloper} />}
              avatar={MSAvatar}
              background={EighthBackground}
              bgColor="#039BE5"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <FormattedMessage {...messages.emailMessage} />
              <a href="mailto:zmora-agh@googlegroups.com" className={classes.mailLink}>zmora-agh@googlegroups.com</a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: React.PropTypes.object.isRequired,
};


export default withStyles(styleSheet)(AboutPage);
