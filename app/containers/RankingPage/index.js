/*
 *
 * RankingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectRankingPage from './selectors';
import messages from './messages';

export class RankingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="RankingPage"
          meta={[
            { name: 'description', content: 'Description of RankingPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

RankingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RankingPage: makeSelectRankingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
