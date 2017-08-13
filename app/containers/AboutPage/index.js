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
import MemberAvatar from '../../components/MemberAvatar';

import messages from './messages';

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
                avatar={<Avatar src={require('../../img/GitHub-Mark-64px.png')} />}
                label="zmora-agh"
                onClick={() => {}}
                className={classes.chip}
              />
            </a>
          </Grid>
          <Grid item xs={12}>
            <FormattedMessage {...messages.aboutText} />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Janusz"
              description="Człowiek sukcesu"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-01.jpg"
              bgUrl="https://cdn.dribbble.com/users/58267/screenshots/1779481/attachments/291187/Perkse-Pattern.png"
              bgColor="#2196f3"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Andrzej"
              description="Najlepszy developer"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-02.jpg"
              bgUrl="http://www.bestpsdfreebies.com/wp-content/uploads/2014/05/shards_pattern.jpg"
              bgColor="#4caf50"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Mirosław"
              description="Tylko mirko"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-03.jpg"
              bgUrl="https://goo.gl/32xGr3"
              bgColor="#ff5722"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Przemysław"
              description="Rekin przemysłu"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-04.jpg"
              bgUrl="https://goo.gl/CaKbO2"
              bgColor="#fb8c00"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Zbigniew"
              description="Prawdziwy patriota"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-05.jpg"
              bgUrl="https://goo.gl/lZGpvu"
              bgColor="#673ab7"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Van"
              description="Artysta wykonawczy"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-06.jpg"
              bgUrl="https://goo.gl/Kum3q4"
              bgColor="#607d8b"
            />
          </Grid>

          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Jan"
              description="member"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-07.jpg"
              bgUrl="https://s-media-cache-ak0.pinimg.com/originals/88/eb/a5/88eba554eb141ad1bc126daaab018594.jpg"
              bgColor="#039BE5"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Jan"
              description="member"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-08.jpg"
              bgUrl="http://ultrawidewallpapers.com/wp-content/uploads/2015/09/fog-of-war-3440x1440.jpg"
              bgColor="#00796B"
            />
          </Grid>
          <Grid style={{ padding: 20 }} item xs={4}>
            <MemberAvatar
              name="Jan"
              description="member"
              avatarUrl="http://wstaw.org/m/2017/05/07/Dziwny-Pan-09.jpg"
              bgUrl="https://cdn-images-1.medium.com/max/1400/1*278tqw9zNPe2WCAz29Wzdw.jpeg"
              bgColor="#9C27B0"
            />
          </Grid>
          <Grid item xs={12}>
            <FormattedMessage {...messages.aboutUs} />
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
