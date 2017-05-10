/*
 *
 * SubmitDetailsModal
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Dialog, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import FetchView from '../../components/FetchView';
import SubmitDetailsModal from '../../components/SubmitDetailsModal';
import messages from './messages';
import { SUBMIT_DETAILS_PROP_TYPE } from './constants';
import { makeSelectSubmitDetails } from '../App/selectors';
import { getSubmitDetails } from './actions';
import { SUBMITS_HASH_PREFIX } from '../ProblemPage/constants';

class SubmitDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentDidMount() {
    if (this.props.submitId !== undefined) {
      this.props.dispatch(getSubmitDetails(this.props.contestId, this.props.problemId, this.props.submitId));
    }
  }

  onModalClose() {
    window.location.hash = SUBMITS_HASH_PREFIX;
  }

  render() {
    const open = this.props.submitId !== undefined;
    return (
      <Dialog maxWidth="md" open={open} transition={Slide} onBackdropClick={this.onModalClose}>
        <DialogTitle>
          <h1>
            <FormattedMessage {...messages.submitDetails} values={{ submitId: this.props.submitId }} />
          </h1>
        </DialogTitle>
        <DialogContent>
          <FetchView>
            {this.props.submit &&
            <SubmitDetailsModal
              onClose={this.onModalClose}
              submit={this.props.submit}
            />}
          </FetchView>
        </DialogContent>
      </Dialog>
    );
  }
}

SubmitDetails.propTypes = {
  submit: SUBMIT_DETAILS_PROP_TYPE,
  problemId: PropTypes.number,
  contestId: PropTypes.number,
  submitId: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  submit: makeSelectSubmitDetails(props.submitId),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitDetails);
