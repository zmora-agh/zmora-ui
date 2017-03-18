/*
 *
 * ProblemsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class ProblemsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ProblemsPage"
          meta={[
            { name: 'description', content: 'Description of ProblemsPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ProblemsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProblemsPage);
