/**
*
* SubmitDetailsModal
*
*/

import React, { PropTypes } from 'react';
import { gql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';

import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import { SUBMIT_DETAILS_PROP_TYPE } from './constants';
import messages from './messages';

import FetchView from '../FetchView';
import FilesTable, { FilesFragment } from './FilesTable';
import TestsTable, { TestResultsFragment } from './TestsTable';

export const SubmitDetailsFragment = gql`
  fragment SubmitDetails on Submit {
    ...TestResults
    ...Files
  }
  ${TestResultsFragment}
  ${FilesFragment}
`;

function SubmitDetailsModal(props) {
  if (!props.data) return null;

  return (
    <Dialog maxWidth="md" open={props.open} onBackdropClick={props.onModalClose}>
      <DialogTitle>
        <FormattedMessage {...messages.submitDetails} values={{ submitId: props.submitId }} />
      </DialogTitle>
      <DialogContent>
        <FetchView>
          {props.loading || !props.data ? undefined :
          <div>
            <FilesTable files={props.data.submitFiles} />
            {props.data.testResults.length > 0 && <TestsTable tests={props.data.testResults} />}
          </div>
            }
        </FetchView>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} primary><FormattedMessage {...messages.close} /></Button>
      </DialogActions>
    </Dialog>
  );
}

SubmitDetailsModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  // data: PropTypes.objectOf(PropTypes.shape({
  //   loading: PropTypes.bool.isRequired,
  //   submit: SUBMIT_DETAILS_PROP_TYPE,
  // })).isRequired,
  submitId: PropTypes.number,
};

export default SubmitDetailsModal;
