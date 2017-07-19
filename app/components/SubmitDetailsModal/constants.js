/*
 *
 * SubmitDetailsModal constants
 *
 */
import React from 'react';

export const SUBMIT_TEST_PROP_TYPE = React.PropTypes.shape({
  status: React.PropTypes.node.isRequired,
  executionTime: React.PropTypes.number.isRequired,
  ramUsage: React.PropTypes.number.isRequired,
  test: React.PropTypes.number.isRequired,
});

export const SUBMIT_FILE_PROP_TYPE = React.PropTypes.shape({
  filename: React.PropTypes.node.isRequired,
  checksum: React.PropTypes.node.isRequired,
  id: React.PropTypes.number.isRequired,
});

export const SUBMIT_DETAILS_PROP_TYPE = React.PropTypes.shape({
  id: React.PropTypes.number.isRequired,
  date: React.PropTypes.string.isRequired,
  tests: React.PropTypes.arrayOf(SUBMIT_TEST_PROP_TYPE),
  files: React.PropTypes.arrayOf(SUBMIT_FILE_PROP_TYPE),
});
