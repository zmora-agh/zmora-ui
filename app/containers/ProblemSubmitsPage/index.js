/*
 *
 * ProblemSubmitsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Text } from 'material-ui/Text';
import { makeSelectProblemSubmits } from '../App/selectors';
import { getProblemSubmits } from './actions';

import FetchView from '../../components/FetchView';
import ProblemSubmits from '../../components/ProblemSubmits';
import { submitsPropType } from '../../components/ProblemSubmits/constants';
import messages from './messages';

export class ProblemSubmitsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.requestData = this.requestData.bind(this);
  }

  componentDidMount() {
    if (!this.props.defer) this.requestData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defer && !nextProps.defer) this.requestData();
  }

  requestData() {
    this.props.dispatch(getProblemSubmits(this.props.contestId, this.props.problemId));
  }

  render() {
    if (this.props.submits && this.props.submits.length === 0) {
      return <Text><FormattedMessage {...messages.empty} /></Text>;
    }

    return <FetchView>{this.props.submits && <ProblemSubmits submits={this.props.submits} />}</FetchView>;
  }
}

ProblemSubmitsPage.propTypes = {
  contestId: PropTypes.number.isRequired,
  problemId: PropTypes.number.isRequired,
  submits: submitsPropType,
  defer: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  submits: makeSelectProblemSubmits(props.problemId),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemSubmitsPage);
