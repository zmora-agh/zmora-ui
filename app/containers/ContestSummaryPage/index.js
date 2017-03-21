/*
 *
 * ContestSummaryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class ContestSummaryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.children) return this.props.children;

    return (
      <div>
        <Helmet
          title="ContestSummaryPage"
          meta={[
            { name: 'description', content: 'Description of ContestSummaryPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ContestSummaryPage.propTypes = {
  children: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ContestSummaryPage);
