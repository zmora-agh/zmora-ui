/*
 *
 * ContestsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContestsPage from './selectors';
import messages from './messages';

export class ContestsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.children) return this.props.children;

    return (
      <div>
        <Helmet
          title="ContestsPage"
          meta={[
            { name: 'description', content: 'Description of ContestsPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ContestsPage.propTypes = {
  children: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ContestsPage: makeSelectContestsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
