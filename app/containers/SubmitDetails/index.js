/*
 *
 * SubmitDetailsModal
 *
 */

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import autobind from 'autobind-decorator';
import { gql, graphql } from 'react-apollo';

import FetchView from '../../components/FetchView';
import SubmitDetailsModal from '../../components/SubmitDetailsModal';
import messages from './messages';
import { SUBMIT_DETAILS_PROP_TYPE } from './constants';
import { SUBMITS_HASH_PREFIX } from '../ProblemPage/constants';


const SubmitDetailsForLayout = gql`
  query SubmitDetailsForLayout($submitId: Int!) {
    submit(id: $submitId) {
      id
      date
      status
      testResults {
        id
        test
        status
        ramUsage
        executionTime
      }
      submitFiles {
        id
        checksum
        filename
      }
    }
  }
`;

@graphql(SubmitDetailsForLayout, {
  options: ({ submitId }) => ({ variables: { submitId } }),
  skip: ({ submitId }) => submitId === undefined,
})
export default class SubmitDetails extends React.Component {

  @autobind
  onModalClose() {
    window.location.hash = SUBMITS_HASH_PREFIX;
  }

  render() {
    const open = this.props.submitId !== undefined;
    return (
      <Dialog maxWidth="md" open={open} transition={Slide} onBackdropClick={this.onModalClose}>
        <DialogTitle disableTypography>
          <h1>
            <FormattedMessage {...messages.submitDetails} values={{ submitId: this.props.submitId }} />
          </h1>
        </DialogTitle>
        <DialogContent>
          <FetchView>
            {!this.props.data || this.props.data.loading ? undefined :
            <SubmitDetailsModal
              onClose={this.onModalClose}
              submit={this.props.data.submit}
            />}
          </FetchView>
        </DialogContent>
      </Dialog>
    );
  }
}

SubmitDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    submit: SUBMIT_DETAILS_PROP_TYPE,
  })),
  submitId: PropTypes.number,
};
