import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { statusDescriptions } from './constants';

function StatusText({ status, intl }) {
  const messageDescriptor = statusDescriptions.get(status);
  const statusText = messageDescriptor !== undefined ? intl.formatMessage(messageDescriptor) : status;
  return (
    <abbr title={statusText}>
      {status.toUpperCase()}
    </abbr>
  );
}

StatusText.propTypes = {
  status: React.PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(StatusText);
