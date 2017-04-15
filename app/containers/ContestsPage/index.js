/*
 *
 * ContestsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import FetchView from '../../components/FetchView';
import ContestsTable from '../../components/ContestsTable';

import makeSelectContestsPage from './selectors';
import { getContests } from './actions';
import messages from './messages';

class ContestsPage extends React.PureComponent {
  static propTypes = {
    contests: React.PropTypes.object,
    offset: React.PropTypes.number.isRequired,
    children: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(getContests());
  }

  render() {
    if (this.props.children) return this.props.children;

    // FIXME This code is totally unusable as ContestsTable render() fails when this.props.contests === {}
    if (this.props.contests && Object.keys(this.props.contests).length === 0) {
      return <Text><FormattedMessage {...messages.empty} /></Text>;
    }

    return (<FetchView>
      {this.props.contests && <ContestsTable contests={this.props.contests} offset={this.props.offset} />}
    </FetchView>);
  }
}

const mapStateToProps = makeSelectContestsPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage);
