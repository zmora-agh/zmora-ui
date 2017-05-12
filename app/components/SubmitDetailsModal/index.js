/**
*
* SubmitDetailsModal
*
*/

import React from 'react';
// import styled from 'styled-components';
import Button from 'material-ui/Button';
import { FormattedMessage } from 'react-intl';
import FilesTable from './FilesTable';
import { SUBMIT_DETAILS_PROP_TYPE } from '../../containers/SubmitDetails/constants';
import messages from './messages';
import TestsTable from './TestsTable/index';

class SubmitDetailsModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ padding: 10 }}>
        <FilesTable files={this.props.submit.files} />
        <TestsTable tests={this.props.submit.tests} />
        <Button onClick={this.props.onClose} raised primary>
          <FormattedMessage {...messages.close} />
        </Button>
      </div>
    );
  }
}

SubmitDetailsModal.propTypes = {
  submit: SUBMIT_DETAILS_PROP_TYPE,
  onClose: React.PropTypes.func.isRequired,
};

export default SubmitDetailsModal;
