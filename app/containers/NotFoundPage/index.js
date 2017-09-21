/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Typography from 'material-ui/Typography';

import messages from './messages';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const rootStyle = {
      opacity: 0.6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
    };

    return (
      <div style={rootStyle}>
        <Typography type="headline" ><FormattedMessage {...messages.header} /></Typography>
        <Typography type="headline" style={{ fontSize: 90, lineHeight: '100px', fontWeight: 200 }}>404</Typography>
      </div>
    );
  }
}
